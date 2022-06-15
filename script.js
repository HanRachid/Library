let myLibrary = [];

class Book {
  constructor(name, author, length, year, isread) {
    this.name = name;
    this.author = author;
    this.length = length;
    this.year = year;
    this.isread = isread;
  }
}

const harryPotter = new Book("Harry Potter 1", "J. K. Rowling", "1000", "1997");

myLibrary.push(harryPotter);
console.log(myLibrary);

const ajouterLivre = document.querySelector(".boutonajout");
const info = document.querySelectorAll("input");
livreTemp = [];
function addBook() {
  let showbook = document.getElementById("myTable");
  let ouinon = document.querySelector('input[name="yesno"]:checked');
  let row = showbook.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  for (const element of info) {
    livreTemp.push(element.value);
  }
  let temp = new Book(...livreTemp);
  myLibrary.push(temp);

  console.log(temp.author);
  cell1.innerHTML = temp.name;
  cell2.innerHTML = temp.author;
  cell3.innerHTML = temp.year;
  cell4.innerHTML = temp.length;
  cell5.innerHTML = ouinon.value;
}
