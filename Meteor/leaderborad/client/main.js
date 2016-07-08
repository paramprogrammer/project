import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
 console.log("Hello world");
 Template.leaderboard.helpers({
    'player': function(){
          var currentUserId = Meteor.userId();
    return PlayersList.find({ createdBy: currentUserId },
                            { sort: {score: -1, name: 1} });

    },
'selectedClass': function(){
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
    if(playerId == selectedPlayer){
        return "selected"
    }
},
'selectedPlayer': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne({ _id: selectedPlayer });
}
});
Template.leaderboard.events({
    'click .player': function(){
    var playerId =  this._id;
    Session.set('selectedPlayer', playerId);
   

},
'click .increment': function(){
    var selectedPlayer = Session.get('selectedPlayer');
  
    PlayersList.update({ _id: selectedPlayer }, { $inc: {score: 5} });

},
 'click .decrement': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, {$inc: {score: -5} });
    },
'click .remove': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    PlayersList.remove({ _id: selectedPlayer });
}
});

Template.addPlayerForm.events({
    'submit form': function(event){
    event.preventDefault();
    var playerNameVar = event.target.playerName.value;
    Meteor.call('createPlayer');
    event.target.playerName.value = "";
}

});

Meteor.methods({
    'createPlayer': function(){
        var currentUserId = Meteor.userId();
        PlayersList.insert({
            name: "David",
            score: 0,
            createdBy: currentUserId
        });
    }
});

