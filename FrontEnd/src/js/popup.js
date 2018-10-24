import $ from './lib/jquery.min';

(function ($) {
  const modal = $('<div class="modal"></div>');
  const modalWindow = $('<div class="modal__window"></div>');
  const content = $('<div class="modal__window-content"></div>');
  const title = $('<div class="modal__window-title"></div>');
  const text = $('<p class="modal__window-text"></p>');
  const answerTag = $('<input class="modal__window-answer" type="text">');
  const confirmButton =
    $('<button class="modal__button modal__button--confirm" type="text"></button>');
  const cancelButton = $('<button class="modal__button modal__button--cancel"></button>');
  const closeX = $('<img class="modal__closeX" alt="close" src="../img/closeX.png">');
  modal.append(modalWindow);
  modalWindow.append(content).append(closeX);
  content.append(title).append(text).append(answerTag).append(confirmButton).append(cancelButton);
  $('.main-markup__content').append(modal);

  $.fn.activateModal = function (button, options) {
    const buttonInfo = button ? button.name : 'empty';
    const settings = $.extend({
      type: 'alert',
      style: 'info',
      closeX: true,
      title: 'Some title',
      info: 'Some info',
      ok: 'Ok',
      cancel: 'Cancel',
      overlay: 'dark'
    }, options);

    $(modal).find('.modal__button--confirm').text(settings.ok);
    $(modal).find('.modal__button--cancel').text(settings.cancel);
    $(modal).find('.modal__window-title').text(settings.title);
    $(modal).find('.modal__window-text').text(settings.info);

    if (settings.overlay === 'white') {
      $(modal).css('background-color', 'rgba(255, 255, 255, 0.75)');
    }

    if (settings.style === 'warning') {
      $(modalWindow).css({
        'background-color': '#F2CF6F',
        'border': '2px solid #EF8341',
        'color': '#A65C3D'
      });
      $(modal).children('.modal__button').css('background-color', '#FB2954');
    } else if (settings.style === 'error') {
      $(modalWindow).css({
        'background-color': '#FFBCB6',
        'border': '2px solid #D90416',
        'color': '#F20505'
      });
      $(modal).children('.modal__button').css('background-color', '#D90416');
    }

    if (settings.style === 'warning') {
      $(modalWindow).css({
        'background-color': '#F2CF6F',
        'border': '2px solid #EF8341'
      });
      $(modal).children('.modal__button').css('background-color', '#FB2954');
    }

    if (settings.type === 'confirm') {
      $(modal).find('.modal__button--cancel').css('display', 'inline-block');
    }

    if (settings.closeX === false) {
      $(modal).find('.modal__closeX').css('display', 'none');
    }

    function show(window) {
      $(window).addClass('active');
      setTimeout(() => {
        $(window).children('.modal__window').addClass('active');
      }, 300);
    }

    function hide(window) {
      $(window).children('.modal__window').removeClass('active');
      setTimeout(() => {
        $(window).removeClass('active');
      }, 300);
    }

    modal.each(function () {
      show(modal);

      $(modal).on('click', (event) => {
        if ($(event.target).hasClass('modal') ||
          $(event.target).hasClass('modal__button--cancel') ||
          $(event.target).hasClass('modal__closeX')) {
          $('.modal__window-answer').val('false');
          hide(modal);
          $(modal).off('click');
        }
        if ($(event.target).hasClass('modal__button--confirm')) {
          $('.modal__window-answer').val(buttonInfo).trigger('click');
          hide(modal);
          $(modal).off('click');
        }
      });
    });
  };
}($));

export default $.fn.activateModal;
