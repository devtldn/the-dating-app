const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8282;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`\n\n // Application is listening on PORT ${PORT}`);
});