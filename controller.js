angular.module('animaSheet').controller('animaCtrl', function($scope, animaSrvc) {

  $scope.baseStats = { // Base Stats
    charName: "",
    player: "",
    classChoice: "",
    gender: "",
    level: 0,
    devPoints: 0,
    age: 0,
    appearance: 0,
    hairEyes: "",
    heightWeight: "",
    currentLP: 0,
    currentFatigue: 0,
    str: 0,
    agi: 0,
    dex: 0,
    con: 0,
    int: 0,
    pow: 0,
    wil: 0,
    per: 0
  };

  $scope.classStats = { // Class Stats
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

  $scope.setClass =  function(classChoice) { // Figure out a good way to include innate bonuses
    switch(classChoice) {
      case 'Warrior':
        $scope.classStats.lifePointMultiple = 15;
        $scope.classStats.lifePoints = 15;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 25;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = featsOfStrength = 1;
        // classStats.innateBonusPrim = +5 attack, +5 block, +5 wearArmor;
        // classStats.innateBonusSeco = +5 featsOfStrength;
        break;
      case 'Acrobatic Warrior':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 10;
        $scope.classStats.mk = 25;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 dodge;
        // classStats.innateBonusSeco = +10 acrobatics, +10 jump, +10 athletics, +10 sleightOfHand, +10 style;
        break;
      case 'Paladin':
        $scope.classStats.lifePointMultiple = 15;
        $scope.classStats.lifePoints = 15;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 2;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 1;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 1;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 3;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = withstandPain = 1;
        // classStats.innateBonusPrim = +5 block, +10 wearArmor, +10 banishStat, +20 manaPool;
        // classStats.innateBonusSeco = +10 leadership, +10 withstandPain, +5 style;
        break;
      case 'Dark Paladin':
        $scope.classStats.lifePointMultiple = 15;
        $scope.classStats.lifePoints = 15;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 2;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 1;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 1;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = composure = 1;
        // classStats.innateBonusPrim = +5 attack, +5 wearArmor, +10 controlStat, +20 manaPool;
        // classStats.innateBonusSeco = +10 intimidate, +10 composure, +5 style, +5 persuasion;
        break;
      case 'Weaponmaster':
        $scope.classStats.lifePointMultiple = 10;
        $scope.classStats.lifePoints = 20;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 10;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 1;
        $scope.classStats.aetherPool = 3;
        $scope.classStats.aetherAccum = 30;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 1;
        $scope.classStats.subterfuge = 3;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 block, +10 wearArmor;
        // classStats.innateBonusSeco = +5 featsOfStrength;
        break;
      case 'Technician':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 50;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 1;
        $scope.classStats.aetherAccum = 10;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack;
        // classStats.innateBonusSeco = 0;
        break;
      case 'Taoist':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 30;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 15;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = 0;
        // classStats.innateBonusSeco = +5 style;
        break;
      case 'Ranger':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 1;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = trapLore = 1, herbalLore = 2, animals = 1, medicine = 2;
        // classStats.innateBonusPrim = +5 attack;
        // classStats.innateBonusSeco = +10 notice, +10 search, +10 track, +5 trapLore, +5 animals, +5 herbalLore;
        break;
      case 'Shadow':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 10;
        $scope.classStats.mk = 25;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 dodge;
        // classStats.innateBonusSeco = +10 notice, +10 search, +10 hide, +10 stealth;
        break;
      case 'Thief':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 10;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 1;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 1;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = appraisal = 1;
        // classStats.innateBonusPrim = +5 dodge;
        // classStats.innateBonusSeco = +5 notice, +5 search, +5 hide, +5 stealth, +5 trapLore, +5 sleightOfHand, +10 theft;
        break;
      case 'Assassin':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 10;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 1;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = stealth = 1, composure = 2, memorize = 2;
        // classStats.innateBonusPrim = +5 attack;
        // classStats.innateBonusSeco = +10 notice, +10 search, +10 hide, +10 stealth, +10 poisons, +10 composure, +10 trapLore;
        break;
      case 'Wizard':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 10;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 3;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 3;
        $scope.classStats.aetherAccum = 30;
        $scope.classStats.magicLimit = 60;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 50;
        $scope.classStats.mProjection = 2;
        $scope.classStats.summonStat = 2;
        $scope.classStats.controlStat = 2;
        $scope.classStats.bindStat = 2;
        $scope.classStats.banishStat = 2;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = magicAppraisal = 1;
        // classStats.innateBonusPrim = +100 manaPool;
        // classStats.innateBonusSeco = +10 magicAppraisal, +5 occult;
        break;
      case 'Warlock':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 50;
        $scope.classStats.mProjection = 2;
        $scope.classStats.summonStat = 2;
        $scope.classStats.controlStat = 2;
        $scope.classStats.bindStat = 2;
        $scope.classStats.banishStat = 2;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge, +20 manaPool;
        // classStats.innateBonusSeco = +5 magicAppraisal;
        break;
      case 'Illusionist':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 3;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 60;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 2;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = sleightOfHand = 1, persuasion = 1;
        // classStats.innateBonusPrim = +75 manaPool;
        // classStats.innateBonusSeco = +5 magicAppraisal, +10 stealth, +10 hide, +10 sleightOfHand, +5 disguise, +5 theft, +5 persuasion;
        break;
      case 'Wizard Mentalist':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 10;
        $scope.classStats.innatePsychicPoints = 1;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 3;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 3;
        $scope.classStats.aetherAccum = 30;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 50;
        $scope.classStats.mProjection = 2;
        $scope.classStats.summonStat = 2;
        $scope.classStats.controlStat = 2;
        $scope.classStats.bindStat = 2;
        $scope.classStats.banishStat = 2;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 10;
        $scope.classStats.pProjection = 2;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +100 manaPool;
        // classStats.innateBonusSeco = +10 magicAppraisal, +5 occult;
        break;
      case 'Summoner':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 10;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 3;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 3;
        $scope.classStats.aetherAccum = 30;
        $scope.classStats.magicLimit = 60;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 1;
        $scope.classStats.controlStat = 1;
        $scope.classStats.bindStat = 1;
        $scope.classStats.banishStat = 1;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = occult = 1;
        // classStats.innateBonusPrim = +50 manaPool, +10 summonStat, +10 controlStat, +10 bindStat, +10 banishStat;
        // classStats.innateBonusSeco = +5 magicAppraisal, +10 occult;
        break;
      case 'Warrior Summoner':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 3;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 1;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 1;
        $scope.classStats.controlStat = 1;
        $scope.classStats.bindStat = 1;
        $scope.classStats.banishStat = 1;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 3;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge, +20 manaPool, +5 summonStat, +5 controlStat, +5 bindStat, +5 banishStat;
        // classStats.innateBonusSeco = +5 occult;
        break;
      case 'Mentalist':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 10;
        $scope.classStats.innatePsychicPoints = 1;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 3;
        $scope.classStats.block = 3;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 3;
        $scope.classStats.aetherPool = 3;
        $scope.classStats.aetherAccum = 30;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 60;
        $scope.classStats.psychicPoints = 10;
        $scope.classStats.pProjection = 2;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 2;
        $scope.classStats.vigor = 3;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = 0;
        // classStats.innateBonusSeco = 0;
        break;
      case 'Warrior Mentalist':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 10;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 1;
        $scope.classStats.combatLimit = 50;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 25;
        $scope.classStats.magicLimit = 50;
        $scope.classStats.manaPool = 3;
        $scope.classStats.manaAccum = 70;
        $scope.classStats.mProjection = 3;
        $scope.classStats.summonStat = 3;
        $scope.classStats.controlStat = 3;
        $scope.classStats.bindStat = 3;
        $scope.classStats.banishStat = 3;
        $scope.classStats.psychicLimit = 50;
        $scope.classStats.psychicPoints = 15;
        $scope.classStats.pProjection = 2;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +5 attack, +5 block, +5 dodge;
        // classStats.innateBonusSeco = 0;
        break;
      case 'Freelancer':
        $scope.classStats.lifePointMultiple = 20;
        $scope.classStats.lifePoints = 5;
        $scope.classStats.initiative = 5;
        $scope.classStats.mk = 20;
        $scope.classStats.innatePsychicPoints = 2;
        $scope.classStats.combatLimit = 60;
        $scope.classStats.attack = 2;
        $scope.classStats.block = 2;
        $scope.classStats.dodge = 2;
        $scope.classStats.wearArmor = 2;
        $scope.classStats.aetherPool = 2;
        $scope.classStats.aetherAccum = 20;
        $scope.classStats.magicLimit = 60;
        $scope.classStats.manaPool = 2;
        $scope.classStats.manaAccum = 60;
        $scope.classStats.mProjection = 2;
        $scope.classStats.summonStat = 2;
        $scope.classStats.controlStat = 2;
        $scope.classStats.bindStat = 2;
        $scope.classStats.banishStat = 2;
        $scope.classStats.psychicLimit = 60;
        $scope.classStats.psychicPoints = 20;
        $scope.classStats.pProjection = 2;
        $scope.classStats.athletics = 2;
        $scope.classStats.social = 2;
        $scope.classStats.perception = 2;
        $scope.classStats.intellectual = 3;
        $scope.classStats.vigor = 2;
        $scope.classStats.subterfuge = 2;
        $scope.classStats.creative = 2;
        // classStats.reducedCosts = 0;
        // classStats.innateBonusPrim = +10 manaPool;
        // classStats.innateBonusSeco = +10 to 5 selected skills;
        break;
    }
  };

  $scope.otherStats = { // Additional Stats
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

  $scope.advantages = []; // Advantages and disadvantages

  $scope.skills = { // These are sorted by stat, not regular groups
    str: [0, 0],
    agi: [0, 0, 0, 0, 0, 0, 0],
    dex: [0, 0, 0, 0, 0],
    int: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    pow: [0, 0, 0, 0, 0],
    wil: [0, 0, 0],
    per: [0, 0, 0, 0, 0]
  };

  $scope.enterStats = function(charStr, charAgi, charDex, charCon, charInt, charPow, charWil, charPer) { // Takes stats from form and puts into Base Stats
    $scope.baseStats.str = charStr;
    $scope.baseStats.agi = charAgi;
    $scope.baseStats.dex = charDex;
    $scope.baseStats.con = charCon;
    $scope.baseStats.int = charInt;
    $scope.baseStats.pow = charPow;
    $scope.baseStats.wil = charWil;
    $scope.baseStats.per = charPer;
    $scope.calcOtherChar();
  };

  $scope.setName = function(charName) {
    $scope.baseStats.charName = charName;
  };

  $scope.setPlayer = function(player) {
    $scope.baseStats.player = player;
  };

  $scope.setGender = function(gender) {
    $scope.baseStats.gender = gender;
  };

  $scope.setAge = function(age) {
    $scope.baseStats.age = age;
  };

  $scope.setAppearance = function(appearance) {
    $scope.baseStats.appearance = appearance;
  };

  $scope.setHairEyes = function(hairEyes) {
    $scope.baseStats.hairEyes = hairEyes;
  };

  $scope.setHeightWeight = function(heightWeight) {
    $scope.baseStats.heightWeight = heightWeight;
  };

  $scope.setCurrentLP = function(currentLP) {
    $scope.baseStats.currentLP = currentLP;
  };

  $scope.setCurrentLP = function(currentFatigue) {
    $scope.baseStats.currentFatigue = currentFatigue;
  };

  $scope.calcLevel = function(level) {
    $scope.baseStats.level = level;
    $scope.baseStats.devPoints = 500 + ($scope.baseStats.level * 100);
    $scope.calcOtherChar();
  };

  $scope.calcPrimChar = function(stat) { // Provides modifiers to base stats
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

  $scope.calcOtherChar = function() { // Calculates basics of all stats, prepped to have additions given to them
    $scope.otherStats.str = $scope.calcPrimChar($scope.baseStats.str);
    $scope.otherStats.agi = $scope.calcPrimChar($scope.baseStats.agi);
    $scope.otherStats.dex = $scope.calcPrimChar($scope.baseStats.dex);
    $scope.otherStats.con = $scope.calcPrimChar($scope.baseStats.con);
    $scope.otherStats.int = $scope.calcPrimChar($scope.baseStats.int);
    $scope.otherStats.pow = $scope.calcPrimChar($scope.baseStats.pow);
    $scope.otherStats.wil = $scope.calcPrimChar($scope.baseStats.wil);
    $scope.otherStats.per = $scope.calcPrimChar($scope.baseStats.per);
    $scope.otherStats.sizeStat = $scope.baseStats.str + $scope.baseStats.con;
    $scope.otherStats.devPoints = 500 + ($scope.baseStats.level * 100);
    $scope.otherStats.presence = 25 + ($scope.baseStats.level * 5);
    $scope.otherStats.lp = 20 + ($scope.baseStats.con * 10) + $scope.otherStats.con + ($scope.baseStats.level * $scope.classStats.lifePoints);
    $scope.otherStats.natInit = 20 + $scope.otherStats.agi + $scope.otherStats.dex + ($scope.baseStats.level * $scope.classStats.initiative);
    $scope.otherStats.phR = $scope.otherStats.presence + $scope.otherStats.con;
    $scope.otherStats.vR = $scope.otherStats.presence + $scope.otherStats.con;
    $scope.otherStats.dR = $scope.otherStats.presence + $scope.otherStats.con;
    $scope.otherStats.mR = $scope.otherStats.presence + $scope.otherStats.pow;
    $scope.otherStats.psR = $scope.otherStats.presence + $scope.otherStats.wil;
    $scope.otherStats.fatigue = $scope.baseStats.con;
    $scope.otherStats.movement = $scope.baseStats.agi;
    $scope.otherStats.attack = $scope.otherStats.dex;
    $scope.otherStats.block = $scope.otherStats.dex;
    $scope.otherStats.dodge = $scope.otherStats.agi;
    $scope.otherStats.wearArmor = $scope.otherStats.str;
    $scope.otherStats.mk = $scope.baseStats.level * $scope.classStats.mk;
    $scope.otherStats.aetherPool = $scope.baseStats.str + $scope.baseStats.agi + $scope.baseStats.dex + $scope.baseStats.con + $scope.baseStats.pow + $scope.baseStats.wil;
    $scope.otherStats.aetherAccum = [0, 0, 0, 0, 0, 0]; // either 1 or 2 based on stats (figure out how to represent this)
    $scope.otherStats.manaPool = 20 + ($scope.baseStats.pow * 10) + $scope.otherStats.pow;
    if ($scope.baseStats.pow <= 4) { // figure out the better math way to do this. Divide by 4, rounded down, multiply by 5.
      $scope.otherStats.manaAccum = 0;
    } else if ($scope.baseStats.pow >= 5 && $scope.baseStats.pow <= 7) {
      $scope.otherStats.manaAccum = 5;
    } else if ($scope.baseStats.pow >= 8 && $scope.baseStats.pow <= 11) {
      $scope.otherStats.manaAccum = 10;
    }
    $scope.otherStats.mProjection = $scope.otherStats.dex;
    $scope.otherStats.psychicPoints = $scope.baseStats.level / $scope.classStats.psychicPoints;
    $scope.otherStats.pProjection = $scope.otherStats.dex;
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

  $scope.calcSkills = function() { // Applies skill ranks to total
    $scope.skills.agi[0] = document.getElementById('acrobatics').value;
    $scope.skills.agi[1] = document.getElementById('athleticism').value;
    $scope.skills.agi[2] = document.getElementById('climb').value;
    $scope.skills.str[0] = document.getElementById('jump').value;
    $scope.skills.agi[3] = document.getElementById('ride').value;
    $scope.skills.agi[4] = document.getElementById('swim').value;
    $scope.skills.wil[0] = document.getElementById('composure').value;
    $scope.skills.str[1] = document.getElementById('featsOfStrength').value;
    $scope.skills.wil[1] = document.getElementById('withstandPain').value;
    $scope.skills.per[0] = document.getElementById('notice').value;
    $scope.skills.per[1] = document.getElementById('search').value;
    $scope.skills.per[2] = document.getElementById('track').value;
    $scope.skills.int[0] = document.getElementById('animals').value;
    $scope.skills.int[1] = document.getElementById('appraisal').value;
    $scope.skills.int[2] = document.getElementById('herbalLore').value;
    $scope.skills.int[3] = document.getElementById('historyLore').value;
    $scope.skills.pow[0] = document.getElementById('magicAppraisal').value;
    $scope.skills.int[4] = document.getElementById('medicine').value;
    $scope.skills.int[5] = document.getElementById('memorize').value;
    $scope.skills.int[6] = document.getElementById('navigation').value;
    $scope.skills.int[7] = document.getElementById('occult').value;
    $scope.skills.int[8] = document.getElementById('sciences').value;
    $scope.skills.wil[2] = document.getElementById('intimidate').value;
    $scope.skills.pow[1] = document.getElementById('leadership').value;
    $scope.skills.int[9] = document.getElementById('persuasion').value;
    $scope.skills.pow[2] = document.getElementById('style').value;
    $scope.skills.dex[0] = document.getElementById('disguise').value;
    $scope.skills.per[3] = document.getElementById('hide').value;
    $scope.skills.dex[1] = document.getElementById('lockPicking').value;
    $scope.skills.int[10] = document.getElementById('poisons').value;
    $scope.skills.dex[2] = document.getElementById('theft').value;
    $scope.skills.per[4] = document.getElementById('trapLore').value;
    $scope.skills.agi[5] = document.getElementById('stealth').value;
    $scope.skills.pow[3] = document.getElementById('art').value;
    $scope.skills.agi[6] = document.getElementById('dance').value;
    $scope.skills.dex[3] = document.getElementById('forging').value;
    $scope.skills.pow[4] = document.getElementById('music').value;
    $scope.skills.dex[4] = document.getElementById('sleightOfHand').value;
  };

});
