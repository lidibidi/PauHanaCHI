
console.log('component has loaded');

window.onload = function() {
  console.log('all files that this page needs have been loaded');










//constructor

function pet(name, breed, color, favTreat ) {

  this.name = name;
  this.breed = breed;
  this.color = color;
  this.favTreat = favTreat;
  this.toString = function(){
    return 'My pet\'s name is ' + this.name + ', ' + this.name + ' is a ' + this.color + ' ' + this.breed + ' that loves to eat ' + this.favTreat + ' . ';

  }
}

var lulu = new pet ('lulu', 'chihuahua', 'brown', 'peanut butter')
var milly = new pet('milly', 'havanese', 'white', 'milkbones')



var btn = document.getElementById('see map');






var comp = {

  domElement: null,
  initialize: function(domSelector) {
    console.log('initializing component');
    this.domElement = document.createElement('img');
    domSelector.appendChild(this.domElement);
  },
  render: function(imageSrc) {
      this.domElement.src = imageSrc;
  }
};

var section = document.getElementsByTagName('section')[0];

var homeworkimg.src = 'http://assets.diylol.com/hfs/002/d23/a3d/resized/futurama-fry-meme-generator-not-sure-if-epic-win-or-just-fail-782c81.jpg';

var body = document.getElementsByTagName('body')[0];

body.addEventListener('click', function(comp) {
  comp.initialize(this);
comp.render(homeworkimg.src);

});
//
// ////////
//
// var container.document
// //comp.initialize(section);
// // comp.render(homeworkimg);
//

// window.onload = function () {

// var pichere =document.getElementById('pichere')[0];
// var drunkImg = 'http://i.imgur.com/wcTDfJk.jpg';
//
// var comp = {
//
//   domElement: null,
//
//   initialize: function(domSelector) {
//     console.log('initializing componenet');
//     this.domElement = document.createElement('img');
//     domSelector.appendChild(this.domElement);
//   },
//
//   render: function(imageSrc) {
//     this.domElement.src = imageSrc;
//   }

// };
//   var user = {
//   name: null,
//   drinking: true,
//   notdrinking: true,
//   drinks: 0,
//   domElement: null,
//   initialize: function(elementToAppendTo) {
//   if (this.name == null) {
//   this.name = prompt('What is your name?');
// }
// this.domElement = document.createElement('div');
// elementToAppendTo.appendChild(this.domElement);
// console.log('initialize complete');
// },
//   render: function(innerHTML) {
//     if (typeof(innerHTML)=='string') {
//       this.domElement.innerHTML = innerHTML;
//     }
//   },
//   usersDrinkConsumption: function() {
//     return this.name + ' had ' + this.drinks + 'drinks.';
//   },
//   getName: function() {
//     return this.name;
//   }
// },
//   saveName: function (newName){
//     if(typeof(newName) == 'string' && newName.length > 0) {
//       this.name = newname;
//     }else{
//       alert('I really need your name');
//     }
//   },
//   howManyDrinksDrunk: function () {
//     if (this.drinks < 5){
//       return this.name + 'want another?';
//     }else if (this.drinks > 5) {
//       return this.name + 'go home, you\'re drunk!';
//     }else{
//       alert('It\'s happy hour, let\'s drink!');
//       return this.drinks;
//     }
// };
//
//
//
//
//   }
  // userDrinkingOrNaw: function() {
  //   if (this.drinking == true)
  // }












// var container = document.getElementById('container');
//
//
//
//
//
//
//
//
//
//
//
//
//
// }
//
// var component = {
//
//   domElement: null,
//   initialize: function(domSelector) {
//     console.log('initializing component');
//     this.domElement = document.createElement('img');
//     domSelector.appendChild(domElement);
//     },
//
//     render: function(imageSrc) {
//       this.domElement.src = imageSrc;
//     }
// }



// console.log('component has loaded');
//
// window.onload = function () {
//   console.log('all files that this page needs have been loaded');
//   //basic selectors
//   //declare a selector named container
//   //access that container via document.getElementById('name of id')
//   var container = document.getElementById('container');
//   console.log(container);
//   var monsters = ['Wreck it Ralph', 'the giraffe from the lion king', 'ganon' ];
//
//   for (var baddie in monsters) {
//     //create a new dom element using document.createElement('name of tag')
//     var li = document.createElement('li');
//     console.log(li);
//     li.innerHTML = monsters[baddie];
//     container.appendChild(li);
//
//
//
//
//   }
//   //now we need to create an image
//   var kittenImage = document.createElement('img');
//     // alt text (alt) -ADA compliancy text for the blind
//   kittenImage.alt='a cute random kitten';
//   kittenImage.id ='kitten';
//   //src = image source
//   kittenImage.src = 'http://www.buypetmedicine.com/pets/wp-content/uploads/2009/05/kitten-sweater.jp';
//   container.appendChild(kittenImage);
//
//   var kitten = document.querySelector('#kitten');
//   kitten.src = 'http://www.kittenswhiskers.com/wp-content/uploads/sites/48/2014/11/warm-kitty.jpg';
//
//   var listItemsArray = document.getElementsByTagName('li');
//   console.log(listItemsArray);
//
//   for (var li in listItemsArray) {
//     listItemsArray[li].innerHTML = 'we are the champions (my friend)';
//   }
// d



// // /// ////////////////////
// var status = document.getElementById('status-message');
// var btn = document.getElementById('addPoint');
//
// //initialize our UI component
// user.initialize(status);
// //selector.addEventListener(eventType, function());
// btn.addEventListener('click', function() {
//   user.updateScoreByOnePoint();
// });
//
// //bind events to a Dom element
//
// // var body = document.getElementsByTagName('body')[0];
// // body.addEventListener('click', function(event) {
// //   console.log('event');
// //   console.log('ow, y you click me bro?');
// // });
// // body.addEventListener('touchstart', function(event) {
// //   console.log('yo yo dude y u poking me? wtf man');
// // });
// //
// // body.addEventListener('keyup', function(event){
// //   if (event.keyCode == 13) {
// //     console.log('y u press enter so much yo?');
// //
// //   }
// //   console.log(keyCode);
// // })
//
// }//end pf window.onload
///////////////////




//
// //create a user interface component
// //the goal here is to create an object//
// //that can update itself and
// //visually show that when needed
//
// //ex 1: use component
//
// var user = {
//   name: null,
//   score: 0,
//   domElement: null,
//     //elementToAppendTo: document.selector for an individual elemnt
//   initialize: function(elementToAppendTo) {
//     if (this.name == null) {
//       this.name = prompt('What is your name?');
//     }
//     this.domElement = document.createElement('div');
//     elementToAppendTo.appendChild(this.domElement);
//     console.log('initialize: complete');
//   },
// //innerHTML: valid to place in our domelement
//   render: function(innerHTML) {
//     if (typeof(innerHTML) == 'string') {
//       this.domElement.innerHTML = innerHTML;
//     }
//   },
//   buildPlayerStatusString: function(){
//     return this.name + ': ' + this.score;
//   },
//   getName: function() {
//     return this.name;
//   },
//   saveName: function(newName) {
//     if (typeof(newName) == 'string' && newName.length > 0){
//       this.name = newName;
//     }else{
//       alert('You entered an incorrect or empty name');
//     }
//   },
//   getScore: function() {
//     return this.score;
//   },
//   updateScoreByOnePoint: function(){
//     this.score = this.score + 1;
//     var status = this.buildPlayerStatusString();
//     this.render(status);
//     return this.score;
//   }
// };
//
//
//
//
//
// var component = {
//   domElement: null,
//     initialize: function(selector) {
//       //create a dom element
//     this.domElement = document.createElement('div');
//     //attach it
//     selector.appendChild(this.domElement);
//   } ,
//   render: function (statusText) {
//     //update the dom element
//     this.domElement.innerHTML = statusText;
//     }
// };
