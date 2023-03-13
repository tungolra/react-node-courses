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
- PM2 allows management of zero downtime clusters in production
    - <code>pm2 start app.js -i 3 </code> specify number of instances to run
    - <code>pm2 start app.js -i -1 </code> node chooses appropriate number of instances to run
    - <code>pm2 list</code> see all apps running
    - <code>pm2 stop app</code> to stop app
    - <code>pm2 delete app</code> remove app from pm2
    - <code>pm2 logs</code> shows logs for all processes
    - <code>pm2 monitor</code>to show terminal gui; use with loadtest to see request run in real-time
    - <code>pm2 reload app</code> reload app
    - cloud services like aws, heroku, cloudflare, azure have tools that manage clusters baked into environment

### Database Scaling
- quickly use a database <code>npm i node-localstorage</code>
- when to use sharding: 
    - too much data
    - more write operations than the server can handle
    - when you experience slow performance
- each database has own tools/patterns for partitioning database 
### Microservices
- <code>curl http://localhost:3000</code> make a request for the ticket-system
- split dbs by reservation and shows
- split ticket-system into show.js and reservations.js
- can orchestrate services by: 
    - API orchestration: provide single API to interact with all clients and orchestrate microservices req'd to perform an action 
    - Messaging Layer: like a backdoor to your service; customers come in from front door; goods purchased from other businesses delivered through back door; messaging layer is usually a TCP application used to communicate with other microservices, i.e. customers checkout with checkout service, and checkout service updates that action on messaging layer, which, in turn, reserve the seats for the show
- Fault Tolerance: 

#### Further Learning 
Popular messaging queues to integrate services
- RabbitMQ
- Apache Kafka
- Learning Redis 
- Microsoft Azure