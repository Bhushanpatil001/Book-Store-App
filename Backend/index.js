const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();


dotenv.config();
const Port = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// routes
const BookRoute = require("./route/book_route.js")
const UserRoute = require("./route/user_route.js")

app.use(express.urlencoded({extended : true}))

app.use(cors());
app.use(express.json())

mongoose.connect(URI , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Mongodb Connected");
}).catch((err) => {
    console.log(err);
})



app.use("/book", BookRoute)
app.use("/user", UserRoute)

app.listen(Port , () => {
    console.log("Server Listening on port number" , Port);
})