/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2016 (13.0.5026)
    Source Database Engine Edition : Microsoft SQL Server Express Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2017
    Target Database Engine Edition : Microsoft SQL Server Standard Edition
    Target Database Engine Type : Standalone SQL Server
*/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ToDoItems]') AND type in (N'U'))
ALTER TABLE [dbo].[ToDoItems] DROP CONSTRAINT IF EXISTS [FK_ToDoItems_Categories]
GO
/****** Object:  Table [dbo].[ToDoItems]    Script Date: 4/10/2022 2:26:24 PM ******/
DROP TABLE IF EXISTS [dbo].[ToDoItems]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 4/10/2022 2:26:24 PM ******/
DROP TABLE IF EXISTS [dbo].[Categories]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 4/10/2022 2:26:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Categories]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Categories](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](100) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ToDoItems]    Script Date: 4/10/2022 2:26:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ToDoItems]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ToDoItems](
	[Todoid] [int] IDENTITY(1,1) NOT NULL,
	[Action] [nvarchar](max) NOT NULL,
	[Done] [bit] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_ToDoItems] PRIMARY KEY CLUSTERED 
(
	[Todoid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (1, N'Funadmentals', N'Basic skills that should always be practiced')
INSERT [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (2, N'Optimization', N'Furthering damage or oki in certain scenarios')
INSERT [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (3, N'Hit Confirms', N'Confirming stray hits into damage')
INSERT [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (4, N'Matchup Knowledge', N'Testing scenarios against certain characters')
INSERT [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (5, N'Blockstrings', N'Testing advantage/disadvantage/ranges on block')
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[ToDoItems] ON 

INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (1, N'Bnb combos (both sides and corners)', 0, 1, N'Do all BnB''s (midscreen/corner/vtrigger) 10 times both sides')
INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (2, N'Lowforward Heavy DP Hitconfirms', 0, 3, N'Set dummy to random block and confirm the hits with heavy DP. If you confirm the block or miss the confirm start over (10 reps)')
INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (3, N'Corner Blockstring Pressure', 0, 5, N'Look for new frame traps for the different button speeds and timings')
INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (4, N'Oki after Bnb''s', 0, 1, N'Explore the various options on knockdown/hard knockdown')
INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (5, N'Fireball Run Cancel Optimization', 0, 2, N'Test new combos and pressure with the new fireball run cancel')
INSERT [dbo].[ToDoItems] ([Todoid], [Action], [Done], [CategoryId], [Description]) VALUES (6, N'Figure Out Some Way to Deal With Luke', 0, 4, N'Idk bro')
SET IDENTITY_INSERT [dbo].[ToDoItems] OFF
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ToDoItems_Categories]') AND parent_object_id = OBJECT_ID(N'[dbo].[ToDoItems]'))
ALTER TABLE [dbo].[ToDoItems]  WITH CHECK ADD  CONSTRAINT [FK_ToDoItems_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([CategoryId])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ToDoItems_Categories]') AND parent_object_id = OBJECT_ID(N'[dbo].[ToDoItems]'))
ALTER TABLE [dbo].[ToDoItems] CHECK CONSTRAINT [FK_ToDoItems_Categories]
GO
