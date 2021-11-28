const items=[
    {name:'tomato',amount:0,price:0.90,buttonPlus:'tomatoPlus',buttonMinus:'tomatoMinus'},
    {name:'salad',amount:0,price:1.29,buttonPlus:'saladPlus',buttonMinus:'saladMinus'},
    {name:'cheese',amount:0,price:1.99,buttonPlus:'cheesePlus',buttonMinus:'cheeseMinus'},
    {name:'meat',amount:1,price:2.99,buttonPlus:'meatPlus',buttonMinus:'meatMinus'}];

    let price=4.99;

    let amountTomato=0;
    let amountSalad=0;
    let amountCheese=0;
    let amountMeat=1;
    
    function forLoop(){
        for(let i=0;i<=10;i++){
        console.log("Gal");
        }
    }

function addNewDiv(num){
    
    let item=items[num];
    let name=item.name;
    let buttonMinusName=item.buttonMinus;
    let buttonPlusName=item.buttonPlus;
    let buttonMinusBackground=document.getElementById(buttonMinusName);
    let buttonPlusBackground=document.getElementById(buttonPlusName);
    buttonMinusBackground.disabled=false;

    const newDiv=document.createElement('div');
    newDiv.classList.add(name);

    let AddNewDiv=document.getElementById(name);
    AddNewDiv.appendChild(newDiv);

    let amount=++item.amount;

    if(amount>0&&name||amount==4&&name){
        if (buttonMinusBackground.classList.contains('button-2')){
            buttonMinusBackground.classList.remove('button-2');
            buttonMinusBackground.classList.toggle('button-3');
        }else if(amount==4){
            buttonPlusBackground.classList.remove('button-3');
                buttonPlusBackground.classList.toggle('button-2');
                document.getElementById(buttonPlusName).disabled=true;
        }
        
    }

    price+=item.price;
    const p=document.getElementById('price');
    p.innerHTML='Current Price:'+Math.floor(price*100)/100+'$';
}



function removeDiv(num){
    let item=items[num];
    let name=item.name;
    let buttonMinusName=item.buttonMinus;
    let buttonPlusName=item.buttonPlus;

    let amount=--item.amount;

    let buttonMinusBackground=document.getElementById(buttonMinusName);
    let buttonPlusBackground=document.getElementById(buttonPlusName);

    if(amount==0){
        document.getElementById(buttonMinusName).disabled=true;
    }else{
        document.getElementById(buttonPlusName).disabled=false;
    }

    const itemList=document.getElementsByClassName(name);
    itemList[itemList.length-1].remove();

    if(amount==0&&name){
        if (buttonMinusBackground.classList.contains('button-3')){
            buttonMinusBackground.classList.remove('button-3');
            buttonMinusBackground.classList.toggle('button-2');
        }
    }else if(amount==3&&name){
        buttonPlusBackground.classList.remove('button-2');
        buttonPlusBackground.classList.toggle('button-3');

    }

    price-=item.price;
    const p=document.getElementById('price');
    p.innerHTML='Current Price:'+ Math.floor(price*100)/100+'$';

}







