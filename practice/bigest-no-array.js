arr=[3,2,6,1,2,8]
let temp=0
for(i=0;i<arr.length;i++){
        temp=0
    for(j=i+1;j<=arr.length;j++)
      
    if(arr[i]<arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        
    }
   
    
}
console.log(arr)

let combinedString =parseInt(arr.join(""));
console.log(combinedString)
console.log(typeof(combinedString))
