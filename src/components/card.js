const Card = ({headline, authorPhoto, authorName}) => {
  // create elements
  const cardCont = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorCont = document.createElement('div');
  const cardImgCont = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthor = document.createElement('span');
  // add classes
  cardCont.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorCont.classList.add('author');
  cardImgCont.classList.add('img-container');
  // add content
  cardHeadline.textContent = headline;
  cardImg.src = authorPhoto;
  cardAuthor.textContent = `By ${authorName}`;
  // add hierarchy
  cardCont.appendChild(cardHeadline);
  cardCont.appendChild(cardAuthorCont);
  cardAuthorCont.appendChild(cardImgCont);
  cardImgCont.appendChild(cardImg);
  cardAuthorCont.appendChild(cardAuthor);
  // add interactivity
  cardCont.addEventListener('click', () => {
    console.log(headline);
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardCont;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
