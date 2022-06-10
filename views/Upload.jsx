import React, { useState } from "react";
import { Convert } from "mongo-image-converter";
//import { useRef } from 'react/cjs/react.production.min';

const SubmissionForm = () => {
  let formColor = "lightpurple";
  const handleSubmit = (e) => {
    e.preventDefault();
    formColor = "pink";
  };
  const [imageFile, setImageFile] = useState("");

  const convertImage = async (event) => {
    try {
      const convertedImage = await Convert(imageFile);
      if (convertedImage) {
        console.log(convertedImage);
        // after this pass it to the backend using your fav API,
        return convertedImage;
      } else {
        console.log("The file is not in format of image/jpeg or image/png");
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  // const myFieldSet = document.querySelector("fieldset");
  // const myFieldSet = useRef(null);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/static/newForm.css" rel="stylesheet" />
        <title>MAAR</title>
        <style></style>
      </head>
      <body>
        <form action="/MAAR" method="POST" onSubmit={handleSubmit}>
          <fieldset style={{ backgroundColor: formColor, display: "block" }}>
            <legend>
              <a href="/MAAR/new"> Submit new Artwork to the Database Form </a>
            </legend>
            <input
              type="text"
              name="firstName"
              placeholder="Artist First Name"
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder="Artist Last Name"
            ></input>
            <input type="text" name="title" placeholder="Title"></input>
            <input type="number" name="width" placeholder="width"></input>
            <input type="number" name="height" placeholder="height"></input>
            <input type="number" name="year" placeholder="Year"></input>
            <input
              type="file"
              name="Image"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <button onClick={convertImage}>Submit</button>
          </fieldset>
        </form>
        <button
          value="success"
          onClick={() => {
            myFieldSet.style.setProperty("--backgroundColor", "pink");
            return null;
            //return callback(result);
          }}
        >
          success
        </button>
        <button
          value="failure"
          onClick={function failure_handler() {
            fieldset.style.backgroundColor = "pink";
            // return callback(undefined, result);
          }}
        ></button>
      </body>
    </html>
  );
};

function App() {
  //const mydiv = useRef(null);
  const [imageFile, setImageFile] = useState("");

  const convertImage = async (event) => {
    try {
      const convertedImage = await Convert(imageFile);
      if (convertedImage) {
        console.log(convertedImage);
        // after this pass it to the backend using your fav API,
      } else {
        console.log("The file is not in format of image/jpeg or image/png");
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      <input
        type="file"
        name="Image"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      {/* <button onClick={convertImage}></button> */}
    </>
  );
}

export default SubmissionForm;
