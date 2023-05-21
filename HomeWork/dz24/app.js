'use strict';

const errorMessage = "Please input correct data!";
const urlAPI = 'https://jsonplaceholder.typicode.com/posts/';

$('.input-id').on('change', () => {
    const idValue = $('.input-id').val();
    if (idValue >= 1 && idValue <= 100 && Math.round(idValue) === +idValue) {
        $('#show-post-btn').removeAttr('disabled');
        $('#input-message').text("");
    } else {
        $('#input-message').text(errorMessage);
    }
})

$('#show-post-btn').one('click', () => {
    fetch(urlAPI + $('.input-id').val())
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else throw alert("HTTP-Error");
        })
        .then(showPost)
        .catch((error) => {
            alert(`Виникла помилка ${error}`);
        })
})

function showPost(data) {
    $('.post-name').text(data.title);
    $('.post-content').text(data.body);
    $('#show-comments-btn').css('visibility', 'visible');
}

$('#show-comments-btn').one('click', () => {
    fetch(urlAPI + $('.input-id').val() + '/comments')
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else throw alert("HTTP-Error");
        })
        .then(showComments)
        .catch((error) => {
            alert(`Виникла помилка ${error}`);
        })
})

function showComments(data) {
    const parentElement = $('.comments-container');
    data.forEach(item => {
        $('<h5></h5>').text(item.name).appendTo(parentElement);
        $('<u></u>').css('color', 'blue').text(item.email).appendTo(parentElement);
        $('<p></p>').css('font-style', 'italic').text(item.body).appendTo(parentElement);
        $('<br>').appendTo(parentElement);
    })
}
