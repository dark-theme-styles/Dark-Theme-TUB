// must be run after all components where created (which has collapsible class assigned)
function setup_collapse_components() {
  var collapsible_elements = document.getElementsByClassName("collapsible");
  for (let collapsible_element of collapsible_elements) {
    collapsible_element.addEventListener("click", function() {
      var collapsible_content = this.children[1];

      if (!collapsible_content) {
        return;
      }

      console.log(this.firstElementChild);
      this.firstElementChild.classList.toggle("active");
      console.log(this.children);
      if (collapsible_content.style.display === "flex") {
        collapsible_content.style.display = "none";
      } else {
        collapsible_content.style.display = "flex";
      }
    });
  }
}

// creates a todo item from given json object
function create_todo_item(todo) {
  // use the modifier if its an empty message
  var modifier = "";
  // if the message if empty output a warning message to the user
  if (!todo["text"]) {
    todo["text"] = "&#60;no message provided&#62;";
    modifier = "todos__item__message--empty";
  }
  var todo_elem = htmlToElement(
    `
        <div class="collapsible">
            <div class="todos__item">
                <div class='todos__item__line'>line ${todo["line"]}</div>
                <div class='todos__item__type'>${todo["tag"]}</div>
                <div class='todos__item__message ${modifier}'>${
      todo["text"]
    }</div>
            </div>
        </div>
        `
  );
  return todo_elem;
}

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 * src: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 */
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

// get the header of the json file to get the last modified date
// src: http://youmightnotneedjquery.com/
var last_modified_request = new XMLHttpRequest();
last_modified_request.open("HEAD", "todos.json", true);
last_modified_request.onload = () => {
  if (
    last_modified_request.status >= 200 &&
    last_modified_request.status < 400
  ) {
    // get the last modified date
    var last_modified = last_modified_request.getResponseHeader(
      "Last-Modified"
    );
    var last_modified_elem = document.getElementById(
      "todos-meta-last-modified"
    );
    // set the last modified date in the associated element by id
    last_modified_elem.innerText = "last updated: " + last_modified;
  } else {
    console.log("error getting todos.json file!");
  }
};
last_modified_request.onerror = () => {
  console.log("error getting todos.json file!");
};

function getJsonFileContentFromServer(fileName, callback) {
  // get the json files content through an async request
  var request = new XMLHttpRequest();
  request.open("GET", fileName, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      callback.apply(null, [data]);
    } else {
      console.log("error while trying to read the todo.json file!");
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  // call those async functions
  last_modified_request.send();
  request.send();
}

function create_todos(data) {
    //getJsonFileContentFromServer("todos_line_extractions.json", create_todos);
    console.log(data)
    var item_container = document.getElementById("todos-item-container");
    for (let todo of data) {
    //create new todo item
    var todo_elem = create_todo_item(todo);
    // append the new created todo item into the container
    item_container.appendChild(todo_elem);
    }
}

getJsonFileContentFromServer("todos.json", create_todos);

// // get the json files content through an async request
// var request = new XMLHttpRequest();
// request.open("GET", "todos.json", true);

// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     var data = JSON.parse(request.responseText);
//     var item_container = document.getElementById("todos-item-container");
//     // now create all todos items
//     for (let todo of data) {
//       // create new todo item
//       var todo_elem = create_todo_item(todo);
//       // append the new created todo item into the container
//       item_container.appendChild(todo_elem);
//     }
//     // after todos created we call assign the function
//     setup_collapse_components();
//   } else {
//     console.log("error while trying to read the todo.json file!");
//   }
// };

// request.onerror = function() {
//   // There was a connection error of some sort
// };
// // call those async functions
// last_modified_request.send();
// request.send();
