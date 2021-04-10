fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
    for(i = 0; i < 3; i++){
        console.log(data.results[i].title)
    }
    
})