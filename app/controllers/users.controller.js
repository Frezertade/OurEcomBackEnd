const db = require("../models");
const User = db.user;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    //validate request 
    if (!req.body.firstName || !req.body.lastName || !req.body.email) {
        res.status(400).send({ "message": "First Name / Last Name / Email can not be empty" });
        return;
    }

    //Create User 
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            Zip: req.body.address.Zip
        }
    });

    console.log({"User" : user })

    user.save(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating User."
        });
    });

};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
  var condition = firstName ? { firstName: { $regex: new RegExp(firstName), $options: "i" } } : {};
  User.find(condition)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
        console.log(data);
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};