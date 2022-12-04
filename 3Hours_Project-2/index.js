let expense = document.querySelector("#expenseamount");
let descr = document.querySelector("#description");
let catag = document.querySelector("#catagory");

let button = document.getElementById("onSubmit");
button.addEventListener("click", submitDetails);

function submitDetails(e) {
  e.preventDefault();
  if (!expense.value || !descr.value || !catag.value || catag.value=="choose a catagory") {
    // alert("Please fill all the data");
    document.getElementById("alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 1500);
  } else {
    let myObj = {
      expense: expense.value,
      descr: descr.value,
      catag: catag.value,
    };
    axios.post("https://crudcrud.com/api/1a8e9103a2a24c2f8af82eeb17fe614c/expensedata", myObj)
      .then(function (response) {
        console.log(response);
        addNewlineElement(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/1a8e9103a2a24c2f8af82eeb17fe614c/expensedata")
    .then(function (response) {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        addNewlineElement(response.data[i]);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

})


function addNewlineElement(myObj) {
  let stringObj = JSON.stringify(myObj);
  let ul = document.getElementById("users");
  let li = document.createElement("li");
  li.setAttribute("id", myObj._id)
  li.setAttribute("class", stringObj);
  let txtNode = document.createTextNode(myObj.expense + "-" + myObj.descr + "-" + myObj.catag + "  ");
  li.appendChild(txtNode);
  ul.appendChild(li);
  let parseObj = JSON.parse(stringObj);


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
    ele.style.display = "none";
    axios.delete(`https://crudcrud.com/api/1a8e9103a2a24c2f8af82eeb17fe614c/expensedata/${parseObj._id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  editBtn.addEventListener("click", editEle);
  function editEle(e) {
    let ele = e.target.parentElement;
    ele.style.display = "none";
    axios.delete(`https://crudcrud.com/api/1a8e9103a2a24c2f8af82eeb17fe614c/expensedata/${parseObj._id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    document.querySelector("#expenseamount").value = parseObj.expense;
    document.querySelector("#description").value = parseObj.descr;
    document.querySelector("#catagory").value = parseObj.catag;
  }
}

