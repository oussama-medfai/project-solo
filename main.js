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
games.push(creatgames('Fifa20',"./img/fifa20.jpg","FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series",60,"simulator"));
games.push(creatgames('Fifa19',"./img/fifa19.jpg","FIFA 19 is a football simulation video game published by Electronic Arts as part of the FIFA series",60,"simulator"));
games.push(creatgames('Fifa18',"./img/fifa18.jpg","FIFA 18 is a football simulation video game published by Electronic Arts as part of the FIFA series",60,"simulator"));
games.push(creatgames('PES20',"./img/pes2020.jpg"," part of the FIFA series",60,"simulator"));
games.push(creatgames('PES19',"./img/pes2019.jpg"," Arts as part of the FIFA series",60,"simulator"));
games.push(creatgames('PES18',"./img/pes2018.jpg","part of the FIFA series",60,"simulator"));
games.push(creatgames('Among us',"./img/amungus.jpg","part of the FIFA series",60,"stratigie"));
games.push(creatgames('Cross Fire',"./img/cf.jpg","part of the FIFA series",60,"FPS Tactic"));
games.push(creatgames('CS GO',"./img/csgo.jpg","part of the FIFA series",60,"FPS Tactic"));
games.push(creatgames('Fall guys',"./img/fallguys.jpg","part of the FIFA series",60,"Battle Royale"));
games.push(creatgames('VALORANT',"./img/VALORANT.jpg","part of the FIFA series",60,"FPS Tactic"));
games.push(creatgames('The Witcher 3',"./img/Witcher_3.jpg","part of the FIFA series",60,"action role-playing game"));
games.push(creatgames('God of Wor 4',"./img/God_of_War_4.jpg","part of the FIFA series",60,"Action-adventure"));
// games.push(creatgames('PES18',"./img/pes2018.jpg","part of the FIFA series",60,"simulator"));
// games.push(creatgames('PES18',"./img/pes2018.jpg","part of the FIFA series",60,"simulator"));
// games.push(creatgames('PES18',"./img/pes2018.jpg","part of the FIFA series",60,"simulator"));

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
users.push(creatUser('invit','invit'))


function display(n,y){
var index=n;
var $body=$('#display');
while(index<=y)
{
var div=$('<div id="mySlides" class="'+index+'" style="display:inline-block; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 300px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>'+games[index].name+'</h2>');
div.append(`<img src=${games[index].url} style=" width:100%;height:50%">`);
div.append('<p>'+games[index].price+'</p>');
div.append('<p>'+games[index].disciption+'</p>');
div.append('<button class="add" type="submit" id="'+games[index].name+'" >add</button>');
$body.append(div);
index++;
}
}


var list=localStorage.getItem('buy');
if(list===null){
	var array=[];
}else{
var array=list.split(',');
}
var list2=localStorage.getItem('buy2');
if(list2===null){
	var array2=[];
}else{
var array2=list2.split(',');
}


var listbuy=array.concat(array2);
var sum=0;
function displayCart(){
console.log(listbuy)
var $body=$('#display');
//$body.html('')
var i=0;
while( i < listbuy.length) {
console.log(i)
var index=0;
while(index<games.length){
if(listbuy[i]===games[index].name){
sum+=games[index].price;
var div=$('<div id="mySlides" style="margin-left:25%; left: 20%; top: 20%;  right: 20%; height: 450px;  width: 500px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>'+games[index].name+'</h2>');
div.append(`<img src=${games[index].url} style=" width:100%;height:50%">`);
div.append('<p>'+games[index].price+'$</p>');
div.append('<p>'+games[index].disciption+'</p>');
div.append('<button class="del" type="submit" id="'+games[index].name+'">delete article</button>')
$body.append(div);
}

index++;
}
i++;
}
div=$('<div id="mySlides" style="margin-left:25%; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 500px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2>your buy is '+sum+'$</h2>');
$body.append(div);
}


function showGame(){

var	game=$('#search')[0].value
localStorage.setItem('search',game);
if(game===""){
	window.alert('Your input invalide')
}else{

var game=localStorage.getItem('search')
var index=games.length-1;
var $body=$('#display');
$body.html('');
var test=false;
while(index>=0){
if (game===games[index].name){
	test=true
var div=$('<div id="mySlides" style="display:inline-block; left: 20%; top: 20%;  right: 20%; height: 350px;  width: 300px;  border: 3px solid #73AD21; background-color:#009EFF"> </div>');
div.append('<h2 id="'+games[index].name+'">'+games[index].name+'</h2>');
div.append('<img src="'+games[index].url+'" style=" width:100%;height:50%">');
div.append('<p >'+games[index].price+'</p>');
div.append('<p>'+games[index].disciption+'</p>');
div.append('<button type="submit" id="'+games[index].name+'" >add</button>');
$body.append(div);
}
index--;
}
if(!test){
	window.alert("we don't have your game try later")
}
}
}

function deleteArc(e){
	console.log('hey your in main js')
	var del=e.target.id;
	console.log(del)
	var list=localStorage.getItem('buy');
	var array=list.split(',')
	var list2=localStorage.getItem('buy2');
	var array2=list2.split(',')
	var test=false
	for(var i=0;i<array.length;i++){
		if(del===array[i]){
			test=true
			array.splice(i, 1)
			break;
		}
	}

	if (!test){
		for(var i=0;i<array2.length;i++){
			if(del===array2[i]){
				array2.splice(i, 1)
				break;
			}
		}

	
	}
	localStorage.removeItem("buy");
	localStorage.removeItem("buy2");
	localStorage.setItem('buy',array)	;
	localStorage.setItem('buy2',array2)	;
	window.open("cart.html","_self")
}
