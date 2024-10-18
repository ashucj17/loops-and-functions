let person = {
  nsme: "Ashish Kumar",
  age: 29,
  email: "ashucj17@gmail.com",
  isSubscribed: false,
  hobbies: ["Bike Riding", "Mobile Gaming", "Gymming"],
  address: {
    city: "Kanpur",
    State: "Uttar Pradesh",
    Country: "India",
  },
};
console.log(JSON.stringify(person));
let newObj = JSON.stringify(person);
console.log(JSON.parse(newObj));
