# Design Patterns 

## Overview 
- Gang of Four: 
    - essentials: 
        - pattern name: describes problem and solution in a few words
        - the problem: should be clearly stated and when pattern should be used
        - the solution: clearly diagrammed and documented 
        - consequences: must define trade-offs when using them 
    - 3 categories: 
        - creational 
        - structural 
        - behavioural 
- Anti-patterns: bad patterns to avoid 
    - modifying the prototype on an instance 
    - using sync execution after initializing the app 
    - callback chaos

## Ch 2: Creational Patterns 
- 2.1-3: The Singleton problem: creating multiple instances of one object 
    - refactoring by exporting instance itself or creating a Singleton class with getInstance() method
- ch 2.4-5: using Prototype pattern to create similar instances of object
- ch 2.6: Factory method: encapsulating constructors into a single module and creating a function that will create object for us; subclasses decide which class to instantiate 
- ch 2.7: Builder pattern fixes teloscopic constructor problem - a constructor with too many arguments 

## Ch 3: Structural Patterns 
- 3.1: The Adapter pattern 
    - take an object, keep its interface, adapt it to new environment or solution; adaptors make incompatible classes become compatible
    - adapting localstorage to nodejs
- 3.3: using a proxy to use an interface that delays instantiation of expensive object and control requests made to that object
- 3.5: The Composite pattern: organize objects in a way that treats leafs and branches uniformly
- 3.7: Decorator pattern: attach additional responsibilities to an object dynamically as alternative to subclassing for extending functionality

## Ch 4: Behavioural Patterns 
- 4.1-2: Chain of responsibility pattern: chain together objects to handle a request; handler could pass request to next handler, each handler being able to return a result
    - avoids coupling the sender of a request with its receiver 
- 4.3: Command pattern: encapsulating request as an object
- 4.6: Iterator pattern: providing a way to access elements of an aggregate object sequentially w/o exposing its underlying representation
    - designed to work with collections of data by providing way to access first data record and to iterate through rest of the rows in data set 
- 4.8: Observer pattern: objects called observers can watch other objects for state changes (observables) 
    - defining a 1:M dependency btwn objects
- 4.10: Strategy patterns lets you create multiple algorithms for specific tasks and lets you decide which algorithm to use at runtime 
    - define a family of algorithms, encapsulate each one, and make them interchangeable