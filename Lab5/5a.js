var person ={name : "Ulas", //object initializer
             surname : "Tezgor" ,
             yearOfbirth : 1998,
             "s" : 19361,
             5: 6 ,
             sayHello : function(){
                console.log("hello!");
             } ,
             age : function(){
                 return new Date().getFullYear()-this.yearOfbirth;
             }

            };

function introduceYourself(object){  
    for (const i in object) {
        console.log(i +" value:" + object[i] + "\ntype:" + typeof object[i] + "\n");
    }
    
}  

introduceYourself(person);  

//console.log(person.age());
//person.sayHello();