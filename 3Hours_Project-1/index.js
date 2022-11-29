let expense = document.querySelector("#expenseamount");
let descr = document.querySelector("#description");
let catag = document.querySelector("#catagory");

let button = document.getElementById("onSubmit");
button.addEventListener("click", submitDetails);
function submitDetails(e) {
  e.preventDefault();
  if (!expense.value || !descr.value || !catag.value) {
    alert("Please fill all the data");
  } else {
    // console.log(userName.value,userMail.value);
    let myObj = {
      expense: expense.value,
      descr: descr.value,
      catag: catag.value,
    };
    console.log(myObj);
    let myObjString = JSON.stringify(myObj);
    localStorage.setItem(
      "userdetail" + expense.value + descr.value + catag.value,
      myObjString
    );
    addNewlineElement(myObj);
  }
}

Object.keys(localStorage).forEach((key) => {
  let obj = JSON.parse(localStorage.getItem(key));
  addNewlineElement(obj);
});

function addNewlineElement(myObj) {
  let txtNode = document.createTextNode(
    myObj.expense + "-" + myObj.descr + "-" + myObj.catag + "  "
  );
  let ul = document.getElementById("users");
  let li = document.createElement("li");
  li.appendChild(txtNode);
  ul.appendChild(li);

  //creating delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "DELETE EXPANCE";
  delBtn.className = "btn btn-danger btn-sm mx-1 my-1";
  li.appendChild(delBtn);

  //creating edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "EDIT EXPANCE";
  editBtn.id = "edit-btn";
  editBtn.className = "btn btn-primary btn-sm mx-1 my-1";

  li.appendChild(editBtn);

  delBtn.addEventListener("click", deleteEle);
  function deleteEle(e) {
    let ele = e.target.parentElement;
    console.log(ele);
    ele.style.display = "none";
    localStorage.removeItem(
      "userdetail" + myObj.expense + myObj.descr + myObj.catag
    );
  }

  editBtn.addEventListener("click", editEle);
  function editEle(e) {
    let ele = e.target.parentElement;
    deleteEle(e);
    ele.style.display = "none";

    let expense = document.querySelector("#expenseamount");
    let descr = document.querySelector("#description");
    let catag = document.querySelector("#catagory");
    let myObj = {
      expense: expense.value,
      descr: descr.value,
      catag: catag.value,
    };
    addNewlineElement(myObj);
    console.log(ele);
    let myObjString = JSON.stringify(myObj);
    localStorage.setItem("userdetail" + expense.value + descr.value + catag.value,myObjString);
  }
}
