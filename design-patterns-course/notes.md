# Design Patters 

## Overview 
- Gang of Four: 
    - essentials: 
        - pattern name: describes porblem and solution in a few words
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
- 
    - 2.1-3: The Singleton problem: creating multiple instances of one object 
        - refactoring by exporting instance itself or creating a Singleton class with getInstance() method
    - ch 2.4-5: using Prototype pattern to create similar instances of object
    - ch 2.6: Factory method: encapsulating constructors into a single module and creating a function that will create object for us; subclasses decide which class to instantiate 
    - ch 2.7: Builder pattern fixes teloscopic constructor problem - a constructor with too many arguments 
## Ch 2: Structural Patterns 
## Ch 2: Behavioural Patterns 