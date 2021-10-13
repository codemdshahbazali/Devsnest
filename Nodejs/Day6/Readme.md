Javascript was made for browser. Chrome runs a javascript engine called V8 for running js under browser.
Async -> Heavy tasks are executed in the background like api call and stuff and it is executed back once the task is completed. This makes JS performant and will not make the control wait for long for the task to complete
Event loop -> 

A single-threaded, non-blocking, asynchronous, concurrent
I have call stack, an event loop, a callback queqe, someother apis
V8 only has a call stack(functions are pushed into, execution context) and a heap(memory allocation takes place)
The call stack 
    One thread == One call stack == One thing at a time (only one line of code is executed)
    Stack is LIFO

setTimeOut(), setInterval() => this is browser API

Queue -> FIFO

Event loop -> pushes things from queqe if stack is empty endlessly

THA: Implement CRUD while taking options from CLI using async