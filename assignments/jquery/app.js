
/**********************
    Init Content
 **********************/

$(function () {

  // Initialize Data onto Page
  renderCourses();
});


// List of courses in memory
courses = [ 
  	{ name : "Java 101", category : "PROG", dateCreated : "1/1/2015", description : "Wow" },
  	{ name : "MongoDB 101", category : "DB", dateCreated : "2/1/2015", description : "Good" },
  	{ name : "Express 101", category : "PROG", dateCreated : "3/1/2015", description : "Better" }, 
  	{ name : "AngularJS 101", category : "WEB", dateCreated : "4/1/2015", description : "Best" }, 
  	{ name : "NodeJS 101", category : "PROG", dateCreated : "5/1/2015", description : "Awesome" }
];

// No courses are currently selected.
var selectedCourseId = -1;

// Takes the list of courses, and render them as table rows
function renderCourses(){
  
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

    // Add content to page
    $(".course-list").append(tr);
  }
};

/**********************
   Editing Courses
 **********************/

// Open Modal for Adding a Course
function addCourse(){
  selectedCourseId = -1;

  // Clear Form
  $("#editModalForm .name").val("");
  $("#editModalForm .category").val("");
  $("#editModalForm .description").val("");

  // Place date as default value in datepicker
  var today = todaysDate();
  $('#editModalForm .dateCreated').val(today);

  // Update modal title
  $(".modal-title").text("Create New Course");

  // Show modal
  $("#editModal").modal("show");
};

// Open Modal for Editing a Course
function editCourse(id){
  selectedCourseId = id;

  // Course to be edited
  var course = courses[id];

  // Populate Form
  $("#editModalForm .name").val(course.name);
  $("#editModalForm .category").val(course.category);
  $("#editModalForm .dateCreated").val(new Date(course.dateCreated));
  $("#editModalForm .description").val(course.description);

  // Update modal title
  $(".modal-title").text("Edit an Existing Course");

  // Show modal
  $("#editModal").modal("show");
};

// Saved a NEW or EDITED course
function saveCourse(){
  var id = selectedCourseId;

  var course = {
      name : $("#editModalForm .name").val(),
      category : $("#editModalForm .category").val(),
      modified : $("#editModalForm .dateCreated").val(),
      description : $("#editModalForm .description").val(),
  }

  // Update existing course.
  // With an id greater than -1, we know
  // that we were editing an existng course.
  if (id > -1){

    // Save updated values
    courses[id] = course;

  // Create new course.
  // With an id of -1, we know that this course
  // does not exist yet, and we can add it to the list.
  } else {

    // Add new course
    courses.push(course);
  }

  // Close modal
  $("#editModal").modal("hide"); 

  // Update content
  renderCourses();
}

function deleteCourse(id){
  var selected = courses[id];

  // Use confirm() dialog
  if(confirm("Are you sure you want to delete " + selected.name + "?")){
    courses.splice(id, 1);
    renderCourses(); 
  }
}

// Generate today's date
// http://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today
function todaysDate(){
  var now = new Date();
  var month = (now.getMonth() + 1);               
  var day = now.getDate();

  if(month < 10) 
      month = "0" + month;
  if(day < 10) 
      day = "0" + day;

  return now.getFullYear() + '-' + month + '-' + day;
}

// @TODO - Fix localStorage JSON retrieval.
function save(){
  localStorage.setItem("courses", JSON.stringify(courses));
  console.log("\nCourses Saved to Local Storage: ");
  console.log(JSON.parse(localStorage["courses"]));
}