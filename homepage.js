// Russian bubble events
var rusName = document.getElementById('rus-bubble');
rusName.addEventListener('mouseover', revealName);
rusName.addEventListener('mouseout', hideName);
rusName.addEventListener('click', hideName);

// Korean bubble events
var koreanName = document.getElementById('korean-bubble');
koreanName.addEventListener('mouseover', revealKName);
koreanName.addEventListener('mouseout', hideKName);
koreanName.addEventListener('click', hideKName);

// French bubble events
var frenchName = document.getElementById('french-bubble');
frenchName.addEventListener('mouseover', revealFName);
frenchName.addEventListener('mouseout', hideFName);
frenchName.addEventListener('click', hideFName);

// Italian bubble events
var italianName = document.getElementById('italian-bubble');
italianName.addEventListener('mouseover', revealIName);
italianName.addEventListener('mouseout', hideIName);
italianName.addEventListener('click', hideIName);

// Japanese bubble events
var japaneseName = document.getElementById('japanese-bubble');
japaneseName.addEventListener('mouseover', revealJName);
japaneseName.addEventListener('mouseout', hideJName);
japaneseName.addEventListener('click', hideJName);

// Reveal Russian Name
function revealName() {
   var russianName = document.getElementById('russian-word');
   russianName.style.display = "block";
}

// Hide Russian Name
function hideName() {
    var russianName = document.getElementById('russian-word');
    russianName.style.display = "none";
}
// Reveal Korean Name
function revealKName() {
    var koreanName = document.getElementById('korean-word');
    koreanName.style.display = "block";
 }
 
 // Hide Korean Name
 function hideKName() {
     var koreanName = document.getElementById('korean-word');
     koreanName.style.display = "none";
 }
 // Reveal French Name
function revealFName() {
    var frenchName = document.getElementById('french-word');
    frenchName.style.display = "block";
 }
 
 // Hide French Name
 function hideFName() {
     var frenchName = document.getElementById('french-word');
     frenchName.style.display = "none";
 }
// Reveal Italian Name
function revealIName() {
    var italianName = document.getElementById('italian-word');
    italianName.style.display = "block";
 }
 
 // Hide Italian Name
 function hideIName() {
     var italianName = document.getElementById('italian-word');
     italianName.style.display = "none";
 }
// Reveal Japanese Name
function revealJName() {
    var japaneseName = document.getElementById('japanese-word');
    japaneseName.style.display = "block";
 }
 
 // Hide Japanese Name
 function hideJName() {
     var japaneseName = document.getElementById('japanese-word');
     japaneseName.style.display = "none";
 }


