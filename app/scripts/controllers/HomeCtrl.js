/*global angular*/
(function() {
  function HomeCtrl(Room) {
    this.rooms = Room.all;
  }
  angular
    .module('chatRooms')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();