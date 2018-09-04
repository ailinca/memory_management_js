/*

Static Allocation

int n; // 4 bytes
int x[4]; // array of 4 elements, each 4 bytes
double m; // 8 bytes

The compiler can immediately see that the code requires 
4 + 4 × 4 + 8 = 28 bytes.

- size must be known at compile time
- it is performed at compile time
- assigned to the stack
- FILO (first-in, last-out) eg. tunnel


*/