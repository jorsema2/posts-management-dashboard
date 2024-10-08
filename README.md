## Posts Management Dashboard


You are tasked with building a "Posts Management Dashboard" that will display, add, or remove posts of users fetched from an external API.


The app will communicate with a mock API (provided below) to read a list of posts, fetch
details for individual posts, and submit changes (i.e., adding or removing posts).


It should also aggregate additional data (such as comments or user information)
from other endpoints and display it in the UI.


Email: [Jorge Segura](mailto:jorsema2@gmail.com)


### [Click here to see the Video Review](https://www.loom.com/share/f7c06d214a5a4081aecf7489099a09b9?sid=7c2c6c60-2e56-4d89-b21d-49756e0b1adf)


## Proposed Solution


- Divided the UI into small reusable components and defined the component structure in an easy way to test and extend the UI in the future.
- Designed the state architecture using useState hooks. Given the app's simple structure, useState was sufficient for managing local state, and a global state management solution like Redux was unnecessary. If the app grew, it could be needed to add a global state management tool.
- Created components and added calls to endpoints to show posts and comments.
- Added the possibility to show and hide comments, so the comments endpoint would be called only when clicking on "Show comments", improving performance and user experience.
- Added functionality to add and delete posts.
- Used Cypress to create a test that checks posts are shown and another to check comments are shown when clicking on "Show comments". It simulates real user interactions.
- Styled with Styled-components (CSS-in-JS) to avoid naming clashes.
- The UI design is loosely inspired by Facebook posts.


### [Click here to see the Live Demo](https://reliable-parfait-cd0160.netlify.app/)


## Screenshots


![alt text](assets/Posts-Management-Dashboard-10-08-2024_12_02_PM.png)  


## Assumptions


- The application assumes data changes are not persistent on the server but will be reflected in the client upon a successful API response.
- No authentication.

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


Once the app is running with `npm run dev`, you can run the unit tests using:


1. `npx cypress open`.
2. Choose "E2E Testing".
3. Choose a browser.
4. Click on the file `spec.cy.js` and the tests should run automatically.


## Future Work


1. Add unit tests with react-testing-library and test more features with cypress.
2. Improve responsiveness.
3. Add possibility to delete and add comments (if the API allowed it).
4. Add a feature to like posts (if the API allowed it).
5. Don't show "Show comments" button when the post has zero comments.
6. Add lazy loading for posts to load when scrolling (if the API had pagination).
7. Add skeletons.
8. Test for performance and consider setting up a CDN.
9. If the state management becomes more complex, adding a state management library.



