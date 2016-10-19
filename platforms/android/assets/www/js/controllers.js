angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   /*
.controller('serFotografoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])*/

.controller('misEventosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('misAlbmusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      /*
.controller('escanearCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])*/

.controller('nuevoEventoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventoInvitadoCtrl', ['$scope', '$stateParams', '$cordovaCamera', 'firebase', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, firebase) {
  var config = {
    apiKey: 'tusfotos-ce784',
    authDomain: 'tusfotos-ce784',
    databaseURL: 'https://tusfotos-ce784.firebaseio.com/',
    storageBucket: 'gs://tusfotos-ce784.appspot.com'
  };
  firebase.initializeApp(config);
  var storageRef = firebase.storage().ref();
  var eventoRef = storageRef.child(eventoId )
  $scope.imagenes = [];
  $scope.tomarFoto = function () {
      var options = {
           quality : 75,
           destinationType : Camera.DestinationType.DATA_URL,
           sourceType : Camera.PictureSourceType.CAMERA,
           allowEdit : true,
           encodingType: Camera.EncodingType.JPEG,
           popoverOptions: CameraPopoverOptions,
           targetWidth: 500,
           targetHeight: 500,
           saveToPhotoAlbum: false
       };
       $cordovaCamera.getPicture(options).then(function(imageData) {
            console.log(imageData);
            eventoRef.putString(imageData, 'base64').then(function(snapshot) {
              console.log(snapshot.downloadURL);
              $scope.imagenes.push({titulo: "Nueva Imagen", src: snapshot.downloadURL});
            });
            $scope.apply();
          }, function(err) {
            alert(err);
          });
  }

}])

.controller('eventoCreadorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detalleColaboradorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detalleAlbumCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
