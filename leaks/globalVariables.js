/*
JavaScript handles undeclared variables in an interesting way: 
when a undeclared variable is referenced, a new variable gets created in the global object. 
In a browser, the global object would be window, which means that
*/

function foo(arg) {
    bar = "some text";
}

/*
is equivalent of:

function foo(arg) {
    window.bar = "some text";
}
*/

// You can also accidentally create a global variable using this:

function baz() {
    this.var1 = "potential accidental global";
}
// Foo called on its own, this points to the global object (window)
// rather than being undefined.
foo();

/* 
You can avoid all this by adding ‘use strict’; at the beginning of your JavaScript file 
which would switch on a much stricter mode of parsing JavaScript which prevents the 
unexpected creation of global variables.

Use global variables to store data if you must but when you do, make sure to 
ASSIGN IT AS NULL OR REASSIGN IT once you are done with it.
*/