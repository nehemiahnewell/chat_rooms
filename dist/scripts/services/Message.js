/*global angular*/
/*global firebase*/
(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var message_holder = $firebaseArray(ref);
    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var messages = $firebaseArray(ref);
        console.log ("Message array ", messages);
        return messages;
      },
      send: function(postContent, postRoomID, postUsername) {
        message_holder.$add({ content: postContent, roomId: postRoomID, username: postUsername, sentAt: Date.now() });
        //"content":"Look at this awesoem and long message","roomId":"-KeG1-yQWpX4EshBPZ0i","sentAt":"A time stamp","username":"Real Name"
      }
    };
  }

  angular
    .module('chatRooms')
    .factory('Message', ['$firebaseArray', Message]);
})();