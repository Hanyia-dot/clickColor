document.body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    
    x = e.clientX;
    y = e.clientY;
    
    if (x%2==0 && y%2==0) {
        //console.log("parzyste");
        document.body.style.backgroundColor = "#ff4757"
    }
    else if (x%2!=0 && y%2!=0) {
        //console.log("nieparzyste");
        document.body.style.backgroundColor = "#3742fa"
    }
    else {
        //console.log("mieszane");
        document.body.style.backgroundColor = "#2ed573"
    }

})