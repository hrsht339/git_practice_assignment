function prime(num){
count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){//Gandu we have to take those value in which count run 2 times.
return true;//now it will return true.
}
return false;//Else bhi use kiye kr AALSI
}

Let Ans=prime(5);//whenever you return value always take ans in a variable.
  console.log(Ans);