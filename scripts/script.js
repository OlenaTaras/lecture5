window.onload = function () {
  usersData.data.forEach((user) => {
    insertUsers(user);
})

  for (let i = 0; usersContainer.children.length; i++) {
    usersContainer.children[i].addEventListener('click', onClick)
  }

};

let usersContainer = document.getElementById('users-container');
let userContainer = document.getElementById('user-container');

function insertUsers(user) {
  let div = document.createElement('div');
  div.className = 'user-data ptr';
  div.innerHTML = `<span>${user.name}</span> ${user.age}`;
  usersContainer.appendChild(div);
  div.firstChild.setAttribute('id', user.index);
}

function getCurrentUserData(id) {
  return usersData.data.filter((user) => user.index == id
)
}

function onClick(event) {
  let selectedUser = new User(getCurrentUserData(event.target.getAttribute('id'))[0]);
  let div = document.createElement('div');
  div.className = 'user-data';
  div.innerText = `${selectedUser.getName()}`;
  console.log(div);
  console.log(userContainer.getElementsByClassName('user-data'));
  userContainer.appendChild(div);
}

class User {
  constructor(user) {
    this.name = user.name
  }

  getName() {
    return this.name
  }
}

