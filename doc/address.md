# Spesificaction API Address

## Create Address

Endpoint : **POST** /api/contacts/:idContact/addresses

Request Header:

- **X-API-TOKEN**: "yourtoken"

Request Body :

```json
{
  "street": "Jl. Apa",
  "city": "Kota Apa",
  "province": "Provinsi Apa",
  "country": "Negara Apa",
  "postal_code": "623532"
}
```

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "623532"
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "postal code is required, ..."
}
```

## Get Address

Endpoint : **GET** /api/contacts/:idContact/addresses

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl. Apa",
      "city": "Kota Apa",
      "province": "Provinsi Apa",
      "country": "Negara Apa",
      "postal_code": "623532"
    },
    {
      "id": 2,
      "street": "Jl. Apa",
      "city": "Kota Apa",
      "province": "Provinsi Apa",
      "country": "Negara Apa",
      "postal_code": "623532"
    }
  ]
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user unauthorized, contact is not found ..."
}
```

## Get Contact Details

Endpoint : **GET** /api/contacts/:idContact/addresses/:idAddress

Request Header:

- **X-API-TOKEN**: "yourtoken"

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "623532"
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user unauthorized, address is not found ..."
}
```

## Update Contact

Endpoint : **PUT** /api/contacts/:idContact/addresses/:idAddress

Request Header:

- **X-API-TOKEN**: "yourtoken"

Request Body :

```json
{
  "street": "Jl. Apa", //new submitted
  "city": "Kota Apa", //new submitted
  "province": "Provinsi Apa", //new submitted
  "country": "Negara Apa", //new submitted
  "postal_code": "623532" // new submitted
}
```

Response Body (on **Success**) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Apa", // (updated)
    "city": "Kota Apa", // (updated)
    "province": "Provinsi Apa", // (updated)
    "country": "Negara Apa", // (updated)
    "postal_code": "623532" // (updated)
  }
}
```

Response Body (on **Failed**) :

```json
{
  "errors": "user unauthorized, ..."
}
```

## Delete Contact

Endpoint : **DELETE** /api/contacts/:idContact/addresses/:idAddress

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
