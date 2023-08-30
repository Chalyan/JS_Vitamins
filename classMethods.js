class Human {
    
    constructor(name, surname, yearOfBorn, gender) {
        this.name = name;
        this.surname = surname;
        this.yearOfBorn = yearOfBorn;
        this.gender = gender;
    }

    printFullInfo = () => {
        return String(this.name + " " + 
            this.surname + " " + 
            this.yearOfBorn + " " + 
            this.gender);
    }
}

const aHuman = new Human("Gor", "Chalyan", 2001, "Male");
console.log(aHuman.printFullInfo())
