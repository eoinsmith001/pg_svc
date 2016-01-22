var config = require('../config');
var sql = require('./sql');

var pgp = require('pg-promise')();
var db = pgp(config.db_adm);

db.none(sql.create_database, {dbname: config.db_name})
.then(function() {
  console.log('Database created');
  db.task(function(t) {
    console.log('create role');
    return t.none(sql.create_role, {role: config.db_user})
      .then(function() {
        console.log('grant priv');
        return t.none(sql.grant_privileges);
      });
  })
  .then(function(events) {
    console.log('All done');
    pgp.end();
  });
})
.catch(function(err) {
  console.error('error',err);
  pgp.end();
})
