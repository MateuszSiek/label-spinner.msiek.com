<p align="center">
    <img alt="Label Spinner for Lucky Draws" src="./logo.svg" width="100" />
</p>
<h1 align="center">Label Spinner</h1>
<p align="center">
    An embeddable HTML5 application that allows users to pick a random label from a list. Ideal for lucky draws, random selections, and more. Built using Web Animations and AudioContext API.
</p>


## Live Demo
Demo is available at [https://label-spinner.msiek.com](https://label-spinner.msiek.com)

## Features

Label Spinner comes with several convenient features to make your random selection process as smooth as possible. It supports URL parameters to adjust the behaviour of the lottery spinner, making it both dynamic and customizable. 

Here are the available URL parameters:

- `list`: This parameter allows you to input a list of comma-separated labels. For example, using `?list=John,Eva,Steve` will make John, Eva, and Steve the choices in the spinner.

- `mute`: This is a boolean parameter that lets you control sound effects. If you prefer a silent experience, you can disable sound effects by adding `?mute=true` to the URL.

- `title`: With this parameter, you can set a custom title that is displayed on the site. For instance, `?title=Pick a name` will display "Pick a name" as the title.


### Technology Stack
* Pug
* CSS3 (SCSS)
* Web Animations API
* AudioContext API

## Development

### Prerequisite
* Node 14 above or nvm installed
* Yarn or NPM installed

### Install dependencies
To install dependencies:
```bash
yarn install
```

### Start development server
To start the development server:
```bash
yarn start
```

### Build production
To build the project for production:
```bash
yarn build
```
All the build files can be found in `/dist` folder.

## Credits

This project is a fork of the [Random Name Picker by icelam](https://github.com/icelam/random-name-picker).
