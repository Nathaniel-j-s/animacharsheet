var baseStats = { // Base Stats
  name: "",
  player: "",
  className: "",
  gender: "",
  level: 0,
  age: 0,
  appearance: 0,
  hair: "",
  eyes: "",
  str: 0,
  agi: 0,
  dex: 0,
  con: 0,
  int: 0,
  pow: 0,
  wil: 0,
  per: 0
};

var classStats = { // Class Stats
  lifePointMultiple: 0,
  lifePoints: 0,
  initiative: 0,
  mk: 0,
  innatePsychicPoints: 0,
  combatLimit: 0,
  attack: 0,
  block: 0,
  dodge: 0,
  wearArmor: 0,
  aetherPool: 0,
  aetherAccum: 0,
  magicLimit: 0,
  manaPool: 0,
  manaAccum: 0,
  mProjection: 0,
  summonStat: 0,
  controlStat: 0,
  bindStat: 0,
  banishStat: 0,
  psychicLimit: 0,
  psychicPoints: 0,
  pProjection: 0,
  athletics: 0,
  social: 0,
  perception: 0,
  intellectual: 0,
  vigor: 0,
  subterfuge: 0,
  creative: 0,
  // reducedCosts: 0,
  // innateBonusPrim: 0,
  // innateBonusSeco: 0
};

// Should I have another object that gets filled with ALL stats, post-calculation?
// Justification for not having one: I'd have to write more functions to reload a character.

var setClass =  function(className) { // Figure out a good way to include innate bonuses
  switch(className) {
    case 'Warrior':
      classStats.lifePointMultiple = 15;
      classStats.lifePoints = 15;
      classStats.initiative = 5;
      classStats.mk = 25;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = featsOfStrength = 1;
      // classStats.innateBonusPrim = +5 attack, +5 block, +5 wearArmor;
      // classStats.innateBonusSeco = +5 featsOfStrength;
      break;
    case 'Acrobatic Warrior':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 10;
      classStats.mk = 25;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 dodge;
      // classStats.innateBonusSeco = +10 acrobatics, +10 jump, +10 athletics, +10 sleightOfHand, +10 style;
      break;
    case 'Paladin': // Unfinished class
      classStats.lifePointMultiple = 15;
      classStats.lifePoints = 15;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 2;
      classStats.manaAccum = 60;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 1;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 1;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 2;
      classStats.subterfuge = 3;
      classStats.creative = 2;
      // classStats.reducedCosts = withstandPain = 1;
      // classStats.innateBonusPrim = +5 block, +10 wearArmor, +10 banishStat, +20 manaPool;
      // classStats.innateBonusSeco = +10 leadership, +10 withstandPain, +5 style;
      break;
    case 'Dark Paladin':
      classStats.lifePointMultiple = 15;
      classStats.lifePoints = 15;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 2;
      classStats.manaAccum = 60;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 1;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 1;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = composure = 1;
      // classStats.innateBonusPrim = +5 attack, +5 wearArmor, +10 controlStat, +20 manaPool;
      // classStats.innateBonusSeco = +10 intimidate, +10 composure, +5 style, +5 persuasion;
      break;
    case 'Weaponmaster':
      classStats.lifePointMultiple = 10;
      classStats.lifePoints = 20;
      classStats.initiative = 5;
      classStats.mk = 10;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 1;
      classStats.aetherPool = 3;
      classStats.aetherAccum = 30;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 1;
      classStats.subterfuge = 3;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 block, +10 wearArmor;
      // classStats.innateBonusSeco = +5 featsOfStrength;
      break;
    case 'Technician':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 50;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 1;
      classStats.aetherAccum = 10;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack;
      // classStats.innateBonusSeco = 0;
      break;
    case 'Taoist':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 30;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 15;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = 0;
      // classStats.innateBonusSeco = +5 style;
      break;
    case 'Ranger':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 1;
      classStats.intellectual = 3;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = trapLore = 1, herbalLore = 2, animals = 1, medicine = 2;
      // classStats.innateBonusPrim = +5 attack;
      // classStats.innateBonusSeco = +10 notice, +10 search, +10 track, +5 trapLore, +5 animals, +5 herbalLore;
      break;
    case 'Shadow':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 10;
      classStats.mk = 25;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 dodge;
      // classStats.innateBonusSeco = +10 notice, +10 search, +10 hide, +10 stealth;
      break;
    case 'Thief':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 10;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 2;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 1;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 3;
      classStats.subterfuge = 1;
      classStats.creative = 2;
      // classStats.reducedCosts = appraisal = 1;
      // classStats.innateBonusPrim = +5 dodge;
      // classStats.innateBonusSeco = +5 notice, +5 search, +5 hide, +5 stealth, +5 trapLore, +5 sleightOfHand, +10 theft;
      break;
    case 'Assassin':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 10;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 2;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 1;
      classStats.intellectual = 3;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = stealth = 1, composure = 2, memorize = 2;
      // classStats.innateBonusPrim = +5 attack;
      // classStats.innateBonusSeco = +10 notice, +10 search, +10 hide, +10 stealth, +10 poisons, +10 composure, +10 trapLore;
      break;
    case 'Wizard':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 10;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 3;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 3;
      classStats.aetherAccum = 30;
      classStats.magicLimit = 60;
      classStats.manaPool = 1;
      classStats.manaAccum = 50;
      classStats.mProjection = 2;
      classStats.summonStat = 2;
      classStats.controlStat = 2;
      classStats.bindStat = 2;
      classStats.banishStat = 2;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = magicAppraisal = 1;
      // classStats.innateBonusPrim = +100 manaPool;
      // classStats.innateBonusSeco = +10 magicAppraisal, +5 occult;
      break;
    case 'Warlock':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 50;
      classStats.manaPool = 1;
      classStats.manaAccum = 50;
      classStats.mProjection = 2;
      classStats.summonStat = 2;
      classStats.controlStat = 2;
      classStats.bindStat = 2;
      classStats.banishStat = 2;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge, +20 manaPool;
      // classStats.innateBonusSeco = +5 magicAppraisal;
      break;
    case 'Illusionist':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 3;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 60;
      classStats.manaPool = 1;
      classStats.manaAccum = 60;
      classStats.mProjection = 2;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = sleightOfHand = 1, persuasion = 1;
      // classStats.innateBonusPrim = +75 manaPool;
      // classStats.innateBonusSeco = +5 magicAppraisal, +10 stealth, +10 hide, +10 sleightOfHand, +5 disguise, +5 theft, +5 persuasion;
      break;
    case 'Wizard Mentalist':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 10;
      classStats.innatePsychicPoints = 1;
      classStats.combatLimit = 50;
      classStats.attack = 3;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 3;
      classStats.aetherAccum = 30;
      classStats.magicLimit = 50;
      classStats.manaPool = 1;
      classStats.manaAccum = 50;
      classStats.mProjection = 2;
      classStats.summonStat = 2;
      classStats.controlStat = 2;
      classStats.bindStat = 2;
      classStats.banishStat = 2;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 10;
      classStats.pProjection = 2;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +100 manaPool;
      // classStats.innateBonusSeco = +10 magicAppraisal, +5 occult;
      break;
    case 'Summoner':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 10;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 3;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 3;
      classStats.aetherAccum = 30;
      classStats.magicLimit = 60;
      classStats.manaPool = 1;
      classStats.manaAccum = 60;
      classStats.mProjection = 3;
      classStats.summonStat = 1;
      classStats.controlStat = 1;
      classStats.bindStat = 1;
      classStats.banishStat = 1;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = occult = 1;
      // classStats.innateBonusPrim = +50 manaPool, +10 summonStat, +10 controlStat, +10 bindStat, +10 banishStat;
      // classStats.innateBonusSeco = +5 magicAppraisal, +10 occult;
      break;
    case 'Warrior Summoner':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 3;
      classStats.combatLimit = 50;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 50;
      classStats.manaPool = 1;
      classStats.manaAccum = 60;
      classStats.mProjection = 3;
      classStats.summonStat = 1;
      classStats.controlStat = 1;
      classStats.bindStat = 1;
      classStats.banishStat = 1;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 20;
      classStats.pProjection = 3;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge, +20 manaPool, +5 summonStat, +5 controlStat, +5 bindStat, +5 banishStat;
      // classStats.innateBonusSeco = +5 occult;
      break;
    case 'Mentalist':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 10;
      classStats.innatePsychicPoints = 1;
      classStats.combatLimit = 50;
      classStats.attack = 3;
      classStats.block = 3;
      classStats.dodge = 2;
      classStats.wearArmor = 3;
      classStats.aetherPool = 3;
      classStats.aetherAccum = 30;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 60;
      classStats.psychicPoints = 10;
      classStats.pProjection = 2;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 2;
      classStats.vigor = 3;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = 0;
      // classStats.innateBonusSeco = 0;
      break;
    case 'Warrior Mentalist':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 10;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 1;
      classStats.combatLimit = 50;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 25;
      classStats.magicLimit = 50;
      classStats.manaPool = 3;
      classStats.manaAccum = 70;
      classStats.mProjection = 3;
      classStats.summonStat = 3;
      classStats.controlStat = 3;
      classStats.bindStat = 3;
      classStats.banishStat = 3;
      classStats.psychicLimit = 50;
      classStats.psychicPoints = 15;
      classStats.pProjection = 2;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge;
      // classStats.innateBonusSeco = 0;
      break;
    case 'Freelancer':
      classStats.lifePointMultiple = 20;
      classStats.lifePoints = 5;
      classStats.initiative = 5;
      classStats.mk = 20;
      classStats.innatePsychicPoints = 2;
      classStats.combatLimit = 60;
      classStats.attack = 2;
      classStats.block = 2;
      classStats.dodge = 2;
      classStats.wearArmor = 2;
      classStats.aetherPool = 2;
      classStats.aetherAccum = 20;
      classStats.magicLimit = 60;
      classStats.manaPool = 2;
      classStats.manaAccum = 60;
      classStats.mProjection = 2;
      classStats.summonStat = 2;
      classStats.controlStat = 2;
      classStats.bindStat = 2;
      classStats.banishStat = 2;
      classStats.psychicLimit = 60;
      classStats.psychicPoints = 20;
      classStats.pProjection = 2;
      classStats.athletics = 2;
      classStats.social = 2;
      classStats.perception = 2;
      classStats.intellectual = 3;
      classStats.vigor = 2;
      classStats.subterfuge = 2;
      classStats.creative = 2;
      // classStats.reducedCosts = 0;
      // classStats.innateBonusPrim = +10 manaPool;
      // classStats.innateBonusSeco = +10 to 5 selected skills;
      break;
  }
};

var otherStats = { // Additional Stats
  str: 0,
  agi: 0,
  dex: 0,
  con: 0,
  int: 0,
  pow: 0,
  wil: 0,
  per: 0,
  sizeStat: 0,
  devPoints: 0,
  presence: 0,
  natInit: 0,
  phR: 0,
  vR: 0,
  dR: 0,
  mR: 0,
  psR: 0,
  fatigue: 0,
  movement: 0,
  attack: 0,
  block: 0,
  dodge: 0,
  wearArmor: 0,
  mk: 0,
  aetherPool: 0,
  aetherAccum: [0, 0, 0, 0, 0, 0],
  manaPool: 0,
  manaAccum: 0,
  mProjection: 0,
  psychicPoints: 0,
  pProjection: 0
};

var advantages = []; // Advantages and disadvantages

var skills = { // These are sorted by stat, not regular groups
  str: [0, 0],
  agi: [0, 0, 0, 0, 0, 0, 0],
  dex: [0, 0, 0, 0, 0],
  int: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pow: [0, 0, 0, 0, 0],
  wil: [0, 0, 0],
  per: [0, 0, 0, 0, 0]
};

const enterStats = function() { // Takes stats from form and puts into Base Stats
  baseStats.name = document.getElementById('charname').value;
  baseStats.player = document.getElementById('playername').value;
  baseStats.className = document.getElementById('classname').value;
  baseStats.gender = document.getElementById('gender').value;
  baseStats.level = document.getElementById('level').value;
  baseStats.age = document.getElementById('age').value;
  baseStats.appearance = document.getElementById('appearance').value;
  baseStats.hair = document.getElementById('hair').value;
  baseStats.eyes = document.getElementById('eyes').value;
  baseStats.str = document.getElementById('str').value;
  baseStats.agi = document.getElementById('agi').value;
  baseStats.dex = document.getElementById('dex').value;
  baseStats.con = document.getElementById('con').value;
  baseStats.int = document.getElementById('int').value;
  baseStats.pow = document.getElementById('pow').value;
  baseStats.wil = document.getElementById('wil').value;
  baseStats.per = document.getElementById('per').value;
};

const calcPrimChar = function(stat) { // Provides modifiers to base stats
  switch(stat) {
    case 1:
      return -30;
    case 2:
      return -20;
    case 3:
      return -10;
    case 4:
      return -5;
    case 5:
      return 0;
    case 6:
    case 7:
      return 5;
    case 8:
    case 9:
      return 10;
    case 10:
      return 15;
    default:
      return 0;
  }
};

const calcOtherChar = function() { // Calculates basics of all stats, prepped to have additions given to them
  otherStats.str = calcPrimChar(baseStats.str);
  otherStats.agi = calcPrimChar(baseStats.agi);
  otherStats.dex = calcPrimChar(baseStats.dex);
  otherStats.con = calcPrimChar(baseStats.con);
  otherStats.int = calcPrimChar(baseStats.int);
  otherStats.pow = calcPrimChar(baseStats.pow);
  otherStats.wil = calcPrimChar(baseStats.wil);
  otherStats.per = calcPrimChar(baseStats.per);
  otherStats.sizeStat = baseStats.str + baseStats.con;
  otherStats.devPoints = 500 + (baseStats.level * 100);
  otherStats.presence = 25 + (baseStats.level * 5);
  otherStats.lp = 20 + (baseStats.con * 10) + otherStats.con + (baseStats.level * classStats.lifePoints);
  otherStats.natInit = 20 + otherStats.agi + otherStats.dex + (baseStats.level * classStats.initiative);
  otherStats.phR = otherStats.presence + otherStats.con;
  otherStats.vR = otherStats.presence + otherStats.con;
  otherStats.dR = otherStats.presence + otherStats.con;
  otherStats.mR = otherStats.presence + otherStats.pow;
  otherStats.psR = otherStats.presence + otherStats.wil;
  otherStats.fatigue = baseStats.con;
  otherStats.movement = baseStats.agi;
  otherStats.attack = otherStats.dex;
  otherStats.block = otherStats.dex;
  otherStats.dodge = otherStats.agi;
  otherStats.wearArmor = otherStats.str;
  otherStats.mk = baseStats.level * classStats.mk;
  otherStats.aetherPool = baseStats.str + baseStats.agi + baseStats.dex + baseStats.con + baseStats.pow + baseStats.wil;
  otherStats.aetherAccum = [0, 0, 0, 0, 0, 0]; // either 1 or 2 based on stats (figure out how to represent this)
  otherStats.manaPool = 20 + (baseStats.pow * 10) + otherStats.pow;
  if (baseStats.pow <= 4) { // figure out the better math way to do this. Divide by 4, rounded down, multiply by 5.
    otherStats.manaAccum = 0;
  } else if (baseStats.pow >= 5 && baseStats.pow <= 7) {
    otherStats.manaAccum = 5;
  } else if (baseStats.pow >= 8 && baseStats.pow <= 11) {
    otherStats.manaAccum = 10;
  }
  otherStats.mProjection = otherStats.dex;
  otherStats.psychicPoints = baseStats.level / classStats.psychicPoints;
  otherStats.pProjection = otherStats.dex;
};

// Better way to do skill calculation:
// 1. Autofill any skills with their particular stat.
// 2. Have the function take in the name of the skill they exited and the number entered as parameters.
// 3. Apply the number entered to the appropriate object for storage.
// 4. Take the entered number along with the other bonuses, add it to a total.
// No need to store the total. Just run the calculation again every time the character is loaded. This should require very little computing power.
// Like this:
// var calcSkill = function(skillName, bonus, class, misc) {
// skills.skillName = document.getElementById('skillName').value;
// document.getElementById('skillName' + 'total').innerHTML = skills.skillName + bonus + class + misc;
// };
// Obviously, this isn't exact. Need to do some research, but you get the idea.

const calcSkills = function() { // Applies skill ranks to total
  skills.agi[0] = document.getElementById('acrobatics').value;
  skills.agi[1] = document.getElementById('athleticism').value;
  skills.agi[2] = document.getElementById('climb').value;
  skills.str[0] = document.getElementById('jump').value;
  skills.agi[3] = document.getElementById('ride').value;
  skills.agi[4] = document.getElementById('swim').value;
  skills.wil[0] = document.getElementById('composure').value;
  skills.str[1] = document.getElementById('featsOfStrength').value;
  skills.wil[1] = document.getElementById('withstandPain').value;
  skills.per[0] = document.getElementById('notice').value;
  skills.per[1] = document.getElementById('search').value;
  skills.per[2] = document.getElementById('track').value;
  skills.int[0] = document.getElementById('animals').value;
  skills.int[1] = document.getElementById('appraisal').value;
  skills.int[2] = document.getElementById('herbalLore').value;
  skills.int[3] = document.getElementById('historyLore').value;
  skills.pow[0] = document.getElementById('magicAppraisal').value;
  skills.int[4] = document.getElementById('medicine').value;
  skills.int[5] = document.getElementById('memorize').value;
  skills.int[6] = document.getElementById('navigation').value;
  skills.int[7] = document.getElementById('occult').value;
  skills.int[8] = document.getElementById('sciences').value;
  skills.wil[2] = document.getElementById('intimidate').value;
  skills.pow[1] = document.getElementById('leadership').value;
  skills.int[9] = document.getElementById('persuasion').value;
  skills.pow[2] = document.getElementById('style').value;
  skills.dex[0] = document.getElementById('disguise').value;
  skills.per[3] = document.getElementById('hide').value;
  skills.dex[1] = document.getElementById('lockPicking').value;
  skills.int[10] = document.getElementById('poisons').value;
  skills.dex[2] = document.getElementById('theft').value;
  skills.per[4] = document.getElementById('trapLore').value;
  skills.agi[5] = document.getElementById('stealth').value;
  skills.pow[3] = document.getElementById('art').value;
  skills.agi[6] = document.getElementById('dance').value;
  skills.dex[3] = document.getElementById('forging').value;
  skills.pow[4] = document.getElementById('music').value;
  skills.dex[4] = document.getElementById('sleightOfHand').value;
};
