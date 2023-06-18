const app = require("express")();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server is running at http://localhost:3000");
});
