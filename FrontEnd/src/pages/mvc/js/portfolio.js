'use strict';

import styles from '../../../scss/styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import View from './view';
import Model from './model';
import Controller from './controller';

const header = new Header(document.querySelector('.main-markup__content'));
const footer = new Footer(document.querySelector('.main-markup__footer'));
const model = new Model('http://localhost:3000/api/list');
const view = new View();
const controller = new Controller(model, view);

document.addEventListener('DOMContentLoaded', () => {
  header.renderHeader();
  footer.renderFooter();
  return new Promise((resolve) => {
    view.render();
  });
});
