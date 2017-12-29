const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.dbUri, { useMongoClient: true });
mongoose.Promise = global.Promise;

exports.mongoose = mongoose;