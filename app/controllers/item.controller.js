const Item = require("../models/item.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Item
  const item = new Item({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Item in the database
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    else res.send(data);
  });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  Item.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Items."
      });
    else res.send(data);
  });
};

// Find a single Item with a itemId
exports.findOne = (req, res) => {
  Item.findById(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.itemId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.itemId
        });
      }
    } else res.send(data);
  });
};

// Update a Customer identified by the itemId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Item.updateById(
    req.params.itemId,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.itemId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.itemId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Item.remove(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.itemId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.itemId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Item.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all items."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};
