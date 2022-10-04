const addBtn = $("#addExperienceBtn");
const educationBtn = $("#addEducationBtn");
const projectsBtn = $('#addProjectsBtn');
const uploadBtn = $(".btn");
const experience = $(".experience");
const education = $(".education");
const projects = $(".projects");
let count = 1;

addBtn.on("click", function () {
  console.log("it clicks");
  experience.append(
    $("<div>")
      .addClass("mb-3")
      .append(
        $("<label>")
          .attr("for", `experienceText${count}`)
          .addClass("form-label")
          .text("Experience:")
      )
      .append(
        $("<h5>")
          .text("Job Title")
      )
      .append(
        $('<input>')
          .addClass('form-control')
          .attr('type' , 'text')
          .attr('placeholder' , 'Job Title')
          .attr('id' , `experienceText${count}`)
      )
      .append(
        $("<h5>")
          .text("Company Name")
      )
      .append(
        $('<input>')
          .addClass('form-control')
          .attr('type' , 'text')
          .attr('placeholder' , 'Company Name')
          .attr('id' , `experienceText${count}`)
      )
      .append(
        $("<h5>")
          .text("Start Date")
      )
      .append(
        $('<input>')
          .addClass('form-control')
          .attr('type' , 'text')
          .attr('placeholder' , 'Start Date')
          .attr('id' , `experienceText${count}`)
      )
      .append(
        $("<h5>")
          .text("End Date")
      )
      .append(
        $('<input>')
          .addClass('form-control')
          .attr('type' , 'text')
          .attr('placeholder' , 'End Date or Current')
          .attr('id' , `experienceText${count}`)
      )
      .append(
        $("<textarea>")
          .addClass("form-control")
          .attr("rows", "3")
          .attr('placeholder' , 'Description')
          .attr("id", `experienceText${count}`)
      )
  );
  count++;
});


educationBtn.on("click", function () {
    console.log("it clicks");
    education.append(
      $("<div>")
        .addClass("mb-3")
        .append(
          $("<label>")
            .attr("for", `educationText${count}`)
            .addClass("form-label")
            .text("Education:")
        )
        .append(
          $("<h5>")
            .text("School Name")
        )
        .append(
          $('<input>')
            .addClass('form-control')
            .attr('type' , 'text')
            .attr('placeholder' , 'School Name')
            .attr('id' , `educationText${count}`)
        )
        .append(
          $("<h5>")
            .text("Start Date")
        )
        .append(
          $('<input>')
            .addClass('form-control')
            .attr('type' , 'text')
            .attr('placeholder' , 'Start Date')
            .attr('id' , `educationText${count}`)
        )
        .append(
          $("<h5>")
            .text("End Date")
        )
        .append(
          $('<input>')
            .addClass('form-control')
            .attr('type' , 'text')
            .attr('placeholder' , 'End Date')
            .attr('id' , `educationText${count}`)
        )
        .append(
          $("<h5>")
            .text("Degree")
        )
        .append(
          $('<input>')
            .addClass('form-control')
            .attr('type' , 'text')
            .attr('placeholder' , 'Degree')
            .attr('id' , `educationText${count}`)
        )
    );
    count++;
  });

  // projectsBtn.on("click", function () {
  //   console.log("it clicks");
  //   projects.append(
  //     $("<div>")
  //       .addClass("mb-3")
  //       .append(
  //         $("<label>")
  //           .attr("for", `projectsText${count}`)
  //           .addClass("form-label")
  //           .text("Projects")
  //       )
  //       .append(
  //         $("<textarea>")
  //           .addClass("form-control")
  //           .attr("rows", "3")
  //           .attr("id", `projectsText${count}`)
  //       )
  //   );
  //   count++;
  // });

// this section is my section camille :D


const templateUrls = [
  {
    id: "temp1",
    url: "images/cy-resume-template.png"
  },
  {
    id: "temp2",
    url: "images/sb-resume-template.png"
  },
  {
    id: "temp3",
    url: "images/cu-resume-template.jpg"
  }
]
//grab images-container with queryselector.all 
// add event listener to the ul 
// if event . taget = li, then 
// images-container.filter 
// if the event . taret . = "id" match then select display
const imagesContainer= $('.images-container')

$('ul').on("click", "button", (e) => {
 
    const activeTemplateUrl = templateUrls.filter(template => {
      return template.id === e.target.id
    })
    imagesContainer.empty()
    imagesContainer.append($('<img>').attr('src', activeTemplateUrl[0].url 
    ))
    // create image tag with jquest and add src attr with template.url
  } 
)

const logout = async () => {
  const response = await fetch('api/users/logout', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out.');
  }
};

if(document.location.pathname !== '/login') {
  document.querySelector('#logoutBtn').addEventListener('click', logout);
}


// keep track of user
//select resume / through button 
