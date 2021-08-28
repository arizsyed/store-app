import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/ingredients", () => {
        return [
          {
            items: [
              {
                name: "cucumber",
                price: 0.5,
              },
              {
                name: "tomato",
                price: 0.6,
              },
              {
                name: "egg",
                price: 3,
              },
              {
                name: "tuna",
                price: 2,
              },
              {
                name: "potato",
                price: 1.2,
              },
              {
                name: "lettuce",
                price: 0.2,
              },
              {
                name: "corn",
                price: 2,
              },
              {
                name: "onion",
                price: 0.3,
              },
              {
                name: "mashroom",
                price: 2.5,
              },
              {
                name: "pasta",
                price: 4,
              },
              {
                name: "pickles",
                price: 3.3,
              },
            ],
          },
        ];
      });
    },
  });

  return server;
}
