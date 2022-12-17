let dictionary = []

// Get the insert input field
var input = document.getElementById("insertValue");
// Execute insert function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btnInsert").click();
    }
  }); 

// Get the search input field
var input = document.getElementById("searchValue");
// Execute search function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btnSearch").click();
    }
  }); 
// Insert the string into dictionary function 
function insert() {
    //Get string from the input field
	const insert = document.getElementById("insertValue").value
	console.log("Size: " + dictionary.length +" , Insert: " + insert)
    // variable for duplicate elements
    var found = 0
    // check if the element is allready in the string
    for (var i = 0; i < dictionary.length; ++i) {
        if (dictionary[i] == insert) {
            found = 1
            break
        }
    }
    // if the element is not found in the dictionary add it to the end else display error message
    if (found == 0) {
        dictionary.push(insert)
        document.getElementById("message").innerHTML = "Word inserted in the dictionary!"
        console.log("insert")
    } else {
        document.getElementById("message").innerHTML = "Word allready found in the dictionary!"
        console.log("Not insert")
    } 
}
// Search the dictionary function for the string
function search() {
	var found = 0;
	const search = document.getElementById("searchValue").value
	console.log("Size: " +dictionary.length +" , Search: " + search)
    // check if the element is in the string
	for(var i = 0; i < dictionary.length; ++i) {
		console.log(dictionary[i])
		if (dictionary[i] == search) {
			found = 1
            console.log(found)
            break
		}
	}
    // if the element is found in the dictionary display ok message else display error message
	if (found == 1) {
		document.getElementById("message").innerHTML = "Word found in the dictionary!"
	} else {
		document.getElementById("message").innerHTML = "Word not found in the dictionary!"
	}
}