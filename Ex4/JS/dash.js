// Modifier une société //
var companies = JSON.parse(localStorage.getItem("companies")) || []; /// get element from localstorage
function loadCompaniesData() {
    var body = document.getElementById("companies-tables");

    // Afficher les sociétés avec la fonction map //
    companies.map((company, index) => {
        body.innerHTML += `

          <tr> 
          <td>${company.nom} </td>
          <td>${company.adresse}</td>
          <td>${company.email}</td>
          <td>${company.employees}</td>
          
          <td><button class="btn btn-danger" onClick="supprimer(${index})">Supprimer</button> 
              
          <button
          type="button"
          Onclick="getdata(${index})"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Update
        </button>
        </td>
          `;
    });
}
loadCompaniesData();

// Supprimer une société //
function supprimer(index) {
    console.log(index);
    companies.splice(index, 1);
    localStorage.setItem("companies", JSON.stringify(companies));
    location.reload();
}

// Ajouter une société avec le bouton //
var nom = document.getElementById("nom");
var adresse = document.getElementById("adresse");
var email = document.getElementById("email");
var employee = document.getElementById("employee");

// Ajouter une société //
var position = 0;
function getdata(index) {
    console.log(index);
    nom.value = companies[index].nom;
    adresse.value = companies[index].adresse;
    email.value = companies[index].email;
    position = index;
}

// Modifier une société //
function updatedata() {
    var company = {
        nom: nom.value,
        adresse: adresse.value,
        email: email.value,
    };
    companies.splice(position, 1, company);
    localStorage.setItem("companies", JSON.stringify(companies));
    location.reload();
}


// Modifier un employé //
var employees = JSON.parse(localStorage.getItem("employees")) || []; /// get element from localstorage
function loadEmployeesData() {
    var body = document.getElementById("employees-tables");

    // Afficher les employés avec la fonction map //
    employees.map((employee, index) => {
        body.innerHTML += `

          <tr> 
          <td>${employee.nom} </td>
          <td>${employee.prenom} </td>
          <td>${employee.email}</td>
          <td>${employee.adresse}</td>
          <td>${employee.company}</td>
          
          <td><button class="btn btn-danger" onClick="supprimerEmployee(${index})">Supprimer</button> 
              
          <button
          type="button"
          Onclick="getEmployeedata(${index})"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEmployee"
        >
          Update
        </button>
        </td>
          `;
    });
}
loadEmployeesData();

// Supprimer un employé //
function supprimerEmployee(index) {
    console.log(index);
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
}

// Ajouter un employé avec le bouton //
var nomEmp = document.getElementById("last-name");
var prenom = document.getElementById("first-name");
var emailEmp = document.getElementById("email");
var adresseEmp = document.getElementById("adresse");
var company = document.getElementById("companyInput");

// Ajouter un employé //
var position2 = 0;
function getEmployeesdata(index) {
    console.log(index);
    nomEmp.value = employees[index].nom;
    prenom.value = employees[index].prenom;
    emailEmp.value = employees[index].email;
    adresseEmp.value = employees[index].adresse;
    companyInput.value = employees[index].company;
    position2 = index;
}

// Modifier un employé //
function updateEmployeedata() {
    var employee = {
        nom: nomEmp.value,
        prenom: prenom.value,
        email: emailEmp.value,
        adresse: adresseEmp.value,
        company: company.value,
    };
    employees.splice(position2, 1, employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
}
