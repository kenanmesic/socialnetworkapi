const Thought = require('../models/Thought');



module.exports = {
    getAllThoughts(req,res) {
      Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));

    },
    getSingleThought(req,res){
      Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
          !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json({
                  thought
              })
      )
      .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
      });
    },
    createNewThought(req,res){
      Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));

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
      Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
          !thought
              ? res.status(404).json({ message: 'No such thought exists' })
              : Thought.remove(
                  { thoughtname: thought.thoughtname },
              )
      )
      .then(() =>
          res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });

    },
    createReaction(req,res){

    },
    deleteReaction(req,res){

    },


    



}