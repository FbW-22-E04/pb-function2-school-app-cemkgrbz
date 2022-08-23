const school=[
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },

    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },
    {
      name: "FbW3",
      students: [],
    },
  ]

  //Create a class

  function createClass(school, newClass) {
    school.push(newClass);
    console.log(school)
  }

  const newClass4 = {
    name: "FbW4",
    students: [
      {
        name: "Tom",
        email: "tom@yahoo.com",
        city: "Leipzig",
      },
      {
        name: "Jonas",
        email: "jonas@yahoo.com",
        city: "Leipzig",
      },
    ]
  };

  createClass(school, newClass4)

  console.log("-----------------")

  //Create student

  function createStudent(school, id, newStudent) {
    school[id].students.push(newStudent);
    console.log(school)
  }

  const newStudent2 = {
    name: "Daisy",
    email: "daisy@yahoo.com",
    city: "Stuttgart",
  }

  const newStudent3 = {
      name: "Reno",
      email: "reno@yahoo.com",
      city: "Paris",
  }

  const newStudent4 = {
    name: "Reno",
    email: "reno@yahoo.com",
    city: "Paris",
}

  createStudent(school, 3, newStudent2)
  createStudent(school, 2, newStudent3)
  createStudent(school, 2, newStudent4)

  console.log(school[2])

  console.log("-----------------")

  //Remove class

  function removeClass(school, id) {
    delete school[id]

    console.log(school)
  }

  removeClass(school, 3);
  console.log("-----------------")
  //Remove students

  function removeStudents(school, classID, studentID) {
    delete school[classID].students[studentID]
    console.log(school)
  }

  removeStudents(school, 0, 0)
  console.log("-----------------")

  //Edit students

  function editStudent(school, classID, studentID, newName, newEmail, newCity){
    Object.keys(school[classID].students[studentID].name = newName,
                school[classID].students[studentID].email = newEmail,
                school[classID].students[studentID].city = newCity,);
    console.log(school);
  }

  editStudent(school, 0, 1, "ali", "ali@gmail.com", "London")
console.log(school[0])

//Render Template

// function renderSchoolTemplate(school, classID, studentID)