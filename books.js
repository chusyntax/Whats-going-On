fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
    console.log(data);
    var topRatedBook = document.getElementById('top-rated-book');
var innerBook =`
<div class='row'>
<div class="col s6 l6">
 <p><img class="right-align responsive-img" src='${data.results.books[0].book_image}'></p>
 </div>

<div class="col s6 l6">
<h1>Title: ${data.results.books[0].title}</h1>
<h2>By: ${data.results.books[0].author}</h2>

</div>
</div>
`
topRatedBook.innerHTML += innerBook;



});