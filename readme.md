# Cyber Hawk Technical Test Front-end

## Getting started

1. `git clone` this repository.
2. Run `npm install` in the root directory.
3. Run `npm run dev` in the root directory to run the web-app.

Note: the back-end API must be running before the front-end can function correctly.

## Improvements

With more time the following improvements could have been made:

- Reusable class used to call the API with axios as opposed to axios calls made when needed.
- Avoid use of useEffect + axios API calls. I've read this is discouraged because useEffect is called when the component is rendered and using something like a query library the request can be done in parallel.
- `src/pages/Inspection.jsx`
  - Fix bugs!
  - Flesh out the data and styling for `src/pages/Inspection.jsx`.
  - Add a map component to display the location of a given inspection.
  - Links to pages with related data: gradings, components, pilot.
- Unit tests for components.
- Authentication:
  - Add login page.
  - Redirect guest users to login based on expired or absent JWT.
