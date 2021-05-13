const ToDo = require('../models/ToDo');

const createToDo = async(req, res) => {
    try {
        const newToDo = await ToDo.create(req.body);
    
        return res.status(201).send({
            _id: newToDo._id,
            message: 'Successfully created To Do'
        })
    } catch(e){
        return res.status(500).send({
            error: 'Server Error'
        })
    }
}

const getAll = async (req, res) => {
    try {
        const toDos = await ToDo.find();
        res.status(200).send(toDos);

    } catch(e) {
        return res.status(500).send('Server error');
    }
}

const getByID = async(req, res) => {
    try {
        const { id } = req.params;
        const toDo = await ToDo.findById(id);
        res.status(200).send(toDo);

    } catch(e){
        return res.status(404).send({
            message: 'To Do not found'
        })
    }
  };


const updateToDo = async(req, res) => {
    try {
        const { title, description, date } = req.body;
        const { params: { id } } = req;

        const updatedToDo = await ToDo.findOneAndUpdate({ _id: id }, { title: title, description: description , date: date }, {
            new: true,
            useFindAndModify: false
        });
    
        return res.status(200).send({
            message: 'Successfully updated To Do',
            updatedToDo: updatedToDo
        })
    } catch(e){
        if(e.name === 'CastError'){
            return res.status(404).send({
                message: 'To Do not found',
            })
        }

        return res.status(500).send({
            error: 'Server Error'
        })
    }
}

const deleteToDo = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedToDo = await ToDo.findByIdAndDelete(id);

        return res.status(200).send({
            message: 'To Do deleted',
            _id: deletedToDo._id
        })

    } catch(e) {
        return res.status(404).send({
            message: 'To Do not found'
        })
    }
}

module.exports = {
    createToDo,
    getByID,
    getAll,
    updateToDo,
    deleteToDo
}