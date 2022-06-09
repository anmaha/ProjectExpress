import React from "react";

function List({ allData }) {
  const [fruits, setFruits] = React.useState([
    { id: "1", name: "Apple", isFavorite: false },
    { id: "2", name: "Peach", isFavorite: true },
    { id: "3", name: "Strawberry", isFavorite: false },
  ]);

  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });

    setFruits(newFruits);
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>allData from model js object dataObject</legend>
          <Content>
            <ItemListing allData={allData}></ItemListing>
          </Content>
        </fieldset>
      </form>
      <h3>with no styling</h3>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button type="button" onClick={() => onClick(item)}>
            {item.isFavorite ? "Unlike" : "Like"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
