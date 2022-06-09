import React from "react";

//import Item from './item';
const Item = ({ artist }) => {
  return (
    <>
      <p>
        {artist.firstName} {artist.lastName} index:
      </p>
      <p>
        {artist.firstName} {artist.lastName}
      </p>
      <p>{artist.title}</p>
      <p>
        {artist.width} X {artist.height}
        {artist.id}
      </p>
      <p>
        {" "}
        <a href={`/MAAR/${artist.id}`}>{artist.title}</a>
      </p>
      {/* <p>{artist.image} image</p> */}
      {/* <input
        type="button"
        value="success"
        onClick={function success_handler() {
          fieldset.style.backgroundColor = "lightgreen";
          return callback(result);
        }}
      >
      </input> */}
      {/* <fieldset>
        <input type="button" value="Ttlel"></input>
      </fieldset> */}
    </>
  );
};

//const { itemListingGridStyle } = require('../../../styles/contentStyle')

const ItemListing = (props) => (
  // <div style={itemListingGridStyle} className="item-listing-grid">
  <div>
    {props.allData &&
      props.allData.map((artist, i) => (
        <fieldset>
          <Item key={i} index={i} artist={artist} />
          <legend>
            {artist.artist.firstName} {artist.lastName} Artist{" "}
          </legend>
        </fieldset>
      ))}
  </div>
);

export default ItemListing;
