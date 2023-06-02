
# PPC Dashboard

- Dashboard monitoring WIP Plant TBR
- Memvisualisasi data yang bersumber dari barcode dengan pendekatan analitik

## Tech Stack

**Client:** Next.js, React, Bootstrap 4.6, AdminLTE V.3

**Server:** json-server


## Run Locally

Clone the project

```bash
  git clone https://github.com/rikzagoldluck/ppc.git
```

Go to the project directory

```bash
  cd ppc
```

Install dependencies

```bash
  npm install
  npm install -g json-server
```

Start json-server for dummy data
```bash
   json-server --watch json-server/db.json --port 3001
```

Start the server (use another terminal)

```bash
  npm run dev
```


## Support

For support, don't hestitate to keep in touch with me in rikzasimdigei@gmail.com, i'll give you my WA number through email message.


## Authors

- [@rikzagoldluck](https://www.github.com/rikzagoldluck)


## Documentation

### Table of Contents

- [getAll4M][1]
- [getProd][2]
  - [Parameters][3]

## getAll4M

This function is used to get all machine stops from the API

Returns **[array][4]** response array of machine stops or empty array

## getProd

This function is used to get all products from the API

### Parameters

- `endpoint` **[string][5]**&#x20;

Returns **[array][4]** response array of products or empty array

[1]: #getall4m
[2]: #getprod
[3]: #parameters
[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String


