const express=require('express');
const app=express();

app.use(express());
app.use(express.json());

const todos=[{content:"Exercise",status:true},{content:"Cycling",status:false},{content:"Buying Grocery",status:true}];

app.get("/",(req,res)=>{
    res.send("Tasks list");
});

app.get("/api/todos",(req,res)=>{
    if(!todos) res.status(400).send("Not Found");
    res.send(todos);
});

app.get("/api/todos/:index",(req,res)=>{
    if(!todos[req.params.index]) res.status(400).send("Item doesn't exist");
    res.send(todos[req.params.index]);
});

app.put("/api/todos/:index",(req,res)=>{
todos[req.params.index]=req.body;
res.send(todos);
});

app.delete("/api/todos/:index",(req,res)=>{
  todos.splice(req.params.index,1);
  res.send(todos);
    });

app.post("/api/todos",(req,res)=>{
        todos.push(req.body);
        res.send(todos);
});

app.listen(5000);



