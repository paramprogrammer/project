import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

console.log("Hello world");
 Template.leaderboard.helpers({
    'player': function(){
          var currentUserId = Meteor.userId();
    	  Meteor.call('showPlayers', function(err, data){ 
	    console.log(data);
	    Session.set('data', data);
	});
	    return Session.get('data');

    },
'selectedPlayer': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne({ _id: selectedPlayer });
}
});
Template.addPlayerForm.events({
    'submit form': function(event){
    event.preventDefault();
    var playerNameVar = event.target.playerName.value;
    Meteor.call('createPlayer',  playerNameVar);
    event.target.playerName.value = ""
    console.log(playerNameVar);
}

});
Template.leaderboard.events({
    'click .player': function(){
        var playerId = this._id;
        Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
                  var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, {$inc: {score: 5} });
    },
  'click .decrement': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    PlayersList.update({ _id: selectedPlayer }, {$inc: {score: -5} });
}
});



