const main = {   
    body: {
        backgroundColor: "lightblue",
        fontFamily: "Programma, monospace"
    },
    h1: {
        textAlign: "center"
    },
    resetId: {
        backgroundColor: 'aliceblue',
        border: '2pt solid navy',
        borderRadius: '0.5em',
        cursor: 'pointer',
        paddingLeft: '1em',
        paddingRight: '1em',
        textAlign: 'center'
    },   
    resetIdHover: {
        backgroundColor: 'beige'
    },

    resetactive: {
        backgroundColor: 'mistyrose'
    },

    fieldset: {
        backgroundColor: 'aliceblue',
        border: '2px solid navy',
        borderRadius: '0.5em',
        float: 'left',
        fontSize: '125%',
        margin: '0.25em',
        textAlign: 'center'
    },

    legend: {
        backgroundColor: 'snow',
        border: '2px solid navy',
        borderRadius: '0.5em',
        cursor: 'default',
        fontSize: '125%',
        paddingLeft: '0.5em',
        paddingRight: '0.5em'
    },

// fieldset:hover, legend:hover {
//     background-color: papayawhip;
// }
    input: {
        border: "2px solid black",
        cursor: "pointer"
    },
}
// input[value="success"]:hover {
//     background-color: lightgreen;
//     border: 2px solid green;
// }

// input[value="failure"]:hover {
//     background-color: pink;
//     border: 2px solid red;
// }


module.exports = { main };