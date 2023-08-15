import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let date = new Date();
let day = date.toLocaleString('en-us', {weekday: 'long'});
var year = date.getFullYear();
var mes = date.getMonth()+1;
var dia = date.getDate();
var fecha =dia+"-"+mes+"-"+year;

let list=[];
app.get('/',(req,res)=>{
res.render("index.ejs",{da:day,dat:fecha,nl:list})
});

app.post('/',(req,res)=>{
    let item=req.body.task;
    list.push(item);
    res.redirect('/');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});