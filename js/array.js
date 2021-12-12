function checkNum(){
    const numbers = document.querySelector('#nums').value.split(',');
    numbers.sort((a,b) => a-b);
    numbers.every((num, i) => {
        if(num < 20 || num > 30){
            numbers.splice(i, 1);
        }
    });
    document.write('<br> The numbers between 20 and 30 are '+numbers+' with count '+numbers.length);
}
