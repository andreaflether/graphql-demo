# GraphQL Demo

## Ruby on Rails with GraphQL and React/Apollo simple demo.

From [How To Use GraphQL with Ruby on Rails - Part 1 - Backend](https://www.youtube.com/watch?v=kSlJH3hrV58) and [How To Use GraphQL with Ruby on Rails - Part 2 - React Apollo Frontend](https://www.youtube.com/watch?v=TOq86ozyHIA) by Andy Leverenz

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
