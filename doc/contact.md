# Spesificaction API Contact

## Create Contact

Endpoint : **POST** /api/contacts

Request Header:

- **X-API-TOKEN**: "yourtoken"

Request Body :

```json
{
  "first_name": "Agus",
  "last_name": "Sutarom",
  "email": "taroom@example.com",
  "phone": "085733377737"
}
```

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Agus",
    "last_name": "Sutarom",
    "email": "taroom@example.com",
    "phone": "085733377737"
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "first name is required, ..."
}
```

## Get Contacts

Endpoint : **GET** /api/contacts

Query Params :

- page : number, default 1
- size : number, default 10 (per page)

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Agus",
      "last_name": "Sutarom",
      "email": "taroom@example.com",
      "phone": "085733377737"
    },
    {
      "id": 2
      // next contact data
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "size": 10
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user unauthorized, ..."
}
```

## Get Contact Details

Endpoint : **GET** /api/contacts/:id

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Agus",
    "last_name": "Sutarom",
    "email": "taroom@example.com",
    "phone": "085733377737"
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user unauthorized, ..."
}
```

## Update Contact

Endpoint : **PUT** /api/contacts/:id

Request Header:

- **X-API-TOKEN**: "yourtoken"

Request Body :

```json
{
  "first_name": "Agus",
  "last_name": "Sutarom",
  "email": "taroom@example.com",
  "phone": "085733377737"
}
```

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Agus", //(Updated)
    "last_name": "Sutarom", //(Updated)
    "email": "taroom@example.com", //(Updated)
    "phone": "085733377737" //(Updated)
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "first name is required, user unauthorized, ..."
}
```

## Delete Contact

Endpoint : **DELETE** /api/contacts/:id

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": "OK"
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "data did not exist, user authorized, ..."
}
```

## Search Contact

Endpoint : **GET** /api/contacts

Query Params :

- name : string, contact first name / last name (optional)
- phone : string, contact phone, (optional)
- email : string, contact email, (optional)
- page : number, default 1
- size : number, default 10 (per page)

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Agus",
      "last_name": "Sutarom",
      "email": "taroom@example.com",
      "phone": "085733377737"
    },
    {
      "id": 2,
      "first_name": "Joko",
      "last_name": "Waluyo",
      "email": "waluyo@example.com",
      "phone": "08545222"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_page": 1,
    "size": 10
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user authorized, ..."
}
```
