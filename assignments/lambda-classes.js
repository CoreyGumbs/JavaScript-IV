// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs){
        this.name = personAttrs.name,
        this.age = personAttrs.age,
        this.location = personAttrs.location
    }

    speak(){
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${subject}`);
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
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
        this.favSubjects.map(subject => {console.log(`This is one of my favorite subjects: ${subject}`)});
        return this.favSubjects.map(subject => `This is one of my favorite subjects: ${subject}`);
    }
}