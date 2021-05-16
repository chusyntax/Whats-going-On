fetch('https://api.nytimes.com/svc/movies/v2/critics/all.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{

    
    console.log(data);


})
