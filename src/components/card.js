import axios from 'axios';

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
  return cardCont;
}

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

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    // refactor: get array of each topic (res.data.articles.{topic}, then for each item in that arr make a new card and append it to the entrypoint)
    const entryPoint = document.querySelector(selector);
    const articleConts = Object.keys(res.data.articles);
    // ^^^each topic contains an arr of articles so they are article containers
  for(let i = 0; i < articleConts.length; i++){
    // ^^ for each topic(which contains an arr of articles)...
    res.data.articles[articleConts[i]].forEach(article => {
      // ^^^access the arr of articles (res.data.articles.{topic}), then for each article in the array accessed...
      entryPoint.appendChild(Card(article));
      // create a new card and append to entrypoint
    })
  } 
})
  .catch(error => {
    console.error(error);
  })
}

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
export { Card, cardAppender }

// original logic to solve task 6... realized this wouldn't work if there were hundreds of topics and it needed to be refactored to work with a larger set of data
    // const entryPoint = document.querySelector(selector);
    // console.log('test articles: ', res.data.articles);
    // const test = Object.keys(res.data.articles);
    // console.log('test obj.keys:', test);
    // const jsArticlesArr = res.data.articles.javascript;
    // const bootstrapArticlesArr = res.data.articles.bootstrap;
    // const techArticlesArr = res.data.articles.technology;
    // const jqArticlesArr = res.data.articles.jquery;
    // const nodeArticlesArr = res.data.articles.node; 
    // console.log('test javascript articles: ', jsArticlesArr);
    // console.log('test bootstrap articles: ', bootstrapArticlesArr);
    // console.log('test technology articles: ', techArticlesArr);
    // console.log('t`est jquery articles: ', jqArticlesArr);
    // console.log('test node articles: ', nodeArticlesArr);
    // Array.prototype.push.apply(articlesArr, bootstrapArticlesArr, techArticlesArr, jqArticlesArr, nodeArticlesArr); *this only merges 2 arrays at a time
    // console.log('test merged array', articlesArr);
    // const mergedArticlesArr = [
    //   ...jsArticlesArr,
    //   ...bootstrapArticlesArr,
    //   ...techArticlesArr,
    //   ...jqArticlesArr,
    //   ...nodeArticlesArr];
    // // console.log('test merged:', mergedArticlesArr);
    // mergedArticlesArr.forEach(article => {
    //   const newCard = Card(article);
    //   entryPoint.appendChild(newCard);
    // })
