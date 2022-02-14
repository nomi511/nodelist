const Task = require('../Models/task')
const asyncwrapper = require("../middlewares/asyncwrapper")

const getalltasks = asyncwrapper( async(req, res) => {

    const task = await Task.find({})
    res.status(201).json({task})

})


const createtask = asyncwrapper( async(req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({task})
    
})

const getsingletask = asyncwrapper( async (req, res) => {
    
    const {id} = req.params
    const task = await Task.findOne({_id:id})
    if(!task)
    {
        return res.status(404).json({msg: "no task with this is was found"})
    }
    res.status(201).json({task})
    
    
})

const updatetask = asyncwrapper( async (req, res)=>{

    const {id} = req.params

    const task = await Task.findByIdAndUpdate({_id:id}, req.body, {new: true, runValidators: true})

    if(!task)
    {
        return res.status(404).json({error: `No task with id: ${id} was found`});
    }

    res.status(200).json({task})

})

const deletetask = asyncwrapper( async (req, res) => {

    const { id } = req.params

    const task = await Task.findByIdAndDelete({_id:id});

    if(!task)
    {
        return res.status(404).json({error: `No task with id: ${id} was found`});
    }

    res.status(200).json({task})

})

module.exports = { 
    getalltasks, 
    createtask, 
    getsingletask, 
    updatetask, 
    deletetask }