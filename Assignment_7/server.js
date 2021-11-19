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
    const firstName=req.query.firstName;
    const Lastname=req.query.Lastname;
    const city=req.query.city;
    console.log("GET First Name :"+firstName);
    console.log("GET Last Name :"+Lastname);
    console.log("GET city :"+city);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});

server.get('/css/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/css/style.css');
});


server.post('/welcome',(req,resp)=>{
    const firstName=req.body.firstName;
    const Lastname=req.body.Lastname;
    const city=req.body.city;
    console.log("Post First Name: "+firstName);
    console.log("Post Last Name :"+Lastname);
    console.log("Post city :"+city);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
