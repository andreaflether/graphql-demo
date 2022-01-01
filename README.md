# GraphQL Demo

## Backend application for a GraphQL simple demo.

From [How To Use GraphQL with Ruby on Rails - Part 1 - Backend](https://www.youtube.com/watch?v=kSlJH3hrV58) by Andy Leverenz

### Users
```
{
  users {
    name,
    email,
    username,
    postsCount
  }
}
```

### User
```
{
  user(id: 1) {
    id
    name
    email
    username
    postsCount
  }
}
```

### Create User
```
mutation {
 createUser(input: {
   name: "User",
   email: "user@user.com",
   username: "user"
 }) {
   user {
     id,
     name,
     email,
     username
   }
   errors
 }
}
```
