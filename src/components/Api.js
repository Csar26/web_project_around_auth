/*2d081123-97ed-4275-a38c-78637871cb43*/
export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getCards() {
    return fetch(this._url + "/cards", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  updateUser(name, about) {
    return fetch(this._url + "/users/me", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((response) => response.json());
  }

  addCard(link, title) {
    return fetch(this._url + "/cards", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: title,
        link,
      }),
    }).then((response) => response.json());
  }

  deleteCard(idcard) {
    return fetch(this._url + "/cards/" + idcard, {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }

  likeCard(idcard) {
    return fetch(this._url + "/cards/likes/" + idcard, {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((response) => response.json());
    
  }

  deleteLikeCard(idcard) {
    return fetch(this._url + "/cards/likes/" + idcard, {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }

changeAvatar(avatar){
  return fetch(this._url + "/users/me/avatar", {
    headers: {
      Authorization: this._token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar
    }),
    method: "PATCH",
  }).then((response) => response.json());
}

}

