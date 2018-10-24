'use strict';

import styles from '../scss/styles.scss';
import jsonObject from './json';
import Post from './post';
import renderModal from './popup';

const content = document.querySelector('.main-markup__container');

function createTag(tagType, ...classList) {
  const tag = document.createElement(tagType);
  for (let i = 0; i < classList.length; i++) {
    tag.classList.add(classList[i] || null);
  }
  return tag;
}

function createFeedback(object, padding) {
  const article = createTag('article', 'mini-post');
  const iconWrap = createTag('div', 'mini-post__icon-wrap');
  if (padding) {
    iconWrap.classList.add('mini-post__icon-wrap--even');
  }
  const icon = createTag('img', 'mini-post__icon');
  icon.setAttribute('src', object.photo);
  icon.setAttribute('alt', object.gender);
  const textWrap = createTag('div', 'mini-post__text-wrap');
  if (padding) {
    textWrap.classList.add('mini-post__text-wrap--even');
  }
  const heading = createTag('h3', 'mini-post__heding');
  heading.append(object.author);
  const text = createTag('p', 'mini-post__text');
  if (padding) {
    text.append(object.comment);
  } else {
    text.append(object.feedback);
  }
  const link = createTag('a', 'mini-post__answer');
  link.setAttribute('href', '#');
  link.append('Reply');
  article.appendChild(iconWrap).appendChild(icon);
  article.appendChild(textWrap).appendChild(heading);
  textWrap.appendChild(text);
  textWrap.appendChild(link);
  return article;
}

function checkArrayOfPosts(array, result = []) {
  if (!Array.isArray(array)) {
    return new Error('Input data is not array. Please, enter a valid array');
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object' || array[i] === null) {
      return new Error('Array objects are invalid. Please, enter a valid objects array');
    }
  }
  const keyName = 'author';
  const additionalKeyName = 'feedback';
  const additionalKeyName2 = 'comment';
  for (let i = 0; i < array.length; i++) {
    const object = array[i];
    const keysArray = Object.keys(object);
    for (let j = 0; j < keysArray.length; j++) {
      if (Array.isArray(object[keysArray[j]])) {
        checkArrayOfPosts(object[keysArray[j]], result);
      }
      if (keysArray[j] === keyName && object.hasOwnProperty(additionalKeyName)) {
        result.push(createFeedback(object));
      }
      if (keysArray[j] === keyName && object.hasOwnProperty(additionalKeyName2)) {
        result.push(createFeedback(object, true));
      }
    }
  }
  return result;
}

function createFeedbacks(feedbacks) {
  const commentsFragment = document.createDocumentFragment();
  if (feedbacks.length > 0 && feedbacks[0] !== '0') {
    checkArrayOfPosts(feedbacks).forEach((element) => {
      commentsFragment.appendChild(element);
    });
  }
  return commentsFragment;
}

function createSlide(data) {
  const slideWrap = createTag('div', 'related-post__page-wrap');
  const hoveredCard = createTag('div', 'hovered-card');
  const figure = createTag('figure', 'hovered-card__figure', 'hovered-card__figure--related');
  const image = createTag('img', 'hovered-card__image', 'hovered-card__image--related');
  image.setAttribute('src', data.imageLink);
  image.setAttribute('alt', data.imageName);
  const sidebar = createTag('div', 'hovered-card__sidebar');
  const sidebarLinks = createTag('div', 'hovered-card__links');
  const link1 = createTag('a', 'hovered-card__link');
  link1.setAttribute('href', '#');
  const link1Style = createTag('span', 'ti-link');
  const link2 = createTag('a', 'hovered-card__link');
  link2.setAttribute('href', '#');
  const link2Style = createTag('span', 'ti-comments');
  const link3 = createTag('a', 'hovered-card__link');
  link3.setAttribute('href', '#');
  const link3Style = createTag('span', 'ti-email');
  slideWrap.appendChild(hoveredCard).appendChild(figure).appendChild(image);
  figure.appendChild(sidebar).appendChild(sidebarLinks);
  sidebarLinks.appendChild(link1).appendChild(link1Style);
  sidebarLinks.appendChild(link2).appendChild(link2Style);
  sidebarLinks.appendChild(link3).appendChild(link3Style);
  return slideWrap;
}

function createSlider(slider) {
  const sliderFragment = document.createDocumentFragment();
  const sliderHeading = createTag('h2', 'main-heading', 'main-heading--post-large',
    'main-heading--underlined');
  sliderFragment.appendChild(sliderHeading);
  const sliderWrap = createTag('div', 'related-post');
  const arrowLeft = createTag('div', 'related-post__arrow', 'related-post__arrow--left');
  const arrowLeftStyle = createTag('span', 'ti-angle-left');
  const arrowRight = createTag('div', 'related-post__arrow', 'related-post__arrow--right');
  const arrowRightStyle = createTag('span', 'ti-angle-right');
  sliderWrap.appendChild(arrowLeft).appendChild(arrowLeftStyle);
  slider.forEach((slide) => sliderWrap.appendChild(createSlide(slide)));
  sliderWrap.appendChild(arrowRight).appendChild(arrowRightStyle);
  return sliderFragment.appendChild(sliderWrap);
}

function createCategory(link) {
  const category = createTag('li', 'category');
  const categoryLink = createTag('a', 'category__link');
  categoryLink.setAttribute('href', link.link);
  categoryLink.append(link.category);
  const categoryAngle = createTag('span', 'category__arrow', 'ti-angle-double-right');
  category.appendChild(categoryLink);
  category.appendChild(categoryAngle);
  return category;
}

function createTags(tag) {
  const tagButton = createTag('a', 'tag');
  tagButton.setAttribute('href', tag.link);
  tagButton.append(tag.tagName);
  return tagButton;
}

function createRecentPost(post) {
  const postWrap = createTag('article', 'recent-post');
  const imageWrap = createTag('div', 'recent-post__image-wrap');
  const image = createTag('img', 'recent-post__image');
  image.setAttribute('src', post.imageLink);
  image.setAttribute('alt', post.imageName);
  const contentText = createTag('div', 'recent-post__content');
  const heading = createTag('h4', 'recent-post__heading');
  heading.append(post.title);
  const dateWrap = createTag('div', 'recent-post__date-wrap');
  const dateIcon = createTag('span', 'recent-post__symbol', 'ti-calendar');
  const date = createTag('p', '');
  date.append(post.date);
  postWrap.appendChild(imageWrap).appendChild(image);
  postWrap.appendChild(contentText).appendChild(heading);
  contentText.appendChild(dateWrap);
  dateWrap.appendChild(dateIcon);
  dateWrap.appendChild(date);
  return postWrap;
}

function createHashtag(hashtag) {
  const hashtagFragment = document.createDocumentFragment();
  const hashtagHeading = createTag('h3', 'aside__heading');
  hashtagHeading.append(hashtag.title);
  const hashtagsWrap = createTag('div', 'hashtags');
  const hashtagIconWrap = createTag('a', 'hashtags__icon');
  const hashtagIcon = createTag('span', hashtag.icon);
  const hashtag1 = createTag('a', 'hashtags__text', 'hashtags__text--link', 'hashtags__text--bold');
  hashtag1.setAttribute('href', hashtag.link1);
  hashtag1.append(hashtag.linkName1);
  const text = createTag('p', 'hashtags__text');
  text.append(hashtag.text);
  const hashtag2 = createTag('a', 'hashtags__text--link');
  hashtag2.setAttribute('href', hashtag.link2);
  hashtag2.append(hashtag.linkName2);
  const hashtag3 = createTag('a', 'hashtags__text', 'hashtags__text--link', 'hashtags__text--bold');
  hashtag3.setAttribute('href', hashtag.link3);
  hashtag3.append(hashtag.linkName3);
  hashtagsWrap.appendChild(hashtagIconWrap).appendChild(hashtagIcon);
  hashtagsWrap.appendChild(hashtag1);
  hashtagsWrap.appendChild(text).appendChild(hashtag2);
  hashtagsWrap.appendChild(hashtag3);
  hashtagFragment.appendChild(hashtagHeading);
  hashtagFragment.appendChild(hashtagsWrap);
  return hashtagFragment;
}

function createAside(object) {
  const asideFragment = document.createDocumentFragment();
  const asideWrap = createTag('div', 'post-section__aside-wrap');
  const asideContainer = createTag('aside', 'aside__search-wrap');
  const searchWrap = createTag('form', 'form');
  const form = createTag('div', 'form__input-wrap');
  const label = createTag('label', 'form__label');
  label.setAttribute('for', 'search');
  const input = createTag('input', 'form__input', 'form__input--search');
  input.setAttribute('type', 'search');
  input.setAttribute('id', 'search');
  input.setAttribute('placeholder', 'Search');
  const searchIcon = createTag('span', 'form__special-icon', 'ti-search');
  const asideHeading = createTag('h3', 'aside__heading');
  asideHeading.append('Categories');
  const categoriesWrap = createTag('ul', 'aside__categories-wrap');
  object.categories.forEach((category) => categoriesWrap.appendChild(createCategory(category)));
  const tagsWrap = createTag('div', 'aside__tags-wrap');
  const tagsHeading = createTag('h3', 'aside__heading');
  tagsHeading.append('Tags');
  object.tags.forEach((tag) => tagsWrap.appendChild(createTags(tag)));
  const recentPostsHeading = createTag('h3', 'aside__heading');
  const recentPostsWrap = createTag('div', 'aside__recent-posts-wrap');
  object.recentPosts.forEach((recentPost) => {
    recentPostsWrap.appendChild(createRecentPost(recentPost));
  });
  asideWrap.appendChild(asideContainer).appendChild(searchWrap).appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(searchIcon);
  asideContainer.appendChild(asideHeading);
  asideContainer.appendChild(categoriesWrap);
  asideContainer.appendChild(tagsHeading);
  asideContainer.appendChild(tagsWrap);
  asideContainer.appendChild(recentPostsHeading);
  asideContainer.appendChild(recentPostsWrap);
  object.hashtags.forEach((hashtag) => {
    asideContainer.appendChild(createHashtag(hashtag));
  });
  asideFragment.appendChild(asideWrap);
  return asideFragment;
}

function createPost(post) {
  const postFragment = document.createDocumentFragment();
  const rowWithPost = createTag('div', 'main-markup__row');
  const postWrap = createTag('section', 'post-section');
  postWrap.appendChild(new Post(post, 'full').render());
  postWrap.appendChild(createAside(jsonObject));
  rowWithPost.appendChild(postWrap);
  return postFragment.appendChild(rowWithPost);
}

function createLinks(links) {
  const navigationFragment = document.createDocumentFragment();
  const navigationHeading = createTag('h3', 'main-heading', 'main-heading--post-small',
    'main-heading--underlined');
  navigationHeading.append('Share with your friends');
  const socialNetworks = createTag('ul', 'social-networks', 'social-networks--post');
  for (let i = 0; i < links.length - 1; i++) {
    const linkWrap = createTag('li', 'social-networks__list-item');
    const link = createTag('a', 'social-networks__link');
    link.setAttribute('href', links[i].link);
    const icon = createTag('span', links[i].icon);
    socialNetworks.appendChild(linkWrap).appendChild(link).appendChild(icon);
  }
  const pagination = createTag('div', 'pagination', 'pagination--post');
  const buttonLeft = createTag('button', 'pagination__button');
  const leftAngle = createTag('span', 'pagination__button-arrow', 'ti-angle-left');
  const hoveredTextLeft = createTag('span', 'pagination__button-hover-text');
  hoveredTextLeft.append('Previous post');
  const buttonRight = createTag('button', 'pagination__button');
  const rightAngle = createTag('span', 'pagination__button-arrow', 'ti-angle-right');
  const hoveredTextRight = createTag('span', 'pagination__button-hover-text');
  hoveredTextRight.append('Next post');
  buttonLeft.appendChild(leftAngle);
  buttonLeft.appendChild(hoveredTextLeft);
  buttonRight.appendChild(rightAngle);
  buttonRight.appendChild(hoveredTextRight);
  pagination.appendChild(buttonLeft);
  pagination.appendChild(buttonRight);
  navigationFragment.appendChild(navigationHeading);
  navigationFragment.appendChild(socialNetworks);
  navigationFragment.appendChild(pagination);
  return navigationFragment;
}

function formAdd() {
  const form = createTag('form', 'form', 'form--post');
  const userDataWrap = createTag('div', 'form__user-data-wrap');
  const inputUserWrap = createTag('div', 'form__input-wrap', 'form__input-wrap--margin');
  const textLabel = createTag('label', 'form__label');
  textLabel.setAttribute('for', 'text');
  const textInput = createTag('input', 'form__input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'text');
  textInput.setAttribute('placeholder', 'Name');
  const emailWrap = createTag('div', 'form__input-wrap', 'form__input-wrap--margin');
  const emailLabel = createTag('label', 'form__label');
  emailLabel.setAttribute('for', 'email');
  const emailInput = createTag('input', 'form__input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('placeholder', 'E-mail');
  const messageWrap = createTag('div', 'form__message-wrap');
  const inputWrap = createTag('div', 'form__input-wrap', 'form__input-wrap--margin');
  const messageLabel = createTag('label', 'form__label', 'form__label--message');
  messageLabel.setAttribute('for', 'textarea');
  const textarea = createTag('textarea', 'form__input', 'form__input--message');
  textarea.setAttribute('id', 'textarea');
  textarea.setAttribute('placeholder', 'Message');
  form.appendChild(userDataWrap).appendChild(inputUserWrap).appendChild(textLabel);
  inputUserWrap.appendChild(textInput);
  userDataWrap.appendChild(emailWrap).appendChild(emailLabel);
  emailWrap.appendChild(emailInput);
  form.appendChild(messageWrap).appendChild(inputWrap).appendChild(messageLabel);
  inputWrap.appendChild(textarea);
  return form;
}

function checkSource() {
  const url = window.location.href;
  let id;
  const charPosition = url.indexOf('?');
  if (charPosition > -1) {
    id = +url.substring(charPosition + 1);
  }
  return id;
}

function getPost(data) {
  const targetID = checkSource();
  const array = JSON.parse(data);
  let result;
  array.forEach((element) => {
    if (element.hasOwnProperty('id') && +element.id === targetID) {
      result = element;
    }
    return result;
  });
  content.appendChild(createPost(result));
  return result;
}

function renderPost(url) {
  return new Promise(function (resolve) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(this.response);
      }
    };
    xhr.send();
  });
}

function renderAdditionalInformation(post) {
  const wrapper = document.querySelector('.post-section__main-block');
  const wrapperAppend = document.createDocumentFragment();
  wrapperAppend.appendChild(createLinks(jsonObject.socialNetworks));
  if (Array.isArray(post.comments) && typeof post.comments[0] === 'object') {
    wrapperAppend.appendChild(createFeedbacks(post.comments));
  }
  wrapperAppend.appendChild(formAdd());
  wrapperAppend.appendChild(createSlider(jsonObject.slider));
  wrapper.appendChild(wrapperAppend);
}

function addSubscribeModal() {
  setTimeout(() => {
    renderModal(null, {
      type: 'confirm',
      closeX: true,
      style: 'info',
      title: 'Confirm the action!',
      info: 'Subscribe to this blog and get new updates first!',
      ok: 'Yes!',
      cancel: 'No, thanks'
    });
  }, 10000);
}

document.addEventListener('DOMContentLoaded', function () {
  const postID = checkSource();
  if (isFinite(postID)) {
    renderPost('http://localhost:3000/api/list')
      .then(getPost)
      .then(renderAdditionalInformation)
      .catch((err) => console.log(err));
  } else {
    content.appendChild(createPost(jsonObject.posts[0]));
    renderAdditionalInformation(jsonObject.posts[0]);
  }
  addSubscribeModal();
});
