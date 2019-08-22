const express=require("express");
const path=require("path");
const PORT = process.env.PORT || 3000;
const app = express();
// const bodyParser=require("body-parser")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"./app/public")));



require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app, path);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



