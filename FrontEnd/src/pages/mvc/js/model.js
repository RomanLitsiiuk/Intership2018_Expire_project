'use strict';

import {Mediator} from './utils';

class Model extends Mediator {
  constructor(url) {
    super();
    this.url = url;
    this.list = Model.checkServer(this.url);
  }

  static checkServer(url) {
    let result;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status === 200) {
      return JSON.parse(xhr.response);
    } else {
      console.log(xhr.status + ' : ' + xhr.statusText);
    }
    return result;
  }

  getItem(title) {
    return this.list.find((object) => {
      return object.title === title;
    });
  }

  checkAuthors(data) {
    const authors = [];
    data.forEach((post) => {
      if (authors.indexOf(post.author) === -1) {
        authors.push(post.author);
      }
    });
    return authors;
  }

  createArticleLists(dataArray, author) {
    const result = [];
    dataArray.forEach((post) => {
      if (post.author.indexOf(author) > -1) {
        result.push(post.title);
      }
    });
    return result;
  }
}

export default Model;
