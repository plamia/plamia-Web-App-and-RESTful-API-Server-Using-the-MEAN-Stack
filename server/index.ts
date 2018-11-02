import app from './src';
import config from './src/config';
import logger from './src/util/logger';

var db = require('../server/src/db');

app.listen(config.port, () => {
    logger.log(`server started at port ${config.port}`);
});
