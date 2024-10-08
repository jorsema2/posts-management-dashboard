## Posts Management Dashboard

You are tasked with building a "Posts Management Dashboard" that will display,
add or remove posts of a users fetched from an external API.

The app will communicate with a mock API (provided below) to read a list of posts, fetch
details for individual posts, and submit changes (i.e., adding or removing posts).

It should also aggregate additional data (such as comments or user information)
from other endpoints and display it in the UI.

[Jorge Segura](mailto:jorsema2@gmail.com)

### [Click here to see the Video Review]([LINK_TO_LOOM_VIDEO])

## Proposed Solution

- Divided the UI into small components and defined the component structure.
- Designed the state architecture.
- Created components and added calls to endpoints to show posts and comments.
- Added functionality to add and delete posts.
- Used Cypress to create a test that checks posts are shown and another to check comments are shown when clicking on "Show comments".
- Styled with Styled-components (CSS-in-JS).

### [Click here to see the Live Demo]([LINK_TO_THE_DEPLOYED_APP])

## Screenshots

![alt text](assets/app_screen.png)

## Assumptions

- The application assumes data changes are not persistent on the server but will be reflected in the client upon a successful API response.

## Libraries / Tools Used

- React.js.
- Vite for project setup.
- Cypress.
- Styled-components
- Lodash for deep cloning.
- API: https://jsonplaceholder.typicode.com/

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm run dev`

## Running the tests

Note: To run the Cypress tests, you will need the app to be running by using `npm run dev` and check it runs on [http://127.0.0.1:5173/]([http://127.0.0.1:5173/]). If the app was using a different port, change the URL of line 2 in `\posts-management-dashboard\cypress\e2e\spec.cy.js` to the URL where the app is running.

Once the app is running with `npm run dev` you can run the unit tests using:

1. `npx cypress open`
2. Choose "E2E Testing".
3. Choose a browser.
4. Click on the file `spec.cy.js` and the tests should run automatically.

## Future Work

1. Add unit tests with react-testing-library and test more features with cypress.
2. Improve responsiveness.
3. Add possibility to delete and add comments (if the API allowed it).
4. Add feature to like posts (if the API allowed it).
5. Add lazyloading for posts to load when scrolling (if the API had pagination).
6. Add skeletons.
7. Test for perfomance and consider setting up a CDN.
8. If the state management becomes more complex, adding a state management library.
