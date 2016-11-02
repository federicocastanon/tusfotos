angular.module('app.services.foto', [])

.service("FotoService",function(BaseFotos) {
	var database = BaseFotos;
	this.obtenerFoto = function(usuarioEvento){
		
		return BaseFotos()
	}
	function mapUsuarioEvento(doc) {
	       emit(doc._id);	    
	};
	
	this.obtenerTodasLasFotosPorUsuario = function (usuarioEvento){
		return database.query(mapUsuarioEvento, {
			  startkey          : usuarioEvento,
			  endkey 			 : usuarioEvento +'\uffff',
			  include_docs : true
			}).then(function (res) {
				  	return res.rows;
				}).catch(function (err) {
				  	return null;
			});
	}
	
	this.seleccionadasPorEvento = function(evento){
		var patt = new RegExp(evento);	
		return database.query(function(doc,emit){
			if(patt.test(doc._id)  && doc.seleccionada){
				emit(doc);
			}
		}).then(function (res) {
				  	return res.rows;
		}).catch(function (err) {
				  	return null;
			});
	}
	
})