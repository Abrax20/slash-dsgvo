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

Submit data to create a pdf.

Request Parameters:

```js
{
  company: {
    name: "string<company thats operating the tablet>",
  },
  client: {
    name: "string<full name>",
    signature: "base64<signature of the client>",
    lang: "string<language of the contract>",
  },
  convention: {
    name: "string<name of the convention>",
    place: "string<place of the convention>",
    time: "iso-date<time of contract>",
  },
  dpo: {
    name: "string<name of the data protection officer>",
    email: "string<email of the dpo>",
    tel: "string<tel of dpo>",
    addr: "string<address of dpo>",
  }
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

