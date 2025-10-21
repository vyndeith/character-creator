const character = {
    class: 'Warrior',
    level: 16,
    health: 100,
    skill: ['Sword Mastery', 'Shield Block'],
    name: 'Thorin',
    equipment: {
        weapon: 'Sword',
        armor: 'Plate Mail',
        armorvalue: 50
    },
    inventory: []
}

function createCharacter(name, role) {
    return {
    role: role,
    level: 1,
    health: 100,
    skill: ['Sword Mastery', 'Shield Block'],
    name: name,
    equipment: {
        weapon: 'Sword',
        armor: 'Plate Mail',
        armorvalue: 50
    },
    inventory: []
    }
}


function CharacterCreator(name, role) {
    const myhero = createCharacter(name, role);
    return myhero;
}

function levelUp(character, value) {
    character.level += value;
}
function addItem(character, item) {
    character.inventory.push(item);
}

function characterDescription(character) {
    return `${character.name} is a level ${character.level} ${character.role} with ${character.health} health.`;
}


const myCharacter = CharacterCreator("Nobody", "Noname");

addItem(myCharacter, "Sword");
levelUp(myCharacter, 5);

console.log(myCharacter);