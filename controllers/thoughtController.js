const Thought = require('../models/Thought');



module.exports = {
    getAllThoughts(req,res) {

    },
    getSingleThought(req,res){

    },
    createNewThought(req,res){

    },
    updateThought(req,res){
        Course.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((course) =>
              !course
                ? res.status(404).json({ message: 'No course with this id!' })
                : res.json(course)
            )
            .catch((err) => res.status(500).json(err));

    },
    removeThought(req,res){

    },
    createReaction(req,res){

    },
    deleteReaction(req,res){

    },


    



}