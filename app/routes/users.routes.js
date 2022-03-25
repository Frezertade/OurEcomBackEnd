module.exports = app => {
    
    const Users = require("../controllers/users.controller");

    const router = require("express").Router();

    // create users
    router.post("/",Users.create);

    // get all users
    router.get("/",Users.findAll);

    // find Published
    router.get("/getPublished",Users.findAllPublished);

    // get single user
    router.get("/:id",Users.findOne);

    // update user
    router.put("/:id",Users.update);

    // Delete user
    router.delete("/:id",Users.delete);

    // Delete all
    router.delete("/",Users.deleteAll);

    app.use("/api/users", router);
}