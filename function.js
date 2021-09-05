function showPrime(n){
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            alert(`${i} is prime `);
        }
    }
}
function isPrime(x){
    for(let i=2;i<x;x++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

let x=prompt("Enter value of x to get prime number upto x","10");
showPrime(x);