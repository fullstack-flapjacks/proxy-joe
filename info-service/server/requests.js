//gives access to the exported functions from the database file
const db = require('../database/index.js');

module.exports = {
  about: {
    get: (req, res) => {
      console.log('invoked');
    //invoke func here to get data from the database 
    //to be sent back to client to be rendered
      db.findInformation((error, item) => {
        if (error) throw error;
        res.send(item);
      });
    }
  },
  location: {
    get: (req, res) => {
      console.log('this is invoked');
    //invoke func here to get data from the database 
    //to be sent back to client to be rendered
      db.findLocation((error, item) => {
        if (error) throw error;
        res.send(item);
      });
    }
  }
}
