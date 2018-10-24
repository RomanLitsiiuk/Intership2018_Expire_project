'use strict';

import styles from '../../../scss/styles.scss';
import {
  createTag,
  Mediator
} from './utils';

class View extends Mediator {
  constructor() {
    super();
    this.wrapper = document.querySelector('main');
    this.renderPortfolio = this.renderPortfolio.bind(this);
    this.renderPostTitles = this.renderPostTitles.bind(this);
    this.activateButtons = this.activateButtons.bind(this);
    this.activateTitles = this.activateTitles.bind(this);
    this.renderArticle = this.renderArticle.bind(this);
  }

  renderPortfolio(authors) {
    const fragment = document.createDocumentFragment();
    const container = createTag('div', 'main-markup__container');
    const row = createTag('div', 'main-markup__row');
    const portfolio = createTag('div', 'portfolio');
    const mainContent = createTag('div', 'portfolio__main-content');
    const authorsBarWrap = createTag('div', 'portfolio__authors-bar-wrap');
    const authorsBar = createTag('div', 'authors-bar', 'authors-bar--primary');
    const articlesWrap = createTag('div', 'portfolio__author-text-wrap', 'clearfix');
    const aside = createTag('div', 'portfolio__aside');
    const asideBar = createTag('div', 'authors-bar', 'authors-bar--secondary');
    authors.forEach((author) => {
      authorsBar.appendChild(View.renderTab(author, 'main'));
      asideBar.appendChild(View.renderTab(author, 'aside'));
    });
    container.appendChild(row).appendChild(portfolio).appendChild(mainContent)
      .appendChild(authorsBarWrap).appendChild(authorsBar);
    mainContent.appendChild(articlesWrap);
    portfolio.appendChild(aside).appendChild(asideBar);
    fragment.appendChild(container);
    this.wrapper.appendChild(fragment);
    authors.forEach((author) => {
      this.publish('renderArticles', author);
    });
    this.activateButtons();
    this.activateTitles();
  }

  static renderTab(author, type) {
    const tab = createTag('div', 'tab');
    const button = createTag('div', 'tab__button');
    const header = createTag('h3', 'tab__header');
    header.append(author);
    const content = createTag('div', 'tab__content');
    content.setAttribute('data-name', author);
    if (type === 'main') {
      content.classList.add('tab__content--main');
    }
    tab.appendChild(button).appendChild(header);
    tab.appendChild(content);
    return tab;
  }

  renderPostTitles(author, titlesArray) {
    const targetElements = document.querySelectorAll(`[data-name=${author}]`);
    targetElements.forEach((element) => {
      titlesArray.forEach((title) => {
        const titleTag = createTag('p', 'tab__name');
        titleTag.append(title);
        element.appendChild(titleTag);
      });
    });
  }

  activateButtons() {
    const buttons = document.querySelectorAll('.tab__button');
    this.publish('activateButtons', buttons);
    buttons.forEach((button) => {
      button.addEventListener('click', ({target}) => {
        this.publish('tabOpen', target.textContent);
      });
    });
  }

  activateTitles() {
    const titles = document.querySelectorAll('.tab__name');
    const articleWrap = document.querySelector('.portfolio__author-text-wrap');
    titles.forEach((title) => {
      title.addEventListener('click', ({target}) => {
        articleWrap.innerHTML = '';
        this.publish('articleOpen', target.textContent);
      });
    });
    titles.forEach((title) => {
      this.subscribe('articleOpen', (data) => {
        title.classList.remove('tab__name--active');
        if (title.textContent === data) {
          title.classList.add('tab__name--active');
        }
      });
    });
  }

  renderArticle(dataObject) {
    const articleWrap = document.querySelector('.portfolio__author-text-wrap');
    const articlePost = createTag('div', 'portfolio__articles');
    const name = createTag('h1', 'main-heading', 'main-heading--about-us');
    const heading = createTag('h2', 'main-heading', 'main-heading--article');
    heading.append(dataObject.title);
    name.append('Author: ' + dataObject.author);
    articlePost.appendChild(name);
    articlePost.appendChild(heading);
    const textObject = dataObject.text;
    const textFields = Object.keys(textObject);
    for (let i = 0; i < textFields.length; i++) {
      if (textFields[i].indexOf('field') > -1) {
        const textBlock = createTag('p', 'article__text');
        textBlock.append(textObject[textFields[i]]);
        articlePost.appendChild(textBlock);
      }
      if (textFields[i].indexOf('blockquote') > -1) {
        const blockqoute = createTag('div', 'highlighted-text');
        const blockqouteText = createTag('p', 'highlighted-text__content');
        blockqouteText.append(textObject[textFields[i]]);
        articlePost.appendChild(blockqoute).appendChild(blockqouteText);
      }
    }
    return articleWrap.appendChild(articlePost);
  }

  render() {
    this.publish('renderPage');
  }
}

export default View;
