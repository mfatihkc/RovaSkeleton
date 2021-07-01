CREATE DATABASE [RovaAudit]
GO
USE [RovaAudit]
GO
CREATE TABLE [Event]
(
	EventId BIGINT IDENTITY(1,1) NOT NULL,
	InsertedDate datetimeoffset NOT NULL DEFAULT(GETDATE()),
	LastUpdatedDate datetimeoffset NOT NULL DEFAULT(GETDATE()),
	[Data] NVARCHAR(MAX) NOT NULL,
	CONSTRAINT PK_Event PRIMARY KEY (EventId)
)
GO