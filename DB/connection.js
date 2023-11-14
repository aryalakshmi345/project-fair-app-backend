const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas succesfully connected with pfServer");
}).catch((err)=>{
    console.log(`MonogDB Connection Failed ..! Error: ${err} `);
})
