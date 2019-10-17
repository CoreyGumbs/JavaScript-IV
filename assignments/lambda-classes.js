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
    
    prAssignement(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint chanllenge on ${subject}`);
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