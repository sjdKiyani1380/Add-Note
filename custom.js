//valable

//EventListener
document.querySelector("form").addEventListener("submit", newNote);

document.querySelector(".list-note").addEventListener("click", removeNote);

document.addEventListener("DOMContentLoaded", localStorageLoaded);

//Function

function newNote(e) {
  //remove refresh frome form
  e.preventDefault();

  //give value forme input
  let value = document.querySelector("#ipt-note").value;

  //create li
  let li = document.createElement("li");

  //add value to li
  li.appendChild(document.createTextNode(value));

  //adding li to parent
  let noteList = document.querySelector("#list-note ul");
  noteList.appendChild(li);

  //create button remove
  let btnRemove = document.createElement("a");

  //adding text to tag a
  btnRemove.innerHTML = "حذف";

  //adding calss
  btnRemove.classList = "remove-btn";
  //adding to li
  li.appendChild(btnRemove);

  addToLocalStorage(value);
}

function removeNote(e) {
  //check if in the class a is remove-btn
  if (e.target.classList.contains("remove-btn")) {
    //remove li
    e.target.parentElement.remove();
  }

  removeOnLocalStorage(e.target.parentElement.textContent);
}

function getLocalStorage() {
  let notes;
  if (localStorage.getItem("note") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("note"));
  }

  return notes;
}

function addToLocalStorage(value) {
  notes = getLocalStorage();

  notes.push(value);

  localStorage.setItem("note", JSON.stringify(notes));
}

function localStorageLoaded() {
  let notes = getLocalStorage();

  notes.forEach(function (event) {
    //create li
    let li = document.createElement("li");

    //add value to li
    li.appendChild(document.createTextNode(event));

    //adding li to parent
    let noteList = document.querySelector("#list-note ul");
    noteList.appendChild(li);

    //create button remove
    let btnRemove = document.createElement("a");

    //adding text to tag a
    btnRemove.innerHTML = "حذف";

    //adding calss
    btnRemove.classList = "remove-btn";
    //adding to li
    li.appendChild(btnRemove);
  });
}

function removeOnLocalStorage(event) {
  let notes = getLocalStorage();

  let note = event.substring(0, event.length - 3);

  notes.forEach(function (event, index) {
    if (event === note) {
      // localStorage.getItem('note' , index).remove()  ||||| this is false
      notes.splice(0, 1);
    }
  });

  localStorage.setItem("note", JSON.stringify(notes));
  // console.log(note);
}
