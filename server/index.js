const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://benniejoseph:DEdwJhru5evyys8@clusteramazonclonemumba.uff2e.mongodb.net/?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
