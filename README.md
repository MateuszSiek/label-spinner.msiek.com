<p align="center">
    <img alt="Label Spinner for Lucky Draws" src="./logo.svg" width="100" />
</p>
<h1 align="center">Label Spinner</h1>
<p align="center">
    An embeddable HTML5 application that allows users to pick a random label from a list. Ideal for lucky draws, random selections, and more. Built using Web Animations and AudioContext API.
</p>


## Live Demo
Demo is available at [https://label-spinner.msiek.com](https://label-spinner.msiek.com)

<img src="readme/label-spinner.gif"/>


## Features

Label Spinner is a versatile tool with several features that make your random selection process both dynamic and customizable. 

### Embedding

Label Spinner is embeddable, allowing you to place it on your own website or application. Once you've set up your parameters, click the "Embed" button to copy an embeddable link. This feature has been tested and confirmed to work with Notion.

### URL Parameters

You can customize your experience with URL parameters, preserving the state of your unique configuration. The following URL parameters are available:

- `list`: Input a list of comma-separated labels. For example, `?list=John,Eva,Steve` includes John, Eva, and Steve in the spinner.

- `mute`: Control the sound effects. To disable sound effects, add `?mute=true` to the URL.

- `title`: Set a custom title that is displayed on the site. For instance, `?title=Pick a name` displays "Pick a name" as the title.

- `removeWinner`: Decide if the winner should be removed from the lottery. To remove the winner after each draw, add `?removeWinner=true` to the URL.

Here is an example of a full URL using all parameters: `https://label-spinner.msiek.com/?list=John,Eva,Steve&mute=true&title=Pick%20a%20name&removeWinner=true`

### Fullscreen Mode

To immerse yourself fully in the selection process, Label Spinner supports fullscreen mode. Click the fullscreen button on the site to enable this view.


## Technology Stack
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
