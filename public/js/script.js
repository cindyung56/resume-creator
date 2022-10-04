const addBtn = $("#addExperienceBtn");
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
          .text("test")
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
