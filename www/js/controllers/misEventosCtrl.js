   
angular.module('app.controllers.miseventos', [])
.controller('misEventosCtrl', function($scope,$ionicModal,$state, EventoService) {
	  
	$scope.$on('$ionicView.beforeEnter', function() {
          //obtener todos mis eventos
		EventoService.misEventos().then(function(eventos){
			//vienen dentro de .doc
			$scope.eventos =eventos;
			$scope.$apply();
		});

	  });
	
	$scope.seleccionar = function(evento){
		
		EventoService.evento = evento;	
		   $state.go('tabsController.eventoCreador');	
	}
	
})
.controller('eventoCreadorCtrl', function($scope,$ionicModal,$state, EventoService,BaseEventos) {
	
	$scope.$on('$ionicView.beforeEnter', function() {
        
		$scope.evento =EventoService.evento;
		$scope.$apply();
		/*var attachment = new Blob(['Is there life on Mars?'], {type: 'text/plain'});
		BaseEventos.putAttachment($scope.evento._id, 'att.txt',$scope.evento._rev, attachment, 'text/plain').then(function (result) {
				EventoService.detalleEvento($scope.evento).then(function(eventoActualizado){
					$scope.evento = eventoActualizado;
				});
			}).catch(function (err) {
			  console.log(err);
			});*/
	  });
	
		$scope.seleccionar = function(fotografo){
		EventoService.evento = $scope.evento;	
		EventoService.fotografo= fotografo;
		   $state.go('tabsController.detalleColaborador');	
	}
	
})
.controller('detalleColaboradorCtrl', function($scope,$ionicModal,$state, EventoService,BaseFotos, FotoService,$cordovaFile) {
	
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.evento =EventoService.evento;
		$scope.fotografo = EventoService.fotografo;
		FotoService.obtenerTodasLasFotosPorUsuario($scope.fotografo._id +$scope.evento._id).then(function(fotos){
			$scope.fotos = fotos;
			$scope.$apply();
		});
	  });
	
		$scope.seleccionar = function(fotografo){
		EventoService.evento = $scope.evento;	
		EventoService.fotografo= fotografo;
		   $state.go('tabsController.detalleColaborador');	
	}
		$scope.pathForImage = function(image) {
			  if (image === null) {
			    return '';
			  } else {
				  try{
					  return cordova.file.dataDirectory + image.nombreArchivo;
				  }catch(err){
					  return image.foto;
				  }
			  }
			};
	
})