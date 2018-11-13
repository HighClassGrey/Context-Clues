// // declare friends, locations and weapons
var FRIEND_NAME = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark'];
var WEAPON_NAME = ['rope', 'knife', 'spoon', 'game controller', 'iron', 'Nun-Chucks', 'rock', 'paper', 'scissors', 'laser', 'banana',
                    'shark tooth', 'glue gun', 'Uno Card', 'battery', 'usb', 'guitar', 'drumsticks', 'panio petal', 'antenna',];
var LOCATION_NAME = ['hotel lobby', 'library', 'gym', 'school lobby', 'classroom', 'grocery store', 'mailroom', 'backyard', 'bathroom', 'office'];


for (var i = 0; i < 100; i++) {
    stateMent(i);
};

function stateMent(num) {
    var header = $('<div><h3>' + 'Acccusation ' + (num + 1) + '</h2></div>');
    header.click(function () {
        var f = num % FRIEND_NAME.length;
        var w = num % WEAPON_NAME.length
        var l = num % LOCATION_NAME.length;
        alert('Acccusation ' + ((num + 1) + ':  I accuse ' + FRIEND_NAME[f] + ' with the ' + WEAPON_NAME[w] + ' in the ' + LOCATION_NAME[l]));
    });
    $('body').append(header);
};