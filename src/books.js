 function runBooksSection (){
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
    console.log(data);

    //First book
    var topRatedBook = document.getElementById('top-rated-book');
var innerTopBook =`
<div class='row'>

<div class="col s12 l6">
<p><img class="center-align responsive-img" src='${data.results.books[0].book_image}'></p>
</div>

<div class="col s12 l6 right-align">
<h2>${data.results.books[0].title}</h2>
<h4>Author: ${data.results.books[0].author}</h4>
<h4>Synopsis:</h4>
<p class='flow-text'>${data.results.books[0].description}</p>

<span class="new badge purple" data-badge-caption="${data.results.books[0].rank_last_week}">Last Week: </span>
<span class="new badge purple" data-badge-caption="${data.results.books[0].weeks_on_list}">Weeks On List: </span>
<span class="new badge purple" data-badge-caption="${data.results.books[0].publisher}">Publisher: </span>

<br>
<br>
<a href="${data.results.books[0].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a>
<a class="waves-effect waves-light btn orange">ISBN 10: ${data.results.books[0].primary_isbn10}</a>

</div>
</div>
`
topRatedBook.innerHTML += innerTopBook;
//rest of the books

var otherBooks = document.getElementById('other-books');

var innerOtherBooks =
//First row of books
`

<div class='row'>
<div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[1].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4 display-6">${data.results.books[1].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[1].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[1].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[1].author}</h6>
      <p>Synopsis: ${data.results.books[1].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[1].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[2].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4 display-6">${data.results.books[2].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[2].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[2].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[2].author}</h6>
      <p>Synopsis: ${data.results.books[2].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[2].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  src='${data.results.books[3].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4 display-6">${data.results.books[3].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[3].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[3].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[3].author}</h6>
      <p>Synopsis: ${data.results.books[3].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[3].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
  <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src='${data.results.books[4].book_image}'>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4 display-6">${data.results.books[4].title}<i class="material-icons right">more_vert</i></span>
        <p><a href="${data.results.books[4].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${data.results.books[4].title}<i class="material-icons right">close</i></span>
        <h6>Author: ${data.results.books[4].author}</h6>
      <p>Synopsis: ${data.results.books[4].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[4].rank_last_week}">Last Week: </span>
      </div>
      </div>
    </div>
</div>

<div class='row'>
<div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[5].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[5].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[5].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[5].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[5].author}</h6>
      <p>Synopsis: ${data.results.books[5].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[5].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[6].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[6].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[6].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[6].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[6].author}</h6>
      <p>Synopsis: ${data.results.books[6].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[6].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  src='${data.results.books[7].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[7].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[7].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[7].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[7].author}</h6>
      <p>Synopsis: ${data.results.books[7].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[7].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
  <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src='${data.results.books[8].book_image}'>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${data.results.books[8].title}<i class="material-icons right">more_vert</i></span>
        <p><a href="${data.results.books[8].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${data.results.books[8].title}<i class="material-icons right">close</i></span>
        <h6>Author: ${data.results.books[8].author}</h6>
      <p>Synopsis: ${data.results.books[8].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[8].rank_last_week}">Last Week: </span>
      </div>
      </div>
    </div>


</div>

<div class='row'>
<div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[9].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[9].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[9].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[9].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[9].author}</h6>
      <p>Synopsis: ${data.results.books[9].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[9].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img"  src='${data.results.books[10].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[10].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[10].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[10].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[10].author}</h6>
      <p>Synopsis: ${data.results.books[10].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[10].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  src='${data.results.books[11].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results.books[11].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${data.results.books[11].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results.books[11].title}<i class="material-icons right">close</i></span>
      <h6>Author: ${data.results.books[11].author}</h6>
      <p>Synopsis: ${data.results.books[11].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[11].rank_last_week}">Last Week: </span>
    </div>
    </div>
  </div>

  <div class="col s6 l3">
  <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src='${data.results.books[12].book_image}'>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${data.results.books[12].title}<i class="material-icons right">more_vert</i></span>
        <p><a href="${data.results.books[12].amazon_product_url}" target="_blank" class="waves-effect waves-light btn orange"><i class="material-icons right">book</i>Buy Now</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${data.results.books[12].title}<i class="material-icons right">close</i></span>
        <h6>Author: ${data.results.books[12].author}</h6>
      <p>Synopsis: ${data.results.books[12].description}</p>
      <span class="new badge purple" data-badge-caption="${data.results.books[12].rank_last_week}">Last Week: </span>
      </div>
      </div>
    </div>


</div>
`


otherBooks.innerHTML += innerOtherBooks;


});
};

runBooksSection()