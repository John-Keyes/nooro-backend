## setup
- Create an env file in your project directory with these variables
```.env
#App is either in dev or prod mode.
MODE="dev"

#mysql variables
DB_HOST=""
DB_USER=""
DB_PWD=""
DB_PORT=
DB_NAME=""
DB_URL = ""

API_PORT=
CLIENT_PORT=
CLIENT_URL="http://localhost:"
API_URL="http://localhost:"
```

- Install the packages
```bash
npm install
```

- Open a terminal and migrate
```bash
npm run migrate
```

- run this command before running the frontend application in a separate terminal
```bash
npm run dev
```