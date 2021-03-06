const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');



const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", routes);
async function connectDb () {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/findfriends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to DB!")
}
connectDb();
// Use this to log mongo queries being executed!
mongoose.set('debug',true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));