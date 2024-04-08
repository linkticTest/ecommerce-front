# ecommerce-front

This is the front layer of the Catalog made with ReactJS

## Technologies

* nodejs
* ReactJS
* NextJS

## Development Pattern

* `Hooks`

## Environment Variables

required for next auth https://next-auth.js.org/

* `NEXTAUTH_SECRET=kCDRQuXhrIA/m40SnUrpHlb3RUwdgMT2CHZFJD561ys=`  

## Development Requirements

- NodeJS 20.x
- Npm
- git
- yarn

## How to install the project locally:

* `npm install`          Install Project Dependencies


## Credentials

The authentication model was not implemented from the server side, however, in order to enter, mock users were created for testing purposes.

`
    {
        USER: 'betobustamante.ef@gmail.com',
        PWD: '123456'
    }
`

## How to run the lambda locally:

Run the development server

* `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.     

## CI / CD

For CI/CD flow, Vercel was used, which supports us in building the project

![vercel](https://i.imgur.com/EHTDwLm.png)

`.github/workflows/lambda.yml` 

## Git Best practices

Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
