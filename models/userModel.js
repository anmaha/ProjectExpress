const conn = require("../database");
 const mongoose = require("mongoose");
// create an schema
var userSchema = new mongoose.Schema({
           // name: String,
           // email:String, 
            artist: {
               
                  firstName: {
                            type: String,
                
                            },
                  lastName: {
                            type: String,
                            }
              },
              title: {type:String},
              year: {
                type: Number
              }
        });
 
const userModel= new mongoose.model('WHS',userSchema);
 
module.exports = userModel;
