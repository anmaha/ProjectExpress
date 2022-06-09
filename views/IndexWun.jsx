import React from "react";

import Header from "./components/header";
import Content from "./components/Content";
//import Footer from './components/footer'
//import ItemListing from "./components/ItemListing";
//console.log(props)

const ItemListing = (artist) => (
  // <div style={itemListingGridStyle} className="item-listing-grid">
  <div>
    {/* {props.allData &&
      props.allData.map((artist, i) => ( */}
    <fieldset>
      {/* <Item key={i} index={i} artist={artist} /> */}
      <legend>
        {artist.firstName} {artist.lastName} Artist{" "}
      </legend>
      <p>Hello keity</p>
    </fieldset>
    {/* ))} */}
  </div>
);
const IndexWun = ({ wunData }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link href="/static/newForm.css" rel="stylesheet" />
      <title>MAAR view entry by ID</title>
    </head>
    <body>
      <fieldset>
        <legend>the ARTwork entry</legend>
        <p>{wunData.title}</p>
        <div> {console.log(wunData)}</div>
        <Content>
          <ItemListing name="This is a form fieldset widget" artist={wunData} />
        </Content>{" "}
      </fieldset>
    </body>
  </html>
);

export default IndexWun;
