  // Only publish tasks that are public or belong to the current user
  Meteor.publish("tasks", function () {
    return Servers.find({
      $or: [
        { private: {$ne: true} },
        { owner: this.userId }
      ]
    });
  });
