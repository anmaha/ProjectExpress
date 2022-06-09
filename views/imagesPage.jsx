//const { render } = require("express/lib/response");
import React from "react";

const style = require("../style/main.js");

class getTable extends React.Component {
  render() {
    const pieces = this.props;
    return (
      <div>
        <h1>Veiw the galleryMA Collection</h1>
        <table border="2">
          <tr>
            <td>Row 1 Col 1</td>
            <td>Row 1 Column 2</td>
          </tr>
          <tr>
            <td>Row 2 Col 1</td>
            <td>Row 2 Column 2</td>
          </tr>
          <tr>
            <td>Row 3 Col 1</td>
            <td>Row 3 Column 2</td>
          </tr>
        </table>
      </div>
    );
  }
}
const Index = ({ dataObject }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <title> MAAR View One Artwork</title>
    </head>
    <body style={rootStyle}>
      <Header title="One Artwork" links={navLinks} />
      <Content component={<ItemListing wunObject={wunObject} />} />
      <Footer />
    </body>
  </html>
);

export default Index;

//const myTable = this.getTable();

// React.createElement(
//     myButton,
//     {type:"button",color: 'blue', shadowSize: 2},
//     'Click Me'
//   )
//render(){
//  const myTable = this.getTable();
//}

//<MyButton color="blue" shadowSize={2}>
//Click Me
//</MyButton>
