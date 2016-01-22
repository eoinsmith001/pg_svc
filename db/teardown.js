var config = require('../config');
var sql = require('./sql');

var pgp = require('pg-promise')();
var db = pgp(config.db_adm);

db.none(sql.revoke_privileges)
.then(function() {
  console.log('Privileges revoked');
  db.task(function(t) {
    console.log('drop role');
    return t.none(sql.drop_role)
      .then(function() {
        console.log('drop database');
        return t.none(sql.drop_database);
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
