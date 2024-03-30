const connectDB = require('./connectionDatabase/connection');
const laptopSchema = require('./model/laptopSchema');
const data = require ('./Data.json');

connectDB('mongodb+srv://tp478878:cAMjPlbrwehsg0vD@cluster0.ckzsyox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const upload = async ()=>{
    await laptopSchema.create(data)
    .then(()=>console.log('Uploaded!'))
    .catch((err)=>console.log(err));
}
upload();