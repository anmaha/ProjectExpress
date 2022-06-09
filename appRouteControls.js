//const { response } = require("express");
//const { request } = require("express");
const res = require("express/lib/response");
const path = require("path");
let dataObject = require("./projectModel");
//const dataObject = require("./models/userModel");
console.log(dataObject);
//let allData = dataObject.find();

exports.findAllObjects = async (request, response)=>{
   // console.log(dataObject.find());
    console.log(request.body)
    let allData = await dataObject.find({});
    try{
    response.render("Index", { allData });

        // response.status(200).json({
        //     status: "success",
        //     data: {
        //         allData : allData ,
        //         message: "This is all the allData object"
        //     },
        // });

    }catch(error){
        response.status(500).json({
            status: "fail",
            data: {
                message: "failed findAllObjects"
            },

        });
    };
};

exports.createObject = async(req, response) => {
    console.log("req body", req.body);

    try{
    let newData = await dataObject.create(req.body);
    response.redirect("/MAAR");
    // response.status(200).json({
    //         status: "success",
    //         data: {
    //             newData : newData,
    //             message: "createData object newData"
    //         },
    //     });

    }catch(error){
        response.status(500).json({
            status: "fail",
            data: {
                message: "failed createObject"
            },

        });
    };
};

exports.getSingleObject = async (request, response) => {
    //res.send('Viewing user ' + req.artist.name);
     //  let getSingle = dataObject.findById(request.artist);
      // console.log("dataObject.findById(lov / 3b  }).
//   then(customers => {
//     console.log(customers[0].name); // 'A'
//     return dataObject.find({ first: "Maria" });
//   }).
//   then(customers => {
//     console.log(customers[0].name); // 'B'
//   });

  //  console.log(request.params.id);

    //     return data.map(result => result = request.params);
    //   };

    try { const wunData = await dataObject.findById(request.params.id);
       wunData.id = request.params.id;

       console.log(request.params.id);
        response.render("IndexWun", { wunData });
    //     response.status(200).json({
    //      status: "success",

    //      data: {
    //          wunData: wunData,

    //      },
    //  });
     } catch(error){
         response.status(500).json({
         status: "fail",
         data: {
             message: "undefined routes"
         }
     });
 };
 }

 exports.updateObject = async (request, response) => {
     try {  const updateObject = await dataObject.findByIdAndUpdate(request.params.id, request.body, {new: true});

         response.status(200).json({
         status: "success updateObject",

         data: {
             updateObject: this.updateObject,

         },
     });
     } catch(error){
         response.status(500).json({
         status: "fail",
         data: {
             message: "error"
         }
     });
 };
 }



 exports.deleteObject = async (request, response) => {
     try {
         let delData = await dataObject.findById(request.params.id)
         await dataObject.findByIdAndDelete(request.params.id,)

         response.status(200).json({
         status: "success",

         data: {
            deletedData : delData,
            message: "passed deleteObject Entry Deleted"

         },
     });
     } catch(error){
         response.status(500).json({
         status: "fail",
         data: {
             message: "Failed deleteObject"
         }
     });
 };

 };

 exports.createForm = async (request, response) => {
   //response.sendFile(path.join(__dirname, "./index.html"));
    // const form = document.createElement("form");
    try{
    response.render("Upload", {});
  //  response.render("Upload", { databaseObject });
    }catch(error){
        response.status(500).json({
            status: "fail",
            data: {
                message: "Failed deleteObject"
            }
        });
    };
   // try {


        // response.status(200).json({
        //     status: "success",

        //     data: {

        //        message: "passed CreateForm /new"

        //     }
        // })
   // }
       // await dataObject.findByIdAndDelete(request.params.id,)
        // { artist, title, year, dimensions }


                //  function makeForm(name){
        //     //return function form_requestor(value){
        //       //  let result =( value !== undefined ? value + ">" + name : name);
        //         let newform = document.getElementById("form");
        //         let formFieldset = document.createElement("form");
        //         let fieldset1 = document.createElement("fieldset");
        //         formFieldset.appendChild(fieldset1);
        //         let legend = document.createElement("legend");
        //         legend.appendChild(document.createTextNode(name));
        //         fieldset1.appendChild(legend);
        //         let fieldname1 = document.createElement("input");
        //     //   fieldname1.createTextNode("text");
        //         let fieldname2 = document.createElement("input");
        //         let fieldname3 = document.createElement("input");
        //         let fieldname4 = document.createElement("input");
        //         fieldset1.appendChild(fieldname1);
        //         fieldset1.appendChild(fieldname2);
        //         fieldset1.appendChild(fieldname3);
        //         fieldset1.appendChild(fieldname4);
        //         fieldname1.type = "text";
        //         fieldname2.type = "text";
        //         fieldname3.type = "text";
        //         fieldname4.type = "text";
        //         let submitbutton = document.createElement("input");
        //         submitbutton.type ="button";
        //         submitbutton.value = "success";
        //         submitbutton.addEventListener("click", function submit_handler(){
        //             fieldset1.style.backgroundColor = "lightblue";
        //             return null;
        //             //return callback(result);
        //         }, false);
        //     fieldset1.appendChild(submitbutton);

        // //     };
        //  newform.appendChild(formFieldset);
        //         return newform;
        // };
        // let toAddtoDB = new makeForm("Create a new Artwork Entry");
        //console.log(typeof(newForm), newForm);
      //  response.sendFile(path.join(__dirname, "./public/index.html"));
        //console.log("hheeere")
    //  catch(error){
    //     response.status(500).json({
    //     status: "fail",
    //     data: {
    //         message: "Failed /new createObjectForm"
    //     }
    // });
//};

};

function makeForm(name){
    //return function form_requestor(value){
      //  let result =( value !== undefined ? value + ">" + name : name);
        let newform = document.getElementById("form");
        let formFieldset = document.createElement("form");
        let fieldset1 = document.createElement("fieldset");
        formFieldset.appendChild(fieldset1);
        let legend = document.createElement("legend");
        legend.appendChild(document.createTextNode(name));
        fieldset1.appendChild(legend);
        let fieldname1 = document.createElement("input");
    //   fieldname1.createTextNode("text");
        let fieldname2 = document.createElement("input");
        let fieldname3 = document.createElement("input");
        let fieldname4 = document.createElement("input");
        fieldset1.appendChild(fieldname1);
        fieldset1.appendChild(fieldname2);
        fieldset1.appendChild(fieldname3);
        fieldset1.appendChild(fieldname4);
        fieldname1.type = "text";
        let fieldname1Label = fieldname1.document.createElement("label");
        fieldname2.type = "text";
        fieldname3.type = "text";
        fieldname4.type = "text";
        let submitbutton = document.createElement("input");
        submitbutton.type ="button";
        submitbutton.value = "success";
        submitbutton.addEventListener("click", function submit_handler(){
            fieldset1.style.backgroundColor = "lightblue";
            return null;
            //return callback(result);
        }, false);
    fieldset1.appendChild(submitbutton);

//     };
 newform.appendChild(formFieldset);
        return newform;
};
//const anotherForm = makeForm("name")