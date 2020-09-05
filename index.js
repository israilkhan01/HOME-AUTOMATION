const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8000;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.get('/', (req, res) => {
    return res.render('home',{
        title:'HOME'})
  });

app.listen(PORT,function(err){
    if(err){
        console.log("Error in the runnning server",err);
    }
    console.log("Yup!!,The sever is Running on port:",PORT);
});