function func() {
    setInterval(() => {
        // taking time and date from user 
    var date = document.getElementById("date").value
    var redate = date.split("-");
    var date = redate[2]+ "/" + redate[1]+ "/" + redate[0];    
    var time = document.getElementById("time").value; 
    
    var y = new Date(); 
    var x = redate[1] + " " + redate[2] + "," +" "+redate[0] + " " + time;
    
    const curr = new Date().getTime(); 
    const final = new Date(x).getTime(); 
    var remaining = final-curr;
    
    if(date.length == 0 || time.length == 0){
        timmer.style.color="red"
        document.getElementById("timmer").innerHTML="Error : Date Time Must be There ";
    }

    else if(redate[2] < y.getDate() ){
        timmer.style.color="red"
        document.getElementById("timmer").innerHTML="Error : Entered date is alredy passed ";
    }
    else if(remaining < 0){
        timmer.style.color="red"
        document.getElementById("timmer").innerHTML = "Session Expired ";
    }
    else{
        timmer.style.color="brown"
        var day = Math.floor(remaining/(1000*60*60*24));
        var hours = Math.floor(remaining % (1000*60*60*24)/(1000*60*60)); 
        var min =  Math.floor(remaining %(1000*60*60)/(1000*60)) ;
        var sec =  Math.floor(remaining %(1000*60)/(1000)) ;
        var total = day +" day " +hours +" hours "+min+" minutes "+sec+" sec ";
        document.getElementById("timmer").innerHTML=total;
    }  
        
    }, 1000);
    
}
     
