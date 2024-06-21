
# Lets get posted - Demo App

### React + TypeScript + Vite + TailwindCSS + Shadcn/ui + Vercel 


## Dependencies
node: v18.20.3 lts-hydrogen


## Installation
```npm install```

## Configuration
You need an API key from [https://dummyapi.io/docs](https://dummyapi.io/docs)
Create a .env file in the root of the project with the following content:

```
API_KEY=your_api_key
```

## Usage

run in development with 

```npm start```


## API
The api uses a vercel function. It's a simple catch-all route handler that forwards the request to the the external demo api.

see /api/[...path].ts



