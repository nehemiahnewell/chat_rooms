/*global angular*/
(function() {
  function SignUpCtrl($uibModalInstance, $cookies)
  {
    this.userNaming = "";
    this.makeUser = function ()
    {
      if(this.userNaming !="")
      {
        $cookies.put('blocChatCurrentUser', this.userNaming);
        $uibModalInstance.close();
      }
    };
  }
  angular
    .module('chatRooms')
    .controller('SignUpCtrl', ['$uibModalInstance', '$cookies', SignUpCtrl]);
})();