module.exports = app => {
  const itemController = require("../controllers/item.controller.js");

  // Create a new item
  app.post("/items", itemController.create);

  // Retrieve all item
  app.get("/items", itemController.findAll);

  // Retrieve a single item with customerId
  app.get("/items/:itemId", itemController.findOne);

  // Update a item with customerId
  app.put("/items/:itemId", itemController.update);

  // Delete a item with customerId
  app.delete("/items/:itemId", itemController.delete);

  // Create a new item
  app.delete("/items", itemController.deleteAll);
};
