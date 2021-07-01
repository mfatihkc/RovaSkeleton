 CREATE TABLE Users(
	UserId varchar(200) NOT NULL,
	Email varchar(150) NULL,
	FullName varchar(150) NULL,
	LastName varchar(150) NULL,
	Role varchar(50) NULL,
	ExpiryDate datetime NULL,
	CreatedBy varchar(200) NULL,
	Created datetime NULL,
	LastModifiedBy varchar(200) NULL,
	LastModified datetime NULL,
 CONSTRAINT PK_Users PRIMARY KEY CLUSTERED 
(
	UserId ASC
)
) ON PRIMARY


CREATE TABLE Contacts(
	Id varchar(200) NOT NULL,
	UserId varchar(200) NULL,
	FullName varchar(150) NULL,
	LastName varchar(150) NULL,
	Avatar varchar(250) NULL,
	NickName varchar(50) NULL,
	Company varchar(150) NULL,
	JobTitle varchar(50) NULL,
	Email varchar(50) NULL,
	Phone varchar(50) NULL,
	Address varchar(500) NULL,
	Birthday datetime NULL,
	Notes varchar(500) NULL,
	Star bit NULL,
	CreatedBy varchar(200) NULL,
	Created datetime NULL,
	LastModifiedBy varchar(200) NULL,
	LastModified datetime NULL,
 CONSTRAINT PK_Contacts PRIMARY KEY NONCLUSTERED 
(
	Id ASC
)
)


CREATE TABLE Schedules(
	Id int AUTO_INCREMENT NOT NULL,
	UserId varchar(200) NULL,
	Subject varchar(50) NULL,
	StartTime datetime NULL,
	EndTime datetime NULL,
	StartTimezone varchar(50) NULL,
	EndTimezone varchar(50) NULL,
	Location varchar(50) NULL,
	Description varchar(500) NULL,
	IsAllDay bit NULL,
	RecurrenceId int NOT NULL,
	RecurrenceRule varchar(200) NULL,
	RecurrenceException varchar(500) NULL,
	EventType varchar(50) NULL,
	CreatedBy varchar(200) NULL,
	Created datetime NULL,
	LastModifiedBy varchar(200) NULL,
	LastModified datetime NULL,
 CONSTRAINT PK_Schedules PRIMARY KEY NONCLUSTERED 
(
	Id ASC
)
) 




INSERT INTO `Users`(`UserId`, `Email`, `FullName`, `LastName`, `Role`, `ExpiryDate`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`)
 VALUES (N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'demo@rova.com', N'demo', N'Demo', N'platinum', CAST(N'2021-07-16 06:20:20.170' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-16 06:00:57.057' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-16 06:20:20.170' AS DateTime));

INSERT INTO `Users`(`UserId`, `Email`, `FullName`, `LastName`, `Role`, `ExpiryDate`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`)
VALUES (N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'free@rova.com', N'Free', N'Free', N'free', CAST(N'2020-10-16 06:02:27.493' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-16 06:02:27.493' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-16 06:02:27.493' AS DateTime))


INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'A6C0F4BD-CF9F-4A5D-AB19-5E4891F58F31', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Katina', N'Bletchley', N'assets/images/avatars/Katina.jpg', N'Rose', N'Lexicom', N'Software Designer', N'katina@withinpixels.com', N'+1-202-555-0186', N'219 Woodland Road Valrico, FL 33594', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'A6F9FD38-1A9E-4ED4-BFF4-C4825A5F3EC0', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Henderson', N'Cambias', N'assets/images/avatars/Henderson.jpg', N'Blizzard', N'Howcom', N'Web Designer', N'henderson@withinpixels.com', N'+1-202-555-0151', N'686 Roosevelt Avenue Oviedo, FL 32765', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'AE56810C-2342-4405-AB97-A8CB41195D02', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Helen', N'Sheridan', N'assets/images/avatars/Helen.jpg', N'Magicbattler', N'Subhow', N'Content Developer', N'helen@withinpixels.com', N'+1-202-555-0163', N'194 Washington Avenue Saint Petersburg, FL 33702', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'B2E1B292-7D7D-4501-BBC7-BE9AE3DFCF20', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Boyle', N'Winters', N'assets/images/avatars/Boyle.jpg', N'Jester', N'Newo', N'Catalogue Illustrator', N'boyle@withinpixels.com', N'+1-202-555-0177', N'218 Pearl Street Brandon, FL 33510', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'B96652F7-5894-43D6-8447-4CFB6B88EB99', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Nora', N'Franklin', N'assets/images/avatars/Nora.jpg', N'Katanachanter', N'Saoway', N'Database Coordinator', N'nora@withinpixels.com', N'+1-202-555-0172', N'572 Rose Street Summerfield, FL 34491', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'BDF77CDE-117A-437E-93B2-2CBD1E567AC2', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Reyna', N'Preece', N'assets/images/avatars/Reyna.jpg', N'Holydawn', N'Dingex', N'Data Processing Planner', N'reyna@withinpixels.com', N'+1-202-555-0116', N'297 Strawberry Lane Faribault, MN 55021', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'C40CD0E7-CF19-4E28-BAEE-8221E5F8F427', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Shauna', N'Atherton', N'assets/images/avatars/Shauna.jpg', N'Faunasoul', N'Vivaflex', N'Art Director', N'shauna@withinpixels.com', N'+1-202-555-0159', N'928 Canterbury Court Pittsburgh, PA 15206', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'C51277A5-9AA4-44CF-B33E-2872A44B1912', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Tyson', N'Marshall', N'assets/images/avatars/Tyson.jpg', N'Honordread', N'Geocon', N'Manuscript Editor', N'tyson@withinpixels.com', N'+1-202-555-0146', N'204 Clark Street Monsey, NY 10952', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'D16B21F0-26BD-4816-A41F-EE10A8535130', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Estes', N'Stevens', N'assets/images/avatars/Estes.jpg', N'Roamer', N'nam-dex', N'Special Effects Artist', N'estes@withinpixels.com', N'+1-202-555-0113', N'664 York Street Cambridge, MA 02138', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'DBCC6EFD-2625-4B16-BC0A-2739EA866690', N'clHYqWB2zqStQcKwVe55Jp4E6a02', N'Barrera', N'Bradbury', N'assets/images/avatars/Barrera.jpg', N'Jackal', N'Unizim', N'Graphic Designer', N'barrera@withinpixels.com', N'+1-202-555-0196', N'183 River Street Passaic, NJ 07055', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'clHYqWB2zqStQcKwVe55Jp4E6a02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'F5A1FDC7-459E-4C64-88C0-06EA7537CE0D', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Trevino', N'Bush', N'assets/images/avatars/Trevino.jpg', N'Wolf', N'Dalthex', N'Photojournalist', N'trevino@withinpixels.com', N'+1-202-555-0138', N'84 Valley View Road Norman, OK 73072', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'F8511B5D-9EE1-4C63-A722-0E3D9F5E1A97', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Christy', N'Camacho', N'assets/images/avatars/Christy.jpg', N'Mist', N'uniway', N'3D Animator', N'christy@withinpixels.com', N'+1-202-555-0136', N'329 Bridge Street Desoto, TX 75115', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'0041873C-3668-4A3F-B210-382F57CDD725', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Lily', N'Peaseod', N'assets/images/avatars/Lily.jpg', N'Star', N'zooflex', N'Software Specialist', N'lily@withinpixels.com', N'+1-202-555-0115', N'305 Willow Drive Superior, WI 54880', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 1, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'0147C22A-CA8E-4A6C-ACD2-F87E12B926DE', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Nancy', N'Jaggers', N'assets/images/avatars/Nancy.jpg', N'Silverwarden', N'Opetamnix', N'Software Architect', N'nancy@withinpixels.com', N'+1-202-555-0120', N'345 Laurel Lane Union City, NJ 07087', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-06 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'0DE951EA-E27F-4FF4-B9B8-E7E11154A1F1', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Mai', N'Nox', N'assets/images/avatars/Mai.jpg', N'Violetmage', N'quadzone', N'Software Engineer', N'mai@withinpixels.com', N'+1-202-555-0199', N'148 Heather Lane Mcminnville, TN 37110', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-21 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'05911297-92AB-4285-B9D7-D428A2DD8661', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Tillman', N'Lee', N'assets/images/avatars/Tillman.jpg', N'Gust', N'K-techno', N'News Photographer', N'tillman@withinpixels.com', N'+1-202-555-0183', N'447 Charles Street Dorchester, MA 02125', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-20 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'3912588E-F605-44AD-B1F0-A1FD53193D97', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Harper', N'MacGuffin', N'assets/images/avatars/Harper.jpg', N'Tempest', N'runcane', N'Application Developer', N'harper@withinpixels.com', N'+1-202-555-0173', N'738 Route 11 Cornelius, NC 28031', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 1, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-25 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'41F9F887-3605-4C2B-8E0F-2200A5BE6647', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Blair', N'Strangeway', N'assets/images/avatars/Blair.jpg', N'', N'Conedubdax', N'Visual Designer', N'blair@withinpixels.com', N'+1-202-555-0118', N'143 Jones Street Eau Claire, WI 54701', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 1, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-06-26 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-12 01:40:29.693' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'6CD06F19-4556-4835-A1A4-8803062CBBF3', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Velazquez', N'Smethley', N'assets/images/avatars/Velazquez.jpg', N'Strifedream', N'ranex', N'Publications Editor', N'velezquez@withinpixels.com', N'+1-202-555-0146', N'261 Cleveland Street Riverside, NJ 08075', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'90B3491C-7C23-4232-9A56-D3AC366F9383', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Arnold', N'Matlock', N'assets/images/avatars/Arnold.jpg', N'', N'Laotcone', N'Graphic Artist', N'arnold@withinpixels.com', N'+1-202-555-0141', N'906 Valley Road Michigan City, IN 46360', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 1, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-10 16:38:15.647' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'9149443C-D456-4690-8CFD-5E8935850068', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Odessa', N'odman', N'assets/images/avatars/Odessa.jpg', N'Rose', N'transace', N'Database Administration Manager', N'odessa@withinpixels.com', N'+1-202-555-0190', N'527 Jefferson Court Conyers, GA 30012', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

INSERT INTO `Contacts`(`Id`, `UserId`, `FullName`, `LastName`, `Avatar`, `NickName`, `Company`, `JobTitle`, `Email`, `Phone`, `Address`, `Birthday`, `Notes`, `Star`, `CreatedBy`, `Created`, `LastModifiedBy`, `LastModified`) VALUES (N'9B6FC2E7-1A50-492C-A572-6B1C0E55B681', N'ydpQOzJ177hwZGvtFFM4zMCE0o02', N'Shepard', N'Rosco', N'assets/images/avatars/Shepard.jpg', N'Fireking', N'ldenla', N'Magazine Designer', N'shepard@withinpixels.com', N'+1-202-555-0173', N'904 Ridge Road Pickerington, OH 43147', CAST(N'1988-01-01 00:00:00.000' AS DateTime), N'', 0, N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-05-01 18:35:34.000' AS DateTime), N'ydpQOzJ177hwZGvtFFM4zMCE0o02', CAST(N'2020-07-06 23:01:51.000' AS DateTime));

