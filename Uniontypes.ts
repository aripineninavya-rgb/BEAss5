// Union Types ( | means OR ) 

// Exercise 1:
type IDType = number | string;

function showID(id: IDType): void {
  console.log(`Your ID is: ${id}`);
}

showID(123);
showID("ABC-456");

// Exercise 2:
type Fruit = "apple" | "banana" | "orange";

function eatFruit(fruit: Fruit): void {
  console.log(`You ate an ${fruit}`);
}

eatFruit("apple");
eatFruit("orange");


// Exercise 3:
type Result = true | false;

function printResult(result: Result): void {
  if (result) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

printResult(true);
printResult(false);


// Interfaces and Type Aliases ( & means AND )

// Exercise 4:
interface Book {
  title: string;
  pages: number;
}

function describeBook(book: Book): void {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
}

describeBook({
  title: "TypeScript Basics",
  pages: 250,
});


// Exercise 5:
interface Teacher {
  name: string;
  subject: string;
}

interface Employee {
  id: number;
  email: string;
}

type SchoolTeacher = Teacher & Employee;

function printTeacherInfo(teacher: SchoolTeacher): void {
  console.log(
    `Name: ${teacher.name}, Subject: ${teacher.subject}, ID: ${teacher.id}, Email: ${teacher.email}`
  );
}

printTeacherInfo({
  name: "Ms. Smith",
  subject: "Math",
  id: 101,
  email: "ms.smith@school.com",
});


// Exercise 6:
interface Car {
  brand: string;
  year: number;
}

function printCar(car: Car): void {
  console.log(`Brand: ${car.brand} Year: ${car.year}`);
}

printCar({
  brand: "Tesla",
  year: 2024,
});
