# Email Send Demo

This is a demo project to test sending emails.

* The `Password` of `Abp.Mailing.Smtp.Password` in `appsettings.json` file needs to encrypt!

* Please use the `IStringEncryptionService` to encrypt the plain text password.

* Note that encryption may be affected by the configuration of `StringEncryption:DefaultPassPhrase` in `appsettings.json`.
