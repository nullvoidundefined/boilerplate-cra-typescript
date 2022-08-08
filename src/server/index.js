const axios = require("axios");
const express = require("express");
const { pick } = require("lodash");
const app = express();
const knex = require("knex"); // postgres ORM
const db = knex({
  client: "pg",
  connection: {
    host: "the-rounds-interview-db.clv3ihlk7uem.us-east-1.rds.amazonaws.com",
    port: "5432",
    database: "postgres",
    user: "interviewer",
    password: "f9LxT#YzdWT^g&",
  },
});

app.get("/itemDetail", (req, res) => {
  const { itemId } = req.query;
  console.log("Item ID:", itemId);
  const item = {
    name: "Foo Item",
    id: "aj22ftw4",
  };
  res.status(200).json(JSON.stringify(item));
});

app.get("/itemList", (req, res) => {
  const { userId } = req.query;
  console.log("User ID:", userId);
  const items = [
    {
      name: "Foo Item",
      id: "aj22ftw4",
    },
    {
      name: "Bar Item",
      id: "zk5hbsakg8",
    },
  ];
  res.status(200).json(JSON.stringify(items));
});

app.get("/user/:userId", (req, res) => {
  console.log(`fetching userid ${req.params.userId}`);
  db.raw("select * from users where id = ?", [req.params.userId]).then(
    function (resp) {
      console.log(resp.rows[0]);
      res.status(200).json(JSON.stringify(resp.rows[0]));
    }
  );
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
