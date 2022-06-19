import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidV4 } from "uuid";
import App from "./App";
import "./styles/global.scss";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transaction: [
        {
          id: uuidV4(),
          title: "Desenvolvimento de site",
          amount: 17000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date("2022-06-19"),
        },
        {
          id: uuidV4(),
          title: "Lanche",
          amount: 30,
          type: "withdraw",
          category: "Comida",
          createdAt: new Date("2022-06-20"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "/api";

    this.get("/transactions");

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transactions", data);
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
