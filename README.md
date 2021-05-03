# <div align="center"> **Tap-Room Website Mockup** </div>
### This is a REACT programmed web application used to add and track volume of kegs.

 ### _Contributor(s) and Contact Info_
> Logan Roth diamondintheroth@gmail.com - [GitHub(Lo-GR)](https://github.com/Lo-GR)

[//]: <> (Readme- Template by Logan Roth, please do not remove without giving proper contributions.)

---

## _Technologies Used_ ⚙

* **HTML5/CSS3**
* **React 17.0.2**
* **JavaScript ES6**
* **Node Package Manager 6.14.9**
* **webpack 4.39.3**
* **eslint 6.3.0**
* **UUID**

## _Concepts Used_ 🧠

* **CRUD Functionality**
* **[Thinking in react](https://reactjs.org/docs/thinking-in-react.html)**
* **Unidirectional Data Flow**
* **State Management**

---

## _Description_ 📃
This project is a react application designed and built during Epicodus. It Allows you to add Kegs of Beer and track brand, alcohol content, flavor, price and current volume in pints. You can then decrement the volume per pint.

---

## _Installation Guide_ 💻 

<details>
<summary>Open for full guide</summary>

### _Cloning and Initial Setup_

> Repository: https://github.com/Lo-GR/tap-room-mockup.git
1. In your terminal of choice or [GitHub's Desktop Application](https://desktop.github.com/), clone the above repository from Github. For further explanation on how to clone this repository, please visit [GitHub's Documentation](https://docs.github.com/en/github/using-git/which-remote-url-should-i-use).
2. Ensure you are running node package manager (npm) by typing "npm -v" in your terminal. You should receive a version number back (such as 6.14.9). If NPM is not installed, visit [Node's website](https://nodejs.org/en/download/) and follow the installer's steps based on your OS.
3. Once you verify you are running npm, navigate in your terminal to tap-room-mockup directory. One there, run "npm install" in your terminal. 
4. You can open the code in a code editor. [VS Code is recommended](https://code.visualstudio.com/)

</details>

---

## _Additional Instructions Supplied by the React Team_  👩‍💼

<details>
<summary>Open for full guide</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

---

## _Known Bugs_ 🩹
* The volume bar on the keg list needs to "reset" when leaving and coming back to the page.

---

## _Future Updates_ 🛠
* Edit and Delete features
* Additional Styling

---

## _Preplanning/Component Diagram_ 📋
```
Expectations___
1.As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
2. As a user, I want to submit a form to add a new keg to a list.
3. As a user, I want to be able to click on a keg to see its detail page.
4. As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
5. As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

```
![Test](/AppDesign.png)
---

## _License_ ⚖️

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Logan Roth.

Please contact Contributor for further use information or if you would like to make a contribution.

[//]: <> (Readme- Template by Logan Roth, please do not remove without giving proper contributions.)
