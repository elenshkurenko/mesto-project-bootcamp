const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-7',
  headers: {
    authorization: '73c9eeaa-e096-4c6c-9b04-d0a45e0a4e57',
    'Content-Type': 'application/json'
  }
}

function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  }) 
}

function loadCards(){
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  }) 
}

function editProfile(username, aboutUser){
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
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
  .catch((err) => {
    console.log(err);
  }) 
}

function addNewCard(cardName, cardLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
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
  .catch((err) => {
    console.log(err);
  }) 
}

function removeCard(id){
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  }) 
}

function addLike(id){
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
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
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
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
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
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
  .catch((err) => {
    console.log(err);
  })
}

export {getUserInfo, loadCards, editProfile, addNewCard, removeCard, addLike, removeLike, setNewAvatar}