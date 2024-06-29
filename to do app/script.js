let btn= document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("task-item"); 
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can"); //delete icon from fontawesome
    delBtn.appendChild(icon); // delete icon becomes the child of delete button
    item.appendChild(delBtn); //delete button becomes the child of item
    ul.appendChild(item);  // adds tasks to the list
    inp.value = ""; // to empty the input box after clicking the add button
});


//adding functinality to delete button
ul.addEventListener("click", function(event) {
    // Check if the click was within a ".delete" button or an icon inside it
    if (event.target.closest(".delete")) {
        // Find the closest list item ("<li>") and remove it
        let listItem = event.target.closest("li");
        listItem.remove();
        
    }
});




