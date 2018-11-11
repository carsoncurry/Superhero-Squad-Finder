// needs a GET Route with the url `/api/friends`
    // this displays a JSON of all possible friends

// needs a POST Route of `/api/friends` to handle incoming survey results
    // this route handles compatibility logic

var squadArray = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(squadArray);
    });

    app.post('/api/friends', function(req, res) {
        var newHeroScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for (var i = 0; i < squadArray.length; i++) {
            var scoresDiff = 0;
            for (var j = 0; j < newHeroScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(squadArray[i].scores[j]) - parseInt(newHeroScores[j])));
            }

            scoresArray.push(scoresDiff);
        }

        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        var yourSquad = squadArray[bestMatch];
        res.json(yourSquad);

        squadArray.push(req.body);
    });
};

// var friends = require('../data/friends.js');

// module.exports = function(app) {
//     app.get('/api/friends', function(req, res) {
//         res.json(friends);
//     });

//     app.post('/api/friends', function(req, res) {
//         var userInput = req.body;
//         var userResponses = userInput.scores;

//         var matchName = '';
//         var matchImage = '';
//         var totalDifference = 10000;

//         for (var i = 0; i < friends.length; i++) {
//             var diff = 0;
//             for (var j = 0; j < userResponses.length; j++) {
//                 diff += Math.abs(friends[i].scores[j] - userResponses[j]);
//             }

//             if (diff < totalDifference) {
//                 totalDifference = diff;
//                 matchName = friends[i].name;
//                 matchImage = friends[i].photo;
//             }
//         }

//         friends.push(userInput);

//         res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
//     });
// };
