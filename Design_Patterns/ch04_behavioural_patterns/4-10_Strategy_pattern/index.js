var logger = require('./Logger');
// implementing different ways of dealing with logging 

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

logger.changeStrategy("none");

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');