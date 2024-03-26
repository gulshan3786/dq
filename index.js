var express=require("express");
var router=require("./route.js")

const app=express();
app.set('view engine','ejs')

const port=3002;

  app.use("/",router);
  app.listen(port,(req,res)=>{
    console.log(`the app is  listening on port no ${port}`)
  });