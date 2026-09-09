// ============================================================
// Shared "Download Answer Key" button for every chapter
// assessment page (assessments/<module>-<num>.html).
//
// To turn this on for a chapter's assessment file, add ONE line
// right before its closing </body> tag (after its own inline
// <script>...</script> block):
//
//   <script src="../answer-key.js"></script>
//
// That single include is the only per-file change needed — the
// button, the JSZip loading, and the .docx generation all live
// here, so adding a new chapter's assessment later just means
// copying that same one line, not re-implementing this feature.
//
// How it finds the questions: every assessment page already
// declares generateMCDirect(), generateMCSituational(),
// generateIdentificationDirect(), generateIdentificationSituational(),
// generateTFDirect(), generateTFSituational(), and
// generateEnumeration() as ordinary top-level functions, plus
// #questionType / #questionStyle <select> elements. Ordinary
// top-level `function` declarations are automatically reachable
// as window.functionName from any other script on the same page
// (this file included), so this reuses the exact same question
// bank each page already builds instead of duplicating it.
// ============================================================

(function () {
  const JSZIP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
  let jszipPromise = null;

  // JSZip is only pulled in the first time someone actually clicks
  // the button, so pages that never use it don't pay for it.
  function loadJSZip() {
    if (window.JSZip) return Promise.resolve();
    if (jszipPromise) return jszipPromise;
    jszipPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = JSZIP_URL;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Could not load JSZip'));
      document.head.appendChild(script);
    });
    return jszipPromise;
  }

  function escapeXml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  // Word run sizes are in half-points: 10pt body -> 20, 12pt headers -> 24.
  const BODY_SZ = 20;
  const HEADER_SZ = 24;

  // Builds one or more <w:r> runs for `text`, splitting on any
  // newlines into <w:br/> line breaks within the same run sequence.
  function textRuns(text, { bold = false, italic = false, size = BODY_SZ } = {}) {
    const props = [];
    if (bold) props.push('<w:b/>');
    if (italic) props.push('<w:i/>');
    props.push(`<w:sz w:val="${size}"/><w:szCs w:val="${size}"/>`);
    const rPr = `<w:rPr>${props.join('')}</w:rPr>`;
    const lines = String(text == null ? '' : text).split('\n');
    return lines
      .map((line, i) => {
        const br = i > 0 ? '<w:br/>' : '';
        return `<w:r>${rPr}${br}<w:t xml:space="preserve">${escapeXml(line)}</w:t></w:r>`;
      })
      .join('');
  }

  function paragraph(runsXml, { spaceAfter = 200 } = {}) {
    return `<w:p><w:pPr><w:spacing w:after="${spaceAfter}"/></w:pPr>${runsXml}</w:p>`;
  }

  function formatAnswer(q) {
    if (q.type === 'Enumeration' && Array.isArray(q.answers)) {
      return q.answers.map((a, i) => `${i + 1}. ${a}`).join('\n');
    }
    return q.correctText;
  }

  // Reads the page's own Question Type / Question Style dropdowns and
  // calls the matching generateXxx() function directly — bypassing
  // buildQuiz()/selectedType/selectedStyle on purpose, since those are
  // block-scoped `let` variables in the page's inline script and
  // aren't actually reachable from here the way top-level `function`
  // declarations are.
  // Different chapters were written at different times and don't all
  // name their internal per-type question builders the same way —
  // chapters 1-2 use generateMCDirect()/generateTFDirect()/etc, but
  // chapters 3+ use buildMCDirect()/buildTFDirect()/etc instead. Rather
  // than guess every naming variant a chapter might use, this hooks
  // into the three entry points that ARE identical in every chapter:
  // buildQuiz(), startQuiz(), and restartQuiz().
  //
  // Trick: startQuiz() reads the Question Type/Style dropdowns, then
  // calls buildQuiz() to get the question list (exactly the set we
  // want) before doing anything visual. So this temporarily swaps in
  // a wrapped buildQuiz() that captures whatever startQuiz() passes
  // through it, calls startQuiz() to trigger that (using whatever
  // Type/Style the page's own dropdowns are currently set to), then
  // immediately calls restartQuiz() to put the page straight back to
  // the start screen — startQuiz() and restartQuiz() run back-to-back
  // synchronously with nothing in between that would let the browser
  // paint, so the page never actually visibly flashes to the quiz
  // screen. The temporary buildQuiz() override is undone right after.
  function buildAnswerKeyEntries() {
    if (typeof window.buildQuiz !== 'function' || typeof window.startQuiz !== 'function') {
      return null;
    }

    const originalBuildQuiz = window.buildQuiz;
    let captured = null;

    window.buildQuiz = function (...args) {
      captured = originalBuildQuiz.apply(this, args);
      return captured;
    };

    try {
      window.startQuiz();
    } catch (err) {
      console.error('answer-key.js: startQuiz() threw while capturing questions', err);
    } finally {
      window.buildQuiz = originalBuildQuiz;
      if (typeof window.restartQuiz === 'function') {
        try {
          window.restartQuiz();
        } catch (err) {
          console.error('answer-key.js: restartQuiz() threw while resetting the page', err);
        }
      }
    }

    return captured;
  }

  function docTitleParts() {
    // "Sales Management - Chapter 1 Quiz" -> "Sales Management - Chapter 1"
    const base = document.title.replace(/\s+Quiz\s*$/i, '').trim() || 'Answer Key';
    const safeName = base
      .replace(/\s*-\s*/g, ' ')
      .replace(/[^\w\- ]+/g, '')
      .trim()
      .replace(/\s+/g, '-');
    return { titleText: base, safeName: safeName || 'Answer-Key' };
  }

  async function buildAnswerKeyBlob(entries) {
    await loadJSZip();

    const { titleText } = docTitleParts();
    const typeSelect = document.getElementById('questionType');
    const styleSelect = document.getElementById('questionStyle');
    const typeLabel = typeSelect ? typeSelect.selectedOptions[0].textContent : '';
    const styleLabel = styleSelect ? styleSelect.selectedOptions[0].textContent : '';

    const paragraphs = [];
    paragraphs.push(
      paragraph(textRuns(`${titleText} — Answer Key`, { bold: true, size: HEADER_SZ }), { spaceAfter: 120 })
    );
    if (typeLabel || styleLabel) {
      const subtitle = [typeLabel, styleLabel].filter(Boolean).join(' — ');
      paragraphs.push(paragraph(textRuns(subtitle, { italic: true }), { spaceAfter: 300 }));
    }

    entries.forEach((q, index) => {
      paragraphs.push(paragraph(textRuns(`${index + 1}. ${q.question}`, { bold: true }), { spaceAfter: 60 }));
      paragraphs.push(paragraph(textRuns(`Answer: ${formatAnswer(q)}`), { spaceAfter: q.explanation ? 60 : 300 }));
      if (q.explanation) {
        paragraphs.push(paragraph(textRuns(q.explanation, { italic: true }), { spaceAfter: 300 }));
      }
    });

    const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${paragraphs.join('')}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

    const zip = new JSZip();

    zip.file(
      '[Content_Types].xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`
    );

    zip.file(
      '_rels/.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`
    );

    zip.file(
      'word/_rels/document.xml.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`
    );

    // Doc default is also 10pt (sz 20) so anything that ever falls
    // through without an explicit run size still matches the 10pt body.
    zip.file(
      'word/styles.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
        <w:sz w:val="${BODY_SZ}"/>
        <w:szCs w:val="${BODY_SZ}"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
  </w:style>
</w:styles>`
    );

    zip.file('word/document.xml', documentXml);

    return zip.generateAsync({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
  }

  function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function handleDownloadClick(btn) {
    const entries = buildAnswerKeyEntries();
    if (!entries || !entries.length) {
      alert('Could not find questions for the current Question Type / Question Style selection.');
      return;
    }

    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Preparing…';

    try {
      const blob = await buildAnswerKeyBlob(entries);
      const { safeName } = docTitleParts();
      triggerDownload(blob, `${safeName}-Answer-Key.docx`);
    } catch (err) {
      console.error(err);
      alert('Something went wrong building the answer key file. Please try again.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalLabel;
    }
  }

  // Different chapters were generated with slightly different markup:
  // some wire the button with inline onclick="startQuiz()", others give
  // it id="startButton" and attach the click handler via
  // addEventListener instead (no onclick attribute at all). Try every
  // known shape so this keeps working regardless of which template a
  // given chapter's assessment file used.
  function findStartButton() {
    return (
      document.getElementById('startButton') ||
      document.querySelector('#startScreen button[onclick="startQuiz()"]') ||
      document.querySelector('#startScreen button.primary')
    );
  }

  function injectButton() {
    if (document.getElementById('downloadAnswerKeyBtn')) return;
    const startBtn = findStartButton();
    if (!startBtn) return;

    const btn = document.createElement('button');
    btn.id = 'downloadAnswerKeyBtn';
    btn.type = 'button';
    btn.className = 'secondary';
    btn.textContent = 'Download Answer Key';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', () => handleDownloadClick(btn));

    startBtn.insertAdjacentElement('afterend', btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton);
  } else {
    injectButton();
  }
})();
