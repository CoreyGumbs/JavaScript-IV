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