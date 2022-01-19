/**
 * This plugin integrates directly with the `craft.js` plugin properties, in which GQL queries are 'printed' via `this.$print(A_GQL_QUERY)` then passed to the plugin as props.
 * 
 * Example:
```
 const request = await this.$craft({
        query: this.$print(GET_WORK_PAGE),
        variables: {
            slug: slug,
        },
    })
    this.entry = request.data.entry
```
 */

import { print } from 'graphql'

export default (context, inject) => {
    inject('print', print)
}
