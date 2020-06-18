const Hapi = require("@hapi/hapi");
const Chance = require('chance');
const R = require('ramda');

const chance = new Chance();

const products = [
  {
    name: 'ACME Dinamite',
    id: 'pId1234',
    price: 249.99
  },
  {
    name: 'ACME Rocket',
    id: 'pId1235',
    price: 428.99
  }
].concat(R.times(() => ({
  name: chance.animal(),
  id: chance.string({ length: 7 }),
  price: chance.floating({ min: 55, max: 2000, fixed: 2 })
}), chance.integer({ min: 55, max: 100 })));

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/product",
    handler: (request, h) => {
      const limit = parseInt(request.query.limit) || 50;
      const offset = parseInt(request.query.offset) || 0;
      return {
        total: products.length,
        products: products.slice(offset, offset + limit)
      };
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
