/*global angular*/
(function() {
  function HomeCtrl(Room, Message, $uibModal, $scope) {
  // function HomeCtrl(Room) {
    $scope.rooms = Room.rooms;
    this.currentRoom = "landing";
    this.currentRoomName = "Landing";
    this.messages;
    this.makeRoom = function()
    {
      $uibModal.open({
        templateUrl: '../../templates/makeRoomModel.html',
        controller: 'ModelCtrl as model'
      });
    };
    this.updateCurrentRoom = function(roomID)
    {
      this.currentRoom = roomID;
      console.log(this.currentRoom);
      var room = $scope.rooms.$getRecord(roomID);
      this.currentRoomName = room.title;
      this.messages = Message.getByRoomId(roomID);
      console.log(this.messages);
      // insert room updating logic here.
    };
  }
  angular
    .module('chatRooms')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', HomeCtrl]);
})();