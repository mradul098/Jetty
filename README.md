<h1 align="center">
	<img
		width="300"
		alt="Jetty"
		src="https://i.ibb.co/k4TNp9b/favicon-1024-2-1.png">
</h1>

<h3 align="center">
	A Translation solution for generating multi Language JSON Files automatically
</h3>

<p align="center">
	
</p>
<p align="center">
	<a href="https://jetty-beta.herokuapp.com/">Click here To visit Deployed Link</a>
</p>

## Sample Credentials:
- email: johndoe@gmail.com	
- password: 12345678@Aa


## Overview

- **Jetty is an instant translation solution for making your website support multiple languages for free.
- **To make a website support multiple languages people use i18 library along with key value pairs for each language for eg. if a text is wrapped around key naming "k1" and selected language is "en" then i18 library will go to the en.json file and look for value mapped on "k1" similarily if the selected language is hindi then it will look for "k1" in "hi.json" file.
- **This is a huge labour to map those keys with values and find their appropriate translations and create an error free JSON file.
- **This is where Jetty comes in picture! Leave all your manual labour to Jetty and focus on programming Logic.


To Try it by yourself visit [the website](https://jetty-beta.herokuapp.com/).

Get its Repository (github.com/mradul098/Jetty.git).

## Installation and usage

Jetty requires latest [Node.js](https://nodejs.org/) LTS version or more recent.


### Running from source

The following commands install and run the development version of The Lounge:

```sh
git clone https://github.com/mradul098/Jetty.git
cd server
npm install
cd..
cd/client
npm install
cd..
cd/server
NODE_ENV=production npm build
npm start
```

⚠️ To make sure the everything is working as expected please make sure to include ENV Variables

PORT
SALT
URL (Mongo Db Url)
JWTPRIVATEKEY


## How to Use

If running in local environment the previous step will usually make application open up in http://localhost:3000

Start by Registering (by clicking on register or use the sample login credentials provided):

- Click on the existing Project or create new Project and select any number of languages out of 300+ provided
- Select the base language EN and start entering key,value pairs
  - Click on save and go back to menu page of the selected project and click on "Download JSON files" to download all languages translation at once
- If you want to download individual json translated files like "hi.json" or "en.json" click on the language and view the translations
  - If the automatic translation provided seems a bit off click on edit button to edit the json files without hindering with the syntax of json file
- Click on Download json file inside the Table of individual language to download the json file for that language

Projected Updates:
  -Will create API of those translations so that the user wont even have to handle json files in there i18 setup they can just replace our API to make their website multilingual
