var express = require ('express')

var path = require('path')

var mongoose= require('mongoose')

var passport=require('passport')

var session=require('express-session')

var cors = require('cors')

var bodyparser= require('body-parser')
var app=express();

const route=require('../Routes/Signuproutes')


mongoose.connect("mongodb://localhost:27017/AbubakarPc",{useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true})
.then(

    ()=>{console.log('Database connected')},
    err=>{console.log('Database not connected')},
)


app.use(bodyparser.json());

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api',route)

app.use(express.static(path.join(__dirname,'public')))

mongoose.connection.on("error",(err)=>{

    if(err){
    console.log("Database Not Connected"+err)}

});

    const port = 4000;


    app.get('/', (req,res)=>{

        res.send("Running...")
        });


    app.listen(port,()=>{
        console.log('Server is Listening at : '+port);
        })
