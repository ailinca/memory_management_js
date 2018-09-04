let theThing = null;
const replaceThing = function () {
  let originalThing = theThing;
  const unused = function () {
    if (originalThing) // a reference to 'originalThing'
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("message");
    }
  };
};
setInterval(replaceThing, 1000);

//  The thing to remember is that once a scope for closures is created
// for closures in the same parent scope, the scope is shared.