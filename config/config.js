require('dotenv').config();

let CONFIG = {};

CONFIG.PORT = process.env.PORT || 3001;
CONFIG.MONGODB_URI = process.env.MONGODB_URI || 'INSET_YOUR_DATABASE_URL_HERE';
CONFIG.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'INSET_YOUR_DATABASE_URL_HERE';


module.exports = CONFIG;
