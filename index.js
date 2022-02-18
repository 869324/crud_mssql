const express = require("express");

const app = express();

app.use(express.json());
app.use("/users", require("./Routes/UserRoutes"));
app.use("/projects", require("./Routes/ProjectRoutes"));

app.listen(8000, () => {
  console.log("Server running");
});
