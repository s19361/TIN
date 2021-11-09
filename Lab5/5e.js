class Student{ 
    constructor(first, last, id, grades){
        this.firstName = first;
        this.lastName = last;
        this.id = id;
        this.grades=grades;
    }

    get fullname(){
        return this.firstName + " " + this.lastName ;
    }
    set fullname(name){
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
    get averageGrade(){
        return this.grades.reduce((a,b) => a + b)/this.grades.length ;
    }
}


var student1 = new Student("Ulas" ,"Tezgor" ,"s19361",[90,95,100]);
console.log(student1.fullname);
console.log(student1.averageGrade);