'use strict';

import styles from '../scss/styles.scss';
import jsonObject from './json';
import Slider from './slider';
import Post from './post';
import renderModal from './popup';

function createTag(tagType, ...classList) {
  const tag = document.createElement(tagType);
  for (let i = 0; i < classList.length; i++) {
    tag.classList.add(classList[i] || null);
  }
  return tag;
}

function headerSlide(slideData) {
  const slide = createTag('div', 'header-slider__slide');
  const heading1 = createTag('h1', 'main-heading');
  heading1.append(slideData.name);
  const figuredLine = createTag('span', 'figured-border', 'figured-border--header');
  heading1.appendChild(figuredLine);
  const heading2 = createTag('h2', 'main-heading', 'main-heading--home-page');
  heading2.append(slideData.title);
  const buttonsWrap = createTag('div', 'header-slider__buttons-wrap');
  const button1 = createTag('div', 'header-button');
  const link1 = createTag('a', 'header-button__link');
  link1.setAttribute('href', slideData.link1);
  link1.append(slideData.button1);
  button1.appendChild(link1);
  const button2 = createTag('div', 'header-button');
  const link2 = createTag('a', 'header-button__link');
  link2.setAttribute('href', slideData.link2);
  link2.append(slideData.button2);
  buttonsWrap.appendChild(button1);
  buttonsWrap.appendChild(button2);
  button2.appendChild(link2);
  slide .appendChild(heading1);
  slide .appendChild(heading2);
  slide .appendChild(buttonsWrap);
  return slide;
}

function createPoint(points) {
  const pointsWrap = createTag('div', 'header-slider__points-wrap');
  for (let i = 0; i < points; i++) {
    const point = createTag('div', 'header-slider__point');
    pointsWrap.appendChild(point);
  }
  pointsWrap.firstElementChild.classList.add('header-slider__point--active');
  return pointsWrap;
}

function renderHeaderSlider(sliderData) {
  const sliderRow = createTag('div', 'header__row');
  const sliderWrap = createTag('div', 'header__slider-wrap');
  const slider = createTag('div', 'header-slider');
  const prevButton = createTag('div', 'header-slider__button', 'header-slider__button--back');
  const prevButtonSymbol = createTag('span', 'ti-angle-left');
  const nextButton = createTag('div', 'header-slider__button', 'header-slider__button--next');
  const nextButtonSymbol = createTag('span', 'ti-angle-right');
  const tape = createTag('div', 'header-slider__tape');
  const slidesWrap = createTag('div', 'header-slider__slides-wrap');
  sliderWrap.appendChild(slider).appendChild(prevButton).appendChild(prevButtonSymbol);
  sliderData.forEach((slide) => {
    slidesWrap.appendChild(headerSlide(slide));
  });
  sliderRow.appendChild(sliderWrap).appendChild(slider).appendChild(prevButton)
    .appendChild(prevButtonSymbol);
  slider.appendChild(tape).appendChild(slidesWrap);
  tape.appendChild(createPoint(sliderData.length));
  slider.appendChild(nextButton).appendChild(nextButtonSymbol);
  return sliderRow;
}

function createAboutUsPost(post) {
  const column = createTag('div', 'about-us__column-wrap');
  const article = createTag('article', 'service-block');
  const articleContent = createTag('div', 'service-block__content');
  const symbolWrap = createTag('div', 'service-block__symbol');
  const symbol = createTag('span', post.symbol);
  const heading = createTag('h3', 'service-block__heading');
  heading.append(post.title);
  const paragraph = createTag('p', 'service-block__text');
  paragraph.append(post.text);
  column.appendChild(article).appendChild(articleContent).appendChild(symbolWrap)
    .appendChild(symbol);
  articleContent.appendChild(heading);
  articleContent.appendChild(paragraph);
  return column;
}

function renderAboutUs(data) {
  const aboutUsWrap = createTag('section', 'about-us');
  const aboutUsContainer = createTag('div', 'about-us__container');
  const aboutUsContent = createTag('div', 'about-us__content-wrap');
  const heading = createTag('h2', 'main-heading', 'main-heading--about-us');
  heading.append('About Us');
  const text = createTag('p', 'about-us__under-heading-text');
  text.append('This is who we are - or at least who we strive to be...');
  const contentRow = createTag('div', 'about-us__row');
  const column = createTag('div', 'about-us__column-wrap');
  const mainText = createTag('p', 'about-us__text');
  mainText.append('If you can\'t explain it simply, you don\'t understand it well enough.');
  const button = createTag('a', 'about-us__button');
  button.append('The more you know ');
  const buttonArrow = createTag('span', 'ti-arrow-right');
  button.appendChild(buttonArrow);
  aboutUsWrap.appendChild(aboutUsContainer).appendChild(aboutUsContent).appendChild(heading);
  aboutUsContent.appendChild(text);
  aboutUsContainer.appendChild(contentRow).appendChild(column).appendChild(mainText);
  column.appendChild(button);
  data.forEach((post) => contentRow.appendChild(createAboutUsPost(post)));
  return aboutUsWrap;
}

function createBlockquote(blockquote) {
  const blockquoteFragment = document.createDocumentFragment();
  const row1 = createTag('div', 'paralax-section__row');
  const row2 = createTag('div', 'paralax-section__row');
  const text = createTag('blockquote', 'paralax-section__quote');
  text.append(blockquote.blockquote);
  const author = createTag('cite', 'paralax-section__author');
  author.append(blockquote.author);
  blockquoteFragment.appendChild(row1).appendChild(text);
  blockquoteFragment.appendChild(row2).appendChild(author);
  return blockquoteFragment;
}

function renderParalaxSection(data) {
  const paralaxSection = createTag('section', 'paralax-section');
  const background = createTag('div', 'paralax-section__background');
  const container = createTag('div', 'paralax-section__container');
  const row1 = createTag('div', 'paralax-section__row');
  const heading = createTag('h2', 'paralax-section__heading');
  heading.append('Paralax section');
  const row2 = createTag('div', 'paralax-section__row');
  const text = createTag('p', 'paralax-section__under-heading-text');
  text.append('Exploring the unexplored is a risky business, but a rewarding one.');
  paralaxSection.appendChild(background).appendChild(container).appendChild(row1)
    .appendChild(heading);
  container.appendChild(row2).appendChild(text);
  data.forEach((blockquote) => container.appendChild(createBlockquote(blockquote)));
  return paralaxSection;
}

function createStatisticCard(data) {
  const card = createTag('div', 'statistic-card');
  const iconWrap = createTag('span', 'statistic-card__icon');
  const icon = createTag('span', data.icon);
  const statistic = createTag('div', 'statistic-card__amount');
  const amount = createTag('p', '');
  amount.append(data.statistic);
  const name = createTag('h4', 'statistic-card__name');
  name.append(data.name);
  card.appendChild(iconWrap).appendChild(icon);
  card.appendChild(statistic).appendChild(amount);
  statistic.appendChild(name);
  return card;
}

function renderStatistics(statistics) {
  const statisticsWrap = createTag('div', 'statistics-wrap');
  const statisticsContainer = createTag('div', 'statistics-wrap__container');
  const row = createTag('div', 'statistics-wrap__row');
  statisticsWrap.appendChild(statisticsContainer).appendChild(row);
  statistics.forEach((statistic) => row.appendChild(createStatisticCard(statistic)));
  return statisticsWrap;
}

function renderLatestSlider(sliderData) {
  const mainSection = createTag('section', 'latest-blog-wrap');
  const container = createTag('div', 'latest-blog-wrap__container');
  const row1 = createTag('div', 'latest-blog-wrap__row');
  const headingWrap = createTag('div', 'latest-blog-wrap__heading-wrap');
  const heading = createTag('h2', 'main-heading', 'main-heading--latest-blog');
  heading.append('Latest Blog Posts');
  const row2 = createTag('div', 'latest-blog-wrap__row');
  const textWrap = createTag('div', 'latest-blog-wrap__text-wrap');
  const text = createTag('p', 'latest-blog-wrap__text');
  text.append('Information is a source of learning. But unless it is organized, processed,\n' +
    'and available to the right people in a format for decision making, it is a burden,' +
    'not a benefit.');
  const sliderWrap = createTag('div', 'latest-blog-wrap__slider-wrap');
  const slider = createTag('div', 'latest-slider', 'clearfix');
  const prevButton = createTag('button', 'latest-slider__button', 'latest-slider__button--back');
  const leftArrow = createTag('span', 'ti-angle-left');
  const nextButton = createTag('button', 'latest-slider__button', 'latest-slider__button--next');
  const rightArrow = createTag('span', 'ti-angle-right');
  const sliderTape = createTag('div', 'latest-slider__tape');
  const slidesWrap = createTag('div', 'latest-slider__slides-wrap', 'clearfix');
  mainSection.appendChild(container).appendChild(row1).appendChild(headingWrap)
    .appendChild(heading);
  container.appendChild(row2).appendChild(textWrap).appendChild(text);
  container.appendChild(sliderWrap).appendChild(slider)
    .appendChild(prevButton).appendChild(leftArrow);
  slider.appendChild(sliderTape).appendChild(slidesWrap);
  sliderData.forEach((slide) => {
    if (slide.hasOwnProperty('imageLink')) {
      slidesWrap.appendChild(new Post(slide, 'slide').render());
    }
  });
  slider.appendChild(nextButton).appendChild(rightArrow);
  return mainSection;
}

function createHoveredCard(data) {
  const hoveredCard = createTag('figure', 'hovered-card', 'hovered-card--latest');
  const figure = createTag('div', 'hovered-card__figure');
  const image = createTag('img', 'hovered-card__image', 'hovered-card__image--latest');
  image.setAttribute('src', data.imageLink);
  image.setAttribute('alt', data.imageName);
  const sidebar = createTag('div', 'hovered-card__sidebar');
  const linksWrap = createTag('div', 'hovered-card__links', 'hovered-card__links--latest');
  const link1 = createTag('a', 'hovered-card__link');
  link1.setAttribute('href', '#');
  const linkSymbol1 = createTag('span', 'ti-link');
  const link2 = createTag('a', 'hovered-card__link');
  link2.setAttribute('href', '#');
  const linkSymbol2 = createTag('span', 'ti-zoom-in');
  const textWrap = createTag('div', 'hovered-card__text-wrap');
  const heading = createTag('h4', 'hovered-card__name');
  heading.append(data.title);
  const category = createTag('p', 'hovered-card__category');
  category.append(data.category);
  hoveredCard.appendChild(figure).appendChild(image);
  figure.appendChild(sidebar).appendChild(linksWrap).appendChild(link1).appendChild(linkSymbol1);
  linksWrap.appendChild(link2).appendChild(linkSymbol2);
  figure.appendChild(textWrap).appendChild(heading);
  textWrap.appendChild(category);
  return hoveredCard;
}

function renderPortfolio(cards) {
  const latestSection = createTag('section', 'latest-portfolio');
  const latestmain = createTag('div', 'latest-portfolio__main');
  const latestContainer = createTag('div', 'latest-portfolio__container');
  const row = createTag('div', 'latest-portfolio__row');
  const headingWrap = createTag('div', 'latest-portfolio__heading-wrap');
  const heading = createTag('h2', 'main-heading', 'main-heading--latest-blog');
  heading.append('Latest portfolio');
  const background = createTag('div', 'latest-portfolio__content-background');
  const contentWrap = createTag('div', 'latest-portfolio__content-wrap');
  latestSection.appendChild(latestmain).appendChild(latestContainer).appendChild(row)
    .appendChild(headingWrap).appendChild(heading);
  latestSection.appendChild(background).appendChild(contentWrap);
  cards.forEach((card) => contentWrap.appendChild(createHoveredCard(card)));
  const buttonContainer = createTag('div', 'latest-portfolio__container');
  const row2 = createTag('div', 'latest-portfolio__row');
  const buttonWrap = createTag('div', 'latest-portfolio__button-wrap');
  const button = createTag('a', 'button');
  button.setAttribute('href', '#');
  button.append('View more');
  latestSection.appendChild(buttonContainer).appendChild(row2).appendChild(buttonWrap)
    .appendChild(button);
  return latestSection;
}

function createPartnerCard(data) {
  const card = createTag('li', 'partners-wrap__card');
  const link = createTag('a', 'partner');
  link.setAttribute('href', data.link);
  const logo = createTag('div', 'partner__logo', data.name);
  card.appendChild(link).appendChild(logo);
  return card;
}

function renderPartners(partners) {
  const partnersWrap = createTag('div', 'partners-wrap');
  const container = createTag('div', 'partners-wrap__container');
  const partnersRow = createTag('ul', 'partners-wrap__row');
  partnersWrap.appendChild(container).appendChild(partnersRow);
  partners.forEach((partner) => partnersRow.appendChild(createPartnerCard(partner)));
  return partnersWrap;
}

function createTab(tab) {
  const fullTab = createTag('div', 'others-slider__slide');
  const imageWrap = createTag('div', 'tabbed-block__image-wrap');
  const image = createTag('img', 'tabbed-block__image');
  image.setAttribute('src', tab.photo);
  image.setAttribute('alt', tab.gender);
  const textWrap = createTag('div', 'tabbed-block__text-wrap');
  const position = createTag('span', 'tabbed-block__position');
  position.append(tab.position);
  const heading = createTag('h3', 'tabbed-block__name');
  heading.append(tab.author);
  heading.appendChild(position);
  const message = createTag('p', 'tabbed-block__text');
  message.append(tab.message);
  fullTab.appendChild(imageWrap).appendChild(image);
  fullTab.appendChild(textWrap).appendChild(heading);
  textWrap.appendChild(message);
  return fullTab;
}

function createTabPoints(count) {
  const pointsWrap = createTag('div', 'others-slider__points-wrap');
  for (let i = 0; i < count; i++) {
    const point = createTag('div', 'others-slider__point');
    pointsWrap.appendChild(point);
  }
  pointsWrap.firstElementChild.classList.add('others-slider__point--active');
  return pointsWrap;
}

function createTabSlider(tabs) {
  const slider = createTag('div', 'others-slider');
  const tape = createTag('div', 'others-slider__tape');
  const slidesWrap = createTag('div', 'others-slider__slides-wrap');
  tabs.forEach((tabData) => {
    slidesWrap.appendChild(createTab(tabData));
  });
  tape.appendChild(slidesWrap);
  slider.appendChild(tape).appendChild(slidesWrap);
  tape.appendChild(createTabPoints(tabs.length));
  return slider;
}

function createTabbedBlock(tabs) {
  const tabbedBlock = createTag('article', 'tabbed-block');
  const figuredBorder = createTag('div', 'figured-border', 'figured-border--accordion');
  tabbedBlock.appendChild(figuredBorder);
  tabbedBlock.appendChild(createTabSlider(tabs));
  return tabbedBlock;
}

function createAccordionTab(data, id) {
  const tab = createTag('div', 'accordion__tab');
  const tabRadio = createTag('input', 'accordion__radio');
  tabRadio.setAttribute('type', 'radio');
  tabRadio.setAttribute('id', 'accordion-tab' + id);
  tabRadio.setAttribute('name', 'accordion');
  if (id === 1) {
    tabRadio.setAttribute('checked', 'checked');
  }
  const heading = createTag('label', 'accordion__label');
  heading.setAttribute('for', 'accordion-tab' + id);
  heading.append(data.tab);
  const figuredBorder = createTag('div', 'accordion__figured-border');
  const text = createTag('p', 'accordion__text');
  text.append(data.text);
  tab.appendChild(tabRadio);
  tab.appendChild(heading);
  tab.appendChild(figuredBorder);
  tab.appendChild(text);
  return tab;
}

function createAccordion(accordionTabs) {
  const accordion = createTag('div', 'accordion');
  for (let i = 0; i < accordionTabs.length; i++) {
    accordion.appendChild(createAccordionTab(accordionTabs[i], i + 1));
  }
  return accordion;
}

function renderOtherSay(tabs, accordion) {
  const accordionSection = createTag('section', 'accordion-section');
  const container = createTag('div', 'accordion-section__container');
  const row = createTag('div', 'accordion-section__row');
  const heading = createTag('h2', 'accordion-section__heading');
  heading.append('And what do others say?');
  const contentWrap = createTag('div', 'accordion-section__content-wrap');
  const tabbedWrap = createTag('div', 'accordion-section__accordion-wrap',
    'accordion-section__accordion-wrap--spaced');
  const accordionWrap = createTag('div', 'accordion-section__accordion-wrap');
  accordionSection.appendChild(container).appendChild(row).appendChild(heading);
  container.appendChild(contentWrap).appendChild(tabbedWrap).appendChild(createTabbedBlock(tabs));
  contentWrap.appendChild(accordionWrap).appendChild(createAccordion(accordion));
  return accordionSection;
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
      reject(jsonObject.posts);
    };
    xhr.send();
  });
}

function initMap() {
  const centerLatLng = new google.maps.LatLng(40.7578315, -73.9764372);
  const mapOptions = {
    center: centerLatLng,
    zoom: 14
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  const marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    title: 'Important place'
  });
  return map;
}

function showPage(renderedPart) {
  const content = document.querySelector('main');
  const headerSliderPlace = document.querySelector('.header__container');
  headerSliderPlace.appendChild(renderHeaderSlider(jsonObject.headerSlider));
  content.insertBefore(renderedPart, content.firstChild);
  const slider = new Slider(document.querySelector('.latest-slider'), '6').render();
  const slider2 = new Slider(document.querySelector('.header-slider')).render();
  const slider3 = new Slider(document.querySelector('.others-slider')).render();
}

function renderPage(object, slider) {
  const pageFragment = document.createDocumentFragment();
  pageFragment.appendChild(renderAboutUs(object.aboutUs));
  pageFragment.appendChild(renderParalaxSection(object.parallax));
  pageFragment.appendChild(renderStatistics(object.statistics));
  pageFragment.appendChild(renderLatestSlider(slider));
  pageFragment.appendChild(renderPortfolio(object.portfolio));
  pageFragment.appendChild(renderPartners(object.partners));
  pageFragment.appendChild(renderOtherSay(object.tabs, object.accordion));
  showPage(pageFragment);
}

document.addEventListener('DOMContentLoaded', function () {
  checkServer('http://localhost:3000/api/list')
    .then(renderPage.bind(null, jsonObject))
    .catch(() => {
      renderModal(null, {
        type: 'alert',
        style: 'error',
        title: 'Error! Server is not available!',
        info: '',
        ok: 'Ok'
      });
    });
  initMap();
});
