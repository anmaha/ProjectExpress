
const imprGuid = () => {
    return data.map(result => result.request.requestContext);
  };
<code>
  {(data || []).map(el => <>el<br/></>)}
</code>

const message = "Hello React vanilla javascript!";

document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".container");
    div.innerHTML = "<h1>" + message + "</h1>";
});
function widget(name) {
    let demo = document.getElementById("demo");
           let fieldset = document.createElement("fieldset");
           let legend = document.createElement("legend");
           let success = document.createElement("input");
           let failure = document.createElement("input");
           fieldset.appendChild(legend);
           fieldset.appendChild(success);
           fieldset.appendChild(failure);
           legend.appendChild(document.createTextNode(name));
           success.type = "button";
           success.value = "success";
           success.addEventListener(
               "click",
               function success_handler() {
                   fieldset.style.backgroundColor = "lightgreen";
                   return callback(result);
               },
               false
           );
           failure.type = "button";
           failure.value = "failure";
           failure.addEventListener(
               "click",
               function failure_handler() {
                   fieldset.style.backgroundColor = "pink";
                   return callback(undefined, result);
               },
               false
           );
           demo.appendChild(fieldset);
           return function widget_cancel() {
               fieldset.style.backgroundColor = "darkgray";
           };
       };
     let view = new widget("View all entries");