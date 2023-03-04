import { Component } from '@angular/core';
import { Job } from './Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobs!: Job[];

  constructor() {
    this.jobs = [
      {
        employer_name: 'Skillventory',
        employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGfsYtudpwesPfA_hauB1ar-bKYYUUPP9f92X&s=0',
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'Glassdoor',
        job_id: 't8A10ZlZvFoAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Manager / Senior Manager – Operations (Banking Reconciliation)',
        job_apply_link: 'https://www.glassdoor.co.in/job-listing/manager-senior-manager-%E2%80%93-operations-banking-reconciliation-skillventory-JV_IC2851180_KO0,58_KE59,71.htm?jl=1008506508327',
        job_description: 'Manager / Senior Manager – Operations (Banking Reconciliation)\n' +
          '\n' +
          'From 4 to 9 year(s) of experience\n' +
          '\n' +
          '₹ Not Disclosed by Recruiter\n' +
          '\n' +
          'Mumbai, Mumbai Suburban, Navi Mumbai\n' +
          '\n' +
          'or\n' +
          '\n' +
          'Job Description\n' +
          '\n' +
          'Roles and Responsibilities\n' +
          '• Manage disbursement operations, ensuring timely and accurate processing of payments, including checks, and ACH transactions.\n' +
          '• Reconcile all disbursement transactions, including identifying and resolving discrepancies in a timely manner.\n' +
          '• Work closely with other departments and teams within the organization, including accounting, finance, and risk management, to ensure proper recording and reconciliation of disbursement transactions.\n' +
          '• Develop and implement processes and procedures to ensure efficient and effective disbursement operations.\n' +
          '• Provide support for audits and regulatory exams related to disbursement operations.\n' +
          '• Maintain accurate and up-to-date records of disbursement transactions, including journal entries and general ledger accounts.\n' +
          '• Monitor and manage the disbursement activity to ensure compliance with company policies and procedures, as well as regulatory requirements.\n' +
          '• Identify areas for process improvement, develop and implement process changes as needed to ensure efficient and effective disbursement operations.\n' +
          '\n' +
          'Role:Risk Analyst\n' +
          '\n' +
          'Salary: Not Disclosed by Recruiter\n' +
          '\n' +
          'Industry:Banking\n' +
          '\n' +
          'Department:Risk Management & Compliance\n' +
          '\n' +
          'Role Category:Assessment / Advisory\n' +
          '\n' +
          'Employment Type:Full Time, Permanent\n' +
          '\n' +
          'Key Skills\n' +
          '\n' +
          'operationsBanking Reconciliationdisbursement operations\n' +
          '\n' +
          'Education\n' +
          '\n' +
          'PG:MBA/PGDM in Any Specialization\n' +
          '\n' +
          'Company Profile\n' +
          '\n' +
          'SKILLVENTORY\n' +
          '\n' +
          'Hiring Firm\n' +
          '\n' +
          'Recruiter Name:Gaurav Bhatia\n' +
          '\n' +
          'Contact Company:SKILLVENTORY\n' +
          '\n' +
          'Telephone:+91-8527991164\n' +
          '\n' +
          'Reference Id:GB',
        job_is_remote: false,
        job_posted_at_timestamp: 1677801600,
        job_posted_at_datetime_utc: '2023-03-03T00:00:00.000Z',
        job_city: 'Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.075983,
        job_longitude: 72.877655,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=70&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=t8A10ZlZvFoAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-04-02T00:00:00.000Z',
        job_offer_expiration_timestamp: 1680393600,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: null,
        job_job_title: 'Manager'
      },
      {
        employer_name: 'External  - Global, Morningstar',
        employer_logo: null,
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'Careers At Morningstar | Morningstar Jobs - Morningstar',
        job_id: 'Vey9MJf0wukAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Data Quality Assurance Manager',
        job_apply_link: 'https://careers.morningstar.com/us/en/job/REQ-035778/Data-Quality-Assurance-Manager',
        job_description: 'Title: Data Quality Assurance Manager, Sustainalytics, a Morningstar company\n' +
          '\n' +
          'Location: Vashi, Navi Mumbai\n' +
          '\n' +
          'Company: Morningstar is a leading provider of independent investment research in North America, Europe, Australia, and Asia. We offer a wide variety of products and solutions that serve market participants of all kinds, including individual and institutional investors in public and private capital markets, financial advisors, asset managers, retirement plan providers and sponsors, and issuers of securities.\n' +
          '\n' +
          'Business Unit: Sustainalytics provides high-quality, analytical environmental, social and governance (ESG) research, ratings and data to institutional investors and companies that help them identify, understand and manage ESG-driven risks and opportunities. Our mission is to provide the insights required to make more informed decisions that lead to a more just and sustainable global economy.\n' +
          '\n' +
          'Team: The Data Quality Assurance Manager will be part of Sustainalytics’ Quality Transformation Team, which operates within Sustainalytics’ ESG Research Division. The team is responsible for Quality Assurance on Research Data contained in the Sustainalytics ESG Products. The team collaborates with key stakeholders in Product & S, Technology and Research to implement ongoing quality assurance, quality testing of new products and triaging client queries relating to Research data quality. Quality transformation team is responsible for developing quality frameworks, diagnostic checks suites, introducing new quality tools and processes to improve product quality.\n' +
          '\n' +
          'Role: The Data Quality Assurance Manager will lead a growing quality assurance team comprising developers, quality process and continuous improvement experts. The Data Quality Assurance Manager will have a solid understanding of data analytics and quality assurance, and preferably an interest in sustainability. They will successfully develop quality assurance tools and processes to improve the efficiency and quality of the research process.\n' +
          '\n' +
          'Responsibilities\n' +
          '• Act as the main quality liaison between Research teams, Product Managers and Technology teams responsible for the Research Apps and the Product generation system.\n' +
          '• Develop quality assurance protocols, scripts and other quality assurance tools to measure the product quality and research data quality.\n' +
          '• Facilitate the development of tools and infrastructure for automated quality control\n' +
          '• Perform data analytics to optimize the quality of the data collected and aggregated at product level. The candidate will report on publication outcomes and raise any issues with senior management.\n' +
          '• Organize discovery and ideation processes to identify new quality assurance solutions. Chalk out long term initiatives with internal teams to fix recurrent quality issues\n' +
          '• Work with Product managers and internal operational teams to resolve client queries on Research data issues, instigate corrective measures, as appropriate (issue / incident management).\n' +
          '• Work with research operations managers to improve business processes / systems across the value chain and support research operations managers to implement improvements.\n' +
          '• Build and manage a team of data quality associates, analysts and engineers\n' +
          '• Report regularly on the quality of the ESG Products by assessing each product against a set of KPIs (Product Quality Scorecard).\n' +
          '• Create visualizations and interactive dashboards for providing visibility / transparency on research data coverage and quality in products\n' +
          '• Work closely with the Change and Release Manager on quality testing of new ESG Products and help ensure that quality is embedded in the design of all systems.\n' +
          '\n' +
          'Qualifications\n' +
          '• Master’s degree in finance, economics, engineering, IT or business management\n' +
          '• 10+ years’ work experience with quality management in financial data domain (prior Research or ESG knowledge is desired but not mandatory)\n' +
          '• Strong process and quality management skills (Desired not mandatory : Lean Six Sigma experience)\n' +
          '• Technological versatility and hands-on ability to navigate and operate complex technical environments – example : AWS cloud, Microsoft power platform, programming Languages like SQL, Python, ETL frameworks, AWS Athena, Python, Powerquery etc.).\n' +
          '• Experience with data models, data mining software and data analytics platforms / tools like Power BI or Tableau.\n' +
          '• Demonstrated analytical thinking and problem-solving skills\n' +
          '• People management skills to manage high skilled team members\n' +
          '• Ability to work under pressure and manage multiple priorities\n' +
          '• Excellent interpersonal and communication skills, with the ability to engage / connect and build effective relationships at different levels, while managing competing interests\n' +
          '• Strong project management and execution skills, with the ability to set clear priorities\n' +
          '• Positive attitude to change, with a ‘can do’ attitude\n' +
          '\n' +
          'Morningstar is an equal opportunity employer.\n' +
          '\n' +
          'About Us\n' +
          '\n' +
          "Sustainalytics is a Morningstar company dedicated to responsible investment with over 25 years' experience in ESG research and ratings. With an extensive client base across asset managers, asset owners and investment banks, our mission is to provide the insights required for investors and companies to make more informed decisions that lead to a more just and sustainable global economy.\n" +
          '\n' +
          'As Morningstar’s ESG center of excellence we are responsible for driving both the commercial success and innovation of its ESG products as well as its overall ESG strategy.\n' +
          '\n' +
          'For more information, visit www.sustainalytics.com',
        job_is_remote: false,
        job_posted_at_timestamp: 1670889600,
        job_posted_at_datetime_utc: '2022-12-13T00:00:00.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=Vey9MJf0wukAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: null,
        job_offer_expiration_timestamp: null,
        job_required_experience: [Object],
        job_required_skills: [Array],
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Assurance manager'
      },
      {
        employer_name: 'NESS TECHNOLOGIES',
        employer_logo: 'https://www.ness.com/wp-content/images/Ness.svg',
        employer_website: 'http://www.ness.com',
        employer_company_type: 'Computer Services',
        job_publisher: 'LinkedIn',
        job_id: 'TEGHYB-7IRwAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Ness - Senior Manager - Finance',
        job_apply_link: 'https://in.linkedin.com/jobs/view/ness-senior-manager-finance-at-ness-technologies-3508995090',
        job_description: 'Company name : Ness Digital Engineering\n' +
          '\n' +
          'Position : Senior Manager - Finance\n' +
          '\n' +
          'Job Location : Navi Mumbai / Hyderabad / Bangalore\n' +
          '\n' +
          'Job Description\n' +
          '• MIS Review - Actual v/s forecast v/s Budget\n' +
          '• Knowledge of IND-AS and US GAAP accounting.\n' +
          '• IND-AS financials and US GAAP Financials - preparation and variance analysis\n' +
          '• Review of completeness of trial balance.\n' +
          '• Audit preparation and liaison with the statutory audit and US GAAP audit.\n' +
          '• Cash Flow - Actual, forecast\n' +
          '• Monthly / Quarterly closing - review of provision/ prepaid, invoice booking and variance analysis of the same\n' +
          '• Ensuring monthly closure of books of accounts in SAP system by ensuing the completeness and accuracy and within timelines.\n' +
          '• Review and analyze the monthly/quarterly trial balance and prepare all the required schedules.\n' +
          '• Ensuring all the group reporting requirements are timely and accurately delivered.\n' +
          '• To handle intercompany transactions and help prepare related documents.\n' +
          '\n' +
          'Qualification And Skills\n' +
          '• CA\n' +
          '• Experience in IT industry preferred.\n' +
          '• Good communication skills.\n' +
          '• SAP experience must.\n' +
          '• Advance Excel function\n' +
          '\n' +
          'Looking for immediate joiner only\n' +
          '\n' +
          '(ref:iimjobs.com)',
        job_is_remote: false,
        job_posted_at_timestamp: 1676136952,
        job_posted_at_datetime_utc: '2023-02-11T17:35:52.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=TEGHYB-7IRwAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-04-01T17:45:46.000Z',
        job_offer_expiration_timestamp: 1680371146,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: null
      },
      {
        employer_name: 'DC Consultants',
        employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuemC_qwW2Bz-dYjJ046c3hXKJrgVTN5twsUE6&s=0',
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'Glassdoor',
        job_id: 'YQFSxJnSEU4AAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Digital Marketing - Manager / Senior Executive',
        job_apply_link: 'https://www.glassdoor.co.in/job-listing/digital-marketing-manager-senior-executive-dc-consultants-JV_IC5021997_KO0,42_KE43,57.htm?jl=1007532683770',
        job_description: 'Opening: 1 Nos.\n' +
          '\n' +
          'Job ID: 35319\n' +
          '\n' +
          'Employment Type: Full Time\n' +
          '\n' +
          'Reference:\n' +
          '\n' +
          'Work Experience: 4.0 Year(s) To 8.0 Year(s)\n' +
          '\n' +
          'CTC Salary: Not Disclosed by Recruiter\n' +
          '\n' +
          'Industry: Real Estate/Property\n' +
          '\n' +
          'Location:\n' +
          '• Navi-mumbai\n' +
          '\n' +
          'Posted On: 29th Dec, 2021\n' +
          '\n' +
          'Job Description:\n' +
          '\n' +
          'We have an opening for the position of Digital Marketing - Manager / Senior Executive for Reputed Company (Real Estate Industry-Builder) for the Vashi location.\n' +
          '\n' +
          'Job description\n' +
          '\n' +
          'We are seeking an individual with strong knowledge and passion for digital marketing to join our marketing team. He/She will implement and manage effective SEO & SEM activities for all brands of the company.\n' +
          '\n' +
          'Responsibilities and Duties\n' +
          '• Knowledge of on-page SEO/SEM strategies\n' +
          '• Planning & Execution of SEO & SEM strategies to improve organic traffic\n' +
          '• Keyword and Competitor analysis\n' +
          '• Link building tactics to improve rankings Organic Search Results.\n' +
          '• Knowledge of SEO optimization techniques\n' +
          '• Awareness of search engine guidelines so as to prevent a violation\n' +
          '• Knowledge of Off-page SEO strategies:\n' +
          '• Guest, Blog, Classified Postings\n' +
          '• Link Analysis and Link Building Techniques\n' +
          '• Article Submissions\n' +
          '• Social Bookmarking\n' +
          '• Experience in one-way, two-way & three-way link exchange through mails, webmaster & submissions.\n' +
          '• Should have a good database of webmasters for link exchange\n' +
          '• Knowledge of Social Media Marketing\n' +
          '• Social media strategy to create meaningful customer engagement and brand awareness\n' +
          '• Experience in promotions on Social media sites like Facebook, G+, Twitter, LinkedIn, etc.\n' +
          '• Develop a suitable content strategy to engage customers and solicit a required response\n' +
          '• Knowledge of social media optimization techniques research/segmentation/targeting etc\n' +
          '• Online Lead generation\n' +
          '• Create an online strategy for lead generation\n' +
          '• PPC/display/social media paid marketing\n' +
          '• Email Marketing\n' +
          '• Landing page creation and optimization\n' +
          '• Campaign management skills\n' +
          '• Design and manage online & offline campaigns\n' +
          '• Track, measure and analyze the performance of digital campaigns\n' +
          '• Email campaign and customer journey experience\n' +
          '\n' +
          'Desired profile:\n' +
          '• Digital marketer with a minimum of 5 years of experience\n' +
          '• Hands-on experience with tools like Zoho CRM & Excel (Pivot tables, Vlookup, multiple sheets integration).\n' +
          '• Well-versed with Facebook Ads Manager, Ads reporting, Custom pixel integrations, Google ads manager, Google Analytics, Google ads conversions integration. LinkedIn ads manager & analytics integration.\n' +
          '• Knowledge about custom emailers & statistical reporting.\n' +
          '• Basic knowledge of HTML, PHP & CSS.\n' +
          '• Should be able to create MIS reports\n' +
          '• Additional knowledge of adobe photoshop & illustrator is preferred.\n' +
          '• The candidate should be able to strategize & draft the campaign on Google, Facebook & LinkedIn Dashboards\n' +
          '• The candidate should have Media Buying & Planning Knowledge.\n' +
          '\n' +
          'Facebook Ads ManagerOff Page Seo, Google Analytics, Digital Campaigns, Digital Marketing, Email Marketing, SEM Online, Lead Generation, Social Media Marketing, SEO, Social Media Optimization.\n' +
          '\n' +
          'Key Skills :\n' +
          '• Sem\n' +
          '• Seo\n' +
          '• Social Media\n' +
          '\n' +
          'Company Profile\n' +
          '\n' +
          "The organization began more than two decades ago with the clear aim of providing a lavish and appealing space for all to dwell. The Organization has come a long way after constructing more than 100 successful projects across Navi Mumbai as of today's date. This rendezvous of more than 25 years has made them a team of highly experienced construction experts. Keeping abreast with the latest technology and implementation of world-class techniques are the reasons why their structures are not just luxurious design marvels, but also a perfect specimen of 'beauty with quality. At present they are developing over 12.5 million sq. ft. of land area across prime locations of Mumbai and Navi Mumbai like Kharghar, Panvel, Taloja, Ulwe, Dronagiri, Kalyan, Chembur, Dombivli, and Lonavala providing highly innovative, state-of-the-art construction for the classes as well as the masses.",
        job_is_remote: false,
        job_posted_at_timestamp: 1677542400,
        job_posted_at_datetime_utc: '2023-02-28T00:00:00.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=YQFSxJnSEU4AAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-04-02T00:00:00.000Z',
        job_offer_expiration_timestamp: 1680393600,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Digital marketing'
      },
      {
        employer_name: 'Techno Science',
        employer_logo: null,
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'LinkedIn',
        job_id: 'iYedWeZAjREAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Manager/Senior Manager - R and D Biotech Analytical Development Team - Pharma (3-14 yrs)',
        job_apply_link: 'https://in.linkedin.com/jobs/view/manager-senior-manager-r-and-d-biotech-analytical-development-team-pharma-3-14-yrs-at-techno-science-3441821644',
        job_description: 'Candidate will function as a part of RD Biotech analytical development team.\n' +
          '• Manage a team (2-3) scientists for method development, qualification and to provide analytical support for product development.\n' +
          '• Responsible for Method development, qualification and transfer to Quality Control (QC) to support lot release methods.\n' +
          '• Responsible for co-ordinating for outsourced analysis and characterization work.\n' +
          '• Evaluation and compliant documentation of experiments as well as compilation of development plans and reports.\n' +
          '\n' +
          ',\n' +
          '\n' +
          'This job is provided by Shine.com',
        job_is_remote: false,
        job_posted_at_timestamp: 1671947642,
        job_posted_at_datetime_utc: '2022-12-25T05:54:02.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=iYedWeZAjREAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-03-18T05:56:13.000Z',
        job_offer_expiration_timestamp: 1679118973,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Manager/senior manager'
      },
      {
        employer_name: 'GEP Worldwide',
        employer_logo: 'https://media.licdn.com/dms/image/C4D0BAQF2qCRHxQwrHw/company-logo_200_200/0/1656692280335?e=2147483647&v=beta&t=G94YR8P287av2g_Qch-OPZ-K58zsaTrGhCyXV4T7H3Q',
        employer_website: 'http://www.gep.com',
        employer_company_type: 'Information',
        job_publisher: 'LinkedIn',
        job_id: 'VRxD1m63QrQAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Associate Director / Manager - Contracts',
        job_apply_link: 'https://in.linkedin.com/jobs/view/associate-director-manager-contracts-at-gep-worldwide-3500406779',
        job_description: 'GEP is a diverse, creative team of people passionate about procurement. We invest ourselves entirely in our client’s success, creating strong collaborative relationships that deliver extraordinary value year after year. We deliver practical, effective procurement services and technology that enable procurement leaders to maximize their impact on business operations, strategy and financial performance. Named a Star Performer in Everest Group’s Peak Matrix of Procurement Services Providers, Winner in the HfS Blueprint Report on Procurement Outsourcing Providers and to the Supply & Demand Chain Executive 100 for nearly a decade, GEP is also ranked a leader on Gartner’s Magic Quadrant analysis of the world’s top sourcing and procurement software providers. Clark, NJ-based GEP has 10 offices and operations centres in North and South America, Europe and Asia. To learn more, please visit http://www.gep.com.\n' +
          '\n' +
          'About the function / Business Line: Consulting\n' +
          '\n' +
          'Job Location: Airoli, Navi Mumbai\n' +
          '\n' +
          'Position Title: Associate Director/Manager (Basis relevant experience)\n' +
          '\n' +
          'Education: LLB\n' +
          '\n' +
          'Experience: 12 – 20 years\n' +
          '\n' +
          'Key Result Areas/Job Description\n' +
          '• Identifying contractual, commercial and operational risks and exposures in the contracts;\n' +
          '• Providing inputs/mark-up on contracts to negate contractual, commercial and operational risks and exposures;\n' +
          '• Researching specific contractual issues flagged by Customers; interpret contractual provisions and draft opinions to internal clients.\n' +
          '• Working with internal and external clients to structure, prepare, negotiate and finalize agreements, letters of intent, commercial proposals, etc.;\n' +
          '• Providing legal support for ongoing contract management related activities.\n' +
          '• Working in close co-ordination with external legal counsel.\n' +
          '• Participate in discussions with internal stakeholders, external counsels and advisors during the entire contracting process.\n' +
          '• Interacting with Top Management on Key Issues\n' +
          '• Formulation of Policies for the entire team\n' +
          '\n' +
          'Required Competencies\n' +
          '• Good Communication skills, Persistent & Patient, Meticulous and detail oriented.\n' +
          '• Resourceful and creative.\n' +
          '• Should have team handling experience.\n' +
          "• Should have worked in any of the LPO's\n" +
          '\n' +
          'Interested candidate, please share your CV on mehek.shaikh@gep.com',
        job_is_remote: false,
        job_posted_at_timestamp: 1677586275,
        job_posted_at_datetime_utc: '2023-02-28T12:11:15.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=VRxD1m63QrQAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-03-30T12:11:15.000Z',
        job_offer_expiration_timestamp: 1680178275,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Associate director'
      },
      {
        employer_name: 'Zecruiters Jobconnect',
        employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBnlAM0GP9VyFue1FldCEX1Xo8thESK2RNhvm&s=0',
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'Glassdoor',
        job_id: 'HcIWU-HrRpsAAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'General Manager - Sales',
        job_apply_link: 'https://www.glassdoor.co.in/job-listing/general-manager-sales-zecruiters-jobconnect-JV_IC5021997_KO0,21_KE22,43.htm?jl=1008233035777',
        job_description: 'Job Id:\n' +
          'Z-885\n' +
          '\n' +
          'Industry:\n' +
          'Real Estate, Construction & Infrastructure\n' +
          '\n' +
          'Candidates Required:\n' +
          '2\n' +
          '\n' +
          'Gender:\n' +
          'Male\n' +
          '\n' +
          'Experience:\n' +
          '12 - 14 Year\n' +
          '\n' +
          'Qualification:\n' +
          '18\n' +
          '\n' +
          'Designation:\n' +
          'General Manager - Sales\n' +
          '\n' +
          'Department:\n' +
          'Sales & Marketing\n' +
          '\n' +
          'Sub Department:\n' +
          'General - Sales & Marketing\n' +
          '\n' +
          'Location:\n' +
          'Millenium Business P\n' +
          '\n' +
          'City:\n' +
          'Navi Mumbai\n' +
          '\n' +
          'Country:\n' +
          'India\n' +
          '\n' +
          'CTC INR Lacs:\n' +
          '6 - 8.4 p.a\n' +
          '\n' +
          'Variable:\n' +
          'Yes\n' +
          '\n' +
          'Skills:\n' +
          '\n' +
          'Preference:\n' +
          '• MBA or equivalent degree in Marketing would be an added advantage\n' +
          '• Minimum 12 years’ experience in similar role\n' +
          '• A proven track record in sales\n' +
          '• Excellent analytical skills\n' +
          '• Broad industry experience is essential\n' +
          '• Self-motivated to achieve and exceed targets.\n' +
          '\n' +
          'Description:\n' +
          '• Ensure sales targets of the team are met on a monthly and annual basis\n' +
          '• Responsible for team’s development\n' +
          '• Manage the entire sales cycle from lead generation to prospecting, arranging meetings, preparing proposals and presentations, negotiating, closing and handing over to the operations team\n' +
          '• Supervise all relevant inbound inquiries, understand client requirements and quote accurately on a solution that best suits their needs\n' +
          '• Work with the Director to identify and develop an expansion plan into new markets\n' +
          '• Stay abreast of industry trends and opportunities through market industry and research\n' +
          '• Manage and liaise with existing departments when immersed in added value projects\n' +
          '• Network and develop relationships with potential clients to ensure a regular flow of opportunities\n' +
          '• Monitor competitor activity and pricing\n' +
          '• Responsible for growth of sales/revenue\n' +
          '• This position is wholly focused on revenue predominantly through the effectiveness of outbound sales strategies with an element of inbound sales\n' +
          '• Strong emphasis on establishing and improving our close rates for enquiries, nurturing clients and building relationships to encourage repeat sales, pro-active growth of lead volumes from non-inbound activity and growth of sales',
        job_is_remote: false,
        job_posted_at_timestamp: 1677283200,
        job_posted_at_datetime_utc: '2023-02-25T00:00:00.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=HcIWU-HrRpsAAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-03-30T00:00:00.000Z',
        job_offer_expiration_timestamp: 1680134400,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'General manager'
      },
      {
        employer_name: 'AOS',
        employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvwYEZ0SwH3PPPF_2rg50VqVXmQrm-yKAqr1Y&s=0',
        employer_website: null,
        employer_company_type: null,
        job_publisher: 'LinkedIn',
        job_id: 'g9k57QL_7l0AAAAAAAAAAA==',
        job_employment_type: 'FULLTIME',
        job_title: 'Senior Manager - Marketing & Brand Communications - Leather',
        job_apply_link: 'https://in.linkedin.com/jobs/view/senior-manager-marketing-brand-communications-leather-at-aos-3500450887',
        job_description: 'Role : Senior Manager - Marketing & Brand Communications\n' +
          '\n' +
          'Type : Full Time\n' +
          '\n' +
          'Job Description\n' +
          '• Assumes responsibility for monitoring all marketing and branding activities for the Organization while maintaining Brand focus internally & externally.\n' +
          '• Develops the Marketing & Brand management strategy to support top line & bottom-line growth & foray into new segments and innovative products for the Organization.\n' +
          '• Directs the evaluation of Brand portfolio including Brand definition & proposition, advertising concept, pricing, packaging, place and promotion for the Organization.\n' +
          '• Assumes overall responsibility for Brand Activation.\n' +
          '• Ensures coordination with the sales department to implement & monitor all marketing initiatives for the Organization.\n' +
          '• Drives the formulation of the marketing strategy encompassing the Organization.\n' +
          "• Understands the strategic business requirement of the organization based on the organization's growth focus and strategy.\n" +
          '• Develop strategies into detailed marketing plans and executions.\n' +
          '• Supports all clusters towards ensuring meeting the dynamic consumer needs across all markets.\n' +
          '• Ensures individual brand focus is maintained through all possible media options and coordinates with corporate communication to ensure alignment of branding strategy.\n' +
          '• Develops Annual Plans & Budgeting for the brand and monitors the expenditure.\n' +
          '• Ensures Optimal pricing of products so that the top-line & bottom-line objectives of the brand group are strictly met.\n' +
          '• Strives to increase return on expenditure on advertisement & brand endorsement\n' +
          '• Agency/Vendor Management\n' +
          '• Proven experience in Product Positioning & Branding\n' +
          '• Digital & Social Media Marketing\n' +
          '• Experience in Market Research & Consumer Insights is preferred\n' +
          '• Ability to Advertise & Activate Campaigns\n' +
          '• Sales Collateral & Support\n' +
          '• Prepare, Implement and Monitor Annual Brand Plans\n' +
          '\n' +
          '(ref:updazz.com)',
        job_is_remote: false,
        job_posted_at_timestamp: 1677600383,
        job_posted_at_datetime_utc: '2023-02-28T16:06:23.000Z',
        job_city: 'Navi Mumbai',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 19.033049,
        job_longitude: 73.02966,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=senior+manager+of+it+company+in+navi+mumbai,+india&start=80&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=senior+manager+of+it+company+in+navi+mumbai,+india&htidocid=g9k57QL_7l0AAAAAAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2023-03-30T16:06:23.000Z',
        job_offer_expiration_timestamp: 1680192383,
        job_required_experience: [Object],
        job_required_skills: null,
        job_required_education: [Object],
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Senior manager'
      }
    ]
  }
  }