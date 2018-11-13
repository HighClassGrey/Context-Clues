// declare friends, locations and weapons
var FRIEND_NAME = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark'];
var LOCATION_NAME = ['hotel lobby','library','gym','school lobby','classroom','grocery store', 'mailroom', 'backyard', 'bathroom', 'office'];
var WEAPON_NAME = ['rope','knife','spoon','game controller','iron','Nun-Chucks','rock','paper','scissors','laser','banana',
                    'shark tooth','glue gun','Uno Card','battery','usb','guitar','drumsticks','panio petal','antenna',];

// list accusation and click alert 
for (var i=1; i<101; i++)  
// for (var friends = 0; friends<FRIEND_NAME.length; friends++)
{
    $('<div><h3>' + 'Acccusation ' + i +'</h2></div>').appendTo('body').click(function(){
        alert ('I accuse '+ FRIEND_NAME[friend] +'with the '+ WEAPON_NAME + 'in the '+ LOCATION_NAME)
    });
};

    var friend = FRIEND_NAME.length;
    console.log(friend);



