angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html',
	    controller: 'loginCtrl'
	  })

      .state('tabsController.serFotografo', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/serFotografo.html',
        controller: 'serFotografoCtrl'
      }
    }
  })

  .state('tabsController.misEventos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/misEventos.html',
        controller: 'misEventosCtrl'
      }
    }
  })

  .state('tabsController.misAlbmus', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/misAlbmus.html',
        controller: 'misAlbmusCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.escanear', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/escanear.html',
        controller: 'escanearCtrl'
      }
    }
  })

  .state('tabsController.nuevoEvento', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/nuevoEvento.html',
        controller: 'nuevoEventoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eventoInvitado'
      2) Using $state.go programatically:
        $state.go('tabsController.eventoInvitado');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.eventoInvitado', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/eventoInvitado.html',
        controller: 'eventoInvitadoCtrl'
      }
    }
  })

  .state('tabsController.eventoCreador', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/eventoCreador.html',
        controller: 'eventoCreadorCtrl'
      }
    }
  })

  .state('tabsController.detalleColaborador', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/detalleColaborador.html',
        controller: 'detalleColaboradorCtrl'
      }
    }
  })

  .state('tabsController.detalleAlbum', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/detalleAlbum.html',
        controller: 'detalleAlbumCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});