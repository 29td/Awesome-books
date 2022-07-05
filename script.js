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
<input type="text" class="header" onclick="addButton() placeholder="Title"></input><br>
<input type="text" class="author" onclick="addButton() placeholder="Author"></input><br><br>
<p class="value"></p>
<button type="submit" class="add" onclick="addButton()">Add</button>
`;

awesome.appendChild(awesomeDiv);



const removeBtn = document.querySelector('.Remove');
const addBtn = document.querySelector('.add');

function addButton() {
    document.querySelector('.value').innerHTML = 'ahdgn';
    // awesome.style.color = 'blue';
}

