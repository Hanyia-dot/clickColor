document.body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    
    x = e.clientX;
    y = e.clientY;
    
    if (x%2==0 && y%2==0) {
        console.log("parzyste");
    }
    else if (x%2!=0 && y%2!=0) {
        console.log("nieparzyste");
    }
    else {
        console.log("mieszane");
    }

})