// JAVASCRIPT LOGIC

// List of courses in memory
courses = [ 
  	{ name : "Java 101", category : "PROG", dateCreated : "1/1/2015", description : "Wow" },
  	{ name : "MongoDB 101", category : "DB", dateCreated : "2/1/2015", description : "Good" },
  	{ name : "Express 101", category : "PROG", dateCreated : "3/1/2015", description : "Better" }, 
  	{ name : "AngularJS 101", category : "WEB", dateCreated : "4/1/2015", description : "Best" }, 
  	{ name : "NodeJS 101", category : "PROG", dateCreated : "5/1/2015", description : "Awesome" }
];

// Takes the list of courses, and render them as table rows
function renderCourses(courses){
  
  // Clear courses.
  $(".course-list tbody").html(" ");

  // Iterate through courses
  for (var i = courses.length - 1; i >= 0; i--) {
    
    var tr = $("<tr>");

    // Select content to be placed in table
    var content = [courses[i].description, courses[i].category, courses[i].name];

    // Create table data cells
    for (var j = content.length - 1; k=j >= 0; k=j--) {
      tr.append($("<td>").append(content[j]));
    };

    // HTML for buttons (edit)
    var buttons = '<button type="button" class="btn btn-primary pull-right" onclick="editCourse(' + i + ')">';
    buttons += '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>';
    buttons += '</button>';

    // HTML for buttons (delete)
    buttons += '<button type="button" class="btn btn-danger pull-right" onclick="deleteCourse(' + i + ')">';
    buttons += '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
    buttons += '</button>';

    // Add EDIT buttons to table row
    tr.append($("<td>").append(buttons));

    $(".course-list").append(tr);
  }
};

function addCourse(course){
  courses.push(course);
  renderCourses();
};

function editCourse(id){
  $("#editModal").modal("show"); // Open edit modal
  
  // Update Save Function
  $("#editModal .save").click(function(){
    updateCourse(id) // Pass in ID
  }); 

  var course = courses[id];

  // Populate Form
  $("#editModalForm #name").val(course.name);
  $("#editModalForm #category").val(course.category);
  $("#editModalForm #description").val(course.description);
};

function updateCourse(id){
  var course = courses[id];

  courses.splice(id, 1);

  courses.push({
    name : $("#editModalForm #name").val(),
    category : $("#editModalForm #category").val(),
    description : $("#editModalForm #description").val(),
    modified : "NOW",
  });

  renderCourses(courses);
}

function deleteCourse(i){
  var selected = courses[i];
  if(confirm("Are you sure you want to delete " + selected.name + "?")){

    courses.splice(selectedId, 1);
    renderCourses(courses); 
  }
}

// @TODO - Fix localStorage JSON retrieval.
function save(){
  localStorage.setItem("courses", JSON.stringify(courses));
  console.log("\nCourses Saved to Local Storage: ");
  console.log(JSON.parse(localStorage["courses"]));
}

$(function () {

  // Initialize Data onto Page
  renderCourses(courses);

  // @TODO - Finish localStorage support
  // if (localStorage.getItem("courses")){
  //   courses = JSON.parse(localStorage["courses"]);
  //   console.log(courses)
  // }
});
