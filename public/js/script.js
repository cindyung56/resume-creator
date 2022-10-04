const addBtn = $("#addExperienceBtn");
const educationBtn = $("#addEducationBtn");
const projectsBtn = $('#addProjectsBtn');
const referencesBtn = $('#addReferencesBtn');
const skillsBtn = $('#addSkillsBtn');
const uploadBtn = $(".btn");

const experience = $(".experience");
const education = $(".education");
const projects = $(".projects");
const references = $(".references");
const skills = $(".skills");

const tempDis1 = $("#temp1");
const templateC = $('#cindys-template');
let count = 1;
const createButton = $("#createButton");



addBtn.on("click", function () {
  // console.log("it clicks");
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
    // console.log("it clicks");
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

referencesBtn.on("click", function () {
  references.append(
    $('<div>')
      .addClass("mb-3")
      .append(
        $("<h5>").text("Name:")
      )
      .append(
        $("<input>")
          .attr({
            class: "form-control form-control-sm referenceName",
            type: "text",
            placeholder: "Reference Name",
            'aria-label': '.form-control-sm example',
          })
      )
      .append($("<h5>").text("Email:"))
      .append(
        $("<input>")
          .attr({
            class: "form-control form-control-sm referenceEmail",
            type: "text",
            placeholder: "Reference Email",
            'aria-label': '.form-control-sm example',
          })
      )
      .append($("<h5>").text("Phone Number:"))
      .append(
        $("<input>")
          .attr({
            class: "form-control form-control-sm referencePhone",
            type: "text",
            placeholder: "Reference Phone #",
            'aria-label': '.form-control-sm example',
          })
      )
  )
});


skillsBtn.on('click', function(){
  skills.append(
    $("<div>")
      .addClass("mb-3")
      .append(
        $("<input>")
          .attr({
            class: "form-control form-control-sm skill",
            type: "text",
            placeholder: "Skill",
            'aria-label': ".form-control-sm example",
          })
      )
  )
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
// if the event . target . = "id" match then select display
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

// create button and send information to the back-end
createButton.on('click', function (){
  const resumeObject = {
    "name": $('#resumeName').val(),
    "email": $('#resumeEmail').val(),
    "phone": $('#resumePhone').val(),
    "linkedin": $('#linkedinLink').val(),
    "portfolio": $('#portfolioLink').val(),
    "title": $('#jobTitle').val(),
  };

  let experienceArray = [];
  let educationArray = [];

  let referencesArray = [];
  


  let skillArray = [];
  for (let i = 0; i < $('.skill').length; i++){
    const skillInput = $($('.skill')[i]).val();
    skillArray.push({"name": skillInput});
  }

  const body = {resumeObject, skillArray};

  // send fetch or ajax request here


});