import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyVcmmVFHwYpn_ZZrYdQfOMmG-WPwQl6o",
  authDomain: "career-guidance-203da.firebaseapp.com",
  projectId: "career-guidance-203da",
  storageBucket: "career-guidance-203da.firebasestorage.app",
  messagingSenderId: "1428869256",
  appId: "1:1428869256:web:254bb5f56b857c42100f3d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const currentPage = window.location.pathname;
  if (currentPage.includes('login.html')) return; // small l
  if (!user) window.location.href = 'login.html'; // small l
});
const careerData = {
    'MPC': {fullName: 'Maths, Physics, Chemistry', eligibility: '10th Pass with 55%+ marks', duration: '2 Years Intermediate', nextSteps: 'B.Tech, B.E, B.Sc, BCA, NDA, Aviation, Merchant Navy', topExams: 'JEE Main, JEE Advanced, EAMCET, BITSAT', careerScope: 'Engineering, IT, Software, Civil Services, Defence, Scientist', avgSalary: 'After B.Tech: 4-30 LPA depending on college and branch'},
    'BiPC': {fullName: 'Biology, Physics, Chemistry', eligibility: '10th Pass with 50%+ marks', duration: '2 Years Intermediate', nextSteps: 'MBBS, BDS, BAMS, BHMS, Nursing, Pharmacy, Agriculture, Veterinary', topExams: 'NEET, EAMCET, AIIMS', careerScope: 'Doctor, Dentist, Ayurveda, Homeopathy, Pharma, Research, Agriculture Officer', avgSalary: 'MBBS Doctor: 6-50 LPA. Pharmacy: 3-8 LPA'},
    'MEC': {fullName: 'Maths, Economics, Commerce', eligibility: '10th Pass', duration: '2 Years Intermediate', nextSteps: 'B.Com, BBA, CA, CMA, CS, Economics, Banking', topExams: 'CUET, CA Foundation', careerScope: 'Accountant, Banker, Business Analyst, Entrepreneur, Civil Services', avgSalary: 'After Degree: 3-12 LPA. After CA: 8-25 LPA'},
    'CEC': {fullName: 'Civics, Economics, Commerce', eligibility: '10th Pass', duration: '2 Years Intermediate', nextSteps: 'BA, B.Com, LLB, Civil Services, Journalism', topExams: 'CUET, CLAT', careerScope: 'Lawyer, Journalist, Public Administration, Political Analyst, IAS/IPS', avgSalary: 'After Degree: 2.5-8 LPA. After LLB: 4-15 LPA'},
    'HEC': {fullName: 'History, Economics, Civics', eligibility: '10th Pass', duration: '2 Years Intermediate', nextSteps: 'BA, LLB, Civil Services, Archaeology, Teaching', topExams: 'CUET, CLAT, UPSC', careerScope: 'Historian, Archaeologist, Teacher, Civil Services, Museum Curator', avgSalary: 'After Degree: 2.5-7 LPA'},
    'Vocational': {fullName: 'Vocational Courses', eligibility: '10th Pass', duration: '1-2 Years', nextSteps: 'Direct Job, Diploma, ITI Advanced Courses', topExams: 'State Level Vocational Exams', careerScope: 'Technician, Electrician, Mechanic, Computer Operator', avgSalary: '2-5 LPA'},
    'Diploma': {fullName: 'Polytechnic Diploma', eligibility: '10th Pass', duration: '3 Years', nextSteps: 'B.Tech Lateral Entry to 2nd year, Government Jobs, Private Jobs', topExams: 'POLYCET, TS POLYCET', careerScope: 'Junior Engineer, Technician, Supervisor in Govt and Private sectors', avgSalary: 'Diploma holder: 2.5-6 LPA. After B.Tech: 4-15 LPA'},
    'ITI': {fullName: 'Industrial Training Institute', eligibility: '10th Pass', duration: '1-2 Years', nextSteps: 'Technician Jobs, Apprentice, Government Jobs', topExams: 'State ITI Entrance', careerScope: 'Electrician, Fitter, Welder, Mechanic, COPA in Railways, PSUs', avgSalary: '2-4.5 LPA'},
    'Open Schooling': {fullName: 'NIOS - National Institute of Open Schooling', eligibility: 'No age limit', duration: 'Flexible', nextSteps: 'Intermediate, Degree, Any course', topExams: 'NIOS Board Exams', careerScope: 'Same as regular schooling. Flexible for working students', avgSalary: 'Depends on further education'},
    'CSE': {fullName: 'Computer Science Engineering', eligibility:'MPC Intermediate with 60%+', duration:'4 Years B.Tech', nextSteps: 'M.Tech, MS Abroad, MBA, Government Jobs', topExams: 'JEE Main, EAMCET, BITSAT', careerScope: 'Software Developer, AI Engineer, Data Scientist, Web Developer, IT Consultant', avgSalary: '6-40 LPA. Top companies: 20-60 LPA'},
    'AI & Data Science': {fullName: 'Artificial Intelligence & Data Science', eligibility: 'MPC Intermediate with 60%+', duration: '4 Years B.Tech', nextSteps: 'M.Tech, MS, Research, Startups', topExams: 'JEE Main, GATE for PG', careerScope: 'AI Engineer, ML Engineer, Data Scientist, Research Scientist', avgSalary: '12-40 LPA. High demand globally'},
    'IT': {fullName: 'Information Technology', eligibility: 'MPC Intermediate', duration: '4 Years B.Tech', nextSteps: 'M.Tech, MS, MBA, Jobs', topExams: 'JEE Main, EAMCET', careerScope: 'Software Engineer, System Admin, Network Engineer, Cloud Engineer', avgSalary: '5-25 LPA'},
    'ECE': {fullName: 'Electronics & Communication Engineering', eligibility: 'MPC Intermediate', duration: '4 Years B.Tech', nextSteps: 'M.Tech, MS, Government Jobs, Core Jobs', topExams: 'JEE Main, GATE', careerScope: 'Electronics Engineer, Telecom, VLSI, Embedded Systems, ISRO, DRDO', avgSalary: '4-20 LPA'},
    'EEE': {fullName: 'Electrical & Electronics Engineering', eligibility: 'MPC Intermediate', duration: '4 Years B.Tech', nextSteps: 'M.Tech, Government Jobs, PSU', topExams: 'JEE Main, GATE', careerScope: 'Electrical Engineer, Power Sector, NTPC, Power Grid, Railways', avgSalary: '4-18 LPA'},
    'Mechanical': {fullName: 'Mechanical Engineering', eligibility: 'MPC Intermediate', duration: '4 Years B.Tech', nextSteps: 'M.Tech, MS, MBA, Government Jobs', topExams: 'JEE Main, GATE', careerScope: 'Design Engineer, Production, Automobile, Manufacturing, PSUs', avgSalary: '3.5-15 LPA'},
    'Civil': {fullName: 'Civil Engineering', eligibility: 'MPC Intermediate', duration: '4 Years B.Tech', nextSteps: 'M.Tech, Government Jobs, Construction', topExams: 'JEE Main, GATE', careerScope: 'Site Engineer, Structural Engineer, PWD, CPWD, Private Construction', avgSalary: '3-12 LPA'},
    'Aerospace': {fullName: 'Aerospace Engineering', eligibility: 'MPC Intermediate with 75%+', duration: '4 Years B.Tech', nextSteps: 'M.Tech, MS, ISRO, DRDO, Airlines', topExams: 'JEE Advanced, IIST', careerScope: 'Aircraft Design, ISRO, HAL, Boeing, Airbus, Research', avgSalary: '8-30 LPA'},
    'MBBS': {fullName: 'Bachelor of Medicine & Bachelor of Surgery', eligibility: 'BiPC with 50%+, NEET Qualified', duration: '5.5 Years including internship', nextSteps: 'MD/MS, DM/MCh, Practice, Government Doctor', topExams: 'NEET UG, NEET PG', careerScope: 'General Physician, Surgeon, Specialist Doctor, Medical Officer', avgSalary: '6-50 LPA. Specialists: 15-80 LPA'},
    'BDS': {fullName: 'Bachelor of Dental Surgery', eligibility: 'BiPC with 50%+, NEET Qualified', duration: '5 Years including internship', nextSteps: 'MDS, Private Clinic, Government Job', topExams: 'NEET UG', careerScope: 'Dentist, Orthodontist, Oral Surgeon', avgSalary: '4-25 LPA'},
    'BAMS': {fullName: 'Bachelor of Ayurvedic Medicine & Surgery', eligibility: 'BiPC, NEET Qualified', duration: '5.5 Years', nextSteps: 'MD Ayurveda, Practice, Government Job', topExams: 'NEET UG', careerScope: 'Ayurvedic Doctor, Panchakarma Specialist', avgSalary: '3-15 LPA'},
    'Nursing': {fullName: 'BSc Nursing', eligibility: 'BiPC with 45%+', duration: '4 Years', nextSteps: 'MSc Nursing, Hospital Jobs, Abroad', topExams: 'NEET, State Nursing CET', careerScope: 'Staff Nurse, Nursing Officer, Abroad: UK, Canada, Australia', avgSalary: '2.5-8 LPA. Abroad: 40-80 LPA'},
    'Pharmacy': {fullName: 'Bachelor of Pharmacy', eligibility: 'BiPC or MPC', duration: '4 Years', nextSteps: 'M.Pharm, Pharma Industry, Drug Inspector', topExams: 'EAMCET, GPAT for PG', careerScope: 'Pharmacist, Drug Inspector, Pharma Companies, Research', avgSalary: '2.5-10 LPA'},
    'Physiotherapy': {fullName: 'Bachelor of Physiotherapy', eligibility: 'BiPC', duration: '4.5 Years', nextSteps: 'MPT, Private Clinic, Hospitals', topExams: 'NEET, State CET', careerScope: 'Physiotherapist, Sports Physio, Rehabilitation', avgSalary: '3-12 LPA'},
    'B.Com': {fullName: 'Bachelor of Commerce', eligibility: 'MEC/CEC/HEC Intermediate', duration: '3 Years', nextSteps: 'M.Com, MBA, CA, CMA, CS, Banking', topExams: 'CUET, CA Foundation', careerScope: 'Accountant, Banker, Auditor, Tax Consultant', avgSalary: '2.5-8 LPA'},
    'BBA': {fullName: 'Bachelor of Business Administration', eligibility: 'Any stream Intermediate', duration: '3 Years', nextSteps: 'MBA, Jobs, Start own business', topExams: 'CUET, IPMAT', careerScope: 'Manager, HR, Marketing, Operations, Entrepreneur', avgSalary: '3-12 LPA'},
    'CA': {fullName: 'Chartered Accountant', eligibility: '12th Pass, CA Foundation', duration: '4-5 Years', nextSteps: 'Practice, Job in MNCs, Banks, Audit Firms', topExams: 'CA Foundation, Inter, Final', careerScope: 'Auditor, Tax Consultant, CFO, Financial Analyst', avgSalary: '8-25 LPA. Partners: 30-80 LPA'},
    'CMA': {fullName: 'Cost & Management Accountant', eligibility: '12th Pass', duration: '3-4 Years', nextSteps: 'Practice, Cost Audit, Industry Jobs', topExams: 'CMA Foundation, Inter, Final', careerScope: 'Cost Auditor, Management Accountant, CFO', avgSalary: '7-20 LPA'},
    'CS': {fullName: 'Company Secretary', eligibility: '12th Pass', duration: '3-4 Years', nextSteps: 'Practice, Corporate Jobs', topExams: 'CSEET, Executive, Professional', careerScope: 'Company Secretary, Legal Compliance, Corporate Governance', avgSalary: '6-18 LPA'},
    'BA LLB': {fullName: 'Bachelor of Arts + Bachelor of Law', eligibility: 'Any stream Intermediate', duration: '5 Years', nextSteps: 'LLM, Practice, Judiciary, Corporate Law', topExams: 'CLAT, AILET, LSAT', careerScope: 'Advocate, Judge, Legal Advisor, Corporate Lawyer', avgSalary: '4-20 LPA. Senior Lawyers: 50+ LPA'},
    'BHM': {fullName: 'Bachelor of Hotel Management', eligibility: 'Any stream Intermediate', duration: '4 Years', nextSteps: 'MHM, Hotel Industry, Cruise, Airlines', topExams: 'NCHMCT JEE', careerScope: 'Hotel Manager, Chef, F&B Manager, Cruise Line', avgSalary: '3-15 LPA'},
    'Pilot Training': {fullName: 'Commercial Pilot License', eligibility: 'MPC with 50%+, Medical Fit', duration: '18-24 Months', nextSteps: 'Airline Pilot, Charter Pilot', topExams: 'DGCA Exams', careerScope: 'Airline Pilot: Indigo, Air India, Vistara, International', avgSalary: '15-80 LPA. Captain: 50-120 LPA'},
    'Fashion Design': {fullName: 'Bachelor of Design - Fashion', eligibility: 'Any stream Intermediate', duration: '4 Years', nextSteps: 'M.Des, Own Label, Fashion Houses', topExams: 'NIFT, NID, UCEED', careerScope: 'Fashion Designer, Stylist, Merchandiser, Boutique Owner', avgSalary: '3-20 LPA'},
    'IAS': {fullName: 'Indian Administrative Service', eligibility: 'Any Degree, Age 21-32 years', duration: 'Training: 2 Years at LBSNAA', nextSteps: 'District Collector, Secretary, Cabinet Secretary', topExams: 'UPSC Civil Services Exam - Prelims, Mains, Interview', careerScope: 'Top administrative post in India. Policy making, district administration, governance', avgSalary: 'Starting: 56,100 per month. Cabinet Secretary: 2,50,000 per month + perks'},
    'IPS': {fullName: 'Indian Police Service', eligibility: 'Any Degree, Age 21-32 years', duration: 'Training: 2 Years at SVPNPA', nextSteps: 'SP, DIG, IG, DGP', topExams: 'UPSC Civil Services Exam', careerScope: 'Law and order, crime investigation, intelligence, security', avgSalary: 'Starting: 56,100 per month. DGP: 2,25,000 per month + perks'},
    'IFS': {fullName: 'Indian Foreign Service', eligibility: 'Any Degree, Age 21-32 years', duration: 'Training: 3 Years', nextSteps: 'Ambassador, High Commissioner, MEA Secretary', topExams: 'UPSC Civil Services Exam', careerScope: 'Diplomacy, International Relations, Embassy Postings', avgSalary: 'Starting: 56,100 per month + foreign allowance'},
    'IRS': {fullName: 'Indian Revenue Service', eligibility: 'Any Degree, Age 21-32 years', duration: 'Training: 16 months', nextSteps: 'Income Tax Commissioner, Customs Commissioner', topExams: 'UPSC Civil Services Exam', careerScope: 'Tax Administration, Customs, GST, Enforcement', avgSalary: 'Starting: 56,100 per month + perks'},
    'SBI PO': {fullName: 'State Bank of India Probationary Officer', eligibility: 'Any Degree, Age 21-30 years', duration: 'Training: 2 Years probation', nextSteps: 'Assistant Manager, Branch Manager, AGM, GM', topExams: 'SBI PO Exam - Prelims, Mains, GD, Interview', careerScope: 'Banking operations, loans, customer service, branch management', avgSalary: 'Starting: 41,960 per month + allowances. Total CTC: 8-13 LPA'},
    'IBPS PO': {fullName: 'Institute of Banking Personnel Selection PO', eligibility: 'Any Degree, Age 20-30 years', duration: 'Training: 2 Years probation', nextSteps: 'Assistant Manager, Manager, Senior Manager in PSU Banks', topExams: 'IBPS PO - Prelims, Mains, Interview', careerScope: 'Public Sector Banks: PNB, BOB, Canara Bank, Union Bank', avgSalary: 'Starting: 36,000 per month. Total CTC: 7-10 LPA'},
    'RBI': {fullName: 'Reserve Bank of India', eligibility: 'Graduate for Assistant, PG for Grade B', duration: 'Training: 6 months', nextSteps: 'Assistant, Grade B Officer, GM', topExams: 'RBI Grade B, RBI Assistant', careerScope: 'Central Bank, Monetary Policy, Banking Regulation', avgSalary: 'Grade B: 77,000 per month. Total CTC: 15-20 LPA'},
    'NABARD': {fullName: 'National Bank for Agriculture & Rural Development', eligibility: 'Graduate, Age 21-30', duration: 'Training: 6 months', nextSteps: 'Development Assistant, Grade A Officer', topExams: 'NABARD Grade A/B', careerScope: 'Rural Development, Agriculture Finance, Policy', avgSalary: 'Grade A: 44,500 per month. Total CTC: 10-15 LPA'},
    'SSC CGL': {fullName: 'Staff Selection Commission Combined Graduate Level', eligibility: 'Any Degree, Age 18-32 years', duration: 'NA', nextSteps: 'Income Tax Inspector, Assistant Section Officer, Auditor, Accountant', topExams: 'SSC CGL - Tier 1, Tier 2, Tier 3, Tier 4', careerScope: 'Central Govt departments: Income Tax, CBI, MEA, Railways, Postal', avgSalary: 'Level 6-8: 35,400 to 1,12,400 per month + DA, HRA'},
    'SSC CHSL': {fullName: 'Combined Higher Secondary Level', eligibility: '12th Pass, Age 18-27 years', duration: 'NA', nextSteps: 'LDC, DEO, Postal Assistant', topExams: 'SSC CHSL - Tier 1, Tier 2, Typing Test', careerScope: 'Clerical jobs in Central Govt departments', avgSalary: 'Level 2-4: 19,900 to 63,200 per month'},
    'SSC MTS': {fullName: 'Multi Tasking Staff', eligibility: '10th Pass, Age 18-25 years', duration: 'NA', nextSteps: 'Peon, Daftary, Jamadar', topExams: 'SSC MTS - Paper 1, Paper 2', careerScope: 'Group C non-technical posts in Central Govt', avgSalary: 'Level 1: 18,000 to 56,900 per month'},
    'SSC GD': {fullName: 'General Duty Constable', eligibility: '10th Pass, Age 18-23 years', duration: 'Training: 6 months', nextSteps: 'Constable, Head Constable', topExams: 'SSC GD - CBE, PET, PST, Medical', careerScope: 'CAPF: BSF, CRPF, CISF, ITBP, SSB', avgSalary: 'Level 3: 21,700 to 69,100 per month'},
    'RRB NTPC': {fullName: 'Railway Recruitment Board Non-Technical Popular Categories', eligibility: '12th Pass or Graduate, Age 18-33 years', duration: 'Training: 6 months to 1 year', nextSteps: 'Station Master, Goods Guard, Clerk, Ticket Collector', topExams: 'RRB NTPC - CBT 1, CBT 2, Typing Test, Document Verification', careerScope: 'Indian Railways - largest employer. Job security, pension, medical', avgSalary: 'Level 2-6: 19,900 to 35,400 per month + allowances'},
    'RRB Group D': {fullName: 'Railway Group D', eligibility: '10th Pass, Age 18-33 years', duration: 'Training: 3 months', nextSteps: 'Track Maintainer, Helper, Assistant', topExams: 'RRB Group D - CBT, PET, Medical', careerScope: 'Track maintenance, workshop, signal, electrical', avgSalary: 'Level 1: 18,000 to 56,900 per month'},
    'RRB JE': {fullName: 'Junior Engineer', eligibility: 'Diploma or B.Tech, Age 18-33 years', duration: 'Training: 6 months', nextSteps: 'Senior Section Engineer, SSE', topExams: 'RRB JE - CBT 1, CBT 2, Document Verification', careerScope: 'Civil, Mechanical, Electrical, S&T in Railways', avgSalary: 'Level 6: 35,400 to 1,12,400 per month'},
    'RRB ALP': {fullName: 'Assistant Loco Pilot', eligibility: '10th + ITI or Diploma in Engineering, Age 18-30 years', duration: 'Training: 1 Year', nextSteps: 'Loco Pilot, Senior Loco Pilot, Loco Inspector', topExams: 'RRB ALP - CBT 1, CBT 2, CBAT, Document Verification', careerScope: 'Drive trains, responsible for passenger safety, technical job', avgSalary: 'Level 2: 19,900 per month + running allowance 15,000-25,000. Total: 45,000-60,000 per month'},
    'Indian Army': {fullName: 'Indian Army', eligibility: '10th/12th/Graduate based on entry', duration: 'Training: 6 months to 1.5 years', nextSteps: 'Soldier, JCO, Officer through NDA/CDS/AFCAT', topExams: 'Agniveer, NDA, CDS, AFCAT, TES', careerScope: 'Defend nation, disaster relief, UN peacekeeping, adventure', avgSalary: 'Agniveer: 30,000 per month. Officer: 56,100 per month + MSP + allowances'},
    'Indian Navy': {fullName: 'Indian Navy', eligibility: '10th/12th/B.Tech based on entry', duration: 'Training: 6 months to 4 years', nextSteps: 'Sailor, Officer through NDA/CDS/INET', topExams: 'Agniveer, NDA, CDS, INET', careerScope: 'Naval operations, submarine, aviation, marine engineering', avgSalary: 'Sailor: 21,700 per month. Officer: 56,100 per month + allowances'},
    'Indian Air Force': {fullName: 'Indian Air Force', eligibility: '10th/12th/Graduate based on entry', duration: 'Training: 6 months to 1.5 years', nextSteps: 'Airman, Officer through NDA/CDS/AFCAT', topExams: 'Agniveer, NDA, CDS, AFCAT', careerScope: 'Pilot, Engineer, Ground Duty, Air Traffic Control', avgSalary: 'Airman: 26,900 per month. Officer: 56,100 per month + allowances'},
    'Coast Guard': {fullName: 'Indian Coast Guard', eligibility: '10th/12th/Graduate', duration: 'Training: 6 months', nextSteps: 'Navik, Yantrik, Assistant Commandant', topExams: 'ICG Navik, ICG Yantrik, AC', careerScope: 'Maritime security, search and rescue, pollution control', avgSalary: 'Navik: 21,700 per month. AC: 56,100 per month'},
    'Software Development': {fullName: 'Software Developer', eligibility: 'B.Tech/BCA/MCA or equivalent skills', duration: 'NA', nextSteps: 'Senior Developer, Tech Lead, Architect, CTO', topExams: 'Company specific coding tests', careerScope: 'Build applications, websites, software products in IT companies', avgSalary: '6-30 LPA. MNCs: 15-60 LPA'},
    'Artificial Intelligence': {fullName: 'AI/ML Engineer', eligibility: 'B.Tech/M.Tech in CS/IT/Data Science', duration: 'NA', nextSteps: 'Senior AI Engineer, Research Scientist, AI Architect', topExams: 'GATE, Company tests', careerScope: 'Build AI models, ChatGPT, Self-driving cars, Recommendation systems', avgSalary: '12-40 LPA. Top: 50-100 LPA'},
    'Data Science': {fullName: 'Data Scientist', eligibility: 'B.Tech/B.Sc Stats/Maths/MCA', duration: 'NA', nextSteps: 'Senior Data Scientist, Head of Data, CDO', topExams: 'Company tests', careerScope: 'Analyze data, build ML models, business insights', avgSalary: '8-30 LPA'},
    'Cyber Security': {fullName: 'Cyber Security Analyst', eligibility: 'B.Tech/BCA with certifications', duration: 'NA', nextSteps: 'Ethical Hacker, Security Architect, CISO', topExams: 'CEH, CISSP, CompTIA', careerScope: 'Protect systems, ethical hacking, security audit', avgSalary: '8-25 LPA'},
    'Cloud Computing': {fullName: 'Cloud Engineer', eligibility: 'B.Tech/BCA + AWS/Azure/GCP', duration: 'NA', nextSteps: 'Cloud Architect, DevOps Engineer', topExams: 'AWS, Azure Certifications', careerScope: 'AWS, Azure, Google Cloud infrastructure', avgSalary: '10-30 LPA'},
    'Healthcare': {fullName: 'Healthcare Professional', eligibility: 'MBBS/BDS/BAMS/Nursing/Pharmacy', duration: 'Varies', nextSteps: 'Specialization, Own Clinic, Hospital Admin', topExams: 'NEET PG, Hospital tests', careerScope: 'Doctor, Nurse, Pharmacist in hospitals, clinics', avgSalary: '3-50 LPA based on specialization'},
    'Finance': {fullName: 'Finance Professional', eligibility: 'B.Com/MBA/CA/CFA', duration: 'NA', nextSteps: 'Senior Analyst, Manager, CFO', topExams: 'CFA, FRM', careerScope: 'Investment Banking, Corporate Finance, Equity Research', avgSalary: '6-40 LPA'},
    'Marketing': {fullName: 'Marketing Professional', eligibility: 'BBA/MBA', duration: 'NA', nextSteps: 'Brand Manager, Marketing Head, CMO', topExams: 'CAT, Company tests', careerScope: 'Digital Marketing, Brand Management, Sales, Advertising', avgSalary: '4-25 LPA'},
    'Sales': {fullName: 'Sales Executive/Manager', eligibility: 'Any Degree', duration: 'NA', nextSteps: 'Sales Manager, Regional Manager, VP Sales', topExams: 'Company tests', careerScope: 'B2B, B2C Sales, Business Development', avgSalary: '3-20 LPA + incentives'},
    'CFA': {fullName: 'Chartered Financial Analyst', eligibility: 'Graduate', duration: '2-3 Years', nextSteps: 'Investment Banking, Portfolio Management', topExams: 'CFA Level 1, 2, 3', careerScope: 'Equity Research, Investment Banking, Asset Management', avgSalary: '12-40 LPA'},
    'ACCA': {fullName: 'Association of Chartered Certified Accountants', eligibility: '12th Pass', duration: '3 Years', nextSteps: 'Global Accounting Jobs, MNCs', topExams: 'ACCA 13 papers', careerScope: 'Global accountant, Big 4: Deloitte, EY, KPMG, PwC', avgSalary: '8-25 LPA'},
    'B.Tech': {fullName: 'Bachelor of Technology', eligibility: 'MPC Intermediate', duration: '4 Years', nextSteps: 'M.Tech, MS, MBA, Jobs, UPSC', topExams: 'JEE Main, EAMCET', careerScope: 'Engineer in IT, Core, PSU, Government', avgSalary: '4-30 LPA'},
    'B.Sc': {fullName: 'Bachelor of Science', eligibility: 'MPC/BiPC Intermediate', duration: '3 Years', nextSteps: 'M.Sc, B.Ed, Government Jobs', topExams: 'CUET', careerScope: 'Teacher, Research, Lab Technician, IT', avgSalary: '2.5-8 LPA'},
    'BA': {fullName: 'Bachelor of Arts', eligibility: 'Any stream Intermediate', duration: '3 Years', nextSteps: 'MA, B.Ed, LLB, UPSC', topExams: 'CUET', careerScope: 'Teacher, Civil Services, Journalism, Social Work', avgSalary: '2-6 LPA'},
    'BBA': {fullName: 'Bachelor of Business Administration', eligibility: 'Any stream Intermediate', duration: '3 Years', nextSteps: 'MBA, Jobs, Start own business', topExams: 'CUET, IPMAT', careerScope: 'Manager, HR, Marketing, Operations, Entrepreneur', avgSalary: '3-12 LPA'},
    'BCA': {fullName: 'Bachelor of Computer Applications', eligibility: 'Any stream with Maths', duration: '3 Years', nextSteps: 'MCA, IT Jobs', topExams: 'CUET', careerScope: 'Software Developer, Web Developer, IT Support', avgSalary: '2.5-10 LPA'},
    'LLB': {fullName: 'Bachelor of Law', eligibility: 'Any Degree', duration: '3 Years', nextSteps: 'LLM, Practice, Judiciary', topExams: 'CLAT PG, AILET PG', careerScope: 'Advocate, Legal Advisor, Judge', avgSalary: '3-15 LPA'},
    'M.Tech': {fullName: 'Master of Technology', eligibility: 'B.Tech + GATE', duration: '2 Years', nextSteps: 'PhD, Research, Senior Engineer, Teaching', topExams: 'GATE', careerScope: 'Specialist Engineer, R&D, Professor, PSU', avgSalary: '8-25 LPA'},
    'MBA': {fullName: 'Master of Business Administration', eligibility: 'Any Degree + CAT/MAT', duration: '2 Years', nextSteps: 'Manager, Consultant, Entrepreneur', topExams: 'CAT, XAT, GMAT', careerScope: 'Management roles in all sectors, Consulting, Banking', avgSalary: '8-40 LPA. IIMs: 20-60 LPA'},
    'MCA': {fullName: 'Master of Computer Applications', eligibility: 'BCA/B.Sc Maths + NIMCET', duration: '2 Years', nextSteps: 'IT Jobs, Teaching', topExams: 'NIMCET, CUET PG', careerScope: 'Software Developer, System Analyst, IT Manager', avgSalary: '4-15 LPA'},
    'M.Sc': {fullName: 'Master of Science', eligibility: 'B.Sc', duration: '2 Years', nextSteps: 'PhD, Research, Teaching, Industry', topExams: 'CUET PG, IIT JAM', careerScope: 'Scientist, Researcher, Professor, Lab Manager', avgSalary: '3-12 LPA'},
    'MA': {fullName: 'Master of Arts', eligibility: 'BA', duration: '2 Years', nextSteps: 'PhD, Teaching, Civil Services', topExams: 'CUET PG', careerScope: 'Professor, Researcher, Writer, Civil Services', avgSalary: '2.5-10 LPA'},
    'M.Com': {fullName: 'Master of Commerce', eligibility: 'B.Com', duration: '2 Years', nextSteps: 'PhD, Teaching, CA, Banking', topExams: 'CUET PG', careerScope: 'Professor, Accountant, Financial Analyst', avgSalary: '3-12 LPA'},
    'LLM': {fullName: 'Master of Law', eligibility: 'LLB', duration: '1-2 Years', nextSteps: 'PhD, Teaching, Specialist Lawyer', topExams: 'CLAT PG, AILET PG', careerScope: 'Specialist Advocate, Law Professor, Judge', avgSalary: '6-25 LPA'},
    'PhD': {fullName: 'Doctor of Philosophy', eligibility: 'PG with 55%+', duration: '3-5 Years', nextSteps: 'Post Doc, Professor, Scientist', topExams: 'UGC NET, GATE, CSIR NET', careerScope: 'Professor, Scientist in ISRO/DRDO, R&D Head', avgSalary: '8-30 LPA in academia. Industry: 15-50 LPA'},
    'Post Doctoral': {fullName: 'Post Doctoral Research', eligibility: 'PhD', duration: '1-3 Years', nextSteps: 'Professor, Senior Scientist', topExams: 'NA', careerScope: 'Advanced research, International collaborations', avgSalary: '10-40 LPA'},
    'Startup Founder': {fullName: 'Entrepreneur - Startup', eligibility: 'Any education + Idea', duration: 'NA', nextSteps: 'Scale up, Funding, IPO', topExams: 'NA', careerScope: 'Build own company, create jobs, innovation', avgSalary: 'Variable. Success: Crores. Initial: May be loss'},
    'E-Commerce': {fullName: 'E-Commerce Business', eligibility: 'Any', duration: 'NA', nextSteps: 'Scale, Amazon/Flipkart Seller, Own Website', topExams: 'NA', careerScope: 'Online selling, Dropshipping, D2C brands', avgSalary: '2 LPA to Crores based on scale'},
    'Retail Business': {fullName: 'Retail Shop', eligibility: 'Any', duration: 'NA', nextSteps: 'Chain of stores, Franchise', topExams: 'NA', careerScope: 'Supermarket, Kirana, Specialty store', avgSalary: '3-50 LPA based on size'},
    'Franchise': {fullName: 'Franchise Business', eligibility: 'Investment capacity', duration: 'NA', nextSteps: 'Multiple franchises', topExams: 'NA', careerScope: 'McDonalds, Dominos, Any brand franchise', avgSalary: '5-50 LPA per outlet'},
    'Food Business': {fullName: 'Restaurant/Cloud Kitchen', eligibility: 'Any', duration: 'NA', nextSteps: 'Chain of restaurants', topExams: 'NA', careerScope: 'Restaurant, Cafe, Cloud Kitchen, Catering', avgSalary: '3-100 LPA based on scale'},
    'Digital Marketing Agency': {fullName: 'Digital Marketing Agency', eligibility: 'Any + Skills', duration: 'NA', nextSteps: 'Scale to 100+ clients', topExams: 'Google, Meta Certifications', careerScope: 'SEO, Social Media, Ads for clients', avgSalary: '5-100 LPA based on clients'},
    'United States': {fullName: 'Study in United States', eligibility: '12th for UG, Degree for PG', duration: 'UG: 4 years, PG: 2 years', nextSteps: 'OPT, H1B, Green Card', topExams: 'SAT/ACT, GRE/GMAT, TOEFL/IELTS', careerScope: 'Tech, Finance, Research, Healthcare', avgSalary: 'After MS: $80k-150k'},
    'Canada': {fullName: 'Study in Canada', eligibility: '12th for UG, Degree for PG', duration: 'UG: 4 years, PG: 1-2 years', nextSteps: 'PGWP, PR, Citizenship', topExams: 'IELTS, TOEFL', careerScope: 'IT, Healthcare, Engineering, PR easy', avgSalary: 'After PG: CAD 60k-100k'},
    'United Kingdom': {fullName: 'Study in United Kingdom', eligibility: '12th for UG, Degree for PG', duration: 'UG: 3 years, PG: 1 year', nextSteps: 'Work Visa, PR', topExams: 'IELTS, TOEFL', careerScope: 'Finance, IT, Healthcare, Research', avgSalary: 'After PG: £30k-60k'},
        'Australia': {fullName: 'Study in Australia', eligibility: '12th for UG, Degree for PG', duration: 'UG: 3 years, PG: 2 years', nextSteps: 'Post Study Work, PR', topExams: 'IELTS, PTE', careerScope: 'IT, Nursing, Engineering, PR friendly', avgSalary: 'After PG: AUD 60k-100k'},
    'Germany': {fullName: 'Study in Germany', eligibility: '12th for UG, Degree for PG', duration: 'UG: 3 years, PG: 2 years', nextSteps: 'Job Seeker Visa, Blue Card', topExams: 'IELTS, TestDaF for German', careerScope: 'Engineering, Automobile, Research. Low/No tuition fee', avgSalary: 'After PG: €45k-70k'},
    'France': {fullName: 'Study in France', eligibility: '12th for UG, Degree for PG', duration: 'UG: 3 years, PG: 2 years', nextSteps: 'APS, Job search visa', topExams: 'IELTS, TCF for French', careerScope: 'Luxury, Fashion, Engineering, Business', avgSalary: 'After PG: €35k-60k'},
    'Software Engineer Abroad': {fullName: 'Software Engineer - International', eligibility: 'B.Tech + Experience', duration: 'NA', nextSteps: 'Senior, Architect, EM', topExams: 'Coding interviews', careerScope: 'FAANG: Google, Meta, Amazon, Microsoft', avgSalary: 'USA: $120k-300k. Canada: CAD 90k-180k'},
    'Data Scientist Abroad': {fullName: 'Data Scientist - International', eligibility: 'MS/M.Tech + Skills', duration: 'NA', nextSteps: 'Senior DS, Head of Data', topExams: 'Case studies, Coding', careerScope: 'Tech, Finance, Healthcare companies', avgSalary: 'USA: $130k-250k'},
    'Doctor Abroad': {fullName: 'Medical Doctor - International', eligibility: 'MBBS + USMLE/PLAB/MCCQE', duration: 'Varies', nextSteps: 'Residency, Specialization', topExams: 'USMLE, PLAB, MCCQE', careerScope: 'Physician, Surgeon in USA, UK, Canada', avgSalary: 'USA: $200k-400k. UK: £80k-150k'},
    'Nurse Abroad': {fullName: 'Registered Nurse - International', eligibility: 'BSc Nursing + NCLEX/IELTS', duration: 'NA', nextSteps: 'Specialist Nurse, NP', topExams: 'NCLEX, IELTS', careerScope: 'Hospitals in USA, UK, Canada, Australia', avgSalary: 'USA: $70k-110k. UK: £30k-50k'}
};

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

function toggleSector(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');
    content.classList.toggle('active');
    icon.classList.toggle('rotate');
    icon.innerHTML = content.classList.contains('active')? '▲' : '▼';
}

function showDetails(key) {
    const data = careerData[key];
    if (!data) {
        alert('Details coming soon for ' + key);
        return;
    }
    document.getElementById('modalTitle').textContent = data.fullName;
    let bodyHTML = '';
    bodyHTML += `<div class="detail-row"><div class="detail-label">📋 Eligibility</div><div class="detail-value">${data.eligibility}</div></div>`;
    bodyHTML += `<div class="detail-row"><div class="detail-label">⏱️ Duration</div><div class="detail-value">${data.duration}</div></div>`;
    bodyHTML += `<div class="detail-row"><div class="detail-label">🎯 Next Steps</div><div class="detail-value">${data.nextSteps}</div></div>`;
    bodyHTML += `<div class="detail-row"><div class="detail-label">📝 Top Exams</div><div class="detail-value">${data.topExams}</div></div>`;
    bodyHTML += `<div class="detail-row"><div class="detail-label">💼 Career Scope</div><div class="detail-value">${data.careerScope}</div></div>`;
    bodyHTML += `<div class="detail-row"><div class="detail-label">💰 Average Salary</div><div class="detail-value">${data.avgSalary}</div></div>`;
    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('detailModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

function logout() {
    document.getElementById('logoutPopup').style.display = 'flex';
}

function confirmLogout() {
    signOut(auth).then(() => {
        window.location.href = 'Login.html';
    }).catch((error) => {
        console.log(error);
    });
}

function cancelLogout() {
    document.getElementById('logoutPopup').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        closeModal();
    }
}

window.showDetails = showDetails;
window.toggleSector = toggleSector;
window.closeModal = closeModal;
window.logout = logout;
window.confirmLogout = confirmLogout;
window.cancelLogout = cancelLogout;
window.scrollToSection = scrollToSection;