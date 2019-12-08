/* var hello = function(){
    document.getElementById("console").innerHTML="<p>Hello</p>";
} */

//creating class

class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }
    //create a function to display class character

display = function(){
    document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} </p> <p> Energy: ${this.energy} </p>`;
        
    }

    attack = function(opponent,item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        opponent.display();
        console.log(opponent);
        document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img} ...</p> `;
        //print game over on the HTML console when energy = 0
        if(opponent.energy <= 0){

            document.getElementById(opponent.id).innerHTML = "<p> I'm Dead!!!</P>";  
            document.getElementById("console").innerHTML=`<p>I lost!</p>`;
            /* document.getElementById("console").innerHTML=`<p>Game Over!!! Play Again? Then click the Restart button!</p>`;    */
        }        
              
    }                
      

}

const character1= new Character("Yoshi",100,"c1");
const character2 = new Character("Toad",100,"c2");

character1.display();
character2.display();


class Item{
    constructor(iName,iHitPoints,img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}


const item1 = new Item('Goomba',20,'<img class="imgItem" src="img/goomba.jfif">');
const item2 = new Item('Banana',5,'<img class="imgItem" src="img/banana.jfif">');
const item3 = new Item('Green Shell',10,'<img class="imgItem" src="img/greenshell.jfif">');

    
const items = [item1,item2,item3];

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
    //console.log(selection);
}

console.log(selectItem());

//reset function  ---- global
    
    const restart = function(){ 
   
    document.location.reload();
            
} 
 
        