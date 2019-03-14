let usersDataContainer = document.getElementById('users-container');
let userDataContainer = document.getElementById('user-container');

function insertUserNode(userData) {
    let div = document.createElement('div');
    div.className = 'user-data ptr';
    div.setAttribute('id', userData.index);
    div.innerHTML = `${userData.name}`;
    usersDataContainer.appendChild(div);
}

function getUserById(event) {
    let usersId = event.target.getAttribute('id');
   return usersData.data.filter((user) => user.index == usersId)[0]
}

usersData.data.forEach((user) => {
    insertUserNode(user);
});

for (let i = 0; i< usersDataContainer.children.length; i++) {
    usersDataContainer.children[i].addEventListener('click', (event) => {
        let selectedUser = new User(getUserById(event));

        let div = document.createElement('div');
        div.innerHTML = `${selectedUser.getGender()}`;
        userDataContainer.appendChild(div);
    })
}

class User {
    constructor(userData) {
        this.gender = userData.gender;
    }
    getGender() {return this.gender}
}

console.log(usersDataContainer.children);

