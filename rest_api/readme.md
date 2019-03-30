# rest-api

## routes

**POST /pdf**

Submit a pdf.

Good Response:

```js
{
  error: false
}
```

**GET /scrape?url**

Get the assets of the given url as a zip file.

Good Response:

```js
{
  error: false,
  encoding: "base64",
  zip: "<base64 zip buffer>",
}
```

