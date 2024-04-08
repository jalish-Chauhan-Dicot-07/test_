const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    console.log(' / GET');
    console.log(req.query.name);
    return res.send({status:200,message:`Hello ${req.query.name }`})
})

app.post('/post',(req,res)=>{
    
    console.log(req.body)
    return res.send({status:200,message:"POST Request"})
})


app.listen(8000,()=>{
    console.log('Server is listening on PORT 8000') 
})