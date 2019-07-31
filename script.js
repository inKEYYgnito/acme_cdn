const navLinks = document.querySelectorAll(".nav-link");

const switchView = () => {
    switch(window.location.hash){
    case '#products':
        renderProducts();
        break;
    default:
        renderCompanies();
    }
}

const renderCompanies = () => {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML =`<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Phone</th>
    <th>State</th>
    <th>CatchPhrase</th>
    <th>CreatedAt</th>
    <th>UpdatedAt</th>
  </tr>`
axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
.then(response => tBody.innerHTML += response.data.map(company => `<tr><th scope = "row">${company.id}</th><td>${company.name}</td><td>${company.phone}</td><td>${company.state}</td><td>${company.catchPhrase}</td><td>${company.createdAt}</td><td>${company.updatedAt}</td><tr>`).join(''))
}

const renderProducts = () => {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML =`<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Description</th>
    <th>Suggested Price</th>
    <th>CreatedAt</th>
    <th>UpdatedAt</th>
  </tr>`
    axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
    .then(response => document.querySelector('tbody').innerHTML += response.data.map(company => `<tr><th scope = "row">${company.id}</th><td>${company.name}</td><td>${company.description}</td><td>${company.suggestedPrice}</td><td>${company.createdAt}</td><td>${company.updatedAt}</td><tr>`).join(''))
    }

switchView();










navLinks.forEach(el => el.addEventListener('click', ev => {
    ev.preventDefault();
    window.location.hash = ev.target.hash;
    navLinks.forEach(el=>el.classList.toggle("active"));
}))




window.addEventListener('hashchange', ev=>{
    switchView()
})