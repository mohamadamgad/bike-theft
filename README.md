# Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

### `npm test`

### Technologies used

- React
- Typescript
- styled components
- Jest

### Component Structure

- util/api.ts: This holds the functions to call the API
- types: contains the types used in the app
- BikeTheftListPage.tsx: The main app that has the main logic
- Filter.tsx: This is where the Filter elements and logic are
- BikeTheftList.tsx: This is Where the bike theft list is rendered with the pagination component
- BikeTheftItem: Has the each item rendered in the BikeTheft list
- Pagination.tsx: Has the list pagination logic

### App Limitations:

- Api limitations: The api does not support to filter the bikelist by start/end dates.
  What I did was getting the bike list filtered by title (?query) and then doing the filter by date in the api.ts file.
  That is not an ideal solution, but I did not want to overcomplicate the implementation for such a simple task.

- Tests: I did not have much time left to write unit tests, I just wrote a simple test for the api.ts fetch function and for Filter.tsx component.
