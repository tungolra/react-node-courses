### Intro 
- scale queue - 3 directions 
    - cloning: forking nodejs processes into multiple instances 
    - scaling data layers: split data between databases via horizontal partitioning
    - decompose applications into microservices

### Cloning
- The Scale Cube
    - monoliths: least scaled applications
    - multi-instance applications: handles massive amounts of traffic 
    - x-axis represents cloning 
        - clone app in another instance and handling traffic btwn 2 instances instead of 1         
        - Nodejs designed to fork applications
    - z-axis represents partitioning
    - y-axis represents microservices
- fork method available in child_process module
- Cluster: a group of node instances that all work together
    - <code> loadtest -n 3000 http://localhost:3000 </code> to force n requests/second

### Database Scaling

### Microservices