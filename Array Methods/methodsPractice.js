const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//**********  
//! -----FILTER-----
//**********  
//? */ 1.Get characters with mass greater than 100
const greaterthan1000chars = characters.filter(
  (character) => character.mass > 100
);

//? 2.Get characters with height less than 200
const shorterCharacters = characters.filter(
  (character) => character.height < 200
);
//? 3.Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
//? 4.et all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
//**********  
//! -----MAP-----
//**********  
//? 1.Get an array of all names
const allNames = characters.map((character) => character.name);
//? 2.Get an array of all heights
const allHeights = characters.map((character) => character.height);
//? 3.Get an array of objects with just name and height properties
const nameAndHeight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
//? 4.Get an array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
//**********  
//! -----SORT-----
//**********  
//? 1.Sort by name
const sortByName = characters.sort((a,b)=> a.name < b.name ? 1 : -1
)
//? 2.Sort by mass
const sortByMass = characters.sort((a,b)=> b.mass-a.mass
)
//? 3.Sort by height
const sortByHeight = characters.sort((a,b)=> a.height-b.height
)
//? 4.Sort by gender
const sortByGender = characters.sort((a,b)=> a.gender === "female" ? 1 : -1
)
//**********  
//! -----EVERY-----
//**********  
//? 1.Does every character have blue eyes?
const isBlueEyed = characters.every( 
    character => character.eye_color === "blue"
)
//? 2.Does every character have mass more than 40?
const isMassOver40 = characters.every( 
    character => character.mass > 40
)
//? 3.Is every character shorter than 200?
const isShorterThan200 = characters.every(
    character => character.height < 200
)
//? 4.Is every character male?
const isMale = characters.every(
    character => character.gender === "male"
)
//**********  
//! -----SOME-----
//**********  
//? 1.Is there at least one male character?
const oneMaleCharacter = characters.some(
  (character) => character.gender === "male"
);
//? 2.Is there at least one character with blue eyes?
const oneBluEyedCharacter = characters.some(
  (character) => character.eye_color === "blue"
);
//? 3.Is there at least one character taller than 200?
const oneCharacterTallerThan200 = characters.some(
  (character) => character.height > 200
);
//? 4.Is there at least one character that has mass less than 50?
const oneCharacterWithLessaThan50Mass = characters.some(
  (character) => character.mass < 50
);
//**********  
//! REDUCE
//**********  
//? 1.Get the total mass of all characters
const totalMass = characters.reduce((acc,cur)=> acc+ +cur.mass , 0)
//? 2.Get the total height of all characters
const totalHeight = characters.reduce((acc,cur)=> acc+ +cur.height , 0)
//? 3.Get the total number of characters in all the character names
const totalChars = characters.reduce((acc,cur)=> acc+cur.name.length , 0)
//? 4.Get the total number of characters by eye color (hint. a map of eye color to count)
const totalCharactersByEyeColor = characters.reduce((acc,cur)=>{
    const color = cur.eye_color
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1;
    }
    return acc;
},{})
