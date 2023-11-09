$(document).ready(function(){
    $('.main-slider__items').slick({
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

// Function for processing clicks on likes buttons
function likeClick() {

    const numberOfLikesElement = this.parentNode.querySelector('.TWA-gallery__item-desc__likes__number-of-likes');
    let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);

    const heartImage = this.querySelector('img');

    if (!this.classList.contains('isLiked')) {
        this.classList.add('isLiked');
        numberOfLikes++;
        heartImage.src = '/images/TWA/heart-icon/heart-solid.png'; 
    } else {
        this.classList.remove('isLiked');
        numberOfLikes--;
        heartImage.src = '/images/TWA/heart-icon/heart-regular.png'; 
    }
    numberOfLikesElement.textContent = numberOfLikes;
}

// Add an event handler for each like button
likeBtns.forEach(btn => {

    const heartImage = btn.querySelector('img');
    if (heartImage) {
        heartImage.src = '/images/TWA/heart-icon/heart-regular.png'; 
    } else {
        const newHeartImage = document.createElement('img');
        newHeartImage.src = '/images/TWA/heart-icon/heart-regular.png'; 
        newHeartImage.alt = 'Like';
        btn.appendChild(newHeartImage);
    }

    btn.addEventListener('click', likeClick);
});


// smoothscroll
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      const offset = document.getElementById(blockID).offsetTop - 98; // Subtracting the header size
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  }
