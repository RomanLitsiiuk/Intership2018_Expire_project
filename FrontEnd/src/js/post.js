class Post {
  constructor(options, type) {
    this.id = options.id;
    this.image = options.imageLink;
    this.imageName = options.imageName;
    this.title = options.title;
    this.author = options.author;
    this.date = options.date;
    this.label = options.label;
    this.commentsNumber = options.comments;
    this.buttonLink = options.link;
    this.text = options.text;
    this.description = options.description;
    this.type = type.toLowerCase().trim();
  }

  static createElement(tagType, ...classList) {
    const tag = document.createElement(tagType);
    for (let i = 0; i < classList.length; i++) {
      tag.classList.add(classList[i] || null);
    }
    return tag;
  }

  static renderText(textObject) {
    const articlePost = Post.createElement('div', 'article', 'article--post');
    const textFields = Object.keys(textObject);
    for (let i = 0; i < textFields.length; i++) {
      if (textFields[i].indexOf('field') > -1) {
        const textBlock = Post.createElement('p', 'article__text');
        textBlock.append(textObject[textFields[i]]);
        articlePost.appendChild(textBlock);
      }
      if (textFields[i].indexOf('blockquote') > -1) {
        const blockqoute = Post.createElement('div', 'highlighted-text');
        const blockqouteText = Post.createElement('p', 'highlighted-text__content');
        blockqouteText.append(textObject[textFields[i]]);
        articlePost.appendChild(blockqoute).appendChild(blockqouteText);
      }
    }
    return articlePost;
  }

  static createComment(icon, data) {
    const comment = Post.createElement('div', 'comment');
    const iconWrap = Post.createElement('div', 'comment__image');
    const commentIcon = Post.createElement('span', icon);
    const text = Post.createElement('p', 'comment__text', 'comment__text--latest');
    text.append(data);
    comment.appendChild(iconWrap).appendChild(commentIcon);
    comment.appendChild(text);
    return comment;
  }

  checkCommentsNumber(array, result = []) {
    const keyName = 'author';
    for (let i = 0; i < array.length; i++) {
      const object = array[i];
      const keysArray = Object.keys(object);
      for (let j = 0; j < keysArray.length; j++) {
        if (Array.isArray(object[keysArray[j]])) {
          this.checkCommentsNumber(object[keysArray[j]], result);
        }
        if (keysArray[j] === keyName) {
          result.push(object);
        }
      }
    }
    return result.length;
  }

  renderBlogPost() {
    const rowWithPost = Post.createElement('div', 'main-markup__row');
    const postWrap = Post.createElement('section', 'blog-section');
    const dateWrap = Post.createElement('div', 'blog-section__date-wrap');
    const date = Post.createElement('div', 'date');
    const dateFirstRow = Post.createElement('div', 'date__first-row');
    dateFirstRow.textContent = this.date.year;
    const dateSecondRow = Post.createElement('div', 'date__second-row');
    dateSecondRow.textContent = this.date.month.slice(0, 3);
    const dateThirdtRow = Post.createElement('div', 'date__third-row');
    dateThirdtRow.textContent = this.date.day;
    const mainBlock = Post.createElement('div', 'blog-section__main-block');
    const figuredBlock = Post.createElement('div', 'figured-block');
    const image = Post.createElement('img', 'figured-block__content');
    if (this.image) {
      image.setAttribute('src', this.image);
      image.setAttribute('alt', this.imageName);
    } else {
      image.classList.add('figured-block__content--empty');
    }
    const figuredBlockLadel = Post.createElement('div', 'figured-block__label');
    const figuredBlockLadelIcon = Post.createElement('div', 'figured-block__label-icon');
    const icon = Post.createElement('span', this.label);
    date.appendChild(dateFirstRow);
    date.appendChild(dateSecondRow);
    date.appendChild(dateThirdtRow);
    figuredBlock.appendChild(image);
    figuredBlock.appendChild(figuredBlockLadel).appendChild(figuredBlockLadelIcon)
      .appendChild(icon);
    mainBlock.appendChild(figuredBlock);
    postWrap.appendChild(dateWrap).appendChild(date);
    postWrap.appendChild(mainBlock);
    const article = Post.createElement('div', 'article');
    const articleHeading = Post.createElement('h2', 'article__heading');
    articleHeading.append(this.title);
    const articleComments = Post.createElement('div', 'article__comments');
    const comment1 = Post.createElement('div', 'comment');
    const comment2 = Post.createElement('div', 'comment');
    const commentImage = Post.createElement('div', 'comment__image');
    const commentImage2 = Post.createElement('div', 'comment__image');
    const iconUser = Post.createElement('span', 'ti-user');
    const commentUser = Post.createElement('p', 'comment__text');
    const commentText = Post.createElement('p', 'comment__text');
    commentUser.append(this.author);
    const commentCount = this.checkCommentsNumber(this.commentsNumber);
    if (commentCount % 10 === 1) {
      commentText.append(commentCount + ' comment');
    } else {
      commentText.append(commentCount + ' comments');
    }
    const iconComment = Post.createElement('span', 'ti-comment');
    const articleText = Post.createElement('p', 'article__text');
    articleText.append(this.text.field1);
    const button = Post.createElement('a', 'button');
    button.setAttribute('href', `post.html?${this.id}`);
    button.textContent = 'Read more';
    const deleteButton = Post.createElement('button', 'button', 'button--delete');
    deleteButton.setAttribute('name', this.id);
    deleteButton.textContent = 'Delete post';
    comment1.appendChild(commentImage).appendChild(iconUser);
    comment1.appendChild(commentUser);
    comment2.appendChild(commentImage2).appendChild(iconComment);
    comment2.appendChild(commentText);
    articleComments.appendChild(comment1);
    articleComments.appendChild(comment2);
    article.appendChild(articleHeading);
    article.appendChild(articleComments);
    article.appendChild(articleText);
    article.appendChild(button);
    article.appendChild(deleteButton);
    mainBlock.appendChild(article);
    rowWithPost.appendChild(postWrap);
    return rowWithPost;
  }

  renderFullPost() {
    const fragment = document.createDocumentFragment();
    const dateWrap = Post.createElement('div', 'post-section__date-wrap');
    const date = Post.createElement('div', 'date', 'date--post');
    const dateFirstRow = Post.createElement('div', 'date__first-row');
    dateFirstRow.textContent = this.date.year;
    const dateSecondRow = Post.createElement('div', 'date__second-row');
    dateSecondRow.textContent = this.date.month.slice(0, 3);
    const dateThirdRow = Post.createElement('div', 'date__third-row');
    dateThirdRow.textContent = this.date.day;
    const mainBlock = Post.createElement('div', 'post-section__main-block');
    const articleHeading = Post.createElement('h2', 'article__heading', 'article__heading--post');
    articleHeading.append(this.title);
    const articleComments = Post.createElement('div', 'article__comments');
    const comment1 = Post.createElement('div', 'comment');
    const comment2 = Post.createElement('div', 'comment');
    const commentImage1 = Post.createElement('div', 'comment__image');
    const commentImage2 = Post.createElement('div', 'comment__image');
    const iconUser = Post.createElement('span', 'ti-user');
    const commentUser = Post.createElement('p', 'comment__text');
    const commentText = Post.createElement('p', 'comment__text');
    commentUser.append(this.author);
    let commentCount;
    if (Array.isArray(this.commentsNumber)) {
      commentCount = this.checkCommentsNumber(this.commentsNumber);
    } else {
      commentCount = this.commentsNumber;
    }
    if (commentCount % 10 === 1) {
      commentText.append(commentCount + ' comment');
    } else {
      commentText.append(commentCount + ' comments');
    }
    const iconComment = Post.createElement('span', 'ti-comment');
    const figuredBlock = Post.createElement('div', 'figured-block');
    const image = Post.createElement('img', 'figured-block__content');
    if (this.image) {
      image.setAttribute('src', this.image);
      image.setAttribute('alt', this.imageName);
    } else {
      image.classList.add('figured-block__content--empty');
    }
    const figuredBlockLadel = Post.createElement('div', 'figured-block__label');
    const figuredBlockLadelIcon = Post.createElement('div', 'figured-block__label-icon');
    const icon = Post.createElement('span', this.label);
    date.appendChild(dateFirstRow);
    date.appendChild(dateSecondRow);
    date.appendChild(dateThirdRow);
    fragment.appendChild(dateWrap).appendChild(date);
    figuredBlock.appendChild(image);
    figuredBlock.appendChild(figuredBlockLadel).appendChild(figuredBlockLadelIcon)
      .appendChild(icon);
    comment1.appendChild(commentImage1).appendChild(iconUser);
    comment1.appendChild(commentUser);
    comment2.appendChild(commentImage2).appendChild(iconComment);
    comment2.appendChild(commentText);
    articleComments.appendChild(comment1);
    articleComments.appendChild(comment2);
    mainBlock.appendChild(articleHeading);
    mainBlock.appendChild(articleComments);
    mainBlock.appendChild(figuredBlock);
    mainBlock.appendChild(Post.renderText(this.text));
    fragment.appendChild(mainBlock);
    return fragment;
  }

  renderSlidePost() {
    const slideWrap = Post.createElement('article', 'latest-slider__slide');
    const figuredBlock = Post.createElement('figure', 'figured-block', 'figured-block--latest');
    const image = Post.createElement('img', 'figured-block__content');
    image.setAttribute('src', this.image);
    image.setAttribute('alt', this.imageName);
    const article = Post.createElement('div', 'article', 'article--latest');
    const heading = Post.createElement('h3', 'article__heading', 'article__heading--latest');
    heading.append(this.title);
    const commentsWrap = Post.createElement('div', 'article__comments',
      'article__comments--latest');
    const comment1 = Post.createComment('ti-user', this.author);
    const comment2 = Post.createComment('ti-calendar', `${+this.date.day} ${this.date.month}
   ${this.date.year}`);
    const comment3 = Post.createComment('ti-comment',
      this.checkCommentsNumber(this.commentsNumber));
    const postText = Post.createElement('p', 'article__text', 'article__text--latest');
    postText.append(this.description);
    const button = Post.createElement('a', 'button');
    button.setAttribute('href', this.buttonLink);
    button.append('Read more');
    slideWrap.appendChild(figuredBlock).appendChild(image);
    slideWrap.appendChild(article).appendChild(heading);
    commentsWrap.appendChild(comment1);
    commentsWrap.appendChild(comment2);
    commentsWrap.appendChild(comment3);
    article.appendChild(commentsWrap);
    article.appendChild(postText);
    article.appendChild(button);
    return slideWrap;
  }

  render() {
    if (this.type === 'full') {
      return this.renderFullPost();
    } else if (this.type === 'preview') {
      return this.renderBlogPost();
    } else if (this.type === 'slide') {
      return this.renderSlidePost();
    }
    throw new Error('Incorrect post type');
  }
}

export default Post;
