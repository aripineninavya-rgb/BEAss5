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

// Exercise 1:
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


// Exercise 2:
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


// Exercise 3:
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


// Enums (fixed list of options) 

// Exercise 1:
enum Color {
  Red,
  Green,
  Blue
}

function showColor(color: Color): void {
  console.log(`You chose ${Color[color]}`);
}

// Test
showColor(Color.Red);
showColor(Color.Green);
showColor(Color.Blue);

// Exercise 2:
enum PizzaSize {
  Small,
  Medium,
  Large
}

function orderPizza(size: PizzaSize): void {
  console.log(`You ordered a ${PizzaSize[size]} pizza.`);
}

// Test
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);
orderPizza(PizzaSize.Large);

// Exercise 3:
enum Role {
  Admin,
  User,
  Guest
}

function printRole(role: Role): void {
  if (role === Role.Admin) {
    console.log("You have full access");
  } else if (role === Role.User) {
    console.log("You have limited access");
  } else {
    console.log("You have guest access");
  }
}

// Test
printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);



// Generics ( <T> means reusable placeholder ) 

// Exercise 7:
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Test
console.log(wrapInArray("cat")); // ["cat"]
console.log(wrapInArray(10));    // [10]

// Exercise 8:

function firstItem<T>(arr: T[]): T  | undefined{
  return arr[0];
}

// Test
console.log(firstItem([1, 2, 3]));       // 1
console.log(firstItem(["a", "b", "c"])); // "a"

// Exercise 9:
function swap<T>(a: T, b: T): T[] {
  return [b, a];
}

// Test
console.log(swap("hello", "world")); // ["world", "hello"]
console.log(swap(1, 2));             // [2, 1]
