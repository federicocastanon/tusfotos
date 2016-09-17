angular.module('app.controllers.serFotografo', [])
.controller('serFotografoCtrl', function ($scope, $stateParams, EscannerService) {

	$scope.codigo = "";
	
	$scope.escannear = function(){
		 EscannerService.scanBarcode().then(function(codigo){
			 alert(codigo);			 
			 $scope.codigo = codigo;
			 $scope.apply();
		 });
	 }
  });