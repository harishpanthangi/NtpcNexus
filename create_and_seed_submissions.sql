USE NTPCNexus;
GO

IF OBJECT_ID('dbo.UserSubmissions', 'U') IS NOT NULL
DROP TABLE dbo.UserSubmissions;
GO

CREATE TABLE UserSubmissions (
    Id INT IDENTITY(1,1) NOT NULL,
    SubmissionType NVARCHAR(50) NOT NULL,
    ReferenceId INT NULL,
    Title NVARCHAR(255) NULL,
    Description NVARCHAR(MAX) NOT NULL,
    Priority NVARCHAR(50) NULL,
    Status NVARCHAR(50) NULL,
    SubmittedBy NVARCHAR(100) NULL,
    Department NVARCHAR(100) NULL,
    Beneficiaries NVARCHAR(MAX) NULL,
    References NVARCHAR(MAX) NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    CONSTRAINT PK_UserSubmissions PRIMARY KEY (Id)
);
GO

INSERT INTO UserSubmissions (SubmissionType, ReferenceId, Title, Description, Priority, Status, SubmittedBy, Department, CreatedAt)
VALUES
('Feedback', 1, NULL, 'Great portal', 'Low', 'Reviewed', 'EMP101', 'Operation', GETDATE());
GO
