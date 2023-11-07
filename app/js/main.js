$(document).ready(function(){
    $('.main-slider-items').slick({
        arrows: false,
        dots: true,
    })
})

$(document).ready(function(){
    $('.share__desc-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow:1,
        slidesToScroll:1,
    })
})

$(document).ready(function(){
    $('.features-desc-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow:1,
        slidesToScroll:1,
    })
})





const likeBtns = document.querySelectorAll('.TWA-gallery__item-desc__likes__heart-icon');

// Функция для обработки кликов по кнопкам лайков
function likeClick() {
    // Получаем элемент с количеством лайков, который находится в том же контейнере, что и кнопка
    const numberOfLikesElement = this.parentNode.querySelector('.TWA-gallery__item-desc__likes__number-of-likes');
    let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);

    // Получаем изображение внутри кнопки
    const heartImage = this.querySelector('img');

    // Проверяем, есть ли у кнопки класс isLiked
    if (!this.classList.contains('isLiked')) {
        this.classList.add('isLiked');
        numberOfLikes++;
        heartImage.src = '/images/TWA/heart-icon/heart-solid.png'; // Путь к вашему изображению заполненного сердца
    } else {
        this.classList.remove('isLiked');
        numberOfLikes--;
        heartImage.src = '/images/TWA/heart-icon/heart-regular.png'; // Путь к вашему изображению не заполненного сердца
    }
    // Обновляем количество лайков на странице
    numberOfLikesElement.textContent = numberOfLikes;
}

// Добавляем обработчик событий для каждой кнопки лайка
likeBtns.forEach(btn => {
    // Устанавливаем начальное изображение сердца
    const heartImage = btn.querySelector('img');
    if (heartImage) {
        heartImage.src = '/images/TWA/heart-icon/heart-regular.png'; // Убедитесь, что это правильный путь к вашему изображению
    } else {
        // Если внутри кнопки нет изображения, создаем его
        const newHeartImage = document.createElement('img');
        newHeartImage.src = '/images/TWA/heart-icon/heart-regular.png'; // Путь к вашему изображению не заполненного сердца
        newHeartImage.alt = 'Like';
        btn.appendChild(newHeartImage);
    }

    btn.addEventListener('click', likeClick);
});
