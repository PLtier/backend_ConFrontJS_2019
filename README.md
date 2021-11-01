# ConfGames

## Prerequisites

* node
* npm/yarn
* mongo db

## Installation

Run `yarn` or `npm i`.
Create mongo db for the project

## Get it runnin'!

You have to create `.env` file in `backend` directory and add to it following constants:

* `DB_NAME` - name of mongo database dedicated for this project
* `JWT_SECRET` - secret used for encrypting/decrypting json web token
* `SENDGRID_API_KEY`

### Development

Run `yarn dev`/`npm run dev` in `backend` dir

By default backend app will be listening on port 3003

### Production

Run
```bash
export NODE_ENV=production
```

Then `yarn start`/`npm run start` in `backend` dir

Backend app will be listening on port 3003

### Changing ports

To change port of backend app pass `PORT` env variable to command.

**Remember!** If you're changing backend app port when developing you also have to change `proxy` field in `frontend/package.json` 

## Managing sponsors

Run `yarn sponsor-manager`/`npm run sponsor-manager` in `backend` dir

Full details about that command you can see by adding `-h` flag
