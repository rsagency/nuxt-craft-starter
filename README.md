# nuxt-craft-starter

> Boilerplate for projects that require Nuxt JS + Craft CMS + Tailwind CSS + Netlify

<p align="center">
  <img src="https://www.rockitscienceagency.com/img/images/nuxt-craft-starter.png" />
</p>

## Features
- [@braid/vue-formulate](https://github.com/wearebraid/vue-formulate) for ease of building forms.
- [@nuxtjs/fontawesome](https://github.com/nuxt-community/fontawesome-module) for adding icons.
- [graphql-tag](https://github.com/apollographql/graphql-tag) for writing graphql queries and syntax highlighing.
- [nuxt-gsap-module](https://github.com/ivodolenc/nuxt-gsap-module) for ease of adding sweet transitions and animations.
- [lozad](https://github.com/ApoorvSaxena/lozad.js) for image lazyloading.
- [@nuxt/http](https://github.com/nuxt/http) for making asynchronus requests to fetch data from Craft and configured to enable Live Preview.
- [nuxt-seomatic-meta](https://github.com/ben-rogerson/nuxt-seomatic-meta) configured to pull SEO meta data from Craft's [SEOmatic plugin](https://plugins.craftcms.com/seomatic)
- [@nuxt-community/svg-module](https://github.com/nuxt-community/svg-module) for loading SVG's into Nuxt pages.
- [tailwind module](https://github.com/nuxt-community/tailwindcss-module) added with Tailwind CSS (version 2).

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
