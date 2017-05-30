/*global angular*/
/*global firebase*/
(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var messages = $firebaseArray(ref);
        console.log ("Message array ", messages);
        return messages;
      }
    };
  }

  angular
    .module('chatRooms')
    .factory('Message', ['$firebaseArray', Message]);
})();