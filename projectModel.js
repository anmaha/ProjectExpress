//const mongoose = require("./database");
const mongoose = require("mongoose");

const dataObjSchema  = new mongoose.Schema({

      firstName: {
                    type: String,
        
                    },
      lastName: {
                    type: String,
                    },
      title: {type:String},
      year: {
        type: Number,
      },
      width: { type: Number},
      height: { type: Number},
      // dimensions: {
      //   width: {type:String},
      //   height: {type:String}
      // },
      Image:
      {
          data: Buffer,
          contentType: String
      } 
});

var dataObject = new mongoose.model("WHS", dataObjSchema);

module.exports = dataObject;

