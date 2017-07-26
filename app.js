angular.module('animaSheet', []);

var mainContent = document.getElementById('mainContent');
var bounds = mainContent.getBoundingClientRect();
mainContent.style.lineHeight = bounds.width * 0.03125 +'px';
