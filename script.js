const awesome = document.querySelector('.awesome-books')


const book = {
    name: 'Lorem ipsum',
    description: 'Testeroo Testyy'
}

const book1 = {
    name: 'Second book',
    description: 'Testeroo Testyy'
}

const awesomeDiv = document.createElement('div');
awesomeDiv.classList.add('awesome');

awesome.innerHTML = `<h1>Awesome books</h1>
<p>${book.name}</p>
<p>${book.description}</p>
<button type="submit" class="Remove">Remove</button>
<hr>
`;

awesomeDiv.innerHTML = `<p>${book1.name}</p>
<p>${book1.description}</p>
<button type="submit" class="Remove">Remove</button>
<hr>
<input type="text" class="header" placeholder="Title"></input><br>
<input type="text" class="author" placeholder="Author"></input><br><br>
<button type="submit" class="add" onclick="addButton()">Add</button>
`;

awesome.appendChild(awesomeDiv);



const removeBtn = document.querySelector('.Remove');
const addBtn = document.querySelector('.add');

function addButton() {
    awesome.style.color = 'blue';
}

    // addBtn.addEventListener('onclick', (e) => {
    //     e.preventDefault();

    //     // get form values
    //     const title = document.querySelector('.header').value;
    //     const author = document.querySelector('.author').value;
        
    //     const add = new addButton(title, author);
    //     add.awesome;

    // });



// addBtn.addEventListener('onclick', (e) => {
//     e.preventDefault();
//     // get form values
//     const title = document.querySelector('.header').value;
//     const author = document.querySelector('.author').value;
    
//     const add = new book
// });


// function addButton() {
//     awesome.style.display = 'none';
//     awesome.style.backgroundColor = 'red'; 
// }

// addBtn.forEach((button) => {
// });

    

// book.forEach((book) => {
//     const awesomeDiv = document.createElement('div');
//     awesomeDiv.classList.add('awesome');
//     awesomeDiv.innerHTML =`
// <h1>Awesome books</h1>
// <p>${book.name}</p>
// <p>${book.description}</p>
// <button type="submit" class="Remove">Remove</button>
// <hr>
// <p>${book1.name}</p>
// <p>${book1.description}</p>
// <button type="submit" class="Remove">Remove</button>
// <hr>
// <input type="text" class="header" placeholder="Title"></input><br>
// <input type="text" class="author" placeholder="Author"></input><br><br>
// <button type="submit" class="add">Add</button>
// `;

// awesome.appendChild(awesomeDiv);
// });
