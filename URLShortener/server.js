const PORT=3000;
const express=require('express');
const path=require('path');
const app=express();
app.listen(PORT,()=>{
    console.log('Listening on port',PORT);
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname(),'index.js'));
});