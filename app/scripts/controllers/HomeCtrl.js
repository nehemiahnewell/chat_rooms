/*global angular*/
(function() {
  function HomeCtrl(Room, $uibModal) {
  // function HomeCtrl(Room) {
    this.rooms = Room.rooms;
    this.makeRoom = function()
    {
      $uibModal.open({
      templateUrl: '../../templates/makeRoomModel.html',
      controller: 'ModelCtrl as model'
    });
    };
    
  }
  angular
    .module('chatRooms')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
    // .controller('HomeCtrl', ['Room', HomeCtrl]);
})();