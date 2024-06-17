# Specification API User

## Register User

End Point: POST /api/users

Request Body :

```json
{
  "username": "taroom",
  "password": "taroom",
  "name": "Agus Sutarom"
}
```

Response Body (on Success) :

```json
{
  "data": {
    "username": "taroom",
    "name": "Agus Sutarom"
  }
}
```

Response Body (on Failed) :

```json
{
  "error": "Username is required,.. "
}
```

## Login User

End Point: POST /api/users/login

Request Body :

```json
{
  "username": "taroom",
  "password": "taroom"
}
```

Response Body (on Success) :

```json
{
  "data": {
    "username": "taroom",
    "name": "Agus Sutarom",
    "token": "<dynamic-token>"
  }
}
```

Response Body (on Failed) :

```json
{
  "error": "Username or password did not exists,.. "
}
```

## Get User

End Point: GET /api/users/current

Request Header :

- X-API-TOKEN : "yourtoken"

Response Body (on Success) :

```json
{
  "data": {
    "username": "taroom",
    "name": "Agus Sutarom"
  }
}
```

Response Body (on Failed) :

```json
{
  "error": "User unauthorized,.. "
}
```

## Update User

End Point: PACTH /api/users/current

Request Header :

- X-API-TOKEN : "yourtoken"

Request Body :

```json
{
  "username": "taroom", //optional
  "name": "taroom", //optional
  "password": "taroom" //optional
}
```

Response Body (on Success) :

```json
{
  "data": "OK"
}
```

Response Body (on Failed) :

```json
{
  "error": "User unauthorized,.. "
}
```

## Logout User

End Point: DELETE /api/users/current

Request Header :

- X-API-TOKEN : "yourtoken"

Response Body (on Success) :

```json
{
  "data": "OK"
}
```

Response Body (on Failed) :

```json
{
  "error": "User unauthorized,.. "
}
```
