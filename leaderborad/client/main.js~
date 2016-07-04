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
        return PlayersList.find();
    }
});
Template.leaderboard.events({
    'click .player': function(){
    var playerId = "session value test";
    Session.set('selectedPlayer', playerId);
    var selectedPlayer = Session.get('selectedPlayer');
    console.log(selectedPlayer);
}
});
var selectedPlayer = Session.get('selectedPlayer');
console.log(selectedPlayer);
if(Meteor.isServer){
    console.log("Hello server");
}

