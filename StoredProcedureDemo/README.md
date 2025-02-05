### StoredProcedureDemo

Related links:

- **https://github.com/abpframework/abp-samples/pull/10**
- **https://github.com/abpframework/abp/issues/4230**

This project is just to demonstrate how to call stored procedures, views and functions, it is not developed in accordance with **best practices.**


The **EntityFrameworkCoreStoredProcedureDemoDbSchemaMigrator's MigrateAsync** method in the project creates some stored procedure, view, and functionsof sql server. So you need to run **DbMigrator** to migrate the database.

```sql
//GetUsernames procedure
CREATE PROCEDURE [dbo].[GetUsernames]
AS
BEGIN
	SET NOCOUNT ON;
	SELECT UserName FROM AbpUsers
END


//DeleteUserById procedure
CREATE PROCEDURE [dbo].[DeleteUserById]
@id uniqueidentifier  
AS
BEGIN
	SET NOCOUNT ON;
	DELETE FROM AbpUsers WHERE [Id] = @id
END


//UpdateEmailById procedure
CREATE PROCEDURE [dbo].[UpdateEmailById]
@email nvarchar(256),
@id uniqueidentifier
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE AbpUsers SET [Email] = @email WHERE [Id] = @id
END


//UserAdminView view
CREATE VIEW [dbo].[UserAdminView]
AS
SELECT * FROM  dbo.AbpUsers WHERE Name = 'admin'


//GetUsernameById function
CREATE FUNCTION [dbo].[GetUsernameById](@id uniqueidentifier)
RETURNS nvarchar(256)
AS
BEGIN
	DECLARE @username nvarchar(256)
	SELECT @username = [UserName] FROM AbpUsers WHERE [ID] = @id
	RETURN @username
END
```


The project created a dynamic API for the `AppUserAppService`, You can test these functions in swagger.

![image](https://user-images.githubusercontent.com/6908465/83938840-90c21800-a80a-11ea-8198-b532b6b92997.png)

Main implementation: [AppUserRepository](src/StoredProcedureDemo.EntityFrameworkCore/EntityFrameworkCore/Users/AppUserRepository.cs#L16)

Related documents: [Add Custom Repositories in abp](https://abp.io/docs/latest/Entity-Framework-Core#add-custom-repositories)

