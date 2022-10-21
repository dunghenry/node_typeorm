# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command

2. Setup database settings inside `data-source.ts` file

3. Run `npm start` command

### Create project

```js
typeorm init --database postgres --express
```

### Run docker

```js
docker compose up -d
```

### Login postgres

```js
psql -U postgres
```

### Show db

```js
\l
```

### Use db

```js
\c namedb
```

### Show all table

```js
\dt
```

### Show all records

```js
 select * from "user";
```
