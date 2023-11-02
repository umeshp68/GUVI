//JSON FORMAT
{
    "name": "umesh",
    "age": 25,
    "hobbies": ["reading", "travelling", "swimming"],
    "address": {
        "street": "kk nagar",
        "city": "tirupur",
        "zipcode": "641604"
    }
}
let data = {
  "name": "umesh",
  "age": 25,
  "hobbies": ["reading", "travelling", "swimming"],
  "address": {
      "street": "kk nagar",
      "city": "tirupur",
      "zipcode": "641604"
  }
};

//FOR IN
for (let key in data) {
    if (typeof data[key] === 'object' && data[key] !== null) {
        console.log(key + ": " + JSON.stringify(data[key], null, 2)); // we are using JSON.stringify for nested object data access
    } else {
        console.log(key + ": " + data[key]);
    }
}

//FOR EACH
data.hobbies.forEach(function(hobby) {
    console.log(hobby);
});
//FOR
for (let i = 0; i < data.hobbies.length; i++) {
    console.log(data.hobbies[i]);
}
//FOR OF
for (let hobby of data.hobbies) {
    console.log(hobby);
}



//resume in JSON format
{
    "name": "umesh",
    "age": 25,
    "address": "tirupur",
    "skills": [
      "js",
      "mern",
      "css",
      "html"
    ],
    "education": {
      "degree": "B.E.",
      "specialization": "Mechatronics"
    },
    "currentProfession": "Banker"
  }