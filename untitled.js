let b =[89,89,876,28,777,892,767,893,77,73838,8383];
function sorted(a){
for (i=0;i<a.length;i++){
  for (j=0;j<a.length-1;j++){
  if(a[j]>a[j+1]){
    let y= a[j+1];
    a[j+1]=a[j];
    a[j]=y;
  }
}
}
   console.log(a);
}
sorted(b);













