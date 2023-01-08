let price = document.querySelector("#price");
let dish = document.querySelector("#dish");
let table = document.querySelector("#table");
let Table1 = document.querySelector("#Table1");
let Table2 = document.querySelector("#Table2");
let Table3 = document.querySelector("#Table3");
let apikey= "495834f2d355407aa18232cdff6cdfa7";

let button = document.getElementById("onSubmit");
button.addEventListener("click", submitDetails);

async function submitDetails(e) {
  e.preventDefault();
  if (!price.value || !dish.value || !table.value || table.value == "choose a table") {
    document.getElementById("alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 1500);
  } else {
    try {
      let myObj = {
        price: price.value,
        dish: dish.value,
        table: table.value,
      };
      let responce = await axios.post(`https://crudcrud.com/api/${apikey}/order`, myObj);
      console.log(responce);
      addNewlineElement(responce.data);
      document.getElementById("order").style.display = "block";
      setTimeout(() => {
        document.getElementById("order").style.display = "none";
      }, 1000);
    } catch (error) {
      console.log("Something went wrong");
    }

  }
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    let responce = await axios.get(`https://crudcrud.com/api/${apikey}/order`);
    console.log(responce.data);
    for (let i = 0; i < responce.data.length; i++) {
      addNewlineElement(responce.data[i]);
    }
  } catch (error) {
    console.log("Something went wrong");
  }
})


function addNewlineElement(myObj) {

  let tblNO = myObj.table;
  let stringObj = JSON.stringify(myObj);
  let li = document.createElement("li");
  let txtNode = document.createTextNode(myObj.price + "-" + myObj.table + "-" + myObj.dish + "  ");
  li.setAttribute("id", stringObj)
  li.setAttribute("style","Color:brown")
  li.appendChild(txtNode);

  let parseObj = JSON.parse(stringObj);
  if (myObj.table == "Table 1") {
    Table1.appendChild(li);
  }
  if (myObj.table == "Table 2") {
    Table2.appendChild(li);
  }
  if (myObj.table == "Table 3") {
    Table3.appendChild(li);
  }

  //creating delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "CANCEL ORDER";
  delBtn.className = "btn btn-danger btn-sm mx-1 my-1";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", deleteEle);

}


async function deleteEle(e) {
  let ele = e.target.parentElement;
  ele.style.display = "none";
  let newId = JSON.parse(ele.id)._id;
  try {
    let response = await axios.delete(`https://crudcrud.com/api/${apikey}/order/${newId}`);
    console.log(response);
    document.getElementById("cancel").style.display = "block";
    setTimeout(() => {
      document.getElementById("cancel").style.display = "none";
    }, 1000);
  } catch (error) {
    console.log("Something went wrong");
  }
}


