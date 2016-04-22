# VolunteerDB

Tools for collecting and search volunteer information so that campaign coordinators can assemble teams.

## Technology Stack

This is a Mantra application, which is an application architecture for the [Meteor](meteor.com) platform using [React](reactjs.com) for the UI layer. It uses a modular design, with a focus on maintainability and separation between UI and state management. Please see the Mantra specification at [https://kadirahq.github.io/mantra/](https://kadirahq.github.io/mantra/).

## Prerequisites

- npm (see Appendices below for installation)
- Meteor (can be installed at [meteor.com/install](https://meteor.com/install))
- ElasticSearch (optional, only required for search results; see https://www.elastic.co/downloads/elasticsearch for instructions)

## Installation:

(If you are going to be contributing code, please see the instructions for Contributing below).

To prepare the environment, clone the repo on your local machine:
```
git clone https://github.com/GrassrootsSelect/VolunteerDB
```

Then, navigate to the VolunteerDB folder and run `npm install` to add dependencies:
```
cd /path/to/VolunteerDB
npm install
```

Note: If you do not have npm installed, see the Appendices below.

## Running the App

This app runs on Meteor, a full-stack Javascript platform on top of node.js. If you do not have meteor installed, go to [meteor.com/install](https://meteor.com/install).

To run the app locally, type:

```
meteor
```

Once the app is running go to your browser at [http://localhost:3000](localhost:3000)

## Running Storybook

(Note: The storybook software requires npm 3 and may have other dependencies that are tricky to work out. We're working on documenting this. Please contact us in the slack channel if you're having trouble. This tool completely separate from the Meteor runtime environment and is NOT required to get the app up-and-running locally.)

All of the UI components have stories for React Storybook, a tool for browsing UI components with mock state data.

To run the Storybook:

```
npm run storybook
```

and open your browser at [http://localhost:9001/](http://localhost:9001/)

## Contributing

Please fork the project to your personal GitHub repo and clone it on your local machine. Then in terminal:

1. `git pull --rebase` to catch up your local git from the main organization repo.
1. Push to your own repo in the `master` branch
1. Submit a pull request to the main organization repo


## Appendices

### Installing Node.js + npm

Now, lets install NodeJS. For Windows/OS X users, go [here](https://nodejs.org/en/download/).

For Linux users, a page for installation via package manager is located [here](https://nodejs.org/en/download/package-manager/). You can also grab the source code and compile [here](https://nodejs.org/en/download/).

npm is bundled with Node by default

### Updating to npm 3

For this project, you may need to upgrade to npm 3. To see which version you are running, type
```
npm --version
```

If it is below 3.0.0 and you are on OSX/Linux:
```
npm update npm@latest -g
```

If you are a Windows user, you may need to use a package called `npm-windows-upgrade` to help you. Instructions for using this are below. Refer to the package repo at https://www.npmjs.com/package/npm-windows-upgrade.
```
npm install --global --production npm-windows-upgrade
```
Then run the upgrade:
```
npm-windows-upgrade
```
After you have done all of the steps above check the version again. If it is still sub 3.0, then navigate to the folder where npm installed the update:
```
cd %appdata%\npm\node-modules\npm-windows-upgrade
```
Run the update:
```
npm-windows-upgrade
```
