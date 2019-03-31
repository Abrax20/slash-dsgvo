# rest-api

## routes

Bad Response:

```js
{
  error: true,
  message: "<error message>"
}
```

**POST /pdf**

Submit a pdf.

Reqest Parameters:

```js
{
  pdf: "<base64 encoded pdf data>",
  client: "<name of the client>",
}
```

Good Response:

```js
{
  error: false,
}
```

**GET /pdf/list**

Get a list of all available pdfs.

Good Response:

```js
{
  error: false,
  pdfList: [
    {
      name: "my-docker-workshop",
      link: "pdf/download/my-docker-workshop.pdf",
    }
  ]
}
```

**GET /pdf/download/:filename**

Download a pdf file.

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

