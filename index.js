let express =require('express');
const app=express();
app.use(express.static(require('path').join(_dirname,'public')));
app.use(express.static(require('path').join(_dirname,'media')));


app.get("/",function(req,res){
res.send('Working!!');

})

app.listen(process.env.PORT ||5000)