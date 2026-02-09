# Notes App (notes-app)


#### Tech Stack
- [VueJS](https://vuejs.org/)
- [Spike Template](https://demos.wrappixel.com/premium-admin-templates/vuejs/spike-vue/docs/index.html)

#### How to setup
``` bash
# clone
$ git clone https://github.com/amsanchez0513/Notes-App---Frontend.git

# install dependencies
$ npm install
```

#### How to Deploy
``` bash

# serve with hot reload at localhost:5174
$ npm run dev

# build for production with minification
$ npm run build

# lint code
$ quasar lint
```

#### How to Contribute
- Configure project, refer to [Project Configuration](https://demos.wrappixel.com/premium-admin-templates/vuejs/spike-vue/docs/docs-start.html)
- Customize Theme, refer to [this]Configure project, refer to [Project Configuration](https://demos.wrappixel.com/premium-admin-templates/vuejs/spike-vue/docs/docs-start.html)
- Creating new components, layouts or pages, refer to:
    - [Get templates here](https://spike-vue-main.netlify.app/dashboard1)
    - [Repository to copy complete template files](https://github.com/Klika-Tech-Team/klika-admin.git)
      - Follow How to setup and Deploy above for reference
- Branching model
    - Always base you branch from `master`
    - Then PR the branch back to the base branch
- Branch naming
    - Branch names should be named on what is supposed to be done in it
        - E.g. `dev-1234-add-login-functionality`
- Make sure all tests are passing
    - For unit test: `npm run unit`
    - For e2e test: `npm run e2e`
    - For all tests: `npm test`
    - It is a good idea to follow TDD.
    `npm run tdd` will watch your files and run tests to continuously report failing tests.

