const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/Minor_p_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
            console.log('db connected');
})
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    title: String,
    description: String,
    story: String,
    address: String,
    eth: String,
    date: Date,
    image: String
});

const User = mongoose.model('User', userSchema);

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.post('/', async(req, res) => {
    const user = new User();
    user.title = req.body.title;
    user.story = req.body.story;
    user.eth = req.body.eth;
    user.date = req.body.date;
    user.image = req.body.image;
    user.description = req.body.description;
    user.address = req.body.address;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

app.get('/show', async (req,res)=> {
    const docs = await User.find({});
    res.json(docs);
})

app.listen('5000', () => {
    console.log('active');
})