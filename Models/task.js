const mongoose = require("mongoose")


const taskschema = mongoose.Schema({
    task:{
        type:String,
        required: [true, "this field is required"],
        trim: true,
        maxlength: [20, "task should not be more than 20 characters"],
    },
    done:{
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("Task", taskschema)