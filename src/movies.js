fetch('https://api.nytimes.com/svc/movies/v2/critics/all.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
 console.log(data);
var reviewers = document.getElementById('reviewers');

var innerReviewers = `
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src=${data.results[0].multimedia.resource.src}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.results[0].display_name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data.results[0].display_name}<i class="material-icons right">close</i></span>
      <p>${data.results[0].bio}</p>
    </div>
  </div>
            
`;



reviewers.innerHTML += innerReviewers;



});
