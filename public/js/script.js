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
          .text("Experience")
      )
      .append(
        $("<textarea>")
          .addClass("form-control")
          .attr("rows", "3")
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
            .text("Education")
        )
        .append(
          $("<textarea>")
            .addClass("form-control")
            .attr("rows", "3")
            .attr("id", `educationText${count}`)
        )
    );
    count++;
  });

  projectsBtn.on("click", function () {
    console.log("it clicks");
    projects.append(
      $("<div>")
        .addClass("mb-3")
        .append(
          $("<label>")
            .attr("for", `projectsText${count}`)
            .addClass("form-label")
            .text("Projects")
        )
        .append(
          $("<textarea>")
            .addClass("form-control")
            .attr("rows", "3")
            .attr("id", `projectsText${count}`)
        )
    );
    count++;
  });