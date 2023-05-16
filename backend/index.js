const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const { boolean } = require('hardhat/internal/core/params/argumentTypes');

function roundToTwoDecimalPlaces(num) {
    if (num < 0) {
      num = 0;
    }
    return +(Math.round(num + "e+2") + "e-2");
  }

mongoose.connect('mongodb://127.0.0.1:27017/Minor_p_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
            console.log('db connected');
})
    .catch(err => console.log(err));

const register = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Register = mongoose.model('Users', register);

const Owners = new mongoose.Schema({
    title: String,
    description: String,
    story: String,
    address: String,
    eth: String,
    want_eth:String,
    date: Date,
    image: String
});

const new_owner = mongoose.model('Owners', Owners);

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.post('/owner', async(req, res) => {
    const newOwner = new new_owner();
    newOwner.title = req.body.title;
    newOwner.story = req.body.story;
    newOwner.eth = req.body.eth;
    newOwner.want_eth = req.body.eth;
    newOwner.date = req.body.date;
    newOwner.image = req.body.image;
    newOwner.description = req.body.description;
    newOwner.address = req.body.address;
    const doc = await newOwner.save();

    console.log(doc);
    res.json(doc);
})

app.get('/owner', async (req,res)=> {
    const docs = await new_owner.find({});
    res.json(docs);
})

app.post('/update', async (req, res) => {
    let eth1 = req.body.eth-req.body.input;
    eth2 = roundToTwoDecimalPlaces(eth1);
    if (eth2 <= 0) eth1 = 0;
    console.log(eth1);
    const result = await User.findByIdAndUpdate({ _id: req.body._id }, {
        $set: {
            eth: eth1
        }
    });
    console.log(result);
})

app.post('/register', async (req, res) => {
    const user = new Register();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
})

app.get('/register', async (req, res) => {
    const result = await Register.find();
    res.json(result);
})

app.listen('5000', () => {
    console.log('active');
})