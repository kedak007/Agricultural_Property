
//Exportación del módulo correspondiente para los Lotes X Ciclos.
//Parámetros desde el Servidor: app, mssql y configuration.
module.exports = function (app, mssql, configuration) {
	//Lote X Ciclo (server get)
	app.get('/lotXCycle/:IDs', function (request, response) {	
		var fk_Lot = request.params.IDs[0];
		var fk_Cycle = request.params.IDs[2];
		//Conexión a la BD según: configuration.
		var connection = new mssql.Connection(configuration, function (err) {
			//Request de la Conexión.
		    var request = new mssql.Request(connection);
		    //Ejecución del Store Procedure (SP).
		    request.input('FK_Lot', mssql.Int, fk_Lot);
		    request.input('FK_Cycle', mssql.Int, fk_Cycle);
		    request.execute('dbo.APSP_LotXCycle', function (err, recordsets, returnValue) {
				//Respuesta (Array : JSON)
				response.json(recordsets[0][0].ID);
		    });   
		});		
	});
};