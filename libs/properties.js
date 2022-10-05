const yaml = require('js-yaml');
const fs = require('fs');
const doc = yaml.load(fs.readFileSync(process.env.NODE_ENV === 'production' ? process.env.TIMS_CONF: './conf/application.yml', 'utf8'));

module.exports = doc;