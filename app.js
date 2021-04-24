fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{

//Top Story Section
    var topStory = document.getElementById('top-story');
    var innerTopStory = `
    
    <img class="right-align responsive-img" src='${data.results[0].multimedia[0].url}'>
    <small>~${data.results[0].multimedia[0].caption}</small>
    <hr>
    <h1>${data.results[0].title}</h1>
    <br>
    <p class='flow-text'>${data.results[0].abstract}</p>
    <br>
    <p>~${data.results[0].byline}</p>
    <span><a href='${data.results[0].url}' target="_blank"><em>Read More >>> </em></a></span>
    <hr>

    `
topStory.innerHTML += innerTopStory;


//Other Stories Section
   var otherStories = document.getElementById('other-top-stories');
   var innerOtherStories = `
   
   <ul class="collection with-header">
   <li class="collection-header"><h3>Other Top Stories</h3></li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[1].multimedia[0].url}'>
   ${data.results[1].title}
   <small>~${data.results[1].byline}</small>
   <br>
   <span><a href='${data.results[1].url}' target="_blank"><em>Read More >>> </em></a></span>
   </li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[2].multimedia[0].url}'>
   ${data.results[2].title}
   <small>~${data.results[2].byline}</small>
   <br>
   <span><a href='${data.results[2].url}' target="_blank"><em>Read More >>> </em></a></span>
   </li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[3].multimedia[0].url}'>
   ${data.results[3].title}
   <small>~${data.results[3].byline}</small>
   <br>
   <span><a href='${data.results[2].url}' target="_blank"><em>Read More >>> </em></a></span>
   </li>
 </ul>
       
   `;

   otherStories.innerHTML += innerOtherStories;
});