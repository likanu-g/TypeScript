function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

interface Person {
  firstName: string;
  lastName: string;
}

function greeter1(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter1(user1);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
