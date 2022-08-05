const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    files: [{
        type: String,
      }],
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    notificationSent: {
      type: String,
    },
    taskAssignPerson: [{
      type: String,
    }],
    budget: {
      type: Number,
    },
    priority: {
      type: String,
    },
    description: {
      type: String
    }
  }
);

module.exports = mongoose.model("Projects", ProjectSchema);