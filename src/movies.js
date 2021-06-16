 export function runReviewersSection (){
 
 fetch('https://api.nytimes.com/svc/movies/v2/critics/full-time.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')
.then(res => res.json())
.then(data =>{
 console.log(data);
var reviewers = document.getElementById('reviewers');

    var innerReviewers = `
    <div class='row'>
    
    <div class="col s12 l12">
    <h2 class="header">${data.results[0].display_name}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src=${data.results[0].multimedia.resource.src}>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${data.results[0].bio}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col s12 l12">
  <h2 class="header">${data.results[2].display_name}</h2>
  <div class="card horizontal">
    <div class="card-image">
      <img src=${data.results[2].multimedia.resource.src}>
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p>${data.results[2].bio}</p>
      </div>
    </div>
  </div>
</div>

    </div>
    `;

reviewers.innerHTML += innerReviewers;
});
 };
