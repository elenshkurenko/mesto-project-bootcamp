const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const avatar = profile.querySelector('.profile__avatar');

function updateUserInfo(data){
  username.textContent = data.name;
  aboutUser.textContent = data.about;
  avatar.src = data.avatar;
}

export {updateUserInfo}