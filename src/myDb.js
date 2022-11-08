const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/jsbook', ()=> console.log("Jestem połączony"));
const Person = mongoose.model("Person", {
  name: {
    type: String,
    required: [true, 'Pole name jest wymagane']
  },
  age: {
    type: Number,
    required: [true, "Pole wiek jest wymagane"]
  },
  admin: Boolean
})

async function main() {
  const result = await Person.find({});
  console.log(result);
  // const dan = new Person({
  //   name: "Gienek",
  //   age: 24,
  //   admin: true
  // })
  try {
    await dan.save()
  } catch(e) {
    for(const key in e.errors) {
      console.log(e.message)
    }
  }
}
main();