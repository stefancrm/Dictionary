let dictionary = []

// Get the insert input field
let inputField = document.getElementById("insertValue")
// Execute insert function when the user presses a key on the keyboard
inputField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      document.getElementById("btnInsert").click()
    }
  }); 


// Get the search input field
let searchField = document.getElementById("searchValue");
// Execute search function when the user presses a key on the keyboard
searchField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      document.getElementById("btnSearch").click()
    }
  }); 

  
// Insert the string into dictionary function 
function insert() {
    //Get string from the input field
	const insert = document.getElementById("insertValue").value
    // if the element is not found in the dictionary add it to the end else display error message
    if (dictionary.find(element => element == insert) == undefined) {
        dictionary.push(insert)
        document.getElementById("message").innerHTML = "Word inserted in the dictionary!"
    } else {
        document.getElementById("message").innerHTML = "Word allready found in the dictionary!"
    } 
}
// Search the dictionary function for the string
function search() {
	const search = document.getElementById("searchValue").value
    // if the element is found in the dictionary display ok message else display error message
	if (dictionary.find(element => element == search) != undefined) {
		document.getElementById("message").innerHTML = "Word found in the dictionary!"
	} else {
		document.getElementById("message").innerHTML = "Word not found in the dictionary!"
	}
}