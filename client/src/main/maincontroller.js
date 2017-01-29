(function() {

  angular.module('quizApp')
    .controller('MainController', ['$http', '$state', '$window', 'authCheck', 'getMedals', '$rootScope', function($http, $state, $window, authCheck, getMedals, $rootScope) {

      authCheck.auth();
      var vm = this;
      vm.out = function() {
        $window.localStorage.accessToken = '';
        $rootScope.bg = true;
        $state.go('signin');
      };

      getMedals.medals();

    }]);

})();
