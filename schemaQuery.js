require('dotenv').config()
const fs = require('fs')
const fetch = require('node-fetch')

// If your API endpoint is protected, uncomment this
// const btoa = require('btoa')

fetch(process.env.BACKEND_URL + process.env.GRAPHQL_PATH, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'

        // If your API endpoint is protected,
        // uncomment this section and  add in your servers credentials here:
        // Authorization: 'Basic ' + btoa('rockit:rockit')
    },
    body: JSON.stringify({
        variables: {},
        query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
    })
})
    .then((result) => result.json())
    .then((result) => {
        // here we're filtering out any type information unrelated to unions or interfaces
        const filteredData = result.data.__schema.types.filter(
            (type) => type.possibleTypes !== null
        )
        result.data.__schema.types = filteredData
        fs.writeFileSync(
            './fragmentTypes.json',
            JSON.stringify(result.data),
            (err) => {
                if (err) {
                    console.error('Error writing fragmentTypes file', err)
                } else {
                    console.log('Fragment types successfully extracted!')
                }
            }
        )
    })
