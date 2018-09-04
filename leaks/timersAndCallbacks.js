var serverData = loadData();
setInterval(function() {
    var renderer = document.getElementById('renderer');
    if(renderer) {
        renderer.innerHTML = JSON.stringify(serverData);
    }
}, 5000); //This will be executed every ~5 seconds.

/*
The snippet above shows the consequences of using timers that 
reference nodes or data that’s no longer needed.

The renderer object may be replaced or removed at some point 
which would make the block encapsulated by the interval handler redundant. 
If this happens, neither the handler, nor its dependencies would be collected
as the interval would need to be stopped first (remember, it’s still active). 
It all boils down to the fact that serverData which surely stores and processes 
loads of data will not be collected either.
*/

var element = document.getElementById('launch-button');
var counter = 0;
function onClick(event) {
   counter++;
   element.innerHtml = 'text ' + counter;
}
element.addEventListener('click', onClick);
// Do stuff
element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
// Now when element goes out of scope,
// both element and onClick will be collected even in old browsers // that don't handle cycles well.

// You no longer need to call removeEventListener before making a node unreachable 
// as modern browsers support garbage collectors that can detect these cycles and
// handle them appropriately.