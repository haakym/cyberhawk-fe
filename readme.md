# Cyber Hawk Technical Test Front-end

## Getting started

1. Run `npm install`.
2. Run `npm run dev` to run the web-app.
3. Copy URL from output and paste into web browser to view, will look something like this: `Local:   http://127.0.0.1:5173/`

Note: the back-end API must be running before the front-end can function correctly. The back-end solution can be found here: [https://github.com/haakym/cyberhawk](https://github.com/haakym/cyberhawk).

## Improvements

With more time the following improvements could have been made:

- Reusable class used to call the API with axios as opposed to axios calls made when needed.
- Move API URL to an environment variable, e.g. in .env file.
- Avoid use of useEffect + axios API calls. I've read this is discouraged because useEffect is called when the component is rendered and using something like a query library the request can be done in parallel.
- The inspection page found here: `src/pages/Inspection.jsx` is incomplete, following improvements could have been made:
  - Fix bugs!
  - Flesh out the data and styling for `src/pages/Inspection.jsx`.
  - Add a map component to display the location of a given inspection.
  - Links to pages with related data: gradings, components, pilot.
- Unit tests for components.
- Authentication:
  - Add register/login page.
  - Redirect guest users to login based on expired or absent JWT.
  - Redirect guest when they attempt to view data that they are not authorised to view.