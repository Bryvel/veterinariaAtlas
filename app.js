var express=require('express');
var app=express();
var path=require('path');
var morgan=require('morgan');
var mongoose=require('mongoose');

//set app enviroment
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use( express.static(__dirname + '/Public'));

//Use middleware
app.use(morgan('dev'));
//DB connection
mongoose.connect('mongodb://localhost/veterinaria')
.then(db=>{console.log('db connected')})
.catch(err=>{console.log(err)})

// routes
var indexRoute=require('./routes/index');
app.use('/',indexRoute);
app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
})