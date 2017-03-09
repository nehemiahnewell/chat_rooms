/*global angular*/
/*global firebase*/
(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    
    // @variable rooms
    // @desc holds the array of chatrooms
    // @param {array} room
    Room.rooms = $firebaseArray(ref);
    
    // @function newRoom
    // @desc creates a new room
    
    Room.newRoom = function(roomTitle) {
      //var name = 'room' + (Room.rooms.length + 1).toString();
      Room.rooms.$add({ title : roomTitle}); 
    };
    
    return Room;
  }

  angular
    .module('chatRooms')
    .factory('Room', ['$firebaseArray', Room]);
})();