# pg-svc 

An attempt at a node postgres api

## postgres stuff

Start with 

```
postgres -D /usr/local/var/postgres
```

Config at `/usr/local/var/postgres//pg_hba.conf`

Connect with `psql`
From `man psql`: 
```
psql [-d database] [-h hostname] [-p port] [-U user]
# arg not corresponding to option will be used as database arg

# or with a conninfo URI
psql postgresql://dbmaster:5433/mydb?sslmode=require
```

Defaults: enter `\conninfo` at psql prompt to see connection details

## Doing setup 

- Connect as superuser (postgres): `psql -U postgres`
- Connect/use default db: `\connect template1`, or `\c template1`
