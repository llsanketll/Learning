/*      Destructing Assignment Operator*/


    //normal object decleration
    const obj = { 
        a: 1,
        b: 2,
        c: 3,
        e : 5
    }
    cost{a,b,c,d,e} = obj; 
    ({a,b,,c,e}= obj);
    //print variables
    console.log(a);
    console.log(d);// Undefined