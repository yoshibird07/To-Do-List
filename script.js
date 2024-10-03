// Grab the stuff we need from the HTML
const textInput = document.getElementById("text-input");
// This is where you type your to-do
const button = document.getElementById("button");
// This is the button you click to add your to-do
const itemsContainer = document.getElementById("items-container");
// This is where all the to-dos will show up

// Function to add a new item to the list
function addItemToList(){
    // Get what the user typed in
    let userText = textInput.value;

   // Create a new paragraph for the to-do text
    let pElement = document.createElement("p");
    // Add a class for styling
    pElement.classList.add("pElement")
    // Give it an ID so we can find it later
    pElement.id="text";
    // Set the text to what the user typed
    pElement.innerText = userText;

    // Create a Finish button
    let finishButton = document.createElement("button"); 
    // Button text
    finishButton.innerText = "Finish";
    // Add some classes for styling
    finishButton.classList.add("container-buttons");
    finishButton.classList.add("finishButton");
    // When clicked, call finishItems function
    finishButton.addEventListener("click", finishItems);

    // Create a Delete button
    let deleteButton = document.createElement("button");
    // Button text
    deleteButton.innerText = "Delete";
    // Add classes for styling
    deleteButton.classList.add("container-buttons");
    deleteButton.classList.add("deleteButton");
    // When clicked, call deleteItems function
    deleteButton.addEventListener("click", deleteItems);


    // Make a container for the buttons
    let buttonsCont = document.createElement("div");
    // Add a class for styling
    buttonsCont.classList.add("buttonsCont")
    // Put the Finish button in there
    buttonsCont.appendChild(finishButton);
    // Put the Delete button in there
    buttonsCont.appendChild(deleteButton);



    // Create a container for the whole to-do item
    let toDoElementContainer = document.createElement("div");

    // Add a class for styling
    toDoElementContainer.classList.add("to-do-element-cont");
    
    // Put the text and buttons into the item container
    toDoElementContainer.appendChild(pElement);
    toDoElementContainer.appendChild(buttonsCont);
    
    // Add this new item to the main container where everything shows up
    itemsContainer.appendChild(toDoElementContainer);

}

// Set up a click event on the main button to add items when clicked
button.addEventListener("click", addItemToList);


// Function to delete an item when you click "Delete"
function deleteItems(event){
    // Remove the whole item from the list when you click Delete
    event.target.parentElement.parentElement.remove();

}

// Function to mark an item as done when you click "Finish"
function finishItems(event){
    // Find the text of this item and add a class so it looks crossed out 
    let text = event.target.parentElement.parentElement.querySelector("#text");
    text.classList.add("line")
}





