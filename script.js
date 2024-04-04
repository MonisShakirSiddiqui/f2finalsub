const inputItems = [
    {
      title: "Enter Name",
      placeholder: "Enter Name"
    },
    {
      title: "Enter profession",
      placeholder: "Enter profession"
    },
    {
      title: "Enter Age",
      placeholder: "Enter Age"
    },
  ];
  
  function loader() {
    const root = document.querySelector("#root");
    addingInputFields(root);
    addingEmployeeButton(root);
  }
  
  function addingInputFields(root) {
    const inputDiv = root.querySelector(".inputDiv");
    inputItems.forEach((inputToUser) => {
      const inputField = document.createElement("div");
      inputField.classList.add("ourInputs");
      inputField.innerHTML = `<label for="name">${inputToUser.title}</label><br>
      <input type="text" name="name" class="inputByuser" placeholder="${inputToUser.placeholder}">`;
      inputDiv.appendChild(inputField);
    });
  }
  
  function addingEmployeeButton(root) {
    const addButton = document.createElement("button");
    addButton.innerText = "Add Employee";
    addButton.setAttribute("id", "btnadd");
    addButton.classList.add("btn", "btn-primary");
    root.appendChild(addButton);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loader();
  
    document.getElementById("btnadd").addEventListener("click", () => {
      const inputByuser = document.querySelectorAll(".inputByuser");
      const message = document.querySelector(".message");
      const resultDive = document.querySelector(".result");
  
      let isValid = true;
      inputByuser.forEach((input) => {
        if (input.value === "") {
          isValid = false;
        }
      });
  
      if (!isValid) {
        message.innerText = "Please make sure all the fields are filled before adding.";
      } else {
        const employeeInfo = Array.from(inputByuser).map(input => input.value);
        const employeeEntry = document.createElement("div");
        employeeEntry.classList.add("liofEmployee");
  
        employeeEntry.innerHTML = `<div class="listOfEmployees">
          <span>Name: ${employeeInfo[0]}</span>
          <span>Profession: ${employeeInfo[1]}</span>
          <span>Age: ${employeeInfo[2]}</span>
        </div>
        <button class="btn btn-light my-btn-class">Delete Employee</button>`;
  
        resultDive.appendChild(employeeEntry);
  
        inputByuser.forEach((input) => {
          input.value = "";
        });
  
        message.innerText = "Success: Employee added";
      }
    });
  
    root.addEventListener("click", (event) => {
      if (event.target.classList.contains("my-btn-class")) {
        event.target.closest(".liofEmployee").remove();
      }
    });
  });
  