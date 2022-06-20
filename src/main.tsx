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
      transactions: [
        {
          id: uuidV4(),
          title: "Desenvolvimento de site",
          amount: 12000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date(),
        },
        {
          id: uuidV4(),
          title: "Pizza",
          amount: 35,
          type: "withdraw",
          category: "Lanche",
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "/api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const createdAt = new Date();
      const id = uuidV4();
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", { id, ...data, createdAt });
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
