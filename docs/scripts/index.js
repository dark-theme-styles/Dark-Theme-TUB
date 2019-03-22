
// get the header of the json file to get the last modified date
// src: http://youmightnotneedjquery.com/
var last_modified_request = new XMLHttpRequest();
last_modified_request.open("HEAD", 'index.html', true);
last_modified_request.onload = () => {
    if (last_modified_request.status >= 200 && last_modified_request.status < 400) {
        // get the last modified date 
        var last_modified = last_modified_request.getResponseHeader("Last-Modified");
        var last_modified_elem = document.getElementById("index-meta-last-modified");
        // set the last modified date in the associated element by id
        last_modified_elem.innerText = "last updated: " + last_modified;
    } else {
        console.log("error getting index.html file!");
    }
}
last_modified_request.onerror = () => {
    console.log("error getting index.html file!");
};
// call those async functions
last_modified_request.send();

