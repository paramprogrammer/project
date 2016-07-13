import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('thePlayers', function(){
    return PlayersList.find();
});
Meteor.methods({
    'createPlayer': function(playerNameVar){
        var currentUserId = Meteor.userId();
        PlayersList.insert({
            name: playerNameVar,
            score: 0,
            createdBy: currentUserId
        });
    },
    'showPlayers': function(){
	var list = PlayersList.find().fetch();
        return list;
        
   }
});
