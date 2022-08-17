# React Search Meal

This project was made for learning purposes only. It's main goal is to exercise the following aspects:
- Simple API use;
- Limiting HTTP Requests through Deboucing;
- ReactJS' useState and useEffect;
- UI and UX;

## Starting the server:

Run `npm start` to start the app in development mode.\
To view the app running, open [http://localhost:3000](http://localhost:3000) in your browser.

## API : The Meal DB

The route used in this project to search the meals is: `www.themealdb.com/api/json/v1/1/search.php?s=<mealName>`.

- `<mealName>` : The meal desired to search.

## Debouncing

The `debounce` function prevents the user from making a request before a certain time has passed since the last word was typed, capping the amount of requests made by the user.

## Troubleshooting

If the meal searched does not match with any meal listed in the database, it will be shown `"Nothing found"` and an icon of a sad face.

## Design prototype
The [project's design](https://www.figma.com/file/hJ4KNh71DXOttdb9kXubb0/Meu-Portif%C3%B3lio?node-id=0%3A1) was made first in Figma and then later some ajustments were made manually.