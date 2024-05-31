## Requirements:
- npm >= 9.4.0
- node >= 16

## Installation:

1. clone the project
2. go to the root folder of the project
3. install dependencies

   `npm install`

4. install cypress

   `npm install cypress`

## Running Tests:

- Run web-server to execution test suites:

  `npm run open`

  `npx cypress open`

- Run tests in console:

  `npm run test`

- Run specific tests in console:
  `npm run test -- --spec "./cypress/e2e/YourTest.cy.js"`
