fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
console.log(data)
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



    // for(i = 0; i < 4; i++){
    //   var topStories = document.getElementById('top-stories');

    // topStories.innerHTML +=` 
    // <div></div>
    // `;
    
    // };
});