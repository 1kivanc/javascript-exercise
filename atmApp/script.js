

let balance  = 1000; 
let newLine ="\r\n";



let info = "1-View balance "+newLine
+"2-Withdraw money "+newLine
+"3-Pay into "+newLine
+"4-Exit"+newLine
+"please select a value";

//alert(metin);
process = prompt(info);


switch(process){
    case  "1":
        alert("balance : "+balance);
        break;
    case "2":
        let  drawAmount = Number(prompt("Enter the amount you want to withdraw :"))
        if(drawAmount<balance){
            balance = balance-drawAmount;

        }else{
            alert("You do not have the amount you entered in your balance "+newLine
            +"balance : "+balance + " "+ "draw amount : "+ drawAmount);
        }
        break;
    
    case "3":
        let payInto = Number(prompt("Enter the amount to deposit: "));
        balance = balance+payInto;
        alert("current balance: "+balance);
    
    case "4":
        console.log("logging out of the system...");
        break;
    default:
        console.log("Please enter a value from 1 - 4");
        break;
}   
