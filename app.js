fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
console.log(data)

//Top Story Section
    var topStory = document.getElementById('top-story');
    var innerTopStory = `
    <img class="right-align responsive-img" width="650" src='${data.results[0].multimedia[0].url}'>
    <small>~${data.results[0].multimedia[0].caption}</small>
    <h3 Word>${data.results[0].title}</h3>
    <p class='flow-text'>${data.results[0].abstract}</p>
    <p>~${data.results[0].byline}</p>
    <span><a href='${data.results[0].url}' target="_blank"><em>Read More >>> </em></a></span>
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
   </li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[2].multimedia[0].url}'>
   ${data.results[2].title}
   <small>~${data.results[2].byline}</small>
   </li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[3].multimedia[0].url}'>
   ${data.results[3].title}
   <small>~${data.results[3].byline}</small>
   </li>
   <li class="collection-item">
   <img class="right-align responsive-img" src='${data.results[4].multimedia[0].url}'>
   ${data.results[4].title}
   <small>~${data.results[4].byline}</small>
   </li>
 </ul>
       
   `;

   otherStories.innerHTML += innerOtherStories;
});