// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const dateInfo = document.createElement('span');
  const headline = document.createElement('h1');
  const tempurature = document.createElement('span');
  header.classList.add('header');
  dateInfo.classList.add('date');
  tempurature.classList.add('temp');
  dateInfo.textContent = date;
  headline.textContent = title;
  tempurature.textContent = temp;
  header.appendChild(dateInfo);
  header.appendChild(headline);
  header.appendChild(tempurature);
  return header;
}

// console.log(headerContainer);
const headerAppender = (selector) => {

 // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector);
  const headerCard = Header('Lambda Times', 'January 6, 2021', '26');
  headerContainer.appendChild(headerCard);
  
}


export { Header, headerAppender }
