const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");



//Connection to Database
const db = require('./config/keys').mongoURI;
mongoose.connect(
    db,
    {useNewUrlParser:true},
    {useUnifiedTopology: true}
)
.then(() => console.log("MongoDb is successfully connected"))
.catch(err => console.log(err))

//Middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);




const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));