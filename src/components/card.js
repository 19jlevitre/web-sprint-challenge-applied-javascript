import axios from "axios";

const Card = (article) => {
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
  const articleCard = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const photo = document.createElement('img');
  const name = document.createElement('span');
  articleCard.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  headLine.textContent = article.headline;
  photo.src = article.authorPhoto;
  name.textContent = `By ${article.authorName}`;
  articleCard.appendChild(headLine);
  articleCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(photo);
  author.appendChild(name);
  articleCard.addEventListener('click' , () => {
   console.log(article.headline);
  });
  return articleCard;

}

const cardAppender = async (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  try{
    const resp = await axios.get(`http://localhost:5000/api/articles`);
    console.log(resp);
    const cardsContainer = document.querySelector(selector);
    const articles = Object.values(resp.data.articles).flat().map(article => article);
    console.log(articles);
    articles.forEach(article => {
      
      const cardElement = Card(article);
      cardsContainer.appendChild(cardElement);
    })
  }
  catch(err){
    console.log(err);
  }
  finally{
    console.log('woo');
  }
};

export { Card, cardAppender }
