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