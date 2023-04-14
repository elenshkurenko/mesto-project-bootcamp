function getUserInfo() {
  return fetch('https://mesto.nomoreparties.co/v1/wbf-cohort-7/users/me', {
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57'
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function loadCards(){
  return fetch('https://mesto.nomoreparties.co/v1/wbf-cohort-7/cards', {
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57'
    }
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function editProfile(username, aboutUser){
  return fetch('https://mesto.nomoreparties.co/v1/wbf-cohort-7/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: username,
    about: aboutUser
  })
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(data => {
    return data
  })
}

function addNewCard(cardName, cardLink) {
  return fetch('https://mesto.nomoreparties.co/v1/wbf-cohort-7/cards', {
    method: 'POST',
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}
function removeCard(id){
  return fetch(`https://mesto.nomoreparties.co/v1/wbf-cohort-7/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57'
    }
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function addLike(id){
  return fetch(`https://mesto.nomoreparties.co/v1/wbf-cohort-7/cards/likes/${id}`, {
    method: 'PUT',
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57'
    }
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err); 
  }); 
}

function removeLike(id){
  return fetch(`https://mesto.nomoreparties.co/v1/wbf-cohort-7/cards/likes/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57'
    }
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err); 
  }); 
}

function setNewAvatar(avatarlink){
  return fetch('https://nomoreparties.co/v1/wbf-cohort-7/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarlink
    })
  })
    .then(res => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}


export {getUserInfo, loadCards, editProfile, addNewCard, removeCard, addLike, removeLike, setNewAvatar}