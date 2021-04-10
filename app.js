fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
    for(i = 0; i < 3; i++){
        
        var exapmple = document.getElementById('example');
    exapmple.innerHTML += `
    <h3>${data.results[i].title}</h3>
<p class='flow-text'>${data.results[i].abstract}</p>
<p>~${data.results[i].byline}</p>
    `;
    };
});