const express = require('express');

const app = express();

const connect = require('./config/dbConnect');

const port = 3000;

app.use(express.json());

const userController = require('./controllers/UserController');

app.get('/',userController);
app.post('/create-user',userController);
app.patch('/update-user/:id',userController);
app.delete('/delete-user/:id',userController);


app.listen (3000,async()=>{
    await connect()
    console.log("running on port 3000");
})