module.exports = app => {
  const items = require("../controllers/item.controller.js");

  // Create a new item
  app.post("/items", items.create);

  // Retrieve all item
  app.get("/items", items.findAll);

  // Retrieve a single item with customerId
  app.get("/items/:itemId", items.findOne);

  // Update a item with customerId
  app.put("/items/:itemId", items.update);

  // Delete a item with customerId
  app.delete("/items/:itemId", items.delete);

  // Create a new item
  app.delete("/items", items.deleteAll);
};
