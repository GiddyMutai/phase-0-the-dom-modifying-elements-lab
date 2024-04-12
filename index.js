// removing the element with id of 'main'
const main = document.getElementById("main");
main.remove();

// creating a new element
const newHeader = document.createElement("h1");
document.body.append(newHeader);

// adding an ID to the newHeader variable
newHeader.id = "victory";

// Adding text to the newHeader variable
newHeader.innerHTML = "Gideon is the champion";

