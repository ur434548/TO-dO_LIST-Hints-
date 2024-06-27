
let array = [];
let name = document.getElementById("nme");
let cnic = document.getElementById("cnic");
let email = document.getElementById("email");
let phn = document.getElementById("phn");
let btn = document.getElementById("btn");
let tbl = document.getElementById("bdata");

btn.addEventListener("click", () => {
  let entry = {
    name: nme.value,
    cnic: cnic.value,
    email: email.value,
    phn: phn.value,
  };

  

  if (btn.innerText === "Update") {
    let index = btn.dataset.index;
    array[index] = entry;
    btn.innerText = "Add Task";
    delete btn.dataset.index;
  } else {
    array.push(entry);
  }

  clearInputs();
  displayData();
});

function clearInputs() {
  nme.value = "";
  cnic.value = "";
  email.value = "";
  phn.value = "";
}

function displayData() {
  tbl.innerHTML = "";
  array.forEach((entry, index) => {
    const tablerow = document.createElement("tr");

    const tabledata1 = document.createElement("td");
    tabledata1.innerText = entry.name;
    tablerow.appendChild(tabledata1);

    const tabledata2 = document.createElement("td");
    tabledata2.innerText = entry.cnic;
    tablerow.appendChild(tabledata2);

    const tabledata3 = document.createElement("td");
    tabledata3.innerText = entry.email;
    tablerow.appendChild(tabledata3);

    const tabledata4 = document.createElement("td");
    tabledata4.innerText = entry.phn;
    tablerow.appendChild(tabledata4);

    const actions = document.createElement("td");

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.style.backgroundColor = "darkred";
    del.onclick = () => deleteEntry(index);
    actions.appendChild(del);

    const edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.style.backgroundColor = "Darkgreen";
    edit.onclick = () => editEntry(index);
    actions.appendChild(edit);

    tablerow.appendChild(actions);
    tbl.appendChild(tablerow);
  });
}

function deleteEntry(index) {
  array.splice(index, 1);
  displayData();
}

function editEntry(index) {
  const entry = array[index];
  nme.value = entry.name;
  cnic.value = entry.cnic;
  email.value = entry.email;
  phn.value = entry.phn;
  btn.innerText = "Update";
  btn.dataset.index = index;
}

displayData();
