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


//secont way!

/* document.body.addEventListener('click', (event) => {
    
    console.log(event.clientX, event.clientY);
    
    const color = gerColor(event);
    document.body.style.backgroundColor = color;

}) 

const getColor (e) => {
    if (e.clientX % 2 == 0){
        if (e.clientY % 2 == 0){
            return "red";
        }

    } else{
        return "green";
    }

    else {
        if (e.clientY % 2 == 0){
            return "green";
        }
        else {
            return "blue";
        }
    }
}

*/

