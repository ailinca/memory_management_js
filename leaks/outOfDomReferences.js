var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image')
};
function doStuff() {
    elements.image.src = 'http://example.com/image_name.png';
}
function removeImage() {
    // The image is a direct child of the body element.
    document.body.removeChild(document.getElementById('image'));
    // At this point, we still have a reference to #button in the
    //global elements object. In other words, the button element is
    //still in memory and cannot be collected by the GC.
}

/*

There’s an additional consideration that has to be taken into account 
when it comes to references to inner or leaf nodes inside a DOM tree. If you keep a reference to a 
table cell (a <td> tag) in your code and decide to remove the table from the DOM yet keep 
the reference to that particular cell, you can expect a major memory leak to follow. 
You might think that the garbage collector would free up everything but that cell. 
This will not be the case, however. Since the cell is a child node of the table and children 
keep references to their parents, this single reference to the table cell would keep the whole 
table in memory.

*/

// https://developer.chrome.com/devtools/docs/demos/memory/example1