import { settingsApi } from "../utils/utils";

class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  getUserProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  setUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.formName,
        about: data.formJob,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponseData);
  }

  // delCard(cardId) {
  //   return fetch(`${this._url}/cards/${cardId}`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then(this._getResponseData);
  // }

  delCard(cardId, isOwner) {
    return isOwner
      ? fetch(`${this._url}/cards/${cardId}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._getResponseData)
      : null;
  }

  _addLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  _delLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this._addLikeCard(id) : this._delLikeCard(id);
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      }),
    }).then(this._getResponseData);
  }
}

const api = new Api(settingsApi);
export default api;

// fetch('https://mesto.nomoreparties.co/v1/cohort-47', {
//       method: 'POST',
//       headers: {
//       authorization: 'e4f550f7-85d7-46b0-9c73-72a0998caf95',
//       'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: 'что-то',
//         link: 'https://raspechatat-raskraski.ru/wp-content/uploads/2021/01/10.jpg'
//       })
//     })
