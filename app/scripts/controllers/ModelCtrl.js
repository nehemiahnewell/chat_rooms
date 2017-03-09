/*global angular*/
(function() {
  function ModelCtrl(Room, $uibModalInstance)
  {
    this.room = Room;
    this.roomTitle = "";
    this.makeRoom = function ()
    {
      Room.newRoom(this.roomTitle);
      $uibModalInstance.close();
    };
    
  }
  angular
    .module('chatRooms')
    .controller('ModelCtrl', ModelCtrl);
})();