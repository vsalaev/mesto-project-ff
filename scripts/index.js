const container = document.querySelector('.content');
const placesList = container.querySelector('.places__list');

function renderCard(imageSrc, titleValue, method = 'prepend') {

    function deleteButt(deleteButt, cardElement) {
        deleteButt.addEventListener('click', function (evt) {
            cardElement.setAttribute('style', 'display:none');
        });
    }

    function like(like) {
        like.addEventListener('click', function (evt) {
            like.classList.toggle('card__like-button_is-active');
        });
    }
    
    function createCard(imageSrc, titleValue, likeButton, deleteButton) {
        const cardTemplate = document.querySelector('#card-template').content;
        const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
        
        const imageCardEl = cardElement.querySelector('.card__image');
        const titleCardEl = cardElement.querySelector('.card__title');
            
        const likeButtonCardEl = cardElement.querySelector('.card__like-button');
        const deleteButtonCardEl = cardElement.querySelector('.card__delete-button');
        
        imageCardEl.setAttribute('src', imageSrc);
        imageCardEl.setAttribute('alt', titleValue);
        titleCardEl.textContent = titleValue;
        
        likeButton(likeButtonCardEl);
        deleteButton(deleteButtonCardEl, cardElement);
        return cardElement;
    };

    const cardElement = createCard(imageSrc, titleValue, like, deleteButt);
    
    placesList[ method ](cardElement);
}

initialCards.forEach(item => renderCard(item.link, item.name, 'append'));