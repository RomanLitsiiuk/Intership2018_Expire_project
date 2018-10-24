'use strict';

import {createTag} from '../js/utils';

class Footer {
  constructor(wrap) {
    this.wrap = wrap;
  }

  renderFooter() {
    const fragment = document.createDocumentFragment();
    const footer = createTag('footer', 'footer');
    const anchor = createTag('a', 'anchor');
    const anchorIcon = createTag('span', 'ti-angle-up');
    const footerBorder = createTag('div', 'footer__border-top');
    const container = createTag('div', 'footer__container');
    const row = createTag('div', 'footer__row');
    const linksWrap = createTag('div', 'footer__links-wrap');
    const links = createTag('ul', 'social-networks');
    const link1 = createTag('li', 'social-networks__list-item');
    const text1 = createTag('a', 'social-networks__link');
    text1.setAttribute('href', '#');
    const icon1 = createTag('span', 'ti-facebook');
    const link2 = createTag('li', 'social-networks__list-item');
    const text2 = createTag('a', 'social-networks__link');
    text1.setAttribute('href', '#');
    const icon2 = createTag('span', 'ti-twitter');
    const link3 = createTag('li', 'social-networks__list-item');
    const text3 = createTag('a', 'social-networks__link');
    text1.setAttribute('href', '#');
    const icon3 = createTag('span', 'ti-linkedin');
    const link4 = createTag('li', 'social-networks__list-item');
    const text4 = createTag('a', 'social-networks__link');
    text1.setAttribute('href', '#');
    const icon4 = createTag('span', 'ti-google');
    const link5 = createTag('li', 'social-networks__list-item');
    const text5 = createTag('a', 'social-networks__link');
    text1.setAttribute('href', '#');
    const icon5 = createTag('span', 'ti-instagram');
    const figure = createTag('figure', 'logo', 'logo--vertical', 'logo--footer');
    const image = createTag('img', '');
    image.setAttribute('src', '../../../img/logo.png');
    image.setAttribute('alt', 'logo');
    const figcaption = createTag('figcaption', 'logo__description', 'logo__description--vertical');
    figcaption.append('Expire');
    const text = createTag('p', 'footer__copyright');
    text.append('© Copryright 2014, design by dingo_design');
    footer.appendChild(anchor).appendChild(anchorIcon);
    footer.appendChild(footerBorder);
    footer.appendChild(container).appendChild(row).appendChild(linksWrap)
      .appendChild(links).appendChild(link1).appendChild(text1).appendChild(icon1);
    links.appendChild(link2).appendChild(text2).appendChild(icon2);
    links.appendChild(link3).appendChild(text3).appendChild(icon3);
    links.appendChild(link4).appendChild(text4).appendChild(icon4);
    links.appendChild(link5).appendChild(text5).appendChild(icon5);
    row.appendChild(figure).appendChild(image);
    figure.appendChild(figcaption);
    row.appendChild(text);
    fragment.appendChild(footer);
    return this.wrap.appendChild(fragment);
  }
}

export default Footer;
