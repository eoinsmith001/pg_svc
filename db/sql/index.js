var config = require('../../config');
module.exports = {
  create_database : "CREATE DATABASE ${dbname};",
  create_role : "CREATE USER ${role} WITH PASSWORD '${pass}';",
  create_table : 'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)',
  drop_database : 'DROP DATABASE '+config.db_name+";",
  drop_role : 'DROP USER '+config.db_role+";",
  drop_table : 'DROP TABLE items;',
  grant_privileges : 'GRANT ALL ON DATABASE '+config.db_name+' to '+config.db_role+';',
  revoke_privileges : 'REVOKE ALL PRIVILEGES ON DATABASE '+config.db_name+' FROM '+config.db_role+';',
}
