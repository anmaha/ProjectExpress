const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("connected to", process.env.DATABASE);
});

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;