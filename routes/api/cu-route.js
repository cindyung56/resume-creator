const fs = require("fs");
// probably will be used to read/write file??

// TODO: need to add skills, references, experience to template literal
function createHtmlTemplate(body){
return `
<!DOCTYPE html>
<head>
    <meta charset="utf8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Resume</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header class='border border-2 border-dark text-center'>
        <h1>${body.name}</h1>
    </header>

    <div class="header-filler bg-info text-white text-center p-1">
        <h3>${body.job_title}</h3>
    </div>

    <main>
    <div class="contact-info text-center ">
        <p><span class="contact">${body.phone}</span><span class="contact">${body.email}</span></p>
        <p><span class="contact">${body.linkedin}</span><span class="contact">${body.github}</span></p>
    </div>


    <section class="row">
        <div class="col-7 ">
            <h4 class="text-white border-bottom border-1 border-dark"><span class="section-title bg-info px-1">Skills</span></h4>
            <ul>
                <li>HTML / CSS / JavaScript</li>
                <li>Java / C# / Python</li>
                <li>MySQL</li>
                <li>Node.js / express </li>
            </ul>
        </div>
        <div class="col-5 border-start border-1 border-dark">
            <h4 class="text-white border-bottom border-1 border-dark"><span class="section-title bg-info px-1">Education</span></h4>
            <p><span>${body.education}</span></p>
        </div>
    </section>

    <section class="row">
        <div class="col-12">
            <h4 class="text-white border-bottom border-1 border-dark"><span class="section-title bg-info px-1">Professional Experience</span></h4>
            
            <div class="row">
                <div class="col-4">Jul 2020 - present</div>
                <div class="col-8 border-start border-1 border-dark">
                    <span class="work-title">Lead Software Engineer</span> | Google, Mountain View, CA
                    <ul>
                        <li>Manage team of junior and senior software engineers to solve problems and develop applications.</li>
                        <li>Use a variety of coding languages to create algorithms, data structures, and databases.</li>
                        <li>Hold weekly meetings to keep track of team progress and increase team morale.</li>
                    </ul>
                </div>
            </div>
            
            <div class="row">
                <div class="col-4">Feb 2018 - Jul 2020</div>
                <div class="col-8 border-start border-1 border-dark">
                    <span class="work-title">Senior Software Engineer</span> | Microsoft, Bellevue, WA
                    <ul>
                        <li>Redesigned and edited applications to improve users' experience.</li>
                        <li>Worked with teams to create dynamic programs.</li>
                        <li>Created full-stack applications using C#, MySQL, and Node.js.</li>
                        <li>Coached and trained new interns and employees.</li> 
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col-4">Jul 2014 - Feb 2018</div>
                <div class="col-8 border-start border-1 border-dark">
                    <span class="work-title">Associate Software Engineer</span> | Cisco, Irvine, CA
                    <ul>
                        <li>Worked together with fellow developers to make responsive and dynamic applications.</li>
                        <li>Worked with senior developers and designers to develop new products for the company.</li>
                        <li>Created full-stack applications for users.</li> 
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="row">
        <div class="col-12">
            <h4 class="text-white border-bottom border-1 border-dark"><span class="section-title bg-info px-1">References</span></h4>
            <ul>
                <li><span class="work-title">Mary Smith</span> <span class="m-1">|</span> marysmith05@fakemail.com <span class="m-1">|</span> (909) 123-4567</li>
                <li><span class="work-title">Justin Brown</span> <span class="m-1">|</span> jbrown1@fakemail.com <span class="m-1">|</span> (300) 330-2222</li>
                <li><span class="work-title">Mark Nguyen</span> <span class="m-1">|</span> marknguyen@fakemail.com <span class="m-1">|</span> (800) 454-4545</li>
            </ul>
        </div>
    </section>
    
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>`
}

// function to create CSS file for this resume template
function createCssTemplate(){
return `
*{
    max-width: 700px;
    margin: auto;
}

header{
    margin-top: 20px;
    padding: 10px;
    padding-bottom: 20px;
}

.header-filler{
    width: 600px;
    position: relative;
    bottom: 20px;
}

.contact{
    margin: 0 20px;
}

.bg-info{
    background-color: darkblue!important;
}

.work-title{
    color: darkblue!important;
    font-weight: bolder;
}
`
}