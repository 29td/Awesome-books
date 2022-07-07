/* eslint-disable max-classes-per-file */

// Book Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Store Class: Handles local storage of books
class Storage {
  // Receives Books
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // Event: Adds Books

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  }

// Event remove a Book
  static removeBook(title) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// navigation bar
const header = document.querySelector('header');
header.innerHTML = `    <nav class="navigation">
<p>A web page</p>
<img src="./assets/icons/foward.svg" alt="img" class="icons"/>
<img src="./assets/icons/foward.svg" alt="img" class="icons"/>
<img src="./assets/icons/cross.svg" alt="img" class="icons"/>
<img src="./assets/icons/home.svg" alt="img" class="icons"/>
<input type="text" placeholder="https://" class="search-bar"></input>
<input type="search" placeholder="search"></input>
</nav>
`;

// linking items
const items = document.querySelector('.linked');

items.innerHTML = `       <ul>
<a href="#"><li>Awesome books<span>list</span></li></a>
<a href="#"><li>Add new</li></a>
<a href="#"><li>Contact</li></a>
</ul>
`;

// UI Class: Displays listed Books
class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-collection');
    const addedbook = document.createElement('div');
    addedbook.innerHTML = `
        <div class="display-collection">
          <p class="book-info">${book.title}</p>
          <p class="book-info" id="book-info-author"><span>by</span>${book.author}</p>
          <button type="submit" class="delete">Remove</button>
          <hr>
        </div>
        `;
    list.appendChild(addedbook);
  }

  // Event: Deletes a Book
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  // Event: Clears data
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#form').addEventListener('submit', () => {
  // Get form Values from the input fields
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Storage.addBook(book);
  UI.clearFields();
});

// Event: Deletes a Book
document.querySelector('#book-collection').addEventListener('click', (e) => {

// Remove book from UI
  UI.deleteBook(e.target);

// Remove book from Store
Storage.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

/* eslint-disable max-classes-per-file */