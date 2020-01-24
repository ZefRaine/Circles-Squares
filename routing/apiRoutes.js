const shapes = require("../app/data/shapes");
module.exports = function (app) {
  app.get("/api/shapes", function (req, res) {
    res.send(shapes);
  });

  app.post("/api/shapes", function (req, res) {
    let shapes = [{
        Square: {
          Size: "",
          Area: ""
        }
      }, {
        Circle: {
          Radius: "",
          Area: ""
        }
      }];
    const friendData = req.body
    const numbers = friendData.scores
    let friendDiff = 0;
    var i;
    for (i = 0; i < shapes.length; i++) {
      friendDiff = 0;
      var currentFriend = shapes[i];
      for (var j = 0; j < currentFriend.scores.length; j++) {
         var bigDiff = numbers[j];
         friendDiff += Math.abs(parseInt(bigDiff) - parseInt(currentFriend.scores[j]))
       }
    if (friendDiff <= match.differential){
      match.name = currentFriend.name
      match.photo = currentFriend.photo
      match.differential = friendDiff
      }
   }
   shapes.push(friendData);
   res.json(match);
  });
};