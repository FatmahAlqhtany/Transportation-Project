class Vehicle {
    constructor(name,manafacturer,id) {
      this.name = name;
      this.manafacturer = manafacturer;
      this.id = id;
    }
  }
   class Car extends Vehicle {
    constructor(name, manafacturer, id, car_type) {
      super(name, manafacturer, id);
      this.car_type = car_type;
    }
  }
   class Airplane extends Vehicle {
    constructor(name, manafacturer, id, aircraft_type) {
      super(name, manafacturer, id);
      this.aircraft_type = aircraft_type;
    }
  }
   class Employee {
    constructor(name,id,dob) {
      this.name = name;
      this.id = id;
      this.dob = dob;
    }
  }
   class Driver extends Employee {
    constructor(name, id, dob, driver_license) {
      super(name, id, dob);
      this.driver_license = driver_license;
    }
  }
   class Flyer extends Employee {
    constructor(name, id, dob, flyer_license) {
      super(name, id, dob);
      this.flyer_license = flyer_license;
    }
  }
   class Booking {
      constructor(reservation_date, employee_id, vehicle_id, reservation_id) {
        this.reservation_date = reservation_date;
        this.employee_id = employee_id;
        this.vehicle_id = vehicle_id;
        this.resrvation_id = reservation_id;      
    }
  }
 let Booking_Array = new Array ()
 let book1 = new Booking('01-04-2021',1,2,2321)
 Booking_Array.push(book1)
  let reserved ;
 let driver_array = Array()
 let driver1 = new Driver('Fatma',1,'01-02-1994',1217)
   driver_array.push(driver1)
  let driver2 = new Driver('Abdulaziz',2,'04-06-1995',1516)
   driver_array.push(driver2)
   let driver3 = new Driver('Ghada',3,'05-02-1996',1872)
driver_array.push(driver3)
 let flyer_array = Array()
  let flyer1 = new Flyer('Ali',4,'22-09-1960',1625)
  flyer_array.push(flyer1)
 let flyer2 = new Flyer('Sara',5,'18-06-1983',1790)
  flyer_array.push(flyer2)
  let car_array = Array()
  let car1 = new Car('Mustang','Ford',1,'gas')
  car_array.push(car1)
  let car2 = new Car('A3','Audi',2,'gas')
  car_array.push(car2)
  let car3 = new Car('F5','Mercedes',3,'electric')
  car_array.push(car3)
 
  let airplane1 = new Airplane('Rocke','Adbuser',4,'passenger')
 
  let airplane2 = new Airplane('Jumbo','Adbuser',5,'cargo')
 
  let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  function myFunction(vehicle_id, employee_id) {
    let driver=0
    let car=0
    for (let j in driver_array)
      {
        if (driver_array[j].id==employee_id)
        {
          driver=1
        }
      }
    for (let j in car_array)
      {
        if (car_array[j].id==vehicle_id)
        {
          car=1
        }
      }
    if (car==1 && driver==1)
    {
      console.log('Driver and car Match')
     }
      if (car==0 && driver==1)
    {
      console.log('Driver and airplane. Not Match')
     }
      if (car==0 && driver==0)
    {
    console.log('Flyer and airplane. Match')
    reserved = new Booking(date,employee_id,vehicle_id,123);
    reserved = new Booking(date,employee_id,vehicle_id,323);
    Booking_Array.push(reserved);
     }
      if (car==1 && driver==0)
    {
      console.log('Flyer and car. Not Match')
     }
  }
  myFunction(5, 5);
  const print = Booking_Array.map(function(curruntValue){
      return curruntValue ;
  })
  console.log(print);
