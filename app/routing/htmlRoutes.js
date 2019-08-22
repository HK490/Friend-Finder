

//2 routes

// Get Route to /survey --> display survey.html
// default --> display home.html





function htmlRoute (app, path) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

}

module.exports = htmlRoute;



