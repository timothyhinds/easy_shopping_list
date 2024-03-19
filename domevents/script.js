var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";//add space before delete button for every new list item
	var deleteBttn = document.createElement("button");
	deleteBttn.classList.add("btn-delete");
	deleteBttn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBttn);
	ul.appendChild(li);
	input.value = "";//set the input to blank after entry
}

function addDeleteBttn(elem){
	var deleteBttn = document.createElement("button");
	deleteBttn.classList.add("btn-delete");
	deleteBttn.appendChild(document.createTextNode("Delete"));
	elem.appendChild(deleteBttn);
}


//event delegation testing -  delete on click
ul.addEventListener("click", function (event){
  if (event.target.classList.contains("btn-delete")) {
    event.target.parentElement.remove();
  }
});

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//event delegation testing - strike through list elements
ul.addEventListener("click", function (elem){
   	elem.target.classList.add("done");
});

//add a space before delete buttons for orginal list
list.forEach(function(elem){
	elem.innerHTML = elem.innerHTML + " ";
})

list.forEach(addDeleteBttn);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);	