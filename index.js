async function addUser() {
    let id = (Math.random() * (0 - 100000)).toString();
    let user = document.createElement('div');
    user.className = 'user';
    user.id = id;
    user.innerHTML = `
    <img id="picture${id}" class="picture"/>
    <div id="cell${id}" class="cell"></div>
    <div id="country${id}" class="country"></div>
    <div id="email${id}" class="email"></div>
    <div id="coords${id}" class="coords"></div>
    `;
    document.getElementById("users").appendChild(user);
    let url = 'https://randomuser.me/api';
    let response = await fetch(url);
    let data = await response.json();
    document.getElementById('picture' + id).src = data.results[0].picture.large;
    document.getElementById('cell' + id).textContent = data.results[0].cell;
    document.getElementById('country' + id).textContent = data.results[0].location.country;
    document.getElementById('email' + id).textContent = data.results[0].email;
    document.getElementById('coords' + id).textContent = data.results[0].location.coordinates.latitude;
}
