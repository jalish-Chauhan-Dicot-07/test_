const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    console.log(' / GET');
    return res.send({status:200,message:`Hello ${req.query.name }`})
})

app.post('/post',(req,res)=>{
    console.log(' / POST');
    return res.send({status:200,data:"POST Request"})
})


app.listen(8000,()=>{
    console.log('Server is listening on PORT 8000')
})