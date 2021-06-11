const express = require("express");

// set up dependencies
const app = express();
// set up mongoose

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
