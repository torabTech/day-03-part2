const express = require('express');
const routes = require('./api/routes')
const app = express();

app.use('/',routes);

const port  = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
})