const express=require('express');
const server=express();
const port=3000;

server.use(express.json());

server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.query.firstName;
    if(firstName.length==0||firstName===""){
        console.log("First Name is required ");
        resp.send('First Name is required');
    }
    else{
    console.log("GET First Name :"+firstName);    
    resp.sendFile(__dirname+'/welcome.html');
    }
    
});

server.get('/css/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/css/style.css');
});


server.get('/js/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/validate.js');
});


server.post('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.body.firstName;
    if(firstName.length==0||firstName===""){
        console.log("First Name is required ");
        resp.send('First Name is required');
    }
    else{
    console.log("GET First Name :"+firstName);    
    resp.sendFile(__dirname+'/welcome.html');
    }
    
});
server.post('/js/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/validate.js');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
