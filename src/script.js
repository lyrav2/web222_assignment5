/* Add any JavaScript you need to this file. */
var library = [
  {
    name: 'The Last of Us Part II',
    id: 1,
    publisher: 'Sony Interactive',
    platform: 'PS4',
    cost: 78.95
  },
  {
    name: 'Red Dead Redemption 2',
    id: 2,
    publisher: 'Rockstar Games',
    platform: 'Xbox, PS4',
    cost: 39.99
  },
  {
    name: 'Final Fantasy XV - Royal Edition',
    id: 3,
    publisher: 'Square Enix',
    platform: 'PS4',
    cost: 34.48
  },
  {
    name: 'The Witcher® 3: Wild Hunt',
    id: 4,
    publisher: 'CD Projekt',
    platform: 'PC, PS4, Xbox',
    cost: 55.99
  },
  {
    name: 'Final Fantasy VII: Remake',
    id: 5,
    publisher: 'Square Enix',
    platform: 'PS4',
    cost: 84.96
  },
  {
    name: 'Stardew Valley',
    id: 6,
    publisher: 'Chucklefish Games',
    platform: 'PC, PS4, Xbox',
    cost: 16.99
  },
  {
    name: 'Animal Crossing: New Horizons',
    id: 7,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 78.99
  },
  {
    name: 'Call of Duty: Infinite Warfare',
    id: 8,
    publisher: 'Activision',
    platform: 'PS4',
    cost: 19.99
  },
  {
    name: 'Pokemon Sword',
    id: 9,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 69.99
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    id: 10,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 74.59
  },
  {
    name: 'Super Mario Odyssey',
    id: 11,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 69.99
  }
];

window.onload = function() {
  // get variables for buttons
  var allgames = document.getElementById('all');
  var pc = document.getElementById('pc');
  var playstation = document.getElementById('playstation');
  var xbox = document.getElementById('xbox');
  var nswitch = document.getElementById('switch');

  // loads all games in the library into the main content wrapper
  function loadAllGames(e = library) {
    for (let i = 0; i < library.length; i++) {
      var gameWrapper = document.querySelector('#wrapper');
      let createDiv = document.createElement('div');
      let imageNode = document.createElement('img');
      let createTitle = document.createElement('h3');
      let createPlatform = document.createElement('p');
      let createCost = document.createElement('p');
      let gamePlatform = document.createTextNode('Platform: ' + e[i].platform);
      let gameTitle = document.createTextNode(e[i].name);
      let gameCost = document.createTextNode('$' + e[i].cost);
      createDiv.classList.add('game');
      createDiv.id = e[i].id.toString();
      imageNode.src = 'images/game/' + e[i].id.toString() + '.jpg';

      createTitle.appendChild(gameTitle);
      createPlatform.appendChild(gamePlatform);
      createCost.appendChild(gameCost);

      createDiv.appendChild(imageNode);
      createDiv.appendChild(createTitle);
      createDiv.appendChild(createPlatform);
      createDiv.appendChild(createCost);
      gameWrapper.insertBefore(createDiv, gameWrapper.childNodes[0]);
    }
  }

  // when clicked, displays all games
  allgames.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
    }
    allgames.classList.add('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  // when clicked, hides all games but pc games
  pc.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('PC')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.add('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  // when clicked, hides all games but playstation games
  playstation.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('PS4')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.add('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  // when clicked, hides all games but xbox games
  xbox.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('Xbox')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.add('currentselection');
    nswitch.classList.remove('currentselection');
  };

  // when clicked, hides all games but nintendo switch games
  nswitch.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('Switch')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.add('currentselection');
  };

  loadAllGames();
};
