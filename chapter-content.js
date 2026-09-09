// Assessment test links — shown as the "Assessment test" FAB option on
// each chapter page. Same key format as CHAPTER_CONTENT below
// ("<module>-<chapter number>"). Point a value at the assessment's HTML
// file (kept in the assessments/ folder) to enable it for that chapter;
// leave it out (or set to '') for chapters that don't have one yet —
// the button will let the person know it isn't ready instead of trying
// to open a missing page.
window.ASSESSMENT_URLS = {
  'sales-1': 'assessments/sales-1.html',
  'sales-2': 'assessments/sales-2.html',
  'sales-3': 'assessments/sales-3.html',
  'sales-4': 'assessments/sales-4.html',
  'sales-5': 'assessments/sales-5.html',
  'sales-6': 'assessments/sales-6.html',
  'sales-7': 'assessments/sales-7.html',
  'sales-8': 'assessments/sales-8.html',
};

// Chapter titles — shown below the big "Chapter N" heading. Same key
// format as CHAPTER_CONTENT below ("<module>-<chapter number>"). Leave
// a value as an empty string ('') to leave that chapter's title blank.
window.CHAPTER_TITLES = {
  'sales-1': 'Introduction to Sales Management',
  'sales-2': 'Sales Career',
  'sales-3': 'Salesforce Planning and Organizing',
  'sales-4': 'Sales Training',
  'sales-5': 'Staffing the Sales Force: Recruitment and Selection',
  'sales-6': 'Salespeople Motivation, Compensation, and Reward',
  'sales-7': 'Sales Leadership and Supervision',
  'sales-8': 'Controlling and Evaluating the Salesperson Performance',
  'sales-9': '',
  'sales-10': '',
  'entrepreneurial-1': '',
  'entrepreneurial-2': '',
  'entrepreneurial-3': '',
  'entrepreneurial-4': '',
  'entrepreneurial-5': '',
  'entrepreneurial-6': '',
  'entrepreneurial-7': '',
  'entrepreneurial-8': '',
  'entrepreneurial-9': '',
  'entrepreneurial-10': '',
  'product-1': '',
  'product-2': '',
  'product-3': '',
  'product-4': '',
  'product-5': '',
  'product-6': '',
  'product-7': '',
  'product-8': '',
  'product-9': '',
  'product-10': '',
};

// Chapter content — edit this file directly to add each chapter's text.
// Key format: "<module>-<chapter number>". Leave a value as an empty
// string ('') to show the "no content yet" placeholder on that chapter's page.
// This is the ONLY place chapter text lives — the page itself does not
// allow adding, editing, or deleting text.
//
// Wrap each paragraph in <p>...</p> tags — the page automatically gives
// wrapped paragraphs a book-style look (justified text, first-line
// indent, drop cap on the opening letter). Example:
//   'sales-1': '<p>First paragraph here...</p><p>Second paragraph...</p>',
window.CHAPTER_CONTENT = {
  'sales-1': `
    <p>Sales Management refers to making the best use of the benefits that a company and its customers obtain from the hard work of its sales force.</p>

    <p>"A sales manager can have a narrow or a broad spectrum of responsibilities including the following: estimate demand and prepare sales forecast; establish sales force objectives and quotas; prepare sales plans and budgets; establish the size and organization of the sales force; recruit, select, and train the sales force; compensate the sales force; control and evaluate sales performances." &mdash; Robert D. Hisrich and Ralph W. Jackson, <em>Selling and Sales Management</em></p>

    <p>"Sales Management: The attainment of sales force goals in an effective and efficient manner through planning, staffing, training, directing, and evaluating organizational resources." &mdash; Charles M. Futrell, <em>Fundamentals of Selling</em></p>

    <h3>Benefits of Selling Activities</h3>
    <p><strong>Benefits to Society</strong> &mdash; the basic goals for national development of selling activities include economic growth and maximum employment. Two basic ways that sales activities through salespeople contribute to a nation's economic growth are:</p>
    <ol>
      <li><strong>Economic Stimuli</strong> &mdash; in the business world, salespeople are supposed to encourage action. They served as key players in implementing fitting strategies and tactics for survival and growth amidst increased globalization, focus on customer satisfaction, and quality improvement programs.</li>
      <li><strong>Diffusion of Innovation</strong> &mdash; the process of distributing new products, services, and ideas to the members of society.</li>
    </ol>
    <p><strong>Benefits to Customers</strong> &mdash; professional salespeople know the major uses, limitations, and benefits of the product they sell as they compare it with competitors, allowing them to serve their customers satisfactorily. Salespeople must also be knowledgeable concerning market opportunities and pertinent trends that may affect the business of their customers. Ethically speaking, salespeople must know where to draw the line in sharing information with customers.</p>

    <h3>Elements of Sales Management</h3>
    <ol>
      <li><strong>Planning</strong> &mdash; each salesperson has to see for the future, in a planned way, what must be done and who will do it.</li>
      <li><strong>Coordination</strong> &mdash; it is all-encompassing and part of every function in the management process.</li>
      <li><strong>Controlling</strong> &mdash; the sales manager guides, leads, and motivates subordinates in order to accomplish the goals planned for the business.</li>
      <li><strong>Motivating</strong> &mdash; motivation is a human resource concept that aims to connect unique personalities into a resourceful team.</li>
    </ol>

    <h3>Objectives of Sales Management</h3>
    <p>In general, the objectives of sales management have to cover different sales functions in an integrated style. These objectives are to be expressed, as far as possible, in measurable and quantitative terms, and should also be realistic, achievable, and time-bound. The setting of objectives should not be based merely on the judgment of top management &mdash; rather, it should be created and decided with the involvement of the salespeople at the grass-root level. The usual objectives of sales management are:</p>
    <ul>
      <li>Sales Volume</li>
      <li>Profitability</li>
      <li>Market Share</li>
      <li>Growth</li>
      <li>Corporate Image</li>
    </ul>

    <h3>The Selling Process</h3>
    <p>Selling is a process which consists of the interaction between a possible buyer and a representative hired by a company to vend its products to possible buyers. It follows seven steps:</p>
    <ol>
      <li><strong>Prospecting and Qualifying</strong></li>
      <li><strong>Pre-approach</strong></li>
      <li><strong>Approach</strong></li>
      <li><strong>Presentation</strong></li>
      <li><strong>Handling Objections</strong></li>
      <li><strong>Closing</strong></li>
      <li><strong>Follow-up</strong></li>
    </ol>

    <h3>Sales Management Process</h3>
    <p>The sales management process, or the process of effective management of a company's sales force, consists of three interconnected sets of decisions or processes:</p>
    <ol>
      <li><strong>The Formulation of a Sales Program</strong> &mdash; the sales program must consider the environmental factors faced by the firm.</li>
      <li><strong>The Implementation of the Sales Program</strong> &mdash; designing and implementing approaches direct the efforts of sales personnel toward the desired objectives.</li>
      <li><strong>The Evaluation and Control of the Sales Program</strong> &mdash; evaluation and control allow for modification of the sales program, or how it is implemented, in case performance is unacceptable.</li>
    </ol>

    <h3>External and Internal Environment</h3>
    <p>Factors beyond the control of the individual manager make up the external environment. Variables in the external environment that affect sales can be grouped into five broad categories:</p>
    <ul>
      <li>Economic</li>
      <li>Legal and Political</li>
      <li>Technological</li>
      <li>Social and Cultural</li>
      <li>Natural</li>
    </ul>
    <p>The variables in the internal environment can be grouped into six broad categories, namely:</p>
    <ol>
      <li>Goals, Objectives, and Culture</li>
      <li>Human Resources</li>
      <li>Financial Resources</li>
      <li>Product and Supply Chain Capabilities</li>
      <li>Service Capabilities</li>
      <li>Research and Development and Technological Capabilities</li>
    </ol>

    <h3>Common Mistakes in Sales</h3>
    <ol>
      <li>Not understanding selling.</li>
      <li>Expecting things to improve by themselves.</li>
      <li>Talking excessively and not listening enough.</li>
      <li>Saying words that kill sales.</li>
      <li>Not knowing when to close the sale.</li>
      <li>Not knowing how to close the sale.</li>
      <li>Lacking sincerity.</li>
      <li>Not paying adequate attention to details.</li>
      <li>Letting oneself slump.</li>
      <li>Not keeping connected.</li>
    </ol>
  `,
  'sales-2': `
    <p>A career in sales offers a distinctive mix of rewards and challenges that shape why many professionals choose &mdash; and stay in &mdash; the field.</p>

    <h3>Characteristics of a Sales Career</h3>
    <ul>
      <li><strong>Job Security</strong></li>
      <li><strong>Entrepreneurship</strong></li>
      <li><strong>Prestige</strong></li>
      <li><strong>Freedom / Flexibility</strong></li>
      <li><strong>Income</strong></li>
      <li><strong>Accomplishment</strong></li>
      <li><strong>Challenging</strong></li>
    </ul>

    <h3>Classification of Personal Selling Jobs</h3>
    <ol>
      <li><strong>Order Getting</strong> &mdash; attempts to increase the firm's sales by selling to new customers or convincing current customers to buy more of a company's products.</li>
      <li><strong>Order Taking</strong> &mdash; completes the sales transaction and mainly deals with the same or similar customers. An order taker is also called account maintenance because they maintain an ongoing relationship with current customers.</li>
      <li><strong>Support Personnel</strong> &mdash; individuals who make use of their expertise to give advice to customers about the company's products or services through the dissemination of information, samples, and personal visits.</li>
    </ol>

    <h3>Qualifications and Skills Required to Be a Successful Salesperson</h3>
    <ul>
      <li>Character and the ability to build trust</li>
      <li>Resilience and a positive attitude</li>
      <li>The ability to connect</li>
      <li>The willingness to take risks</li>
      <li>Listening skills</li>
      <li>The ability to ask for an order</li>
      <li>The ability to ask the right questions</li>
      <li>Independence and discipline</li>
      <li>The willingness to learn</li>
      <li>Flexibility</li>
      <li>The drive to succeed</li>
      <li>Passion</li>
    </ul>
  `,
  'sales-3': `
    <p>The task of developing a sales organization structure is difficult. There are a number of structure types that might be used, and for each type there are numerous variations.</p>

    <h3>Specialization</h3>
    <p>It is the degree to which individuals perform some of the required tasks to the exclusion of others. Individuals can become experts on certain tasks, leading to better performance for the entire organization.</p>
    <ul>
      <li><strong>Geographical</strong> &mdash; can be used for mastering markets and addressing customers more thoroughly.</li>
      <li><strong>Product-based</strong> &mdash; can become experts in one or two products or services instead of the whole line.</li>
      <li><strong>Client-based</strong> &mdash; structuring sales forces by type of client can be another useful approach.</li>
    </ul>

    <h3>Centralization vs. Decentralization</h3>
    <p>Centralization is the degree to which important decisions and tasks are performed at the higher levels in the management hierarchy. The central sales office has full responsibility for recruiting, selecting, training, compensating, supervising, motivating, controlling, and evaluating the sales force. High decentralization in sales force management is found mainly among companies with a large sales force.</p>

    <h3>Span of Control versus Management Levels</h3>
    <p>Span of control means the number of salespersons that can be managed efficiently and effectively by a sales manager in a sales organization. Management level is the number of different hierarchical levels of sales management within an organization. The narrower the span, the greater the number of management levels in an organization, while there is a lesser number of management levels for a wider span of control.</p>
    <ul>
      <li><strong>Narrow span of control</strong> &mdash; refers to a single sales manager or sales supervisor who oversees few salespersons.</li>
      <li><strong>Wide span of control</strong> &mdash; refers to a single sales manager or sales supervisor who oversees a large number of salespersons.</li>
    </ul>

    <h3>Line versus Staff Positions</h3>
    <p>Staff sales positions serve the organization by indirectly supporting line sales functions. Staff salespeople use their technical expertise to assist line salespeople and aid top management in various business activities.</p>
    <p>A line sales position is directly involved in the day-to-day sales operations of the organization. Line managers make the majority of the decisions, and line salespeople help achieve company goals.</p>

    <h3>Sales Organization Structures</h3>
    <p>Organization structure is the arrangement of people and tasks to accomplish organizational goals. The grouping of activities into positions and the charting of relationships of positions form the basis for the organization's structural form.</p>
    <ul>
      <li><strong>Geographic Sales Organization</strong> &mdash; apparent when the characteristics of a large number of customers differ by geographic location, such as diverse selling problems in different areas, or certain products ordered more strongly in some regions than others.</li>
      <li><strong>Customer Sales Organization</strong> &mdash; fitting when practically identical products are marketed to several types of customers and the problems of selling to each type are different.</li>
      <li><strong>Product Sales Organization</strong> &mdash; splits the sales task among subordinate executives, each directing sales operations for part of the product line.</li>
      <li><strong>Functional Sales Organization</strong> &mdash; founded on the principle that everyone in the organization, executive and employee alike, should perform as few distinct duties as possible.</li>
    </ul>

    <h3>Mix Sales Organization</h3>
    <p>Few sales organizations use multiple structures in organizing their salespeople. Most use a mix or combination, structuring the selling task more than once to promote greater specialization. The most important factor in the marketing success of the company should form the basis for the first sales structure, and less important factors should determine subsequent breakdowns in the lower organizational echelons.</p>

    <h3>Allocation of Selling Effort</h3>
    <p>The allocation of selling effort, or setting account priorities, is a vital decision in salesforce deployment and must be created strategically. This decision would be the basis for salesforce size and territory decisions.</p>
    <ol>
      <li><strong>Single Factor Model</strong> &mdash; the easiest and most widely used model for allocating salespeople's time.</li>
      <li><strong>Portfolio Model</strong> &mdash; considers multiple factors when determining the attractiveness of individual accounts.</li>
      <li><strong>Decision Model</strong> &mdash; the most meticulous yet complete method for determining the allocation of sales effort.</li>
    </ol>

    <h3>Salesforce Size</h3>
    <p>Most firms change their salesforce size in order to improve performance. In some situations, salesforce size should be increased; in others, improvement of sales performance could be accomplished by reducing salesforce size. Key considerations in determining salesforce size:</p>
    <ol>
      <li><strong>Productivity</strong> &mdash; the ratio between outputs and inputs; sales productivity measures the amount of money the sales organization makes from the efforts of each salesperson.</li>
      <li><strong>Turnover</strong> &mdash; the ratio of the number of people who leave to the average size of the salesforce. When turnover is higher, more time and effort must go into recruiting new salespeople.</li>
      <li><strong>Organizational Strategy</strong> &mdash; the decision about salesforce size must be aligned with organizational strategy.</li>
    </ol>

    <h3>Analytical Tools for Calculating Salesforce Size</h3>
    <ol>
      <li><strong>Breakdown Approach</strong> &mdash; determines the number of salespeople needed to generate a forecasted level of sales (salesforce size = forecasted sales &divide; average sales per salesperson).</li>
      <li><strong>Workload Approach</strong> &mdash; determines how much selling effort is needed to adequately cover the firm's market (number of salespeople = total selling effort needed &divide; average sales per salesperson).</li>
      <li><strong>Incremental Approach</strong> &mdash; the most rigorous method; compares the marginal profits and marginal cost associated with each incremental salesperson.</li>
    </ol>

    <h3>Territorial Assignment of Salespeople</h3>
    <p>Once the arrangement is the best obtainable, it is time to assign salespeople to territories. In reality, only some people are average &mdash; they differ in ability, initiative, and effectiveness, on top of physical condition and energy. In assigning salespeople to territories, management searches for the most profitable connection of selling efforts with sales opportunities, matching ability levels of non-transferable sales personnel to redesigned territories where possible.</p>

    <h3>Journey Planning</h3>
    <p>Planning activity controls and better organization of sales routines help the sales force become more productive. Systematic journey planning is important and involves:</p>
    <ul>
      <li>Developing a call frequency</li>
      <li>Establishing priorities</li>
      <li>Minimizing travelling time</li>
      <li>Evolving a call pattern</li>
      <li>Assessing the workload</li>
      <li>Combining a program with flexibility</li>
    </ul>
  `,
  'sales-4': `
    <p>Sales Training is an endeavor given by an employer to offer the salesperson job-related culture, skill, knowledge, and attitudes.</p>

    <h3>Objectives of Sales Training</h3>
    <ol>
      <li><strong>Improve Company Knowledge</strong> — enhance the latest and current salespeople's knowledge of the company.</li>
      <li><strong>Clarify Responsibilities and Expectations</strong> — provide a complete understanding of daily activities and responsibilities.</li>
      <li><strong>Improve Product Knowledge</strong> — disseminate comprehensive knowledge of specifications, features, etc.</li>
      <li><strong>Enhance Sales Skills</strong> — advance knowledge on how to successfully prospect, deal with clients, and convince them to buy.</li>
      <li><strong>Improve Morale</strong> — boost morale so salespeople complete training with an optimistic attitude.</li>
    </ol>

    <h3>Benefits of Sales Training</h3>
    <p>Having a healthy sales culture is advantageous to everybody in a sales organization.</p>
    <ol>
      <li><strong>Promote a company-wide sales culture.</strong></li>
      <li><strong>Make everyone speak the same language</strong> — a common language means better efficiency and internal conversations built on shared vocabulary in the workplace.</li>
      <li><strong>Connect relationships across the organization</strong> — sales training creates connections between teams, not just within the sales team.</li>
      <li><strong>Produce alliances between departments</strong> — multiple departments come to share a common sales process.</li>
    </ol>

    <h3>Initial Training Needs</h3>
    <ol>
      <li><strong>Job Specifications</strong> — the qualifications required to carry out the job.</li>
      <li><strong>Trainee's Background and Experience</strong> — distinctive educational background and experience.</li>
      <li><strong>Sales-Related Marketing Policies</strong> — must be scrutinized to find out initial sales training needs.</li>
    </ol>

    <h3>Training Content</h3>
    <ol>
      <li><strong>Product data</strong> — the basic topic; salespeople must be familiar with the products, their uses, and applications.</li>
      <li><strong>Sales technique</strong> — salespeople must know how to approach a qualified prospect.</li>
      <li><strong>Markets</strong> — a salesperson needs to identify not just who buys what, but why and how customers purchase.</li>
      <li><strong>Company information</strong> — a salesperson must know pricing policy so they can answer customers' questions.</li>
    </ol>

    <p>Effective program execution depends heavily upon instructional skills and the coordination of planning and housekeeping particulars.</p>

    <h3>Instructional Materials and Training Aids</h3>
    <ol>
      <li><strong>Manuals</strong> — used in most group-type sales training programs; frequently also known as workbooks.</li>
      <li><strong>Other printed materials</strong> — company bulletins, sales and product handbooks.</li>
      <li><strong>Training aids</strong> — the most used and indispensable is the blackboard; every training facility should use one to illustrate points.</li>
      <li><strong>Advance assignments</strong> — to save time, many programs require trainees to prepare assignments in advance.</li>
    </ol>

    <p>A sales training program is an investment of time, money, and effort for sales management.</p>

    <h3>Sales Training for New Recruits</h3>
    <p>Five-step training process for sales recruits:</p>
    <ol>
      <li><strong>Observe</strong> — observing experienced salespeople performing the same duties.</li>
      <li><strong>Learn</strong> — learn all products in detailed and meaningful ways.</li>
      <li><strong>Practice</strong> — enter written orders or take mock, roleplay-style orders over the phone.</li>
      <li><strong>Shadow</strong> — follow seasoned salespeople on each of their calls and try to take the same order.</li>
      <li><strong>Prove</strong> — given the opportunity to talk to real customers.</li>
    </ol>

    <h3>Tips on How New Hires Could Get Started</h3>
    <ol>
      <li><strong>Expedite the paperwork</strong> — send all paperwork to new employees two weeks before they begin.</li>
      <li><strong>Make salespeople show value from day one</strong> — every individual brings their background into the workplace.</li>
      <li><strong>Share the load</strong> — departments contribute to the load.</li>
      <li><strong>Salesperson-to-salesperson training</strong> — let more experienced salespeople contribute their expertise.</li>
      <li><strong>Mentoring approach to success</strong> — new hires pick their own mentor.</li>
      <li><strong>Generate a viable environment</strong> — mentoring must sit within a framework of team competition.</li>
      <li><strong>Assemble tactical teams</strong> — salespeople shouldn't grow unaided; they should be part of support teams.</li>
      <li><strong>Produce a 90-day action plan</strong> — let new hires plan their first 90 days once hired.</li>
      <li><strong>Keeping on the right track</strong> — train new hires on what documents are needed to track activities.</li>
    </ol>

    <h3>Training Experienced Salespeople</h3>
    <ol>
      <li><strong>Make use of their sales experience and expertise</strong> — brainstorming and discussion activities in advanced sales workshops.</li>
      <li><strong>Center on advanced concepts</strong> — effective questioning, key account management, and team selling.</li>
      <li><strong>Make it application-oriented, not theoretical</strong> — bring a real sales opportunity into the workshop for sharing and discussion with colleagues and the mentor.</li>
    </ol>

    <p>Some recommended workshops for experienced sales professionals:</p>
    <ol>
      <li><strong>Sales negotiation skills</strong> — experienced salespeople must know how to use the selling phase.</li>
      <li><strong>Key account management</strong> — using an established process for strategic account planning.</li>
      <li><strong>Sales prospecting and business development</strong> — locating or generating a boundless supply of fresh sales opportunities.</li>
      <li><strong>High-performance selling</strong> — a broad understanding of the customer's financial picture, and more.</li>
      <li><strong>Writing a winning proposal</strong> — tips and guidelines for preparing the best possible proposal.</li>
      <li><strong>Presenting with impact</strong> — understanding the audience's expectations helps a salesperson adjust their style and pitch to specific requirements.</li>
      <li><strong>Team selling</strong> — developing the ability to structure, assemble, direct, and be a member of a winning sales team.</li>
      <li><strong>Selling with influence</strong> — the ability to persuade others.</li>
    </ol>

    <h3>Sales Training Methods</h3>
    <p>There is an extensive range of methods used in sales training.</p>
    <ul>
      <li><strong>The Lecture</strong> — prior to the invention of printing, the earliest instructional method extensively used in sales training; trainees largely watch and listen.</li>
      <li><strong>The Personal Conference</strong> — typically conducted in offices, restaurants, bars, motel rooms, and other unstructured, informal settings.</li>
      <li><strong>Demonstrations</strong> — well suited for conveying information on topics like new products and selling techniques.</li>
      <li><strong>Role Playing</strong> — has trainees dramatizing parts in artificial problem scenarios.</li>
      <li><strong>Case Discussion</strong> — originated by business educators as a substitute for learning by experience.</li>
      <li><strong>Impromptu Discussion</strong> — sometimes called a sales seminar or buzz session; involves giving a short oral presentation about an everyday problem.</li>
      <li><strong>Gaming</strong> — also known as simulation; similar to role playing, using complex artificial situations based on reality.</li>
      <li><strong>On-the-Job Training</strong> — also known as the coach-and-pupil method; incorporates telling, showing, practicing, and evaluating into one.</li>
    </ul>
  `,
  'sales-5': `
    <p>Recruitment is the process of attracting qualified applicants who have the potential to become successful salespeople. Once a strong pool of candidates has been attracted, the sales manager must guide them through a careful selection and socialization process.</p>

    <h3>Job Analysis</h3>
    <p>Job analysis is the process of analyzing the content of a job to produce an account of the tasks and competencies that comprise a particular position, through interviewing employees in similar positions and their supervisors. A job analysis usually covers:</p>
    <ul>
      <li>The mental and physical tasks involved</li>
      <li>How the job will be done</li>
      <li>The reason the job exists</li>
      <li>The qualifications needed</li>
    </ul>
    <p>It is the basis for writing job descriptions and job specifications, helps employers identify the qualifications needed for applicants, and helps trainers determine the skills new salespeople should develop.</p>

    <h3>Attracting a Pool of Sales Recruits</h3>
    <p><strong>Job Description</strong> outlines how the job fits into the company, states the job's goals, responsibilities, and duties, and includes the personnel profile, qualities, skills, and experience required.</p>
    <p><strong>Person Specification</strong> describes the skills, knowledge, and qualities needed for a particular job, and converts job requirements into features applicants must demonstrate.</p>
    <p>Ways to set a clear path toward attracting and hiring the best talent:</p>
    <ol>
      <li>Define and build an employer brand.</li>
      <li>Propose competitive compensation.</li>
      <li>Highlight job meaning and impact.</li>
    </ol>

    <h3>The Selection Process</h3>
    <p>A selection system is a set of successive screenings where an applicant may be dropped from further consideration at any step:</p>
    <ol>
      <li><strong>Pre-interview</strong> &mdash; for the purpose of eliminating obviously unqualified applicants.</li>
      <li><strong>Formal Application Form</strong> &mdash; serves as a central record for all relevant information taken during the selection process.</li>
      <li><strong>Objective Evaluation of Personal History Items</strong> &mdash; the total profile, rather than any single item, determines the predictive value of the personal history.</li>
      <li><strong>The Interview</strong></li>
      <li><strong>References</strong></li>
      <li><strong>Credit Checks</strong></li>
      <li><strong>Employment Tests</strong></li>
      <li><strong>Final Selection</strong> &mdash; the sales manager decides whether to hire each applicant based on everything gathered from screening, interviews, tests, and reference checks.</li>
    </ol>

    <h3>The Interview</h3>
    <p>The interview is the most commonly used selection step and, in some companies, encompasses the complete selection system. Questions during the interview should reflect attitude, motivation, initiative, stability, planning, insight, and social skills.</p>

    <h3>Interviewing Techniques</h3>
    <ul>
      <li><strong>Patterned Interviews</strong> &mdash; the interviewer uses a ready outline of questions designed to draw out a basic core of information.</li>
      <li><strong>Non-directive Interview</strong> &mdash; the applicant is encouraged to speak freely about their experience, training, and future plans.</li>
      <li><strong>Interaction (Stress) Interview</strong> &mdash; replicates the stresses the applicant would encounter in real selling, to study the applicant's reactions.</li>
      <li><strong>Rating Scales</strong> &mdash; reduce the personal interview's tendency to lack objectivity.</li>
    </ul>

    <h3>References, Credit Checks, and Tests</h3>
    <p>References supply information on the applicant not obtainable from other sources, typically falling into four classifications: present or former employers, former customers, reputable citizens, and mutual acquaintances. Many companies also use credit checks on applicants for sales positions.</p>
    <p>An employment test is a procedure, technique, or measurement instrument for establishing characteristics like aptitudes, capabilities, intelligence, knowledge, skills, or personality. Types of tests include tests of ability, tests of habitual characteristics, interest tests, and achievement tests. A physical examination is also often required, since good health is important to a salesperson's success.</p>

    <h3>Sources of Salespeople</h3>
    <p>Companies use several sources to find qualified applicants, searching first within the company before looking outward.</p>
    <p><strong>Sources within the Company</strong></p>
    <ul>
      <li><strong>Company salespeople</strong> &mdash; many individuals apply for sales jobs because they know company salespeople, and salespeople's recommendations may form an excellent source.</li>
      <li><strong>Company executives</strong> &mdash; recommendations of the sales manager, president, and other company executives are an essential source.</li>
      <li><strong>Internal transfers</strong> &mdash; from other departments and the non-selling section of the sales department.</li>
    </ul>
    <p><strong>Sources outside the Company</strong></p>
    <ul>
      <li><strong>Direct unsolicited applications</strong> &mdash; walk-in and write-in applications.</li>
      <li><strong>Employment agencies</strong></li>
      <li><strong>Salespeople making calls on the company</strong></li>
      <li><strong>Employees of customers</strong></li>
      <li><strong>Sales forces of non-competing companies</strong></li>
      <li><strong>Sales forces of competing companies</strong></li>
      <li><strong>Educational institutions</strong></li>
      <li><strong>Recruiting consultants</strong></li>
      <li><strong>Indirect recruiting in newspaper advertisements</strong></li>
      <li><strong>Recruiting brochures</strong></li>
    </ul>

    <h3>Salesforce Socialization</h3>
    <p>Salesforce socialization refers to the process which involves the formal introduction of the recruit to company practices, procedures, and philosophy, as well as the social aspects of the job. Training plays a key role in this process, acquainting new hires with company history, policies, facilities, procedures, and the people with whom they interrelate.</p>
    <p>Important things to remember in salesforce socialization:</p>
    <ol>
      <li>Initiation to task.</li>
      <li>Role definition.</li>
      <li>Proper recruitment and training increase job satisfaction and performance.</li>
      <li>Positive relationships improve job-related attitude and performance.</li>
      <li>Newly hired salespeople should be interested in learning about their jobs, peers, and supervisors.</li>
    </ol>
  `,
  'sales-6': `
    <p>Motivation in sales management is the amount of effort the salesperson wants to spend on activities related to the sales job, such as calling on possible accounts, preparing sales presentations, and writing sales reports.</p>

    <h3>Salespeople Motivation</h3>
    <p>Motivation is goal-directed behavior which is essentially based on certain needs or desires. Needs suggest a deprivation of something that only reaching the goal could satisfy, while desires imply optimistic passion and strength of emotion. Four aspects of the salesperson's job affect the quality of performance:</p>
    <ol>
      <li><strong>Intrinsic nature of the sales job</strong> &mdash; stiff competition, frequent refusals, high target quotas, and time spent away from home can discourage salespeople, causing below-standard performance or a search for non-selling positions.</li>
      <li><strong>Salesperson's role conflicts</strong> &mdash; the salesperson is expected to satisfy people within the company as well as customers outside it, leading to role conflicts.</li>
      <li><strong>Tendency toward apathy</strong> &mdash; serving the same territory and customers for years can cause salespeople to lose interest and enthusiasm.</li>
      <li><strong>Maintaining a feeling of group identity</strong> &mdash; working individually makes it difficult for a salesperson to develop and preserve a sense of group identity with colleagues.</li>
    </ol>

    <h3>Motivation Theories Used in Sales</h3>
    <p>All human activity is directed toward satisfying certain needs or reaching certain goals, and a salesperson's job behavior is no exception.</p>
    <ul>
      <li><strong>Hierarchy of Needs (Abraham Maslow)</strong> &mdash; an individual seeks to fulfill personal needs based on a ladder of importance: physiological, security, social, esteem, and self-actualization needs.</li>
      <li><strong>Motivation-Hygiene Theory (Frederick Herzberg)</strong> &mdash; argues that job dissatisfaction is not the reverse of job satisfaction. Hygiene needs, when unmet, cause dissatisfaction, but satisfying them only leads to a neutral point, not satisfaction. Motivation factors &mdash; achievement, recognition, responsibility, and advancement &mdash; are what drive satisfaction beyond that neutral point.</li>
      <li><strong>Achievement-Motivation Theory (David McClelland)</strong> &mdash; a person who spends substantial time thinking about doing their job better has a high need for achievement (nAch). Such individuals like taking personal responsibility for solutions, plan for reachable goals, and want feedback on how they are doing &mdash; often making them the best performers in commission-based sales jobs.</li>
      <li><strong>Expectancy Theory (Victor Vroom)</strong> &mdash; centers on outcomes rather than needs. Valence is the importance an individual places on an expected outcome; expectancy is the belief that improved effort leads to better performance; instrumentality is the trust that good performance leads to a rewarding outcome. The theory focuses on three relationships: effort-performance, performance-reward, and rewards-personal goals.</li>
    </ul>
    <p>Three elements affecting motivation can be found within the organizational environment: the individual salesperson, the sales job, and the organizational environment.</p>

    <h3>Salesforce Compensation</h3>
    <p>After the salesforce is ready, the manager must develop a way of providing compensation to individuals. Most approaches utilize a combination of salary and commission, or salary and bonus. Methods of meeting non-financial needs include contests, vacations, performance-based prizes, and self-improvement benefits such as tuition for graduate school. Quotas &mdash; for calls made per day, expenses consumed per month, or new customers added annually &mdash; give salespeople a standard against which to measure success.</p>

    <h3>Types of Financial Compensation</h3>
    <p>The four elements of compensation &mdash; straight salary, straight commission, salary and other variable elements, and fringe benefits/expense reimbursement &mdash; combine into hundreds of different plans.</p>
    <ul>
      <li><strong>Straight-Salary Plan</strong> &mdash; the simplest plan; salespersons receive a fixed amount at regular intervals. Commonly used for trade selling jobs where the bulk of selling amounts come from order taking.</li>
      <li><strong>Straight-Commission Plan</strong> &mdash; compensation based on productivity, in one of two forms: with the salesperson paying their own expenses, or with the company shouldering expenses.</li>
      <li><strong>Combination of Salary and Commission</strong> &mdash; employees receive a definite base salary plus an undefined sum of commission depending on total sales.</li>
    </ul>

    <h3>Advantages and Disadvantages of Compensation Plans</h3>
    <p><strong>Straight-Salary Plan</strong> &mdash; disincentive to excel, higher turnover, tends to draw less experienced staff, and offers lower value for the company since it pays equally for sales and non-sales activities.</p>
    <p><strong>Straight-Commission Plan</strong> &mdash; rewards performance directly and aids payroll planning since higher earners produce more sales, but can create a short-term orientation and requires care in setting a commission rate that motivates without inflating labor costs.</p>
    <p><strong>Combination of Salary and Commission</strong> &mdash; rewards performance while providing income stability, though it can add complexity to how pay is calculated and, if the commission portion is small, have limited motivational impact.</p>

    <h3>Bonuses and Fringe Benefits</h3>
    <p>A bonus is an amount rewarded for completing a definite sales task, such as attaining a sales quota, gaining new accounts, or following up on leads. Fringe benefits do not directly relate to job performance &mdash; some are compulsory by law (like social security premiums), while others are provided for competitiveness or employee loyalty.</p>

    <h3>Non-Financial Compensation</h3>
    <p>While compensation remains the top motivator for salespeople, work content &mdash; a job's challenges, variety, quality of feedback, and meaning &mdash; is the second most significant basis of motivation. Non-financial rewards include:</p>
    <ul>
      <li><strong>Recognition</strong> &mdash; one of the easiest yet most powerful ways to reward salespeople.</li>
      <li><strong>Gifts and Prizes</strong> &mdash; trips, jewelry, gift certificates, gas cards, and dinner vouchers.</li>
      <li><strong>Flex Hours</strong> &mdash; offered when salespeople meet or exceed target sales.</li>
      <li><strong>Training</strong> &mdash; an opportunity for motivated salespeople to progress in their careers.</li>
      <li><strong>Status</strong> &mdash; formal recognition awards for sales achievement, customer wins, and customer service.</li>
      <li><strong>Affiliation</strong> &mdash; association with the company's reputation and product image.</li>
      <li><strong>Positive Feedback</strong> &mdash; praise from superiors that can lead to short-term morale improvements.</li>
    </ul>
  `,
  'sales-7': `
    <p>After studying this chapter, the students should be able to:</p>

    <ol>
      <li>Understand the foundations of sales leadership and supervision;</li>
      <li>Describe the modern views of sales leadership;</li>
      <li>Explain the components of sales leadership;</li>
      <li>Describe sales leadership functions;</li>
      <li>Discuss the different leadership theories as applied in sales management; and</li>
      <li>Identify problems in leadership.</li>
    </ol>

    <p>It is a must to make every investment in the salesforce count when people and resources are scarce and expensive. The salesforce is a major growth engine and a critical source of market feedback. Leading the effective sales force helps optimize performance by learning to cut costs while increasing sales.</p>

    <h3>Foundations of Sales Leadership and Supervision</h3>

    <p>Leadership &ndash; the interpersonal process of communicating, inspiring, guiding, and influencing the behavior of subordinate salespeople toward the attainment of organizational objectives, goals, and values.</p>

    <p><strong>Important elements in sales force leadership are as follows:</strong></p>

    <ol>
      <li>Leadership is interpersonal &ndash; It affects the followers who must be agreeable to accept orders from the sales manager or supervisor.</li>
      <li>Leadership relies on influence &ndash; Influence comes from the different types of power. Power is the potential to influence the behavior of followers. Sources of power:
        <ol type="a">
          <li>Legitimate power &ndash; Comes from the sales manager&rsquo;s position in the company&rsquo;s hierarchical structure and level of responsibility (also called authority).</li>
          <li>Reward power &ndash; Ability to provide benefits such as salary, commissions, bonuses, incentives, promotions, preferred territories, and challenging assignments.</li>
          <li>Coercive power &ndash; Ability to hold back rewards or punish salespeople to transform behavior.</li>
          <li>Referent power &ndash; Comes from salespeople who admire the manager because of personal traits and charisma.</li>
          <li>Expert power &ndash; Comes from the sales manager&rsquo;s skills, knowledge, and special abilities.</li>
        </ol>
      </li>
      <li>Leaders guide salespeople to reach individual and organizational goals &ndash; Includes setting goals, guiding, clarifying, charting paths, and offering inspiration.</li>
      <li>Leaders advocate ethical and moral values &ndash; Sales leaders serve as models of fair, decent, and professional selling.</li>
    </ol>

    <p>Supervision &ndash; close checking of the daily work activities of the salespeople. Close supervision becomes less apparent as the level in the sales management hierarchy levels up.</p>

    <p>Goal of supervision &ndash; Assist salespeople to work smartly by doing the right things in the right ways.</p>

    <h3>Components of Sales Leadership</h3>

    <p><strong>Common skills/traits of effective sales leaders:</strong></p>

    <p><strong>Honesty and Integrity</strong></p>

    <ul>
      <li>Great sales leaders form an organizational culture founded on honesty and integrity.</li>
      <li>Effective sales leaders must be truthful and committed to the highest standards of ethical conduct.</li>
      <li>They willingly acknowledge their faults.</li>
      <li>They put the welfare of the organization before individual benefit.</li>
      <li>Transparency is essential &ndash; letting everyone know both the bad and the good builds trust.</li>
    </ul>

    <p><strong>Outstanding Self Awareness</strong></p>

    <ul>
      <li>A sales leader must be aware of individual strengths and weaknesses.</li>
      <li>Acknowledge limitations and seek help &ndash; this shows humility.</li>
      <li>Welcome feedback and opposing opinions; generate healthy discussions.</li>
      <li>Apply servant style leadership &ndash; lend a hand rather than just telling others what to do.</li>
      <li>Show empathy, demonstrate humility, and be concerned about others.</li>
      <li>Obtain 360-degree feedback from the sales team.</li>
    </ul>

    <p><strong>Vision</strong></p>

    <ul>
      <li>Outstanding sales leaders visualize the entire picture and do not get overly focused on particular tasks.</li>
      <li>They are strategic thinkers with well-built networks.</li>
      <li>Extremely good in speaking a vision of the future and receiving organizational buy-in.</li>
    </ul>

    <p><strong>Courage</strong></p>

    <ul>
      <li>Confidence needs courage.</li>
      <li>Finest leaders are decisive and willing to acquire risks even when conservative wisdom dictates otherwise.</li>
      <li>Willing to stand alone if they believe in their convictions.</li>
      <li>Able to recognize when they need the expertise of others.</li>
    </ul>

    <p><strong>Communication Skills</strong></p>

    <ul>
      <li>Must be motivating and convincing (not necessarily great orators or writers).</li>
      <li>Know how to articulate sales ideas to the audience&rsquo;s level.</li>
      <li>Communicate both orally and in writing successfully.</li>
      <li>Always be truthful and appropriately convey bad news.</li>
      <li>Display an encouraging and optimistic attitude even in disturbing times.</li>
    </ul>

    <p><strong>Team Builder</strong></p>

    <ul>
      <li>Exceptional team building skills &ndash; ability to magnetize and keep top talent.</li>
      <li>Form a team with matching skill sets; search for people better than him.</li>
      <li>Diversity among members increases viewpoints and prevents &ldquo;group think.&rdquo;</li>
      <li>Act as a facilitator who causes healthy discussions and produces agreement.</li>
    </ul>

    <h3>Modern View of Sales Leadership</h3>

    <p><strong>Two general views of sales leadership:</strong></p>

    <ol>
      <li><strong>Leadership Style</strong>
        <ul>
          <li>Transactional leadership &ndash; Sales manager gives positive or negative feedback based on effort or performance (recognition/approval or reprimands/disapproval).</li>
          <li>Transformational leadership &ndash; Alters values, attitudes, beliefs, and goals of salespeople. Primary basis of power is internalization or identification. Strong positive relationships with performance and organizational citizenship behavior.</li>
        </ul>
      </li>
      <li><strong>Leader-Member Exchange (LMX) Model</strong>
        <ul>
          <li>Focuses on sales manager&ndash;salesperson reciprocal relationships based on strength and trust.</li>
          <li>Cadres (&ldquo;in&rdquo; group) &ndash; receive more trust, regular constructive communication, mentoring, favorable territories.</li>
          <li>Hired hand &ndash; receive fewer mentoring, favorable territories, and communication.</li>
          <li>Shared trust influences LMX quality, job attitudes, and performance.</li>
        </ul>
      </li>
    </ol>

    <p><strong>Behavioral Self-Management</strong></p>

    <ul>
      <li>Latest management thinking: organized set of behavioral and cognitive strategies for higher performance.</li>
      <li>Gives salespeople more command over their work (self-imposed planning, behavior, evaluation, rewards).</li>
      <li>Self-control and self-discipline are vital because many salespeople work without regular supervision.</li>
    </ul>

    <h3>Sales Leadership Functions</h3>

    <p><strong>Three of the most important sales leadership functions:</strong></p>

    <ol>
      <li><strong>Sales Coaching</strong>
        <ul>
          <li>A coach is a teacher, counselor, guide, cheerleader, and facilitator rolled into one.</li>
          <li>Must know the person&rsquo;s motivations, appraise strengths and weaknesses, persuade, and motivate.</li>
          <li>Coaching model: the question is also the answer &ndash; salespeople develop answers themselves.</li>
          <li>Collaborative and interactive; uses inquiry to reach own level of awareness.</li>
          <li>Devote time to one-on-one discussion; know strengths, weaknesses, and KPIs.</li>
          <li>Data-driven and logical; gauge hard data then assess advancement.</li>
          <li>Helps keep top performers and turns high performers into doubly effective ones.</li>
          <li>Vital quality: collaboration &ndash; both co-create and put into practice a plan to advance skills (not just &ldquo;telling&rdquo;).</li>
        </ul>
      </li>
      <li><strong>Planning and Conducting Integrative Sales Meeting</strong>
        <ul>
          <li>Best opportunity for sales managers to display leadership ability.</li>
          <li>Main objective: unite salespeople toward achievement of common goal.</li>
          <li>May also accomplish training, planning, motivational programs, recognition, and recreation.</li>
          <li>Needs and wants of salespeople should be given priority.</li>
          <li>Preparation includes: picking a theme, organizing entertainers/AV materials, inspecting arrangements, setting up supplies.</li>
        </ul>
      </li>
      <li><strong>Meeting Ethical and Moral Responsibilities</strong>
        <ul>
          <li>Every sales management function should be done ethically.</li>
          <li>Strict financial control and secure supervision are needed.</li>
        </ul>
      </li>
    </ol>

    <p><strong>Three approaches to management of ethics:</strong></p>

    <ul>
      <li>Moral Manager &ndash; Dedicated to high standards of ethical behavior in personal actions and decisions. Considers himself a steward rather than owner. Pursues success within ethical norms.</li>
      <li>Immoral Manager &ndash; No regard for ethical standards. &ldquo;Kill or be killed&rdquo; mentality. Willing to short-circuit legal requirements if he can get away with it. Classic self-serving greed (&ldquo;Simply Business&rdquo;).</li>
      <li>Amoral Manager &ndash; Believes it is not necessary to consider ethical principles as long as one stays within legal bounds. May be intentional or unintentional. Often lawyer-driven decisions.</li>
    </ul>

    <p><strong>Three relevant types of unethical behavior:</strong></p>

    <ol>
      <li>Non-role act &ndash; Calculated attempt to gain something at the expense of the company (e.g., cheating on expense account).</li>
      <li>Role failure act &ndash; Failure to execute job responsibilities (e.g., understating performance appraisal).</li>
      <li>Role distortion act &ndash; May place the person in danger while benefiting the organization (e.g., committing bribery).</li>
    </ol>

    <h3>Core Sales Leadership Theories</h3>

    <p><strong>Trait Theories: What Type of Person Makes a Good Leader?</strong></p>

    <ul>
      <li>Argue that effective leaders share common personality characteristics or &ldquo;traits.&rdquo;</li>
      <li>Early theories: leadership is innate and distinctive.</li>
      <li>Examples of traits: integrity, empathy, assertiveness, good decision-making skills, likability.</li>
      <li>No single or specific combination of traits assures success.</li>
    </ul>

    <p><strong>Twelve Traits of Highly Effective Sales Managers (guide):</strong></p>

    <ol>
      <li>Conscientiousness &ndash; Take great pride in work; organized and efficient; keep going no matter what.</li>
      <li>Respectful &ndash; Treat customers like gold; respect their time.</li>
      <li>Initiative &ndash; Go-getters; take matters into their own hands; stay on track.</li>
      <li>They listen &ndash; Ask clients why they want something done; find out wants and needs.</li>
      <li>Persistent &ndash; Thick-skinned; confident and persistent despite &ldquo;no.&rdquo;</li>
      <li>Coachable &ndash; Energetic, willing to learn, able to adapt; early adopter of suggestions.</li>
      <li>Positive &ndash; Cheerful attitude makes it easier to approach customers.</li>
      <li>Resourceful &ndash; Shift gears; try different approaches using creativity.</li>
      <li>Passionate &ndash; Actually enjoy the job and the products/services they sell.</li>
      <li>Ask questions &ndash; Higher-performing reps ask more questions (often about implications).</li>
      <li>Independent &ndash; Self-motivator; do not need constant supervision.</li>
      <li>Time manages &ndash; More selling time increases sales; manage routes and time effectively.</li>
      <li>Overachieve &ndash; Over-commit and over-deliver; push for more.</li>
      <li>Persuasible &ndash; Enjoy meeting new people; power of networking.</li>
      <li>Alertness &ndash; Always prepared; aware of self and situation.</li>
    </ol>

    <p><strong>Behavioral Theories: What Does a Good Leader Do?</strong></p>

    <ul>
      <li>Focus on how leaders behave.</li>
      <li>Kurt Lewin&rsquo;s three types of leaders:
        <ol>
          <li>Autocratic &ndash; Formulate decisions with no consultation. Suitable when decisions must be made promptly.</li>
          <li>Democratic &ndash; Let the team give input prior to decision. Vital when team conformity is an issue.</li>
          <li>Laissez-faire &ndash; Do not get in the way; let the team formulate many decisions. Works when team is highly competent and motivated.</li>
        </ol>
      </li>
    </ul>

    <p><strong>Four leadership styles using consideration and initiating structure (Table 6):</strong></p>

    <ul>
      <li>Quadrant 1 &ndash; High consideration / Low structure: Focus on team harmony and individual need satisfaction. Appropriate for experienced, high-performing salespeople.</li>
      <li>Quadrant 2 &ndash; High consideration / High structure: Accomplish the job while maintaining harmony; provide guidance. Appropriate for newly hired, inexperienced trainees.</li>
      <li>Quadrant 3 &ndash; Low consideration / Low structure: Largely passive; little structure or consideration. Appropriate for experienced salespeople who know and enjoy their work.</li>
      <li>Quadrant 4 &ndash; Low consideration / High structure: Focus on getting the job done by structuring tasks. Appropriate when experienced salespeople must do unpleasant or unfamiliar work.</li>
    </ul>

    <p><strong>Contingency Theories: How Does the Situation Influence Good Leadership?</strong></p>

    <ul>
      <li>No correct type of leader; best style depends on the situation.</li>
    </ul>

    <p><strong>House&rsquo;s Path-Goal Theory</strong></p>

    <ul>
      <li>Helps identify an effective way to leadership based on what salespeople want and the current situation.</li>
      <li>Leader needs to: (1) assist them identify and realize goals, (2) take away hindrances, (3) present fitting rewards.</li>
      <li>Four types of leadership:
        <ol>
          <li>Supportive &ndash; Focus on relationships; sensitivity to needs. Effective when tasks are monotonous or demanding.</li>
          <li>Directive &ndash; Communicate goals and expectations; assign clear tasks. Effective when tasks are unstructured or team is inexperienced.</li>
          <li>Participative &ndash; Consult with group; consider ideas and expertise. Effective when team is knowledgeable and wants to give input.</li>
          <li>Achievement-oriented &ndash; Set demanding goals; maintain high standards. Effective when team is unmotivated or unchallenged.</li>
        </ol>
      </li>
      <li>Three assumptions: salespeople are independent with shared goals; senior manager has access to power sources; good interaction for coordination.</li>
    </ul>

    <p><strong>Fiedler&rsquo;s Contingency Model</strong></p>

    <ul>
      <li>Created by Fred Fiedler (mid-1960s).</li>
      <li>No one best style of leadership; effectiveness is based on the situation.</li>
      <li>Two factors: leadership style + situational favorableness.</li>
      <li>Leadership style measured by Least-Preferred Co-Worker (LPC) Scale.
        <ul>
          <li>High LPC score → relationship-oriented leader.</li>
          <li>Low LPC score → task-oriented leader.</li>
        </ul>
      </li>
      <li>Low LPC (task-oriented) &ndash; effective in finishing tasks; relationship-building is low priority.</li>
      <li>High LPC (relationship-oriented) &ndash; concentrate on personal associations; good at preventing/administering conflict.</li>
      <li>Situational favorableness depends on three factors:
        <ol>
          <li>Leader-Member Relations &ndash; Level of trust and confidence the team has in the manager.</li>
          <li>Task Structure &ndash; Clear and structured vs. vague and unstructured.</li>
          <li>Leader&rsquo;s Position Power &ndash; Amount of power to lead, reward, or punish (strong or weak).</li>
        </ol>
      </li>
      <li>Newly promoted managers who were high-performing salespeople may need to switch from task-oriented to more relationship-centered leadership.</li>
    </ul>
  `,
  'sales-8': `
    <p>Controlling and evaluating the salesperson's performance is how sales management confirms that the sales plan is actually working &mdash; and corrects course when it isn't. It closes the loop on everything else sales management sets out to do.</p>

    <h3>Objectives</h3>
    <ol>
      <li>Understand the concept of controlling the salespeople;</li>
      <li>Discuss the standards of performance in sales;</li>
      <li>Identify quantitative standards used in measuring levels of performance of salespeople;</li>
      <li>Explain different reports from salespeople; and</li>
      <li>Enumerate techniques for salespeople's evaluation of performance.</li>
    </ol>

    <h3>Controlling the Salespeople and Their Performance</h3>
    <p>Salespeople control consists of substantiating salespersons' performance and making curative actions, if considered necessary. Salespeople control includes appraising salespeople performance, weighing it against standards, discovering divergence and its foundations, and, if essential, making remedial actions so that the plan is successfully executed.</p>

    <h3>The Management Control Cycle</h3>
    <p>Four steps make up this cycle, often referred to as the &ldquo;management cycle&rdquo;:</p>
    <ol>
      <li><strong>Establishing Performance Standards</strong> &mdash; deciding what level of performance is expected.</li>
      <li><strong>Recording Performance</strong> &mdash; collecting information on what salespeople actually did.</li>
      <li><strong>Evaluating Performance Against Standards</strong> &mdash; comparing the two to spot any divergence.</li>
      <li><strong>Taking Action</strong> &mdash; making remedial or corrective moves where needed, before the cycle repeats.</li>
    </ol>

    <h3>Standards of Performance</h3>
    <p>The nature of the selling job requires setting standards of performance. Simply, sales job analysis is required to decide on job objectives, duties and responsibilities, and the like. Performance standards are planned to evaluate the most important performance activities considered by the company.</p>
    <p>Extensive market knowledge is necessary in formulating sales performance standards. It is essential to recognize the entire sales potential and the fraction that each sales territory is able to produce. Sales planning is re-evaluated to guarantee that it is the best feasible under the circumstances, and the policies and procedures that bring the personal-selling part of the marketing program into play are examined for suitability.</p>

    <h3>Purposes of a Salesperson's Performance Evaluation</h3>
    <ol>
      <li>To make certain that compensation and other reward disbursements are constant with real salesperson performance,</li>
      <li>To spot the salespeople that may be promoted,</li>
      <li>To name salespeople who should be terminated from employment and to furnish proof to carry the necessity for termination,</li>
      <li>To decide the exact training and counseling requirements of the individual salesperson and the whole salesforce,</li>
      <li>To offer information for helpful human resource planning,</li>
      <li>To name criteria that can be applied in recruiting and selecting salespeople in the future,</li>
      <li>To counsel salespeople of work expectations,</li>
      <li>To inspire salespeople,</li>
      <li>To assist salespeople and formulate career goals, and</li>
      <li>To advance salesperson performance.</li>
    </ol>

    <h3>Quantitative Performance Standards</h3>
    <p>Quantitative performance standards are being used by a good number of companies. The selected specific blend of standards differs with the company and its marketing conditions. Quantitative standards provide the descriptions of what management expects &mdash; each salesperson must have definitions of the performance parts to be measured and the measurement units. It is widespread practice to assign multiple quantitative performance standards, and a company can assign different quantitative standards for a salesperson.</p>
    <ul>
      <li><strong>Quota</strong> &mdash; an objective expressed quantitatively and basically assigned to a particular marketing unit.</li>
      <li><strong>Selling Expense Ratio</strong> &mdash; used by sales managers as a standard to control the relation between selling expenses and sales volume.</li>
      <li><strong>Territorial Net Profit or Gross Margin Ratio</strong> &mdash; centers salespeople's attention on the need for selling a balanced line and considering the relative profitability of different products and individual customers, using target ratios of net profit or gross margin to sales.</li>
      <li><strong>Call-Frequency Ratio</strong> &mdash; computed by dividing the number of sales calls on a particular class of customers by the number of customers in that class.</li>
      <li><strong>Calls per Day</strong> &mdash; a standard for the number of calls each day, advantageous especially for companies selling consumer products where salespeople contact large numbers of customers.</li>
      <li><strong>Order Call Ratio</strong> &mdash; determines the effectiveness of salespeople in obtaining and securing orders, computed by dividing the number of orders secured by the number of calls completed.</li>
      <li><strong>Average Cost per Call</strong> &mdash; a target set to highlight the value of making profitable calls; standards are created for every category of account once a significant difference is present in the cost of calling on different sizes or groups of accounts.</li>
      <li><strong>Non-Selling Activities</strong> &mdash; activities like getting dealer displays and cooperative advertising contracts, training distributors' staff, and goodwill calls on distributors' customers are also assigned quantitative performance standards by some companies.</li>
    </ul>

    <h3>Qualitative Measures of Performance</h3>
    <p>The application of some qualitative criteria is often necessary in areas of job performance like personal effectiveness in managing customer relations problems, since no precise measurement is available. Qualitative criteria are utilized in evaluating the performance characteristics that impact sales outcomes in the long term, although their level of quality can only be subjectively assessed. More and more companies are assessing their salespeople on the basis of the attainment of customer satisfaction. Among the usual dimensions applied are:</p>
    <ol>
      <li><strong>Sales Skills</strong> &mdash; rated using sub-factors such as managing the opening and developing rapport, naming the customer's needs, questioning ability, quality of sales presentation, use of visual aids, ability to overcome objections, and the knack for closing the sale.</li>
      <li><strong>Customer Relationships</strong> &mdash; how well is the salesperson accommodated? Are customers fully satisfied with the service, advice, and reliability of the salesperson, or are there many criticisms and complaints?</li>
      <li><strong>Self-Organisation</strong> &mdash; how well does the salesperson set up calls, manage routing to reduce unproductive travelling, keep customer records updated, make market information available to headquarters, and perform self-analysis of performance to overcome weaknesses?</li>
      <li><strong>Product Knowledge</strong> &mdash; how well informed is the salesperson about their own products and their customer benefits and uses, rival products and their benefits and uses, and the comparative strengths and weaknesses of their own versus competitive offerings?</li>
      <li><strong>Cooperation and Attitudes</strong> &mdash; to what extent does the salesperson act on the objectives set by management to improve performance (such as increasing prospecting rate), cooperate with suggestions formulated during field training, and make use of their own initiative?</li>
    </ol>

    <h3>The Actual Performance</h3>
    <p>The next task of sales management is to measure real performance. Basically, the highlight in overseeing actual performance is to collect performance information &mdash; it is necessary to identify information needs, choose the information sources, and collect the information. There are two fundamental sources of performance information: sales and expense records, and reports of different kinds.</p>

    <h3>System of Field Sales Reports</h3>
    <p>The basic intention of field sales reports is to give control information. Excellent communications necessitate contact between the persons preparing and the persons receiving reports. A good field sales reporting system is beneficial for communication from the field to headquarters as well as from headquarters to the field.</p>
    <p>A good field sales reporting system also helps salespeople in their self-improvement programs &mdash; recording achievements in black and white form obliges individuals to test their own work.</p>

    <h3>Six Types of Field Sales Reports</h3>
    <ol>
      <li><strong>Progress or Call Report</strong> &mdash; the majority of companies has a progress or call report. It is prepared by each individual salesperson for each call, or collectively, covering all calls completed daily or weekly.</li>
      <li><strong>Expense Report</strong> &mdash; because most sales personnel are reimbursed for expenses and itemized expense records are required for income tax purposes, most companies have an expense report.</li>
      <li><strong>Sales Work Plan</strong> &mdash; the salesperson submits a work plan giving details such as accounts and prospects to be called upon, products and other matters to be discussed, routes to be toured, and hotels or motels for a future period, typically a week or a month.</li>
      <li><strong>New-Business or Potential New-Business Report</strong> &mdash; tells management about accounts freshly gained and prospects who may turn into sources of new business.</li>
      <li><strong>Lost-Sales Report</strong> &mdash; gives information to help assess a salesperson's lost customers and how the company is faring against competition.</li>
      <li><strong>Report of Complaint and/or Adjustment</strong> &mdash; offers information for examining complaints originating from a salesperson's work, complaints by group of customers, and the cost of correcting them.</li>
    </ol>

    <h3>Salesperson Performance Evaluation</h3>
    <p>Salespeople's evaluation completes the job of sales managers. It is vital to establish whether the sales function is reaching its quantitative objectives &mdash; the sales manager needs to figure out the reasons if it is not.</p>
    <p>Many techniques of performance evaluation have evolved over the years, and so far no single perfect technique has been considered ideal for all organizations. A number of universally employed techniques are essays, rating scales, rankings, management by objectives, and behaviorally anchored rating scales. Habitual observation and appraisal of salespeople's activities are also indispensable to make certain that organizational activities support the sales plan &mdash; from time to time, each manager is provided with performance appraisal forms for assessing every salesperson.</p>

    <h3>Ways to Appraise Salespeople's Performance</h3>
    <ol>
      <li><strong>Graphical Appraisal Scales</strong> &mdash; the most frequently utilized form for appraising a salesperson's performance; the manager fills out a form evaluating a salesperson's selling skills.</li>
      <li><strong>Descriptive Statements</strong> &mdash; a method of performance appraisal obliging the manager to give a comprehensive, written narrative of each salesperson's performance.</li>
      <li><strong>Management by Objectives</strong> &mdash; an outcome-based evaluation program; salespeople are given objectives and their real results are compared against those objectives to appraise their performance.</li>
      <li><strong>Behaviorally Anchored Rating Scales</strong> &mdash; usually referred to as BARS, representing an attempt to improve evaluation by using descriptive cues or adjectives.</li>
      <li><strong>360 Degree Feedback</strong> &mdash; managers acquire feedback from a salesperson's peers, assistants, customers, and even the sales manager's own supervisors in preparing a performance review.</li>
    </ol>
  `,
  'sales-9': '',
  'sales-10': '',
  'entrepreneurial-1': '',
  'entrepreneurial-2': '',
  'entrepreneurial-3': '',
  'entrepreneurial-4': '',
  'entrepreneurial-5': '',
  'entrepreneurial-6': '',
  'entrepreneurial-7': '',
  'entrepreneurial-8': '',
  'entrepreneurial-9': '',
  'entrepreneurial-10': '',
  'product-1': '',
  'product-2': '',
  'product-3': '',
  'product-4': '',
  'product-5': '',
  'product-6': '',
  'product-7': '',
  'product-8': '',
  'product-9': '',
  'product-10': '',
};
