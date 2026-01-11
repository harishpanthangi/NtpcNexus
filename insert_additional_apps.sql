USE NTPCNexus;
GO

INSERT INTO Applications (Name, Description, Url, Category, Platform, Icon, UsageCount)
SELECT Name, Description, Url, Category, Platform, Icon, UsageCount
FROM (VALUES
    ('Quality and Inspection Portal', 'Web based application to manage and monitor quality inspections for Corporate awarded packages with additional capability to upload documents, integration with Dreams and Digital Signing of documents', 'https://quality.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('CPCB Coal Ash management portal', 'Ash generation &utilization system for all thermal powerplants', 'https://coalash.cpcb.gov.in', 'Ministry/CEA', 'Web', NULL, 0),
    ('Vigilance Online Reporting system', 'All 16 Power PSUs and departments under MoP has to report Monthly & Quarterly Vigilance data', 'https://mopapps.ntpc.co.in/vig-ors', 'Ministry/CEA', 'Web', NULL, 0),
    ('Dreams for DVC', 'Drawing Review and Engineering Approval Management version 2.0Simultaneous document review, Revision control, Security & Authenticityof comments and Data customized for the requirements of DVC', 'https://dreams.dvc.gov.in', 'Ministry/CEA', 'Web', NULL, 0),
    ('LMI and SOP', 'Centralized repository to create, manage and monitor all stations LMIs and SOP based on updated TCD documents', 'https://mapp.ntpc.co.in/LMI-SOP/Account/Login', 'NTPC', 'Web', NULL, 0),
    ('PRIME-eOffice', 'Inspired from PRADIP''s E-Office Module for creating Notesheets, CommitteeReports, Monitor File Movements Collaboratives', 'https://www.eofficentecl.co.in', 'Ministry/CEA', 'Web', NULL, 0),

    ('Associate Hiring portal (Anubhav)', 'Portal is designed to match superannuated employees with roles that align with their extensive experience, helping them continue to contribute in their area of expertise.', 'https://anubhav.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('Subsidiary MoU Portal', 'Portal for entering DPE Parameters by Subsidiaries for calculating MOU for CP', 'https://mou.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('Roof Top Solar Survey Portal for NVVN', 'A Portal for creation of master data, monitoring of RTS surveywith dashboard and MIS Report Generation', 'https://webapp.ntpc.co.in/nvvnrtssurvey', 'Ministry/CEA', 'Web', NULL, 0),
    ('Complaint Management system for NEEPCO', 'The NEEPCO Complaint Management System (CMS) has been developed to meet the specific requirements of the NEEPCO Vigilance Department. This system automates the process of filing grievances, updating their status, and monitoring various complaints by the Chief Vigilance Officer (CVO) through an intuitive dashboard interface.', 'https://vcms.neepco-spark.co.in', 'Ministry/CEA', 'Web', NULL, 0),
    ('Whistle Blower Complaint', 'Whistle Blower Policy of NTPC provides a window to all employees to confidentially report to management about unethical behaviour, actual or suspected fraud or violation of company''s code of conduct or act of malpractices & irregularities taking place within the Company', 'https://ccitapps.ntpc.co.in/whistleblower/Notice.aspx', 'NTPC', 'Web', NULL, 0),
    
    ('Website for NTPC Business Development', 'NTPC Business Development department website', 'https://ccitapps.ntpc.co.in/ntpcbd', 'NTPC', 'Web', NULL, 0),
    ('Biomass pellet management system', 'Web and mobile-based application designed to digitize and connect every stakeholder in biomass supply chain', 'https://mapp.ntpc.co.in/SSO/OAuthNTPC/AppLogin/2022110900042', 'NTPC / Mobile Apps', 'Web/Mobile', NULL, 0),
    ('Engineering Activity Tracking System', 'All departments of Engineering are assigned activities to complete tasks. A real time status update available along with MIS for timely interventions', 'https://ccitapps.ntpc.co.in/eats', 'NTPC', 'Web', NULL, 0),
    ('NTPC CSR Progress Monitoring Portal', 'Plan the project and related activities, assign the nodal', 'https://ccitapps.ntpc.co.in/ntpccsr', 'NTPC', 'Web', NULL, 0),
    ('Disaster Management Portal', 'NTPC''s structure for DMS along with committee member details at NTPC, Regoinal and Plant level', 'https://ccitapps.ntpc.co.in/dmc', 'NTPC', 'Web', NULL, 0),
    ('UJJIVAN for Ayush centre', 'Nestled in the serene lap of Kerala, the birthplace of authentic Ayurveda, UJJIWAN, the AYUSH Centre located at NTPC Kayamkulam, is dedicated to reviving the body''s innate healing wisdom through time-tested Ayurvedic therapies, Naturopathy and yoga', 'https://ccitapps.ntpc.co.in/ujjiwan', 'NTPC', 'Web', NULL, 0),
    ('Image Tagging of Material', 'Tag photo against inventory item', 'https://webapp.ntpc.co.in/poitemimageapp', 'NTPC', 'Web', NULL, 0),
    
    ('NIVARAN 2.0', 'Nivaran 2.0 System aims to provide a single platform for all types of complaints/service requests. Itprovides universal Help Desk for NTPC Users for all components', 'https://mapp.ntpc.co.in/eServices', 'NTPC', 'Web', NULL, 0),
    ('NTPC Consultancy Website', 'NTPC Consultancy department website', 'https://consultancy.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('Property Returns', 'As per DoPT notification regarding "Declaration of assets and Liabilities by public servants", a provision for submitting property returns for NTPC employees relevant to CDA rules has been developed.', 'https://mapp.ntpc.co.in/property_returns', 'NTPC', 'Web', NULL, 0),
    ('Commercial Billing portal', 'Portal used by Commercial dept for uploading the bills and payments of the beneficiaries along with MIS for reconciliation', 'https://commercialbilling.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('IGX portal for Fuel Management', 'FM dept can create bid for procurement of GAS. The committee members can approve the bid thru the portal', 'https://ccitapps.ntpc.co.in/fmigx', 'NTPC', 'Web', NULL, 0),
    ('Linkages to power Plants to Coal Mines', 'The application shows the linkages of Indian Power Plants to Coal Mines.', 'https://webapp.ntpc.co.in/linkages', 'Ministry/CEA', 'Web', NULL, 0),

    ('NTPC Tender website', 'Website for publishing/viewing NIT, EOI, bidding documents, award details etc. related to NTPC', 'https://ntpctender.ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('Company Secretariat Portal', 'Capture the details of JVS, Subsidiaries and International JVs', 'http://10.0.8.138:8080/apex/f?p=118', 'NTPC', 'Web', NULL, 0),
    ('NTPC Official Website', 'Official Website of NTPC Limited', 'https://ntpc.co.in', 'NTPC', 'Web', NULL, 0),
    ('Audit compliance portal', 'This portal was used by Internal Audits team for conduct of Phase-1 for 7 Audits. Few of the audits are still in progress', 'http://10.0.8.138:8080/apex/f?p=126', 'NTPC', 'Web', NULL, 0),
    ('Insurance Claim Portal', 'This portal gives a picture of Insurance Claims Details project wise, Region Wise', 'http://10.0.8.138:8080/apex/f?p=125', 'NTPC', 'Web', NULL, 0),
    ('DRC Documents Repository Portal', 'This web-based portal facilitates entry of NTPC- DRC Documents against different processes and different stages', 'http://10.0.8.138:8080/apex/f?p=117', 'NTPC', 'Web', NULL, 0),
    ('Land Availability Portal', 'This portal captures issues pertaining to CSR and maintains history of the Issues over a period. It also has a repository for uploading supporting documents for the same', 'http://10.0.8.138:8080/apex/f?p=106', 'NTPC', 'Web', NULL, 0),
    ('Online Job Matrix', 'This app gives a picture of the various ongoing works in a station at a glance. All jobs planned to be taken up the next day are listed out indicating critical parameters. The status of the work is updated on completion.', 'http://10.0.8.138:8080/apex/f?p=119', 'NTPC', 'Web', NULL, 0)
) AS Source (Name, Description, Url, Category, Platform, Icon, UsageCount)
WHERE NOT EXISTS (
    SELECT 1 FROM Applications WHERE Applications.Name = Source.Name
);
GO
