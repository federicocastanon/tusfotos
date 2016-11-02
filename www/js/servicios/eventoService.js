angular.module('app.services.evento', [])

.service("EventoService",function(BaseEventos) {

			this.misEventos = function() {
				return BaseEventos.allDocs({
					include_docs : true,
					attachments : false
				}).then(function(resultado) {
					return resultado.rows;
				})
			};
			
			this.detalleEvento = function(evento) {
				return BaseEventos.get(evento._id, {attachments: true}).then(function(resultado) {
					
					return resultado;
				})
			};
			
			
});