function Slider(rootElement, timeout) {
  this.rootElement = rootElement;
  const className = this.rootElement.classList[0];
  this.playTimeout = timeout;
  this.left = this.rootElement.querySelector(`.${className}__button--back`);
  this.right = this.rootElement.querySelector(`.${className}__button--next`);
  this.container = this.rootElement.querySelector(`.${className}__slides-wrap`);
  this.points = [].slice.call(this.rootElement.querySelectorAll(`.${className}__point`));
  this.slides = [].slice.call(this.rootElement.querySelectorAll(`.${className}__slide`));
  const activeClass = `${className}__point--active`;

  this.previous = function () {
    const last = this.container.lastElementChild;
    const first = this.container.firstElementChild;
    this.container.style.transition = 'none';
    this.container.style.left = -first.offsetWidth + 'px';
    this.container.insertBefore(last, first);
    window.setTimeout(() => {
      this.container.style.transition = 'left .3s';
      this.container.style.left = 0;
    }, 50);
    if (this.points) {
      this.setActive(this.points, this.slides.indexOf(last));
    }
  }.bind(this);

  this.next = function () {
    const first = this.container.firstElementChild;
    this.container.style.transition = 'left .3s';
    this.container.style.left = -first.offsetWidth + 'px';
    window.setTimeout(() => {
      this.container.appendChild(first);
      this.container.style.transition = 'none';
      this.container.style.left = 0;
    }, 300);
    if (this.points) {
      this.setActive(this.points, (this.slides.indexOf(first) + 1) % this.points.length);
    }
  }.bind(this);

  this.selectOff = function () {
    this.container.onselectstart = function () {
      return false;
    };
    return this;
  };

  this.swipe = function () {
    let clickX;
    this.container.addEventListener('mousedown', (event) => {
      clickX = event.clientX;
    });
    this.container.addEventListener('mouseup', (action) => {
      const deltaClick = clickX - action.clientX;
      if (deltaClick > 100) {
        this.next();
      }
      if (deltaClick < -100) {
        this.previous();
      }
    });
    return this;
  };

  this.fastNext = function () {
    const first = this.container.firstElementChild;
    this.container.appendChild(first);
  };

  this.slideMove = function (targetID) {
    const current = this.container.firstElementChild;
    const delta = targetID - this.slides.indexOf(current);
    if (delta < 0) {
      for (let i = 0; i < Math.abs(delta); i++) {
        this.previous();
      }
    }
    if (delta > 0) {
      for (let i = 0; i < Math.abs(delta) - 1; i++) {
        this.fastNext();
      }
      this.next();
    }
  };

  this.handleClick = function (event) {
    this.currentPoint = this.points.indexOf(event.target);
    this.setActive(this.points, this.currentPoint);
    this.slideMove(this.currentPoint);
  }.bind(this);

  this.setActive = function (itemsCollection, point) {
    itemsCollection.forEach(function (item, index) {
      if (index === point) {
        item.classList.add(activeClass);
      } else {
        item.classList.remove(activeClass);
      }
    });
  };

  this.delegateEvents = function () {
    if (this.left && this.right) {
      this.left.addEventListener('click', this.previous);
      this.right.addEventListener('click', this.next);
    }
    if (this.points) {
      this.points.forEach((element) => {
        element.addEventListener('click', this.handleClick);
      });
    }
    return this;
  };

  this.delegateAutoplay = function () {
    let sliderAutoplay;
    const mouseLeave = new Event('mouseleave');
    this.container.addEventListener('mouseenter', () => {
      clearInterval(sliderAutoplay);
    });
    this.container.addEventListener('mouseleave', () => {
      sliderAutoplay = setInterval(() => {
        this.next();
      }, this.playTimeout * 1000);
    });
    this.container.dispatchEvent(mouseLeave);
    return this;
  };

  this.render = function () {
    if (this.playTimeout) {
      return this.delegateEvents().delegateAutoplay().selectOff().swipe();
    }
    return this.delegateEvents().selectOff().swipe();
  };
}

export default Slider;
