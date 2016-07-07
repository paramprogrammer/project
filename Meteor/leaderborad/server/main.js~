import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
if(Meteor.isServer){
Meteor.publish('thePlayers', function(){
    return PlayersList.find();
});
}
