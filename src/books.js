export function runBooksSection (){
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
    console.log(data);
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



});
};

runBooksSection();