USE NTPCNexus;
GO

-- 1. Update Icons for previously inserted applications (Batch 1)
-- Using a temporary table or MERGE to update efficiently would be complex for ad-hoc strings.
-- Simple UPDATEs based on Name are clearer for this one-time fix.

UPDATE Applications SET Icon = 'fa-clipboard-check' WHERE Name = 'Quality and Inspection Portal';
UPDATE Applications SET Icon = 'fa-leaf' WHERE Name = 'CPCB Coal Ash management portal';
UPDATE Applications SET Icon = 'fa-user-shield' WHERE Name = 'Vigilance Online Reporting system';
UPDATE Applications SET Icon = 'fa-file-contract' WHERE Name = 'Dreams for DVC';
UPDATE Applications SET Icon = 'fa-book-open' WHERE Name = 'LMI and SOP';
UPDATE Applications SET Icon = 'fa-briefcase' WHERE Name = 'PRIME-eOffice';
UPDATE Applications SET Icon = 'fa-id-badge' WHERE Name = 'Associate Hiring portal (Anubhav)';
UPDATE Applications SET Icon = 'fa-handshake-simple' WHERE Name = 'Subsidiary MoU Portal';
UPDATE Applications SET Icon = 'fa-solar-panel' WHERE Name = 'Roof Top Solar Survey Portal for NVVN';
UPDATE Applications SET Icon = 'fa-envelope-open-text' WHERE Name = 'Complaint Management system for NEEPCO';
UPDATE Applications SET Icon = 'fa-bullhorn' WHERE Name = 'Whistle Blower Complaint';
UPDATE Applications SET Icon = 'fa-globe' WHERE Name = 'Website for NTPC Business Development';
UPDATE Applications SET Icon = 'fa-tree' WHERE Name = 'Biomass pellet management system';
UPDATE Applications SET Icon = 'fa-tasks' WHERE Name = 'Engineering Activity Tracking System';
UPDATE Applications SET Icon = 'fa-hands-holding-circle' WHERE Name = 'NTPC CSR Progress Monitoring Portal';
UPDATE Applications SET Icon = 'fa-house-crack' WHERE Name = 'Disaster Management Portal';
UPDATE Applications SET Icon = 'fa-heart-pulse' WHERE Name = 'UJJIVAN for Ayush centre';
UPDATE Applications SET Icon = 'fa-tags' WHERE Name = 'Image Tagging of Material';
UPDATE Applications SET Icon = 'fa-headset' WHERE Name = 'NIVARAN 2.0';
UPDATE Applications SET Icon = 'fa-laptop-code' WHERE Name = 'NTPC Consultancy Website';
UPDATE Applications SET Icon = 'fa-file-invoice-dollar' WHERE Name = 'Property Returns';
UPDATE Applications SET Icon = 'fa-file-invoice' WHERE Name = 'Commercial Billing portal';
UPDATE Applications SET Icon = 'fa-gas-pump' WHERE Name = 'IGX portal for Fuel Management';
UPDATE Applications SET Icon = 'fa-link' WHERE Name = 'Linkages to power Plants to Coal Mines';
UPDATE Applications SET Icon = 'fa-gavel' WHERE Name = 'NTPC Tender website';
UPDATE Applications SET Icon = 'fa-building' WHERE Name = 'Company Secretariat Portal';
UPDATE Applications SET Icon = 'fa-building-columns' WHERE Name = 'NTPC Official Website';
UPDATE Applications SET Icon = 'fa-clipboard-list' WHERE Name = 'Audit compliance portal';
UPDATE Applications SET Icon = 'fa-house-medical' WHERE Name = 'Insurance Claim Portal';
UPDATE Applications SET Icon = 'fa-folder-open' WHERE Name = 'DRC Documents Repository Portal';
UPDATE Applications SET Icon = 'fa-map-location-dot' WHERE Name = 'Land Availability Portal';
UPDATE Applications SET Icon = 'fa-table-list' WHERE Name = 'Online Job Matrix';

-- 2. Insert New Applications (Batch 2) with Icons
INSERT INTO Applications (Name, Description, Url, Category, Platform, Icon, UsageCount)
SELECT Name, Description, Url, Category, Platform, Icon, UsageCount
FROM (VALUES
    ('Integrated Intelligent Drone Data Mgmt', 'For monitoring of Solar Panel Anomalies and Ash Dyke related anomalies', 'https://iiddm.ntpc.co.in/login', 'NTPC', 'Web', 'fa-plane', 0),
    ('Task tracker for regions and stations', 'Various tasks emanating from various meetings conducted at station/project/RHQ/CC can be recorded meeting wise with assigned target dates and responsibilities. The same can be monitored for effective implementation through dashboards.', 'http://10.0.8.138:8080/apex/f?p=128', 'NTPC', 'Web', 'fa-list-check', 0),
    ('Coal Quality Management System', 'The Coal Quality Monitoring System (CQMS) is an online application developed by NTPC to manage and monitor the quality of coal received at its stations', 'https://eservices.ntpc.co.in/coal_sampling', 'NTPC', 'Web', 'fa-fire-flame-simple', 0),
    ('Meet the BUH', 'This system serves as the centralized digital interface for managing the formal appointment process', 'http://ccitapps.ntpc.co.in/meetbuh', 'NTPC', 'Web', 'fa-handshake', 0),
    ('Transit Camp', 'This is a web-based application designed for booking accommodations in the various NTPC Guest Houses across different locations', 'https://mapp.ntpc.co.in/eServices', 'NTPC', 'Web', 'fa-bed', 0),
    ('E-Radiography', 'System for keeping track of radiology data during overhauling of units', 'http://ccitapps.ntpc.co.in/eradiology', 'NTPC', 'Web', 'fa-x-ray', 0),
    ('NTPC Wikipedia', 'Nodal persons from each location will submit his inputs against each category.', 'https://ccitapps.ntpc.co.in/ntpcwiki', 'NTPC', 'Web', 'fa-book-atlas', 0),
    
    ('Directory of REDs/HOFs/HOPs and CEO', 'This Web Based directory provides relevant information reg REDs/HOFs/HOPs/ and CEO', 'http://10.0.8.138:8080/apex/f?p=110', 'NTPC', 'Web', 'fa-sitemap', 0),
    ('Contract Closing Portal', 'All site awarded contracts of a station are categorised department-wise for monitoring of contract closing. Option to assign a PO to an executive with option to report & monitor the status wrt closing is present', 'http://10.0.8.138:8080/apex/f?p=115', 'NTPC', 'Web', 'fa-file-signature', 0),
    ('NISHTHA-Safety Compliance Application', 'Portal is designed to cater site requirement of Monthly Safety Compliance. Functional module for Safety User, HOD users, MIS Report Users. Accessible inside NTPC only.', 'https://ssoapps.ntpc.co.in/nishtha', 'NTPC', 'Web', 'fa-helmet-safety', 0),
    ('EMG Monthly Compliance', 'This Portal is being used by all projects to submit CEMS, AAQMS, SWC and Effluent Data to CC. After data gets verified through proper channel, it reaches CC-EMG for submission to CEA', 'http://10.0.8.138:8080/apex/f?p=104', 'NTPC', 'Web', 'fa-check-double', 0),
    ('Commissioning Dashboard', 'This application is used by Site Erection Depts to issue Commissioning certificates (SRCC,RIOC,ITOC,FTOC)', 'http://10.0.8.138:8080/apex/f?p=100', 'NTPC', 'Web', 'fa-chart-line', 0),
    ('Vehicle Requisition', 'To digitize the process of departmental vehicle booking for employees', 'https://ssoapps.ntpc.co.in/vehicle', 'NTPC', 'Web', 'fa-car', 0),
    
    ('Nitikosh', 'NTPC''s digital library for official documents relevant to the Indian Power Sector, sourced from governing bodies and external stakeholders', 'https://ccitapps.ntpc.co.in/nitikosh', 'NTPC', 'Web', 'fa-book-bookmark', 0),
    ('Dashboards(Functions,HOP,RED, Directors)', 'This report provides a comprehensive, dual-focused overview covering both the financial health and critical operational metrics of NTPC stations', 'http://mapp.ntpc.co.in/hop', 'NTPC', 'Web', 'fa-chart-pie', 0),
    
    ('NTPC One', 'To seamlessly integrate multiple mobile applications of NTPC into a single, unified platform, enabling users to access different application efficiently from one place and under one Corporate Identity', '', 'Mobile Apps', 'Mobile', 'fa-mobile-screen-button', 0),
    ('NETRA App', 'It provides a bird-eye view of NETRA''s activities', '', 'Mobile Apps', 'Mobile', 'fa-eye', 0),
    ('Condition Monitoring App', 'This system is a specialized operational monitoring dashboard that provides real-time oversight of critical equipment health by integrating directly with the PI System.', '', 'Mobile Apps', 'Mobile', 'fa-screwdriver-wrench', 0)

) AS Source (Name, Description, Url, Category, Platform, Icon, UsageCount)
WHERE NOT EXISTS (
    SELECT 1 FROM Applications WHERE Applications.Name = Source.Name
);
GO
