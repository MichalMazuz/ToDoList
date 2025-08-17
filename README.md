# Todo Fullstack App

Fullstack task management app: Server (.NET 7 Minimal API + EF Core), Client (React + Axios), DB (MySQL).

## Features
- CREATE tasks
- Update task status
- Delete tasks
- Axios interceptor for error handling
- CORS & Swagger

## Installation & Run
### Server
1. Install MySQL + Workbench
2. Create ToDoDB and add connection string in appsettings.json
3. Install EF Core packages:

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools

4. Scaffold DbContext:
dotnet ef dbcontext scaffold Name=new_schema Pomelo.EntityFrameworkCore.MySql -f -c ToDoDbContext

5. Run server:
dotnet watch run

### Client
1. `npm i`
2. `npm start`
