var express = require("express"),
    app = express();

app.get("/", function(req, res) {
    res.send("You got it!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
