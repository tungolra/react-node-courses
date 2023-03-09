# Advanced NodeJS Part 1

## Ch 1: Asynchronous Patterns
- direct style vs continuation passing style

## Ch 2: Advanced Streams 
- node --trace_gc buffer.js
    - mark sweep cleans up garbage
    - using 157mb of memory
- node --trace_gc stream.js
    - no mark sweep lines
    - using 41mb of memory
- readstreams read bits of data one chunk at a time, writestreams write data one chunk at a time
- backpressure: pushing too much data into stream 
- high Water Mark: create a sufficiently sized hose to pump data in 
## Ch 3: HTTP Streaming