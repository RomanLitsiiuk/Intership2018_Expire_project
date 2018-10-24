'use strict';

function createTag(tagType, ...classList) {
  const tag = document.createElement(tagType);
  for (let i = 0; i < classList.length; i++) {
    tag.classList.add(classList[i] || null);
  }
  return tag;
}

class Mediator {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    this.subscribers[event] = this.subscribers[event] || [];
    this.subscribers[event].push(callback);
  }

  unsubscribe(event, callback) {
    let subscriberIndex;

    if (!event) {
      this.subscribers = {};
    } else if (event && !callback) {
      this.subscribers[event] = [];
    } else {
      subscriberIndex = subscriberIndex[event].indexOf(callback);
      if (subscriberIndex > -1) {
        this.subscribers[event].splice(subscriberIndex, 1);
      }
    }
  }

  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((callback) => {
        callback(data);
      });
    }
  }
}

export {
  createTag,
  Mediator
};
