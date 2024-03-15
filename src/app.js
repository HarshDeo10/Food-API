const express=require('express');
const app=express();
const cors=require('cors');
const port=3200;
app.use(cors());
const FoodModel=require('./models/foodinfo');
require('./db/conn');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Food API Creation </h1>')
})
app.get('/getfooddata',async(req,res)=>{
    try {
        const getfood=await FoodModel.find({});
        res.status(201).send(getfood)
    } catch (e) {
       console.log(e); 
    }
})
app.post('/Food',async(req,res)=>{
    try {
     const addingfoodRecord=new FoodModel(req.body);
     const insertData=await addingfoodRecord.save();
     console.log(insertData);
     res.status(201).send(insertData)   
    } catch (e) {
        console.log(e);
    }
})
app.listen(port,()=>{
    console.log(`Server is listening at the port number ${port}`);
})