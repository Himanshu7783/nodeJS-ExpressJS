    // ** Normal object creater function **
            //   FIRST WAY
// const  stu1 = {
//     name:"adam",
//     marks:95,
//     age:25,

//     getmarks: function(){
//         return this.marks;
//     },
// };

// const  stu2 = {
//     name:"aman",
//     marks:90,
//     age:22,

//     getmarks: function(){
//         return this.marks;
//     },
// };

// const  stu3 = {
//     name:"Amrish",
//     marks:85,
//     age:19,

//     getmarks: function(){
//         return this.marks;
//     },
// };
      
            //    SECOND WAY
    //    ## like factory function creation ##
    // function personmaker(name, age){
    //     const person={
    //         name : name,
    //         age : age,
    //         talk(){
    //             console.log(`Hi, my name is ${this.name}`);
    //         },
    //     };
    //     return person;
    // }
       
            // THIRD WAY

    //    *** new operator  create function ***

      // Constructors - doesn't return anything & start with capital

    //   function Person (name, age){
    //     this.name=name;
    //     this.age = age;
    //     console.log(this);

    //   }

    //      Person.prototype.talk = function(){
    //     console.log(`Hi, my name is ${this.name}`);
    //    };

    //    let p1 = new Person("adam, 25");
    //    let p2= new Person("eve", 25);


        //   FOURTH WAY CLASSES

        //    class person{
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //       talk(){
        //         console.log(`Hi, my name is ${this.name}`);
        //       }
        //    }

        //    let p1 = new person("adam, 25");
        //    let p2= new person("eve", 25);



        // **  Inheritance in js  fifth way **

          class Person{
            constructor(name, age){
                console.log("person class constructor");
                this.name = name;
                this.age = age;
            }
              talk(){
                console.log(`Hi, I am ${this.name}`)
              }
          }

            class Student extends Person{
                constructor(name, age, marks){
                    console.log("student class constructor");
                    super(name, age);//parent class constructor is being called
                    this.marks = marks;
                }
            }

              class teacher extends Person{
                constructor(name, age, subject){
                    super(name, age);//parent class constructor is being called
                    this.subject = subject;
                }
              }