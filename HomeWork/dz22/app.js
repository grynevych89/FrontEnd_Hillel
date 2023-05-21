'use strict';

const inputElement = $('input');
const outputStyle = {
    'padding':'4px',
    'margin':'2px',
    'color':'whitesmoke',
    'background-color':'#35aadc',
    'border':'1px solid black',
    'border-radius':'10px',
    'font-size':'large',
    'cursor':'pointer'
};

$('Button').click(function () {
    const inputValue = inputElement.val();
    const checkValue = inputValue.trim();
    (checkValue) ? $('<span></span>').css(outputStyle).text(inputValue).appendTo('.output-container').hide().fadeIn(1500) : alert("Введите какой то текст!");
    inputElement.val('');
})

$('.output-container').on('click', 'span', function () {
    $(this).fadeOut(1500);
    setTimeout(() => $(this).remove(), 2000);
})
