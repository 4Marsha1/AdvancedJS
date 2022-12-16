// JS is SYNCHRONOUS, BLOCKING & SINGLE THREADED LANG

// 1. Synchronous: 
// Code executes top down, one line at a time, no skipping

// 2. Blocking: 
// The Next Process will not kick off until the Previous Process is complete, no matter how long it takes.

// 3. Single Threaded: 
// Each thread can perform one task at a time. 
// JS has only one thread, called the main thread for executing any code



//  ------> Traditional methods for running code asynchronously in JS: 
setTimeout();
setInterval();

// TImers & Intervals are not part of JS. They are implemented by the browser. 
// SetTimeout & SetInterval are names given to these functionality in JS