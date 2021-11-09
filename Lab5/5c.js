const pstudent = {
    firstName: "",
    lastName: "",
    id: "",
    subjects: ["Chemistry", "Biology", "Physics","Math"],
  };
  
  function createStudent(firstName, lastName,id) {
    let newstudent = Object.create(pstudent);
    newstudent.firstName = firstName;
    newstudent.lastName = lastName;
    newstudent.id = id;
  
    return newstudent;
  }
  
  var student= createStudent("Ulas","Tezgor","s19361");
  
  console.log(student);
  console.log(student.subjects);