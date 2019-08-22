

function apiRoute(app) {

    const possFriend = require("../data/friends.js");

    // GET route with url /api/friends
    //  - display JSON of all poss friends

    app.get("/api/friends", function (req, res) {
        res.json(possFriend)
    })


    // POST routes /api/friends
    //  - survey results & compatibiity logic

    app.post("/api/friends", function (req, res) {

        const newPossFriend = req.body;

        possFriend.push(newPossFriend);


        let possFriendRating;
        let newPossFriendRating;
        let difference = [];
        let sumDiff;
        let yourMatch;
        let matchedFriend;


        for (let i = 0; i < possFriend.length - 1; i++) {
            let friendTotal = 0
            for (let j = 0; j < possFriend[i].ratings.length; j++) {
                sumDiff = (Math.abs(newPossFriend.ratings[j] - possFriend[i].ratings[j]))
                friendTotal += sumDiff
            }
            difference.push(friendTotal)
            yourMatch = Math.min(...difference)

            if(yourMatch===friendTotal) {
                matchedFriend = possFriend[i];
               
            }

        }


        res.json(matchedFriend);
    })

};

module.exports = apiRoute;

