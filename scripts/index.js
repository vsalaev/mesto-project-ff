const container = document.querySelector('.content');
const placesList = container.querySelector('.places__list');

function addCard(imageSrc, titleValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    
    const imageCardEl = cardElement.querySelector('.card__image');
    const titleCardEl = cardElement.querySelector('.card__title');
    const likeButtonCardEl = cardElement.querySelector('.card__like-button');
    const deleteButtonCardEl = cardElement.querySelector('.card__delete-button');

    imageCardEl.setAttribute('src', imageSrc);
    imageCardEl.setAttribute('alt', titleValue);
    titleCardEl.textContent = titleValue;

    likeButtonCardEl.addEventListener('click', function (evt) { 
        likeButtonCardEl.classList.toggle('card__like-button_is-active');
        });

    deleteButtonCardEl.addEventListener('click', function (evt) { 
        cardElement.setAttribute('style', 'display:none');
        });

    placesList.append(cardElement);
};

initialCards.forEach(item => addCard(item.link, item.name));