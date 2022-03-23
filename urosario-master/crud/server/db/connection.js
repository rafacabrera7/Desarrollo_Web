require('dotenv').config({path:'../.env'})
const { MongoClient } = require('mongodb');
const connectionString = process.env.DB_CONNECTION;


const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, dbObj) {
      if (err || !dbObj) {
        return callback(err);
      }

      connection = dbObj.db(process.env.DB_NAME);
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return connection;
  },
};