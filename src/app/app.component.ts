import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Direction } from './direction';

import { Employee } from './employee';
import { MessageService } from './message.service';
import { Num } from './num';
import { PersonService } from './person.service';
import { StudentClass } from './studentclass';

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'], //giving multiple css file, last one will override, left to right

  preserveWhitespaces: true, //Put comma above at end of styleUrls

  //viewProviders: [Employee, Abc], //07 Feb , if we give Class here inside viewProviders then it will be load only when that component called

  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
 

  title='myapp';

  constructor()
  {

  }

  ngOnInit()
  {
    this.numberMethod();
    this.stringMethod();
    this.booleanMethod();
    this.voidMethod();
    this.anyMethod();
    this.arrayMethod();
    this.tuppleMethod();
  }

  numberMethod()
  {
    console.log("\n");

    //3 ways to define the variables in Typescript
    let first:number=123;
    let second = 100;
    let third:number;
    third = 500;


    //first="Ajeet"; //Error

    // console.log("first="+first);

    second=102;
    third=900;
    console.log(`From numberMethod() second = ${second}`);
    console.log(`From numberMethod() third = ${third}`);
    

  }

  stringMethod()
  {
    console.log("\n");

    let name1:string="Amar"; 
    let name2="Chandan";
    let name3:string;
    name3="Pawan";

    // name1=123;  //Error
    // name2=333;   //Error
    // name3=789;   //Error

     let empName = "ABC Kumar";
     let deptName = "Software Development";

    //Before ES6

    console.log("From stringMethod() " + empName + " works in the "+deptName+" department");

    //ES6

    console.log(`From stringMethod() ES6 technique ${empName} works in the ${deptName} department`);

  }

  booleanMethod()
  {
  //  let isShow=true;
  //  let isDone:boolean = false;
  //  let isHide : boolean;
  //  isHide = true;

  //  // isShow=323; //will give error
  //  isShow=false;
   
  }


  voidMethod()
  {
    console.log("\n");
    let name;
    console.log(`From voidMethod() name =  ${name}`); //this will give undefined.
    
    let name1:undefined;
    console.log(`From voidMethod() name1 =  ${name1}`); //this will give undefined.

    let name2:any;
    console.log(`From voidMethod() name2 =  ${name2}`);//this will give undefined.

    // name=223;
    // name="AJT";
    // name=true;

    // let name:undefined;
    // name=2212;   //this will give undefined.
    // name="AJT";       //this will give undefined.
    // name=true;     //this will give undefined.
 
    // let studentDetails:StudentClass;

    // studentDetails.name="ae";

     let nameNull:null;

     console.log(`From voidMethod() nameNull =  ${nameNull}`);
     console.log(`From voidMethod() nameNull =  ${typeof nameNull}`);

     let stu = null; //For putting object.

     console.log(`From voidMethod() type of null i.e stu = ${typeof stu}`);
     



    // nameNull=123;    //this will give undefined.

    // nameNull="ajeet";   //this will give undefined.

    let firstName="Ajeet";
    let lastName="";

    console.log(`From voidMethod() firstName = ${firstName}`);
     console.log(`From voidMethod() space = ${lastName}`); //this will give space

    // let lastName=null;
   // lastName=78855; //Error

    // lastName="WE";

    //lastName=true; //Error

    // console.log(lastName); 

   //let studentN:string=null;

   //console.log(studentN); //give null

   //let studentSpace:string="";
   //console.log(studentSpace); //give space

  //  let studentObj : Object = null;
  //  console.log(studentObj); // give null

  // let aa=null;
  // let bb=null;

  // if(aa == bb) //Give Equal true , it checks value only.
  // {
  //   console.log("Equal true");
  // }
  // else
  // { 
  //   console.log("Not equal");
  // }


  // let aa=null;
  // let bb=null;

  // if(aa === bb) //Give true , 
  // {
  //   console.log("true");
  // }
  // else
  // { 
  //   console.log("false");
  // }

  }

  anyMethod()
  {
    console.log("\n");
    console.log("From anyMethod()");
    
    let aa=123;
    let bb=123;

    if(aa==bb) //Give true
    {
       console.log("true");
    }
    else
    {
      console.log("false");
    }

    // let aa:any=123;
    // let bb:any="123";

    // if(aa===bb) //Give false  === check type
    // {
    //   console.log("True");
      
    // }
    // else
    // {
    //   console.log("False");
    // }

    // console.log(typeof aa);
    // console.log(typeof bb);

    let a:any;
    // console.log(a);

    // console.log(typeof a);  //Give undefined

    a=111;
    a=true;
    a="AERE";
    a={id:1133,name:"Chandan"};

  }

  arrayMethod()
  {
    console.log("\n");
    console.log("From arrayMethod()");
    
    let list:number[]=[1,2,3,4,5,6];
    console.log(list);
    console.log("Array length = "+list.length);

    console.log("\n");
    let listA:Array<number>=[11,22,33,44,55];
    console.log(listA);
    console.log(listA.length);

   // let listMix : number[]=[1,2,3,4,"Ajeet"]; //Error
    console.log("\n");
    let liststr:string[]=["Ajeet","Chandan"];
    console.log(liststr);
    console.log(liststr.length);

    console.log("\n");
    let listany:any[]=["AAA","CCC",122,true];
    console.log(listany);
    //listany="aee"; //error

    //Syntax;

    console.log("\n");
    let listArrayAny:Array<any> = [1,2,3,4,32,"KL",true];

    console.log(listArrayAny);
    console.log(listArrayAny.length);

    //Array of Arrays
    console.log("\n");
    console.log("Array of Arrays");
    
    let listArr:Array<any>[] =[[1,44,55,"ajjet",true]];

    console.log(listArr);
    console.log(listArr.length);

  }


  tuppleMethod() {
    console.log("\n");
    
    let employee: [number, string] = [101, "Ajeet"];
    console.log("From tuppleMethod() tuple example");
    console.log(employee);
    console.log("\n");
    

    let empId: number = 501;
    let empName: string = "Chandan";
        let employee1: [number, string] = [empId, empName];
        console.log(employee1);
        console.log(employee1[0]);
        console.log(employee1[1]);


    console.log("\n");
    employee.push(601,"Ajay");
    employee.push(701);
  //  employee.push(true); //ERROR

    console.log(employee);


    // //let employee: [number, string,boolean] = [501, "Chandan"];
    // let employee: [number, string,boolean] = [501, "Chandan",true];

    //  employee.push(601,"Ajeet");
    //  employee.push(701);
    //  employee.push(true);

    //  //employee = [501,true];
    //  employee = [501,"Pawan",true,];

    // console.log(employee);

 //Array of tuple
    console.log("\n");
    console.log("Array of Tuple Example");
    let person : [number,string][];
    person = [[101,"ajeet"],[201,"Chandan"]];
    console.log(person);


    // let person: [number, string][];
    // person = [[101, "ajeet"], [201, "Chandan"]];
    // person[1][1] = "Cahndan Singh";
    // console.log(person);


  }

  }















