/*global angular*/
/*global firebase*/
(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '../../templates/signUpModel.html',
        controller: 'SignUpCtrl as model',
        backdrop: 'static'
      });
    }
  }

  angular
    .module('chatRooms')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();