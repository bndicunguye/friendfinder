var friendsdata = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friendsdata);
      });
      
      app.post("/api/friends/", function(req, res) {
        console.log("test")
        var chosen = req.body;
        
        
        var bestScore = 55
        var bestMatch={}
        for (var i = 0; i < friendsdata.length; i++) {
            var currentPerson = friendsdata[i]
            
            var currentScore = currentPerson.scores
            console.log(chosen.score, currentScore);
            var runningScore = 0
          for (let j = 0; j < currentScore.length; j++) {
              runningScore += Math.abs(chosen.score[j] -currentScore[j])
              console.log(runningScore)
          }
          console.log("total",runningScore)
          if(runningScore<bestScore){
            bestMatch ={
                name: currentPerson.name,
                photo: currentPerson.photo,
                score: runningScore
            }
            bestScore = runningScore
          }

        }
    
        return res.json(bestMatch);
    });

}


 
