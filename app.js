document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    var collapsibleElem = document.querySelector('.collapsible');
   var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
  });