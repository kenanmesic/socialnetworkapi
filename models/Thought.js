const { Schema, model } = require('mongoose');
var moment = require("moment")
const reactionSchema = require("./Reaction")


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      required: true,
      default: new Date(),
      get: formatDate,
    },
    usernname: {
      type: String,
      required: true,
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

function formatDate(date) {
  return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")



}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
