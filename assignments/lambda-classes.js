// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super (instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super (studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        return (`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class PM extends Instructor {
    constructor(PMAttr) {
        super (PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(subject) {
        return (`Today we are learning about ${subject}`);
    }
    debugsCode(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}

/*-----------------------------------------------------people------------------------------------------------------*/

/*-------------------------instructors-----------------------------*/

const bert = new Instructor({
    name: 'Bert',
    location: 'Bertland',
    age: 745,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `c u on the flipside`
  });

const terb = new Instructor({
    name: 'Terb',
    location: 'Terbland',
    age: 547,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `nice to c u`
    });

/*-------------------------students-----------------------------*/

const jimmy = new Student({
    name: 'Jimmy',
    location: 'Stanton',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `uh`,
    previousBackground: 'sold paper',
    className: 'WEB20',
    favSubjects: ['HTML','CSS','JavaScript'],
  });

const mark = new Student({
    name: 'Mark',
    location: 'Texas',
    age: 3,
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `im only 3`,
    previousBackground: 'unborn baby',
    className: 'WEB24',
    favSubjects: ['C++','Assembly','Java'],
});

/*-------------------------Project Managers-----------------------------*/

const chicken = new PM({
    name: 'Chicken',
    location: 'USA',
    age: 15,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `cluck`,
    previousBackground: 'egg dweller',
    favSubjects: ['Java','CSS','JavaScript'],
    gradClassName: 'WEB7',
    favInstructor: 'Franky',
  });

const alfredo = new PM({
    name: 'Alfredo',
    location: 'Italy',
    age: 42,
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `im delicious`,
    previousBackground: 'Control Panel Technician Level 2',
    favSubjects: ['C++','C','JavaScript'],
    gradClassName: 'WEB.5',
    favInstructor: 'Cory',
});

console.log (alfredo.speak());
console.log (bert.demo('JavaScript'));
console.log (terb.grade(jimmy, 'HTML'));
console.log (mark.listsSubjects());
console.log (jimmy.PRAssignment('CSS'));
console.log (mark.sprintChallenge('Python'));
console.log (chicken.standUp('closure'));
console.log (alfredo.debugsCode(jimmy, 'JavaScript-IV'));

  
