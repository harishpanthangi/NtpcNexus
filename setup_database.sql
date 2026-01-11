USE master;
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'NTPCNexus')
BEGIN
    CREATE DATABASE NTPCNexus;
END
GO

USE NTPCNexus;
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Applications')
BEGIN
    CREATE TABLE Applications (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Name NVARCHAR(255) NOT NULL,
        Description NVARCHAR(MAX) NOT NULL,
        Category NVARCHAR(255) NOT NULL,
        Icon NVARCHAR(255) NULL,
        Url NVARCHAR(2083) NULL,
        Platform NVARCHAR(255) NULL,
        UsageCount INT NOT NULL
    );
END
GO

IF NOT EXISTS (SELECT TOP 1 1 FROM Applications)
BEGIN
    INSERT INTO Applications (Category, Name, Description, Platform, Icon, UsageCount) VALUES
    ('NTPC', 'Real Time Market', 'This is a system for bidding the un-requisitioned surplus (URS) power from NTPC Plants in open mark thru online bidding', 'Web', 'fa-chart-line', 1500),
    ('NTPC', 'DREAMS 3.0', 'Drawing Review and Engineering Approval Management System 2.0. Simultaneous document review/revision control, Security & Authenticity of comments and Data', 'Web', 'fa-compass-drafting', 3200),
    ('NTPC', 'Vendor Enlistment Portal', 'To simplify the process of vendor enlistment and support Stations by taking up vendor enlistment activities for materials & works on Pan NTPC and ensure uniformity, Transparency, simplified e-procurement, reduction in procurement lead time & inventory', 'Web', 'fa-users', 850),
    ('NTPC', 'Unified O&M', 'The software uses a choice of industry-standard network technologies to automatically collect and store data from ABT Meters.', 'Web', 'fa-server', 2100),
    ('NTPC', 'Srijan', 'Application Framework for creating dynamic intranet intranets, hosting applications on a single platform.', 'Web', 'fa-layer-group', 4500),
    ('NTPC', 'Notesheet (NOffice)', 'Inspired from PRADIP''s E-Office Module for creating Notesheets, Committee Reports, Monitor File Movements Collaboratives', 'Web', 'fa-file-signature', 15000),
    ('NTPC', 'SIMS (STRATEGIC INITIATIVES MANAGEMENT SYSTEM)', 'Portal for SIEM, MCM, Action points, Assigning to ROs, Milestones creation by ROs.', 'Web', 'fa-list-check', 600),
    ('NTPC', 'NEOCS@50', 'Capture qualifications, employment details and achievements of Employees, Spouse & children', 'Web', 'fa-id-card', 12500),
    ('NTPC', 'IDEATHON', '''NTPC-Ideation'' is a step towards identifying the Young Thought Leaders-Intrapreneurs. It is an enabling platform intended to nurture, incubate, and mentor new ideas, foster start-ups, and helping to grow them into successful Start-ups for Power Sector', 'Web', 'fa-lightbulb', 300),
    ('NTPC', 'INTEGRATED GATE PASS SYSTEM', 'Gatepass system for Material, Vehicle, Visitor for enhancing security at NTPC sites', 'Web', 'fa-ticket', 5000),
    ('NTPC', 'EVENTS', 'A generic portal for all events hosted by NTPC', 'Web', 'fa-calendar-days', 1200),
    ('NTPC', 'Samvaad', 'NTPC''s only official communication channel for internal stakeholders, dependents and superannuated employees', 'Web', 'fa-comments', 18000),
    ('NTPC', 'SURAKSHA', 'Safety application & App', 'Web', 'fa-shield-halved', 4200),
    ('NTPC', 'Day Ahead Market', 'URS bidding platform', 'Web', 'fa-gavel', 800),
    ('NTPC', 'Subsidiary MOU', 'Portal for entering DPE Parameters by Subsidiaries for calculating MOU for CP', 'Web', 'fa-handshake', 150),
    ('Ministry / CEA', 'DRISHTI', 'Drishti Dashboard was created as a part of Vision New India 2022 to redefine the role and responsibilities of CPSEs through real-time monitoring of action plans formulated on the basis of seven challenges set by Hon''ble Prime Minister of India in the CPSE conclave 2017.', 'Web', 'fa-eye', 5000),
    ('Ministry / CEA', 'SAMARTH', 'A one-stop Information System for Biomass Mission in India Three type users: - Members of Biomass, Nodal Person for different TPPs, Biomass Vendors', 'Web', 'fa-seedling', 400),
    ('Ministry / CEA', 'ASHTRACK', 'Tracking generation, availability & utilization of Ash in thermal plants.', 'Web', 'fa-truck-fast', 950),
    ('Ministry / CEA', 'GYPSUM', 'All thermal power plants with FGD commissioned can fill Gypsum generation and Utilisation data on monthly basis, MoP can view Gypsum generation and utilization data as and when required', 'Web', 'fa-industry', 350),
    ('Ministry / CEA', 'CBATPM', 'All under construction thermal power projects shall fill BTG, BoP, Milestone, Expenditure data on monthly basis. Under construction TPPs can apply for commissioning certificate online and track status. MoP create Project And their Unit master Data along with clearance data.', 'Web', 'fa-helmet-safety', 600),
    ('Ministry / CEA', 'EGEN', 'E-Generation portal for power companies of India generating more than 0.5 MW power.', 'Web', 'fa-bolt', 4500),
    ('Ministry / CEA', 'MOPVISITS', 'Developed for Ministry of Power. Keeps track of public schemes under MOP. Monitors the visits of officials.', 'Web', 'fa-plane', 120),
    ('Mobile Apps', 'SURAKSHA', 'Single platform for raising incidents and observations. Data Flows to SAP for further processing', 'Mobile', 'fa-triangle-exclamation', 2100),
    ('Mobile Apps', 'ENOS CALCULATOR', 'App is designed to capture engineering thumb-rule calculations, understand dynamic energy market scenario. Carry out sensitivity analysis', 'Mobile', 'fa-calculator', 350),
    ('Mobile Apps', 'ASH DYKE INSPECTION', 'Mobile app has been developed by Station Engg. in association with Corporate IT to digitalize the ash dyke inspection. Based on the inputs, classification of ash dyke lagoon into Safe zone, alarming zone or Distress zone is done and reflected in the reports. This shall help in focusing on the critical areas of ash dykes', 'Mobile', 'fa-mobile-screen', 200),
    ('Mobile Apps', 'SAMPARK', 'Mobile app for e-directory, useful contact numbers & gateway for employee related applications, empaneled hospitals etc', 'Mobile', 'fa-address-book', 14000),
    ('Mobile Apps', 'SAMVAAD', 'NTPC''s only official communication channel for internal stakeholders, dependents and superannuated employees.', 'Mobile', 'fa-comments', 8500),
    ('Mobile Apps', 'ACC TECHNICAL DIARY', 'Technical diary app for Air cooled condensers.', 'Mobile', 'fa-book', 150),
    ('Mobile Apps', 'CMS', 'Mobile App for condition monitoring, vibration monitoring', 'Mobile', 'fa-wave-square', 400),
    ('Mobile Apps', 'QA', 'Mobile app for repository of circulars, manuals etc. for QA dept.', 'Mobile', 'fa-circle-check', 650),
    ('New / Upcoming Applications', 'Asset Tracking system', 'Application for maintaining and tracking IT assets across NTPC', 'Web', 'fa-barcode', 0),
    ('New / Upcoming Applications', 'PM Rooftop scheme App (Suryaghar)', 'Portal and app for collecting inspection details for PM rooftop solar panel.', 'Web', 'fa-solar-panel', 0);
END
GO
