// const arr = [12,13,14,15]; 
// const arr_2=[16,17,18,19];
// const add = arr.concat(arr_2);
// arr.pop();
// arr.push(16);
// arr.forEach(elem=>{
//     console.log(elem);  
// }); 

// user define array

// const arr = [];
// var x  = 0;
// function func() {        
//         var z = document.getElementById("acc");
//         x = z.value;
//         if(x.length==0){
//                 alert("wrong ");
//         } 
//         else{
//                 z.value="";
//                 arr.push(x);
//         }
// } 

// function show() {
//         arr.forEach(elem=>{ 
//                 console.log(elem); 
//                 document.write(elem + "<br>");
//         })              
        
// }

// 2d array 

// let arr = [
//         ["apple",2],
//         ["ram ",4],
//         ["ball",6]
// ];   
// console.table(arr);
// for(let i=0; i<1; i++){
//         for(let j=0; j<3; j++){
//                 console.log(arr[j]);
//         }
// }


// let arr = [1,2,3,4] 
// let arr_2 =arr.slice(0,2) 
// console.log(arr_2);
    

// 0 to n-1 
// arr.foreach(elem=>{

// })
// 0 - 12-1 []



// string

// let txt ="apple"
// let b = txt.toUpperCase();
// console.log(b);


// text fixer 

// lower case  
var  x = document.getElementById("lower"); 
var up = document.getElementById("upper");
var clear = document.getElementById("clear");
var cap = document.getElementById("cap");

x.onclick = (val)=>{
        var val = document.getElementById("txt").value;
        var z = val.toLowerCase();
        document.getElementById("otp").innerHTML=z ;
}

// upper case 
up.onclick= ()=>{
        var val = document.getElementById("txt").value;
        var z= val.toUpperCase();
        document.getElementById("otp").innerHTML=z ; 
        
}

// count function 
function count(){
        document.addEventListener('keyup',(p)=>{
                var val = document.getElementById("txt").value;
                document.getElementById("count").innerHTML=val.length;

                // word count               

                var count =0;
                for(i=0;i<val.length;i++){
                        // var chari= val.charAt(i); 
                        // var chari_1 = val.charAt(i+1);

                        var c = val.charAt(i); 
                        var chr = val.charAt(i+1);

                        if(c==" " && chr!= ' '){
                                count = count+1;
                        }
                }
 
                document.getElementById("w_count").innerHTML=count;
        }) 
}

// clear function 
clear.onclick= ()=>{
        var txt = document.getElementById("txt"); 
        var otp = document.getElementById("otp")
        if(txt.value.length == ""){
                alert("text area is already cleared ")
        }

        else{
              txt.value='';  
        }

        
}

// capitalize
cap.onclick = ()=>{
        var val = document.getElementById("txt").value;
        var str = val.split(" ");
        console.log(str); 
        
        for(i=0; i<str.length; i++){
                console.log( str[i][0]);
                str[i] = str[i][0].toUpperCase()+str[i].substring(1);
                
        }
        var output= str.join(" ");
        document.getElementById("otp").innerHTML=output ; 
}






// var check = "ishfisdyhsdihsigii8rfgegweugfuwewegfweufg"

        // for(i=0; i<val.length;i++){
                // if(val.charAt(i)===check){
                //var cap = val.charAt(0).toUpperCase
// }
// }




//count =0; 
// val = this is pankaj
// length of val = 3 (0,1,2)
// i=0; 0<3; i++  (true)
// c =s
// chr =" "
// count = count+1 || count += 1 || count++;






// count word  with space using split function 
// var count=0;
                // var spl = val.split(' ');
         
                //  for (i=0;i<spl.length; i++){
                //   if(spl[i] != " "){
                //         count+=1;
                //         }
                //  }
                // document.getElementById("w_count").innerHTML=count-1;

// val =this 0
//      is   1
// count = 0,1,2;
// spl = 2 (0,1)  
// i=2; 2<2; i++; //false
// 
// count = print  
// arr[i]


// var spl = val.split("");
//         console.log(spl);
//         for(i=0; i<spl.length; i++){
//                   spl = spl[0].charAt(0).toUpperCase()+spl.slice(1);
        
//         }
//         console.log(spl);




// git init
//  git add . // files github read 
//  git commit -m "initial commit "
