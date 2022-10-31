# API Blog
## Description
A node & express API to manage blog data (posts, authors and categories).

## Dependences
- node 16.18.0
- npm v8.19.2
- mysql v8.0.31

## Install project
1. Clone repository
```
git clone git@github.com:RgmDev/unir-node-mysql-act9.git blog
```

2. Install dependencies
```
cd blog
npm install
```

3. Import database dump
In Mysql Workbench Server -> Data Import
Select __Import from Self-Contained File__ and __database/dump_blog.sql__ file
Click in __Start import__

4. Create .env file
Copy __.env.example__ to __.env__ and set up database variables
```
DB_HOST=localhost
DB_USER=db_user
DB_PASSWORD=db_password
DB_PORT=db_port
DB_DATABASE=db_name
```

5. Run the project
```
npm run dev
```

6. Access to [localhost:3000](http://localhost:3000)

[Optional]
7. Import postman collection and environment
In Postman click on __Import__ 
Select __postman/Blog.postman_collection.json__ and __postman/Blog.postman_environment.json__ files
Click __Import__ button

## Author
Rubén González Martín