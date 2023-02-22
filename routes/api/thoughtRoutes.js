const router = require('express').Router();

const {

    getAllThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    removeThought,
    createReaction,
    deleteReaction,



} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createNewThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(removeThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
module.exports = router;
