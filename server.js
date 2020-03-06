const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "")));

// const PORT = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.redirect();
// });
app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
