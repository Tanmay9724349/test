const express = require('express');
const app = express();
const connectDB = require('./connectionDatabase/connection');
const laptopSchema = require('./model/laptopSchema');
app.listen(5000,(req,res)=>{
    console.log('Server is running on port no 5000!');
})
connectDB('mongodb+srv://tp478878:cAMjPlbrwehsg0vD@cluster0.ckzsyox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.get('/',(req,res)=>{
    res.send('This is home page.');
})


app.get('/allproducts', async (req,res)=>{
    const mydata = await laptopSchema.find({});
    res.json(mydata);
})
app.get('/find/:title', async (req,res)=> {
    console.log(req.params);
    const mydata = await laptopSchema.find(req.params);
    res.json(mydata);
})
app.get('/delete/:title', async (req,res)=>{
    const mydata = await laptopSchema.deleteOne(req.params);
    res.json(mydata);
})
app.put('/update/:title',async (req,res)=>{
    const mydata = await laptopSchema.updateOne(req.params,{'price':59});
    res.json(mydata);
})
app.post('/add',async (req,res)=>{
    const newProduct = new laptopSchema({
        "title":"MyLaptop_1",
        "price":324,
        "count":3
    });
    const mydata = newProduct.save();
    res.json(mydata);
})