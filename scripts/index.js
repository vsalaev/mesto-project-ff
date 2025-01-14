const container = document.querySelector('.content');
const placesList = container.querySelector('.places__list');

function addCard(imageSrc, titleValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').setAttribute('src', imageSrc);
    cardElement.querySelector('.card__image').setAttribute('alt', 'изображена ' + titleValue + ', а именно самые узноваемые виды');
    cardElement.querySelector('.card__title').textContent = titleValue;

    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) { 
        cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
        });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) { 
        cardElement.setAttribute('style', 'display:none');
        });

    placesList.append(cardElement);
};

initialCards.forEach(item => addCard(item.link, item.name));