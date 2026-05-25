// Function to search for the input word
function searchDocument() {
    let searchWord = document.getElementById("searchInput").value.trim();

    if (!searchWord) {
        alert("Please enter a word to search.");
        return;
    }

    let bodyText = document.body.innerHTML; 
    let regex = new RegExp(searchWord, "gi");

    let highlightedText = bodyText.replace(regex, `<mark>${searchWord}</mark>`);
    document.body.innerHTML = highlightedText;
}

// Function to handle Enter key press
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); // Prevents unintended form submission
        searchDocument(); // Calls the search function
    }
});