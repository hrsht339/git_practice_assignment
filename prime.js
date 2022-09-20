function prime(num){
count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count>2){
return false;
}
return false;
}

prime(5);