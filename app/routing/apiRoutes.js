
// Load data by linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.

var friends = require("../data/friends");
var path = require('path');

module.exports = function (app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend, or the object with the minimum difference in score
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // for-loop to browse and compare the current user score with the scores in the friends API
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // The app, in my envisioned theme, should not add users into the friends array. 
    //However, to comply with the strict homework requirements, the app 
    //pushes/adds the user into the inspirational friends array, through the one-line code below.
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[bestFriendIndex]);
  });
};