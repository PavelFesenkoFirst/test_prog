const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

//localhost:5000/api/v1/

router.get("/users", controller.allUsers);
router.patch("/users", (...args) => controller.updateUsers(...args));
router.get("/chats", controller.getAllChats);
router.delete("/chats", (...args) => controller.deleteUserOfChat(...args));




//тестим rest-api
router.delete("/test/delete/chat", (...args) => controller.testDeleteChat(...args));
router.get("/test/select/chat", controller.testSelectChat);


module.exports = router;
