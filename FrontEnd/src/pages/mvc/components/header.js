'use strict';

import {createTag} from '../js/utils';

class Header {
  constructor(wrap) {
    this.wrap = wrap;
  }

  renderHeader() {
    const fragment = document.createDocumentFragment();
    const header = createTag('header', 'header', 'header--secondary');
    const container = createTag('div', 'header__container');
    const headerRow1 = createTag('div', 'header__row');
    const logo = createTag('figure', 'logo');
    const image = createTag('img', 'logo__image');
    image.setAttribute('src', '../../../img/logo.png');
    image.setAttribute('alt', 'logo');
    const figcaption = createTag('figcaption', 'logo__description');
    figcaption.setAttribute('id', 'top');
    figcaption.append('Expire');
    const navigationWrap = createTag('nav', 'header__navigation-wrap');
    const navigation = createTag('ul', 'navigation');
    const link1 = createTag('li', 'navigation__button');
    const linkText1 = createTag('a', 'navigation__link');
    linkText1.setAttribute('href', '../home.html');
    linkText1.append('Home');
    const link2 = createTag('li', 'navigation__button');
    const linkText2 = createTag('a', 'navigation__link');
    linkText2.setAttribute('href', '#');
    linkText2.append('Portfolio');
    const link3 = createTag('li', 'navigation__button');
    const linkText3 = createTag('a', 'navigation__link');
    linkText3.setAttribute('href', '../blog.html');
    linkText3.append('Blog');
    const link4 = createTag('li', 'navigation__button');
    const linkText4 = createTag('a', 'navigation__link');
    linkText4.setAttribute('href', '#');
    linkText4.append('Pages');
    const link5 = createTag('li', 'navigation__button');
    const linkText5 = createTag('a', 'navigation__link');
    linkText5.setAttribute('href', '#');
    linkText5.append('About us');
    const link6 = createTag('li', 'navigation__button');
    const linkText6 = createTag('a', 'navigation__link');
    linkText6.setAttribute('href', '#');
    linkText6.append('Contact');
    const headerRow2 = createTag('div', 'header__row');
    const headingWrap = createTag('div', 'header__heading-wrap');
    const mainHeading = createTag('h1', 'main-heading', 'main-heading--underlined-header');
    mainHeading.append('Portfolio');
    const buttonWrap = createTag('div', 'header__button-wrap');
    const headerButton = createTag('div', 'header-button');
    const buttonLink = createTag('a', 'header-button__link');
    buttonLink.setAttribute('href', 'form.html');
    buttonLink.append('Add new post');
    const headerRow3 = createTag('div', 'header__row');
    const path = createTag('p', 'header__path');
    path.append('Home > Portfolio');
    header.appendChild(container).appendChild(headerRow1).appendChild(logo).appendChild(image);
    logo.appendChild(figcaption);
    headerRow1.appendChild(navigationWrap).appendChild(navigation)
      .appendChild(link1).appendChild(linkText1);
    navigation.appendChild(link2).appendChild(linkText2);
    navigation.appendChild(link3).appendChild(linkText3);
    navigation.appendChild(link4).appendChild(linkText4);
    navigation.appendChild(link5).appendChild(linkText5);
    navigation.appendChild(link6).appendChild(linkText6);
    container.appendChild(headerRow2).appendChild(headingWrap).appendChild(mainHeading);
    headerRow2.appendChild(buttonWrap).appendChild(headerButton).appendChild(buttonLink);
    container.appendChild(headerRow3).appendChild(path);
    fragment.appendChild(header);
    this.wrap.insertBefore(fragment, this.wrap.querySelector('main'));
  }
}

export default Header;
