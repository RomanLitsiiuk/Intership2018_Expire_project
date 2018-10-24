'use strict';

import {Mediator} from './utils';

class Controller extends Mediator {
  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;
    this.view.subscribe('renderPage', this.renderPage.bind(this));
    this.view.subscribe('renderArticles', this.renderArticles.bind(this));
    this.view.subscribe('activateButtons', this.toggleClasses.bind(this));
    this.view.subscribe('articleOpen', this.renderContent.bind(this));
  }

  renderPage() {
    const answer = this.model.checkAuthors(this.model.list);
    return this.view.renderPortfolio(answer);
  }

  renderArticles(name) {
    const answer = this.model.createArticleLists(this.model.list, name);
    return this.view.renderPostTitles(name, answer);
  }

  renderContent(title) {
    const answer = this.model.getItem(title);
    return this.view.renderArticle(answer);
  }

  toggleClasses(tabs) {
    tabs.forEach((tab) => {
      this.view.subscribe('tabOpen', (data) => {
        tab.parentElement.classList.remove('tab--active');
        if (tab.firstElementChild.textContent === data) {
          tab.parentElement.classList.add('tab--active');
        }
      });
    });
  }
}

export default Controller;
