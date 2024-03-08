# GreenSpark Technical Challenge

## Design choices

### Bundler

Vite was used as the bundler over the more commonly used bundler Webpack. Vite provides drastic performance improvements over Webpack whilst being considerably less hassle to use and maintain. It is a more complete bundler out of the box.

The testing library I would have used (although it was not used for sake of time) was vitest, which is essentially a fork of Jest which has been made to integrate seemlessly with Vite. If you would like me to add some unit tests, don't hesitate to reach out

### Frontend Framework

React was used over Vue or Angular simply because it is my strongest and personally preferred frontend libary. (I have used Vue prevoiusly however).

Redux (Reacts equivelant to Vuex) would have been used in this case, however, I did not find a strong need for its use. It certainly could have been used to handle the state of the ProductWidget components, however, I only had to pass setters 1 layer of components deep.

If you would like to take a look at my usual use of Redux it will likely be present in some of my other projects, otherwise, don't hesitate to reach out to me. 

### Component Library

In figma I noticed the components used (the checkbox, switch, etc) where material ui components. Since we do not need to reinvent the wheel, I made use of the MUI npm packages for react.

### Colours

Colours were directly copied from the provided figma project.

## How to run

There are scripts already setup in the package.json.

- `npm run start` will startup the vite dev server, and serve the webpage on http://localhost:3000 by default
- `npm run lint` will lint the files
- `npm run test` will run the vite tests

## Additional Comments

If you would like me to further explain any of the code, please don't hesitate to reach out to me.
