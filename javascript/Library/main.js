let library = [];

document.addEventListener("load", displayLibrary);

const form = document.getElementById("book-entry");
form.addEventListener("submit", getBookData);

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function to display library
function displayLibrary() {
    const tbody = document.querySelector("tbody");
    // Clear contents of table body before adding elements
    tbody.textContent = '';

    library.forEach(book => {
        createRow(book);
    })
}

// function to create table rows with given data
function createRow(book) {
    const tbody = document.querySelector("tbody");

    // Create row
    const row = document.createElement("tr");
    row.classList.add("glass");

    // Create cells
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const status = document.createElement("td");
    const statusBtn = document.createElement("button");
    const trash = document.createElement("td");
    const trashImg = document.createElement("img");

    // Insert data to cells
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    status.appendChild(statusBtn);
    statusBtn.innerText = book.read ? "read" : "not read";
    statusBtn.addEventListener("click", toggleReadStatus);
    trash.appendChild(trashImg);
    trash.addEventListener("click", removeBook);
    trashImg.classList.add("delete-btn");
    trashImg.src = "./assets/trash-icon.png";
    trashImg.alt = "trash icon";

    // Append cells to row
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(status);
    row.appendChild(trash);

    // Append row to table body
    tbody.appendChild(row);
}

// get book data from form and pass it to addBook function
function getBookData(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const newBook = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked);

    addBook(newBook);
}

// add book to library
function addBook(book) {
    library.push(book);

    // Add newly added book to table display
    createRow(book);
}

// remove book from library
function removeBook(e) {
    const idx = getItemIndex(e);
    // Delete element from table
    library.splice(idx, 1);
    // Remove element from library array
    tbody.removeChild(row);


    // Update table display
    displayLibrary();
}

// toggle read status of a book
function toggleReadStatus(e) {
    const idx = getItemIndex(e);

    library[idx].read = !library[idx].read;
    e.target.innerText = library[idx].read ? "read" : "not read";
}

// find index of element in table
function getItemIndex(e) {
    const tbody = document.querySelector("tbody");
    const row = e.target.parentElement.parentElement;

    // Get index of element in table body
    return Array.from(tbody.children).indexOf(row);
}