// Ajouter une société //
function registerCompany(e) {
  // Empecher le refresh de la page en cliquant sur le bouton //
  e.preventDefault();

  // Récupérer les valeurs des inputs //
  var nom = document.getElementById("company-name");
  var adresse = document.getElementById("company-address");
  var email = document.getElementById("company-email");
  var formValid = true;

  // Vérifier les valeurs des inputs //
  if (nom.value == "") {
    nom.classList.remove("is-valid");
    nom.classList.add("is-invalid");
    formValid = false;
  } else {
    nom.classList.remove("is-invalid");
    nom.classList.add("is-valid");
    formValid = true;
  }

  if (adresse.value == "") {
    adresse.classList.remove("is-valid");
    adresse.classList.add("is-invalid");
    formValid = false;
  } else {
    adresse.classList.remove("is-invalid");
    adresse.classList.add("is-valid");
    formValid = true;
  }

  if (email.value == "") {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    formValid = false;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    formValid = true;
  }

  var company = {
    nom: nom.value,
    adresse: adresse.value,
    email: email.value,
  };

  // Ajouter une société au localStorage //
  if (formValid) {
    var companies = JSON.parse(localStorage.getItem("companies")) || []; /// get element from localstorage
    companies.push(company); ///add dans le tableau
    localStorage.setItem("companies", JSON.stringify(companies)); //add dans localstorage
    window.location.href = "Register.html";
  }
}

// Ajouter une société avec le bouton //
var btnregister = document.getElementById("add-company");
btnregister.addEventListener("click", registerCompany);

// Ajouter un employé //
function registerEmployee(e) {
  // Empecher le refresh de la page en cliquant sur le bouton //
  e.preventDefault();

  // Récupérer les valeurs des inputs //
  var nom = document.getElementById("employee-last-name");
  var prenom = document.getElementById("employee-first-name");
  var email = document.getElementById("employee-email");
  var adresse = document.getElementById("employee-address");
  var societe = document.getElementById("employee-company");
  var formValid = true;

  // Vérifier les valeurs des inputs //
  if (nom.value == "") {
    nom.classList.remove("is-valid");
    nom.classList.add("is-invalid");
    formValid = false;
  } else {
    nom.classList.remove("is-invalid");
    nom.classList.add("is-valid");
    formValid = true;
  }

  if (prenom.value == "") {
    prenom.classList.remove("is-valid");
    prenom.classList.add("is-invalid");
    formValid = false;
  } else {
    prenom.classList.remove("is-invalid");
    prenom.classList.add("is-valid");
    formValid = true;
  }

  if (email.value == "") {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    formValid = false;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    formValid = true;
  }

  if (adresse.value == "") {
    adresse.classList.remove("is-valid");
    adresse.classList.add("is-invalid");
    formValid = false;
  } else {
    adresse.classList.remove("is-invalid");
    adresse.classList.add("is-valid");
    formValid = true;
  }

  var employee = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    adresse: adresse.value,
  };

  // Ajouter un employé au localStorage //
  if (formValid) {
    var employees = JSON.parse(localStorage.getItem("employees")) || []; /// get element from localstorage
    employees.push(employee); ///add dans le tableau
    localStorage.setItem("employees", JSON.stringify(employees)); //add dans localstorage
    window.location.href = "Dashboard.html";
  }
}

// Ajouter un employé avec le bouton //
var btnregister = document.getElementById("add-employee");
btnregister.addEventListener("click", registerEmployee);

// Selecteur de société //
var selectCompany = document.getElementById("employee-company");
var companiesData = localStorage.getItem("companies");

if (companiesData) {
  var companies = JSON.parse(companiesData);

  for (var company of companies) {
    var option = document.createElement("option");
    option.value = company.nom;
    option.textContent = company.nom;
    selectCompany.appendChild(option);
  }
}
