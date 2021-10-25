import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent{
  holder='';
getValue(val:string)
{
 this.holder=val
}
add(){this.holder+='+'}
sub(){this.holder+='-'}
mul(){this.holder+='*'}
div(){this.holder+='/'}
zero(){this.holder+='0'}
one(){this.holder+='1'}
two(){this.holder+='2'}
three(){this.holder+='3'}
four(){this.holder+='4'}
five(){this.holder+='5'}
six(){this.holder+='6'}
seven(){this.holder+='7'}
eight(){this.holder+='8'}
nine(){this.holder+='9'}
left_par(){this.holder+='('}
right_par(){this.holder+=')'}
decimal(){this.holder+='.'}
clear(){this.holder=''}
delete(){this.holder = this.holder.substring(0, this.holder.length - 1);}
fact(){
  let out=1;
  let i=1;
  var p=Number(this.holder);
  for(i=p; i>1; i--)
  {
    out*=i;
    console.warn(out)
  }
  console.log(out);
  this.holder= String(out);
}
prime(){
  let isPrime=true;
  let i=2;
  if(!isNaN(Number(this.holder))){
    var p = Number(this.holder);
  if(p<2)
  {
    this.holder='NO'
    return}
  for (i = 2; i < p; i++) {
    if (p % i == 0) {
        isPrime = false;
        break;
    }
  }
  if (isPrime) {
    this.holder="YES"
  } else {
    this.holder="NO"
 }
}
}
result(){this.holder=eval(this.holder)}
}
