/* - Procedures related with Property - */

GO
USE AgriculturalProperty

/* - Procedure for obtain all the values from Properties- */
GO 
CREATE PROCEDURE APSP_Properties
AS
BEGIN
	SELECT P.ID, P.Name FROM dbo.AP_Property P
END

GO 
CREATE PROCEDURE APSP_Propertiesname
AS
BEGIN
	SELECT P.Name FROM dbo.AP_Property P
END