Setup inicial e instalação de dependencias:

npm init -y
npm i typescript @types/node ts-node-dev -D

npx tsc --init

npx tsc
npm i express
npm i -D @types/express

Rodar em ambiente dev:
npm run dev

npm i prisma -D
npm i @prisma/client 

npx prisma init

npx prisma migrate dev

Ver versão prisma no browser:
npx prisma studio

npm install nodemailer
npm install @types/nodemailer -D

npm install jest -D
npm i @types/jest -D
npx jest --init

compiler para testes:
npm i -D @swc/jest

Inside jest.config.js, configure Jest to use SWC:

module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

npm i cors
npm i @types/cors -D
