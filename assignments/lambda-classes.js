// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs){
        this.name = personAttrs.name,
        this.age = personAttrs.age,
        this.location = personAttrs.location
    }

    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty,
        this.favLanguage = instructorAttrs.favLanguage,
        this.catchPhrase = instructorAttrs.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground =  studentAttrs.previousBackground,
        this.className =  studentAttrs.className,
        this.favSubjects = studentAttrs.favSubjects
    }

    listSubjects(){
        return this.favSubjects.forEach(subject => `This is one of my favorite subjects: ${subject}`);
    }
    
    prAssignement(subject){
   
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        //console.log(`${this.name} has begun sprint chanllenge on ${subject}`);
        return `${this.name} has begun sprint chanllenge on ${subject}`;
    }
}


class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName,
        this.favInstructor = pmAttrs.favInstructor
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel study times!`);
        return `${this.name} announces to ${channel}, @channel study times!`;
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

//Instances

const person1 = new Person({
    name: 'Corey',
    age: 42,
    location: 'NYC'
})


const instructor1 = new Instructor({
    name: 'John Smith',
    age: '32',
    location: 'Silicon Valley',
    specialty: 'OOP',
    favLanguage: 'Python',
    catchPhrase: 'Yippy Kai Yay....'
})


 const student1 = new Student({
     name: "Mike",
     age: '23',
     location: 'Florida',
     previousBackground: 'unemployed',
     className: 'Web25',
     favSubjects: ['HTML', 'CSS', 'JS', 'React']
 })


//Conle.log
//Person
console.log(person1.name, person1.age, person1.location);
console.log(person1.speak());

//Instructor
console.log(instructor1);
console.log(instructor1.demo('data structures'));

//Student
console.log(student1);
console.log(student1.listSubjects());
console.log(student1.prAssignement(student1.favSubjects[2]));