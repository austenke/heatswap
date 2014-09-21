
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("retrieveComments", function (request, response) {
 var messages = Parse.Object.extend("messages");
 var query = new Parse.Query(messages);
 var currentUser=Parse.User.current();
 query.equalTo("user", currentUser.id);
 query.find({
  success: function(results) {
  //alert("Successfully retrieved " + results.length + " users.");
  // Do something with the returned Parse.Object values
  for (var i = 0; i < results.length; i++) { 
   var object = results[i];
   //alert(object.id + ' - ' + object.get('playerName'));
   }
   response.success(results.length)
  },
  error: function(error) {
   alert("Error: " + error.code + " " + error.message);
  }
 });
});
