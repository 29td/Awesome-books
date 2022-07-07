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

// linking items
const items = document.querySelector('.linked');

items.innerHTML = `       <ul>
<li>Awesome books<span><a href="#book-collection">list</a></span></li>
<li><a href="#add-books">Add new</a></li>
<li><a href="#contactF">Contact</a></li>
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

// Contact section
const contact = document.querySelector('.contact-info');
contact.innerHTML =`<h1>Contact Information</h1>
<p>Do you have any questions or you just want to say "Hello"?<br>
you can reach out to us!</p>
<ul>
<li>Our e-mail: Reggie&Collins@gmail.com</li>
<li>Our phone number: +235 667 233 4471</li>
<li>Our address: Car Str 173A Johannesburg SA</li>
</ul>
<input type="text" placeholder="Copyright  ..."></input>
`;

/* eslint-disable max-classes-per-file */