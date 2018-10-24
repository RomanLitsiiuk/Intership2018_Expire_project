'use strict';

import styles from '../scss/styles.scss';
import Post from './post';
import renderModal from './popup';
const serverUrl = 'http://localhost:3000/api/list';

function createTag(tagType, ...classList) {
  const tag = document.createElement(tagType);
  for (let i = 0; i < classList.length; i++) {
    tag.classList.add(classList[i] || null);
  }
  return tag;
}

function createPagination(pages) {
  if (pages <= 1) {
    const basement = createTag('div', '');
    basement.style.paddingBottom = '100px';
    return basement;
  }
  const paginationRow = createTag('div', 'main-markup__row');
  const paginationWrap = createTag('div', 'pagination', 'pagination--blog');
  const button = createTag('button', 'pagination__button');
  const buttonContent = createTag('span', 'pagination__button-arrow', 'ti-angle-right');
  const buttonHoveredContent = createTag('span', 'pagination__button-hover-text');
  buttonHoveredContent.append('Next page');
  button.appendChild(buttonContent);
  button.appendChild(buttonHoveredContent);
  for (let i = 1; i <= pages; i++) {
    const page = createTag('a', 'pagination__page');
    page.setAttribute('href', '#');
    page.append(i);
    paginationWrap.appendChild(page);
  }
  paginationWrap.appendChild(button);
  paginationRow.appendChild(paginationWrap);
  return paginationRow;
}

function renderPosts(postsData) {
  if (!postsData) {
    return [];
  }
  return postsData.map(post => {
    return new Post(post, 'preview').render();
  });
}

function checkServer(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
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

function filterByAuthor(posts, name) {
  return posts.filter((post) => {
    return post.author.toLowerCase() === name;
  });
}

function filterByTitle(posts, title) {
  return posts.filter((post) => {
    return post.title.toLowerCase().includes(title);
  });
}

function filter(searchParams, serverPosts) {
  const name = searchParams.author.trim().toLowerCase();
  const title = searchParams.title.trim().toLowerCase();
  let result = serverPosts;
  if (name === '' && title === '') {
    result = [];
  }
  if ((!isFinite(name) || !(name === '')) && Array.isArray(result) && name !== '') {
    result = filterByAuthor(result, name);
  }
  if (typeof title === 'string' && Array.isArray(result) && title !== '') {
    result = filterByTitle(result, title);
  }
  if (result.length < 2) {
    renderModal(null, {
      type: 'alert',
      style: 'info',
      title: 'No results Found',
      info: '',
      ok: 'Ok'
    });
  }
  return result;
}

function checkFormData(form) {
  const formData = form;
  const searchData = {};
  for (let i = 0; i < formData.length; i++) {
    if (formData[i].localName === 'button') {
      continue;
    }
    searchData[formData[i].id.trim()] = formData[i].value.trim();
  }
  return searchData;
}

function showLimitPosts(posts) {
  const content = document.querySelector('.main-markup__blogs-wrap');
  const pagination = content.querySelector('.pagination--blog').parentElement;
  content.innerHTML = '';
  content.appendChild(pagination);
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    fragment.appendChild(post);
  });
  window.scrollTo(0, 0);
  return content.insertBefore(fragment, pagination);
}

function activatePagination(posts, limit, pagesElement) {
  const pages = pagesElement.querySelectorAll('.pagination__page');
  const nextPage = pagesElement.querySelector('.pagination__button');
  pages.forEach(button => {
    button.addEventListener('click', (event) => {
      const pressedButton = +event.target.innerHTML;
      const lastSlide = pressedButton * limit;
      const firstSlide = lastSlide - limit;
      const currentPosts = posts.slice(firstSlide, lastSlide);
      showLimitPosts(currentPosts);
    });
  });
  nextPage.addEventListener('click', () => {
    const currentPost = document.querySelector('.main-markup__blogs-wrap')
      .querySelectorAll('.main-markup__row')[limit - 1];
    const currentLastIndex = posts.indexOf(currentPost);
    if (currentLastIndex > -1) {
      showLimitPosts(posts.slice(currentLastIndex + 1, currentLastIndex + 1 + limit));
    }
  });
}

function activateDeleteBtn(button) {
  button.addEventListener('click', (event) => {
    renderModal(event.target, {
      type: 'confirm',
      closeX: true,
      style: 'info',
      title: 'Confirm the action!',
      info: 'Are you sure you want to delete this post?',
      ok: 'Delete'
    });
  });
}

function delegatePosts(posts) {
  const deleteButtons = posts.map((post) => {
    return post.querySelector('.button--delete');
  });

  deleteButtons.forEach((button) => {
    activateDeleteBtn(button);
  });
}

function showPosts(posts) {
  const pageCapacity = 5;
  const content = document.querySelector('.main-markup__blogs-wrap');
  if (posts === []) {
    content.innerHTML = '';
    return;
  }
  content.innerHTML = '';
  const fragment = document.createDocumentFragment();
  if (posts.length > pageCapacity) {
    for (let i = 0; i < pageCapacity; i++) {
      fragment.appendChild(posts[i]);
    }
  } else {
    for (let i = 0; i < posts.length; i++) {
      fragment.appendChild(posts[i]);
    }
  }
  const pagination = createPagination(Math.ceil(posts.length / pageCapacity));
  fragment.appendChild(pagination);
  if (!pagination.classList.contains('null')) {
    activatePagination(posts, pageCapacity, pagination);
  }
  delegatePosts(posts);
  content.appendChild(fragment);
}

function postFilter(form, url) {
  form.addEventListener('submit', event => {
    const searchData = checkFormData(form);
    event.preventDefault();
    return checkServer(url)
      .then(filter.bind(null, searchData))
      .then(renderPosts)
      .then(showPosts)
      .catch((err) => console.log(err));
  });
}

function deletePostByID(url, id) {
  return fetch(url + '/' + id, {method: 'DELETE'})
    .then((response) => {
      return response.json();
    })
    .then(renderPosts)
    .then(showPosts)
    .catch(error => console.error(error));
}

function listenModalAnswer() {
  const modalAnswer = document.querySelector('.modal__window-answer');
  modalAnswer.addEventListener('click', () => {
    const deleteID = modalAnswer.value;
    if (isFinite(deleteID)) {
      deletePostByID(serverUrl, deleteID);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  checkServer('http://localhost:3000/api/list')
    .then(renderPosts)
    .then(showPosts)
    .then(listenModalAnswer)
    .catch((err) => {
      renderModal(null, {
        type: 'alert',
        style: 'error',
        title: 'Error! Server is not avaliable!',
        info: '',
        ok: 'Ok'
      });
    });
  const searchForm = document.querySelector('[name=postFilter]');
  postFilter(searchForm, serverUrl);
});
