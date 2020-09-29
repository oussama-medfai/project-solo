var games=[];
function creatgames(name,url,disciption,price,categorie) {
	return{
		name:name,
		url:url,
		disciption:disciption,
		price:price,
		categorie:categorie
			};
	
}
games.push(creatgames('Fifa20',"./img/fifa20.jpg","FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series","60$","simulator"));
games.push(creatgames('Fifa19',"./img/fifa19.jpg","FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series","60$","simulator"));
games.push(creatgames('Fifa18',"./img/fifa18.jpg","FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series","60$","simulator"));
games.push(creatgames('PES20',"./img/pes2020.jpg"," part of the FIFA series","60$","simulator"));
games.push(creatgames('PES19',"./img/pes2019.jpg"," Arts as part of the FIFA series","60$","simulator"));
games.push(creatgames('PES18',"./img/pes2018.jpg","part of the FIFA series","60$","simulator"));

var users=[];
function creatUser(user,pass){
	return{
		user:user,
		pass:pass
	}
}
users.push(creatUser('oussama','oussama'))
users.push(creatUser('medfai','medfai'))
users.push(creatUser('user','user'))


function display(n,y){
var index=n;
var $body=$('#display');
while(index<=y)
{
var div=$('<div id="mySlides" style="display:inline-block; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 300px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>'+games[index].name+'</h2>');
div.append(`<img src=${games[index].url} style=" width:100%;height:50%">`);
div.append('<p>'+games[index].price+'</p>');
div.append('<p>'+games[index].disciption+'</p>');
div.append('<button class="add" type="submit" id="'+games[index].name+'" >add</button>');
$body.append(div);
index++;
}
}



function displayCart(){
var list=localStorage.getItem('buy');
console.log(list)
var array=list.split(',')
console.log(array)
var index=0;
var $body=$('#display');
$body.html('')
for (var i = 0; i < array.length; i++) {
while(index<games.length){

if(array[i]=games[index].name){

var div=$('<div id="mySlides" style="display:block; margin-left:25%; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 500px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>'+games[index].name+'</h2>');
div.append(`<img src=${games[index].url} style=" width:100%;height:50%">`);
div.append('<p>'+games[index].price+'</p>');
div.append('<p>'+games[index].disciption+'</p>');
$body.append(div);

}
index++;
}
}}


function showGame(){
var	game=$('#search')[0].value
	console.log(game)
var index=games.length-1;
var $body=$('#display');
$body.html('');
while(index>=0){
if (game===games[index].name){
	
var div=$('<div id="mySlides" style="display:inline-block; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 300px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>'+games[index].name+'</h2>');

div.append('<img src="'+games[index].url+'" style=" width:100%;height:50%">');
div.append('<p>'+games[index].price+'</p>');
div.append('<p>'+games[index].disciption+'</p>');
div.append('<button type="submit" id="'+games[index].name+'" class="add">add</button>');
$body.append(div);
}
index--;
}
}


