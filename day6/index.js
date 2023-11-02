class UberPricing {
    constructor(basePrice, pricePerKm, pricePerMinute) {
      this.basePrice = basePrice;
      this.pricePerKm = pricePerKm;
      this.pricePerMinute = pricePerMinute;
    }
  
       calculatePrice(km, minutes) {
      return this.basePrice + (this.pricePerKm * km) + (this.pricePerMinute * minutes);
    }
  }
  

  
  const uber = new UberPricing(100, 8, 5);  
  
  let distanceInKm = 5;
  let timeInMinutes = 10;
  
  console.log(`The price for your Uber ride is: Rs ${uber.calculatePrice(distanceInKm, timeInMinutes)}`);

//second question
  class Person {
    constructor(name, age, email, address) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.address = address;
    }
  
      displayInfo() {
      return (`Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}\nAddress: ${this.address}`);
    }
  }
  
   
  const umesh = new Person('umesh', 25, 'umeshkec364@gmail.com', 'Nagercoil');
  
  console.log(umesh.displayInfo());
