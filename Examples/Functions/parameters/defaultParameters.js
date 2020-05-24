function lamsalPerson(firstName, YOB, nationality='Nepal', lastName = 'lamsal'){
    this.firstName = firstName;
    this.lastName = lastName;// Default to  Lamsal if not provided
    this.YOB = YOB;
    this.nationality = nationality; //defalut to Nepal if not provided
}

var l1 = new lamsalPerson('Sanket', 2000);