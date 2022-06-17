import React from "react";

import Header from "./components/header";
//import Content from './components/content'
//import Footer from './components/footer'
import ItemListing from "./components/itemListing";

// DOESNT WORK import Main from '../styles/main.js';
// DOESNT WORKconst Main = require('../styles/main');
//import "../styles/main";

const navLinks = [
  {
    title:
      "Go to other page or place somewhere or open a new view on same page",
    link: `/MAAR`,
  },
];
const navCollectionsLinks = [
  { title: "William Hafer Studios", link: "/MAAR " },
];

import Content from "./components/content";
//import { useRef } from "react/cjs/react.production.min";

function formatName(artist) {
  return artist.first + " " + artist.last;
}
//console.log(artist);
const element = <h1>{/* Hello, {formatName(dataObject.artist)}! */}</h1>;
const linkReact = <a href="https://www.reactjs.org"> link </a>;
// const Fieldset = (name) => {
//     return(
//     <div>
//     <fieldset>
//         <legend>{name}</legend>
//         <input type="button" value="success" onClick={function success_handler() {
//                    fieldset.style.backgroundColor = "lightgreen";
//                    return callback(result);
//                }}>success</input>
//         <input type="button" value="failure" onClick={function failure_handler() {
//                    fieldset.style.backgroundColor = "pink";
//                    return callback(undefined, result);
//                }}>failure</input>

//     </fieldset>
//     </div>
//     )
//             };

const Review = () => {
  return (
    <>
      <legend>Main MAAR</legend>
      <legend>
        <Header title="Music and Art Review" links={navLinks} />
      </legend>
      <fieldset className="flex justify-around">
        <Header title="Gallery Collections" links={navCollectionsLinks} />
        <legend>Hellos</legend>
      </fieldset>
    </>
  );
};

const SubmissionForm = () => {
  let formColor = "lightblue";
  const handleSubmit = () => {
    formColor = "pink";
  };
  // const myFieldSet = document.querySelector("fieldset");
  //const myFieldSet = useRef(null);

  return (
    <>
      <form action="/MAAR" method="POST" onSubmit={handleSubmit}>
        <fieldset style={{ backgroundColor: formColor }}>
          <legend>
            <a href="/MAAR/new">
              {" "}
              Click submit to enter a new Artwork into the db{" "}
            </a>
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
          <input type="file" name="Image"></input>
          <input type="submit" value="Submit Artwork"></input>
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
    </>
  );
};

const Index = ({ allData }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link href="/static/newForm.css" rel="stylesheet" />
      <title>MAAR</title>
    </head>
    <body>
      <Review></Review>

      <legend>
        <h1>William Hafer Studios</h1>
        <fieldset>
          {" "}
          <legend>William Hafer Studios</legend>
          <p>
            Music<p>Artwork</p>
          </p>
          Music Artwork
        </fieldset>
      </legend>
      <SubmissionForm></SubmissionForm>
      <fieldset>
        <legend>The Collection</legend>
        <Content>
          <ItemListing
            name="This is a form fieldset widget"
            allData={allData}
          />
        </Content>{" "}
      </fieldset>
    </body>
  </html>
);

export default Index;
