angular.module('app.controllers.albums', [])
.controller('misAlbmusCtrl', function($scope,$ionicModal,$state, EventoService,BaseFotos, FotoService,$cordovaFile) {
	
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
		$state.go('tabsController.detalleAlbum');	
		
	}
	
})
.controller('detalleAlbumCtrl', function($scope,$ionicModal,$state, EventoService,BaseFotos, FotoService,$cordovaFile) {
	
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.evento =EventoService.evento;
		FotoService.seleccionadasPorEvento($scope.evento._id).then(function(fotos){
			//viene adentro de .key
			$scope.fotos = fotos;
			$scope.$apply();
		});
	  });
	
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