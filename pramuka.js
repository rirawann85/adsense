var pages = [ 

"https://pejuangpramuka.blogspot.com/",
"https://spewehascouter.blogspot.com/",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
