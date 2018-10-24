'use strict';

import styles from '../scss/styles.scss';

function lettersCheck(char, firstSymbol, lastSymbol) {
  return char.charCodeAt() >= firstSymbol.charCodeAt() &&
    char.charCodeAt() <= lastSymbol.charCodeAt();
}

function symbolsCheck(symbol, allowedSymbols) {
  for (let i = 0; i < allowedSymbols.length; i++) {
    if (symbol.charCodeAt() === allowedSymbols[i].charCodeAt()) {
      return true;
    }
  }
  return false;
}

function checkFilthyLanguage(value) {
  const filthyWords = ['shit', 'crap', 'damn', 'nigger',
    'idiot', 'ass', 'bitch', 'asshole', 'gay'];
  return filthyWords.some((word) => {
    const dirtyWord = new RegExp(word, 'gmi');
    return dirtyWord.test(value);
  });
}

function validateTitle(value) {
  let validStatus = 'INVALID';
  if (checkFilthyLanguage(value)) {
    alert('You used filthy language. Please, change your title!');
    return 'INVALID';
  }
  const allowedSymbols = ['!', ':', '-', '?', '.', ',', ' '];
  const inputTitle = String(value).trim();
  const firstLetter = inputTitle.charAt(0);
  if (firstLetter.toUpperCase() !== firstLetter ||
    inputTitle.length < 3 || inputTitle.length > 19) {
    return validStatus;
  }
  for (let i = 0; i < inputTitle.length; i++) {
    if (isFinite(inputTitle.charAt(i)) && inputTitle.charAt(i) !== ' ') {
      return validStatus;
    }
  }
  for (let i = 0; i < inputTitle.length; i++) {
    validStatus = 'INVALID';
    if (lettersCheck(inputTitle[i], 'A', 'Z') ||
      lettersCheck(inputTitle[i], 'a', 'z') ||
      lettersCheck(inputTitle[i], 'А', 'ё')) {
      validStatus = 'VALID';
      continue;
    }
    if (i > 0 && symbolsCheck(inputTitle[i], allowedSymbols)) {
      validStatus = 'VALID';
      continue;
    }
    return validStatus;
  }
  return validStatus;
}

function checkServer(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };
    xhr.send();
  });
}

function getAllID(json) {
  const serverIds = [];
  const serverData = JSON.parse(json);
  if (!Array.isArray(serverData)) {
    throw new TypeError('Server data is invalid!');
  }
  for (let i = 0; i < serverData.length; i++) {
    if (typeof serverData[i] !== 'object' || !serverData[i].hasOwnProperty('id')) {
      throw new TypeError('Server data is invalid!');
    }
  }
  serverData.forEach((object) => {
    serverIds.push(object.id);
  });
  return serverIds;
}

function setID(arrayID) {
  let id;
  for (let i = 0; i < arrayID.length + 1; i++) {
    if (arrayID[i] !== i + 1) {
      id = i + 1;
    }
  }
  return id;
}

function defineDate() {
  const date = new Date().toString();
  const cutPart = date.split(' ').splice(1, 3);
  return {
    year: cutPart[2],
    month: cutPart[0],
    day: cutPart[1]
  };
}

function createTextObj(text) {
  return {
    field1: text
  };
}

function createDataObject(currentID) {
  const formData = this.elements;
  const dataObject = {};
  dataObject.id = currentID;
  for (let i = 0; i < formData.length; i++) {
    if (formData[i].localName === 'button') {
      continue;
    }
    if (formData[i].name === 'text') {
      dataObject[formData[i].name] = createTextObj(formData[i].value);
      continue;
    }
    dataObject[formData[i].name] = formData[i].value;
  }
  const titleValid = validateTitle(dataObject.title);
  if (titleValid === 'INVALID') {
    throw new TypeError('Title is invalid. Please, enter a valid title value');
  }
  dataObject.date = defineDate();
  console.log(dataObject);
  return dataObject;
}

function sendPostData(body) {
  const request = new XMLHttpRequest();
  request.open('POST', this, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(body));
  return 'post.html' + '?' + body.id;
}

function redirect(url) {
  document.location.href = url;
}

function createPost(form, checkUrl, responseUrl) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    checkServer(checkUrl)
      .then(getAllID)
      .then(setID)
      .then(createDataObject.bind(form))
      .then(sendPostData.bind(responseUrl))
      .then(redirect)
      .catch(error => console.error(error));
  });
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  createPost(document.querySelector('[name=postCreating]'),
    'http://localhost:3000/api/list', 'http://localhost:3000/api/create-article');
});
