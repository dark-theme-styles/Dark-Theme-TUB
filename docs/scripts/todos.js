// must be run after all components where created (which has collapsible class assigned)
function setup_collapse_components() {
  var collapsible_elements = document.getElementsByClassName("collapsible");
  for (let collapsible_element of collapsible_elements) {
    // hide the line content
    collapsible_element.children[1].style.display = "none";
    collapsible_element.addEventListener("click", function() {
      var collapsible_content = this.children[1];

      if (!collapsible_content) {
        return;
      }

      console.log(this.firstElementChild);
      this.firstElementChild.classList.toggle("collapsible--active");
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
function create_todo_item(todo, line_contents_obj) {
  // use the modifier if its an empty message
  var modifier = "";
  // if the message if empty output a warning message to the user
  if (!todo["text"]) {
    todo["text"] = "&#60;no message provided&#62;";
    modifier = "window__item__message--empty";
  }
  var todo_lineContent_items = "";
  for (let line of line_contents_obj["line_content"]) {
    line_number = line[0];
    line_content = line[1];
    todo_lineContent_items +=
    `
      <div class="script-box__item">
        <div class="script-box__item__line-number">${line_number}</div>
        <div class="script-box__item__content">${line_content}</div>
      </div>
    `;
  }
  var todo_lineContent = `<div class="window__line-content">${todo_lineContent_items}</div>`;
  var todo_elem = htmlToElement(
    `
        <div class="collapsible">
            <div class="window__item">
                <div class='window__item__line'>line ${todo["line"]}</div>
                <div class='window__item__type'>${todo["tag"]}</div>
                <div class='window__item__message ${modifier}'>${todo["text"]}</div>
            </div>
            <div class="window__line-content">
              <div class="script-box">
                <div class="script-box__item-container">
                  ${todo_lineContent}
                </div>
              </div>
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

function getJsonContentFromServer(fileName) {
  return fetch(fileName).then(data => {
    return data.json();
  })
}

function create_todos(data, lines) {
    var item_container = document.getElementById("todos-item-container");
    for (let todo of data) {
      //create new todo item
      var query_string = `${todo["file"]} ${todo["line"]}`
      var lines_content = lines[query_string]
      var todo_elem = create_todo_item(todo, lines_content);
      // append the new created todo item into the container
      item_container.appendChild(todo_elem);
    }
}

getJsonContentFromServer("todos.json")
  .then(data => {
    getJsonContentFromServer("todos_line_extractions.json")
      .then(lines => {
        create_todos(data, lines);
        setup_collapse_components();
      })
  })
  .catch(error => console.error(error))
