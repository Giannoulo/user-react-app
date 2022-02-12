Use npm install to install deps and then npm start to run the app.

Notes:

1. The token gets inserted before each request through axios interceptors (axiosConfig.js)
2. The validation/error reporting process is a draft, it needs refactoring in order to avoid alert()
3. Reloading the page on the create edit user page loses the user state and makes it a add new user page.
   Need to persist(stringify and store in localstorage like the token) all of the redux state in order to avoid that
4. The intersection Observer on UserList component has a bug on reload.
5. Some types are missing
