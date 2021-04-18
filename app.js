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
   <li class="collection-header"><h4>First Names</h4></li>
   <li class="collection-item">Alvin</li>
   <li class="collection-item">Alvin</li>
   <li class="collection-item">Alvin</li>
   <li class="collection-item">Alvin</li>
 </ul>
       
   `;

   otherStories.innerHTML += innerOtherStories;
});