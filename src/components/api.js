import {checkResponse} from './utils.js'

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
  .then(checkResponse)
}

function loadCards(){
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(checkResponse)
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
  .then(checkResponse)
  .then(data => {
    return data
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
  .then(checkResponse)
}

function removeCard(id){
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

function addLike(id){
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(checkResponse)
}

function removeLike(id){
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

function setNewAvatar(avatarlink){
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarlink
    })
  })
  .then(checkResponse)
}

export {getUserInfo, loadCards, editProfile, addNewCard, removeCard, addLike, removeLike, setNewAvatar}