# nuxt-craft-starter

> A starter for projects that require Nuxt JS + Craft CMS + Tailwind CSS

<p align="center">
  <img src="https://www.rockitscienceagency.com/img/images/nuxt-craft-starter.png" />
</p>

## Features

- [@nuxtjs/axios](https://github.com/nuxt-community/axios-module) for fetching sitemap, metadata and navigation structure from Craft CMS.
  - SEOmatic and Route Map Craft CMS plugins required for sitemap and metadata. 
  - Navigation plugin for Craft CMS used for navigation structure.
  - Custom `craftRouting` middleware configured to check against sitemap from Craft CMS when pages don't exist.
- [@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module) for fetching GraphQL data and configured for live preview mode.
- [@nuxtjs/proxy](https://github.com/nuxt-community/proxy-module) included for adding proxies for API endpoints
- [@nuxt-community/fontawesome-module](https://github.com/nuxt-community/fontawesome-module) to easily add fontawesome icons.
- [@nuxt-community/svg-module](https://github.com/nuxt-community/svg-module) for loading SVG's into Nuxt pages.
- [tailwind module](https://github.com/nuxt-community/tailwindcss-module) added with Tailwind CSS (version 2).
- [lazysizes](https://github.com/aFarkas/lazysizes) added and configured to work within Nuxt.

## Additional Notes
### v-html
If your raw HTML is coming from a secure source (such as Craft) and you have "Purify HTML" set on your redactor fields, you may add this setting to you `eslintrc.js` file to allow for using the `v-html` directive and to avoid eslint complaining about XSS attacks:

```
  rules: {
      'vue/no-v-html': 0
  }
```

### Overide vscode css style settings with stylelint
If vscode is complaining about `at-rule or selector expectedcss(css-ruleorselectorexpected)` or `semi-colon expectedcss(css-semicolonexpected)` while using your tailwind `@apply` rules, you need to adjust your workspace settings to allow for the stylelint packge to validate css rather than vscode. To do that, add the following to your workspaces `settings.json` file:

```
  /**
   * Disable VS Code from validating CSS/SCSS
   */
  "stylelint.enable": true,
  "scss.validate": false,
  "css.validate": false,
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
