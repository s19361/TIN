function Student(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades=grades;

}
Object.defineProperty(Student.prototype, 'FullName', {
    get: function() { return this.firstName + " " + this.lastName ; },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
        }
});
Object.defineProperty(Student.prototype, 'AverageGrade', {
    get: function() { return this.grades.reduce((a,b) => a + b)/this.grades.length ; }
});

var student1 = new Student("Ulas" ,"Tezgor" ,"s19361",[90,95,100]);
console.log(student1.FullName);
student1.FullName="Ali Murat";
console.log(student1.FullName);
console.log(student1.AverageGrade);