import express from 'express';
const app= express();
app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.post('/info',(req,res)=>{
    console.log(req.body);
    res.send('info page');
});
app.listen(3000,()=>{
    console.log('Server started on port 3000');
});

