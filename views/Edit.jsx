import React, { useState } from "react";

const EditForm = ({ wunData }) => {
  let formColor = "lightpurple";
  console.log(this);
  console.log(wunData);
  const handleSubmit = (e) => {
    e.preventDefault();
    formColor = "pink";
  };
  const [imageFile, setImageFile] = useState(wunData.Image);

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
        <title>MAAR Edit entry</title>
        <style></style>
      </head>
      <body>
        <form
          action={`/MAAR/${wunData.id}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset style={{ backgroundColor: formColor, display: "block" }}>
            <legend>
              {" "}
              Edit {wunData.title ? wunData.title : " "} Artwork Form
            </legend>
            <input
              type="text"
              name="firstName"
              placeholder="Artist First Name"
              defaultValue={wunData.firstName}
              //   defaultValue
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder="Artist Last Name"
              defaultValue={wunData.lastName}
            ></input>
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={wunData.title}
            ></input>
            <input
              type="number"
              name="width"
              placeholder="width"
              defaultValue={wunData.width}
            ></input>
            <input
              type="number"
              name="height"
              placeholder="height"
              value={wunData.height}
            ></input>
            <input
              type="number"
              name="year"
              placeholder="Year"
              defaultValue={wunData.year}
            ></input>
            <input
              type="file"
              name="Image"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <input type="submit" value="Edit Artwork"></input>
            {/* <button type="submit" onClick={convertImage}>
              Submit
            </button> */}
          </fieldset>
        </form>
      </body>
    </html>
  );
};

export default EditForm;
