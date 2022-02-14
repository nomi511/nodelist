const express = require("express")
const router = express.Router();

const { 
    getalltasks, 
    createtask, 
    getsingletask, 
    updatetask, 
    deletetask } = require("../controllers/taskscontroller.js")


router.route('/').get(getalltasks)

router.route('/').post(createtask)

router.route('/:id').get(getsingletask).patch(updatetask).delete(deletetask)

module.exports = router
