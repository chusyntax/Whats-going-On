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


</div>
</div>
`
topRatedBook.innerHTML += innerTopBook;
//rest of the books

var otherBooks = document.getElementById('other-books');

var innerOtherBooks =`
<div class='row'>
<div class="col s6 l4">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  src='${data.results.books[1].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
    </div>
  </div>

  <div class="col s6 l4">
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  src='${data.results.books[1].book_image}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
    </div>
  </div>

  <div class="col s6 l4">
  <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src='${data.results.books[1].book_image}'>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
      </div>
    </div>


</div>
        
`

otherBooks.innerHTML += innerOtherBooks;


});
};

runBooksSection();