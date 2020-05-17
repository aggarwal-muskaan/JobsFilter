/*  start of data  */
const jobData = [
  {
    id: 1,
    company: "Photosnap",
    img: "./images/photosnap.svg",
    isItNew: true,
    isItFeatured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    timeStamp: "1d ago",
    hours: "FullTime",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Manage",
    img: "./images/manage.svg",
    isItNew: true,
    isItFeatured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    timeStamp: "1d ago",
    hours: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    img: "./images/account.svg",
    isItNew: true,
    isItFeatured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    timeStamp: "2d ago",
    hours: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    img: "./images/myhome.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    timeStamp: "5d ago",
    hours: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
  },
  {
    id: 5,
    company: "Loop Studios",
    img: "./images/loop-studios.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    timeStamp: "1w ago",
    hours: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    img: "./images/faceit.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    timeStamp: "2w ago",
    hours: "Full Time",
    location: "UK Only",
    tools: ["Ruby", "Ror"],
  },
  {
    id: 7,
    company: "Shortly",
    img: "./images/shortly.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    timeStamp: "2w ago",
    hours: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    img: "./images/insure.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    timeStamp: "2w ago",
    hours: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    img: "./images/eyecam-co.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    timeStamp: "3w ago",
    hours: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Python", "Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    img: "./images/the-air-filter-company.svg",
    isItNew: false,
    isItFeatured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    timeStamp: "1mo ago",
    hours: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];
/*    end of static data    */

var popup = document.querySelector(".filters-popup");
var container = document.querySelector(".main-container");
var cross;
var langIp = [];
var toolIp = [];
var levelIp = null,
  roleIp = null;
var arrayLang = jobData,
  arrayLevels = jobData,
  arrayRoles = jobData,
  arrayTools = jobData,
  commonData;

function createButtons(skills, button1, button2, arrButton1, arrButton2) {
  var role = document.createElement("button");
  role.setAttribute("class", "buttons");
  role.textContent = button1;

  var level = document.createElement("button");
  level.setAttribute("class", "buttons");
  level.textContent = button2;

  skills.appendChild(role);
  skills.appendChild(level);

  var dataLang = document.createElement("div");
  dataLang.setAttribute("class", "skills");

  if (arrButton1)
    for (var i = 0; i < arrButton1.length; i++) {
      var languages = document.createElement("button");
      languages.textContent = arrButton1[i];
      languages.setAttribute("class", "buttons");
      dataLang.appendChild(languages);
    }

  skills.appendChild(dataLang);

  var dataTools = document.createElement("div");
  dataTools.setAttribute("class", "skills");

  if (arrButton2) {
    for (var i = 0; i < arrButton2.length; i++) {
      var tools = document.createElement("button");
      tools.textContent = arrButton2[i];
      tools.setAttribute("class", "buttons");
      dataTools.appendChild(tools);
    }
  }
  skills.appendChild(dataTools);

  role.addEventListener("click", () => {
    arrayRoles = filterRole(button1);
    jobDataAfterFilters();
  });

  level.addEventListener("click", () => {
    arrayLevels = filterLevel(button2);
    jobDataAfterFilters();
  });

  dataLang.addEventListener("click", () => {
    filterLang(event.target.textContent);
    arrayLang = makeLangList();
    jobDataAfterFilters();
  });

  dataTools.addEventListener("click", () => {
    filterTools(event.target.textContent);
    arrayTools = makeToolsList();
    jobDataAfterFilters();
  });
}

function show(eachCard) {
  var card = document.createElement("div");
  var info = document.createElement("div");

  // var companyLogo = document.createElement("div");
  var logo = document.createElement("img");

  logo.setAttribute("src", eachCard.img);
  logo.setAttribute("class", "logo");
  // companyLogo.appendChild(logo);

  var companyName = document.createElement("div");
  var name1 = document.createElement("h5");
  name1.innerHTML = eachCard.company;
  name1.setAttribute("class", "names");
  companyName.appendChild(name1);

  if (eachCard.isItNew) {
    var newP = document.createElement("h6");
    newP.textContent = "NEW!";
    newP.setAttribute("class", "newP");
    companyName.appendChild(newP);
  }

  if (eachCard.isItFeatured === true) {
    var featured = document.createElement("h6");
    featured.textContent = "FEATURED";
    featured.setAttribute("class", "featured");
    companyName.appendChild(featured);
  }
  companyName.setAttribute("class", "companyName");

  // var jobProfile = document.createElement("div");
  var job = document.createElement("h4");
  job.textContent = eachCard.position;
  job.setAttribute("class", "job");
  // jobProfile.appendChild(job);

  var otherDetails = document.createElement("div");

  var interpunct = document.createElement("small");
  interpunct.innerHTML = "&#8226";
  interpunct.setAttribute("class", "dot");

  var time = document.createElement("small");
  time.innerHTML = eachCard.timeStamp;
  otherDetails.appendChild(time);

  otherDetails.appendChild(interpunct.cloneNode(true));

  var contract = document.createElement("small");
  contract.innerHTML = eachCard.hours;
  otherDetails.appendChild(contract);

  otherDetails.appendChild(interpunct);

  var location = document.createElement("small");
  location.innerHTML = eachCard.location;
  otherDetails.appendChild(location);

  otherDetails.setAttribute("class", "otherDetails");

  var horizontalLine = document.createElement("hr");
  horizontalLine.setAttribute("class", "hidden-line");

  var skills = document.createElement("div");
  skills.setAttribute("class", "skills");
  createButtons(
    skills,
    eachCard.role,
    eachCard.level,
    eachCard.languages,
    eachCard.tools
  );

  info.appendChild(companyName);
  info.appendChild(job);
  info.appendChild(otherDetails);
  info.setAttribute("class", "info");

  card.appendChild(logo);
  card.appendChild(info);
  card.appendChild(horizontalLine);
  card.appendChild(skills);
  card.setAttribute("class", "card");

  container.appendChild(card);
}

function jobDataAfterFilters() {
  commonData = _.intersection(arrayRoles, arrayLevels, arrayLang, arrayTools);
  if (commonData) {
    container.innerHTML = "";
    commonData.forEach((data) => {
      show(data);
    });
  } else {
    alert("Oops!! No Jobs Found.");
  }
}

function deleteOptionOnList(list) {
  cross = document.createElement("button");
  cross.appendChild(document.createTextNode("\u2716"));
  cross.setAttribute("class", "cross");
  list.appendChild(cross);

  popup.appendChild(list);
}

var filterRole = (button1) => {
  if (!roleIp) {
    roleIp = button1;
    var list = document.createElement("h5");
    list.textContent = button1;
    list.setAttribute("class", "list");

    deleteOptionOnList(list);

    function deletedRole() {
      popup.removeChild(list);
      roleIp = null;
      arrayRoles = jobData;
      jobDataAfterFilters();
    }

    cross.addEventListener("click", deletedRole);

    var popupRoles = _.filter(jobData, function (value) {
      if (value.role === button1) return value;
    });

    return popupRoles;
  } else {
    alert("Filter Already Applied.\nKindly refresh the page for content.");
    allJobs();
  }
};

const filterLevel = (button2) => {
  if (!levelIp) {
    levelIp = button2;
    var list = document.createElement("h5");
    list.textContent = button2;
    list.setAttribute("class", "list");

    deleteOptionOnList(list);

    function deletedLevel() {
      popup.removeChild(list);
      levelIp = null;
      arrayLevels = jobData;
      jobDataAfterFilters();
    }
    cross.addEventListener("click", deletedLevel);

    var popupLevels = _.filter(jobData, function (value) {
      if (value.level === button2) return value;
    });

    return popupLevels;
  } else {
    alert("Oops!! Filter Already Applied");
    document.write("Kindly refresh the page for content.");
    allJobs();
  }
};

const filterLang = (arrButton1) => {
  if (
    _.contains(["HTML", "JavaScript", "CSS", "Python"], arrButton1) &&
    !_.contains(langIp, arrButton1)
  ) {
    langIp.push(arrButton1);
    var list = document.createElement("h5");

    list.textContent = arrButton1;
    list.setAttribute("class", "list");

    deleteOptionOnList(list);

    function deletedLang() {
      langIp = _.filter(langIp, (language) => {
        if (list.firstChild.textContent !== language) return language;
      });
      popup.removeChild(list);
      arrayLang = makeLangList();
      jobDataAfterFilters();
    }

    cross.addEventListener("click", deletedLang);
  }
};

function makeLangList() {
  var popupLang = [];
  var compare;

  for (var k = 0; k < jobData.length; k++) {
    value = jobData[k];
    compare = [];

    if (value.languages && Array.isArray(value.languages)) {
      for (var i = 0; i < langIp.length; i++) {
        for (var j = 0; j < value.languages.length; j++) {
          if (value.languages[j] == langIp[i]) {
            compare.push(langIp[i]);
            break;
          }
        }
      }
      if (JSON.stringify(compare) == JSON.stringify(langIp)) {
        popupLang.push(value);
      }
    }
  }
  if (popupLang) {
    return popupLang;
  } else {
    alert("No jobs found!!");
  }
}

const filterTools = (arrButton2) => {
  if (
    _.contains(["React", "Sass", "Ruby", "Ror", "Vue", "Django"], arrButton2) &&
    !_.contains(toolIp, arrButton2)
  ) {
    toolIp.push(arrButton2);

    var list = document.createElement("h5");

    list.textContent = arrButton2;
    list.setAttribute("class", "list");

    deleteOptionOnList(list);

    function deletedTool() {
      toolIp = _.filter(toolIp, (tool) => {
        if (list.firstChild.textContent !== tool) return tool;
      });
      popup.removeChild(list);
      arrayTools = makeToolsList();
      jobDataAfterFilters();
    }

    cross.addEventListener("click", deletedTool);
  }
};

function makeToolsList() {
  var popupTools = [];
  var compare;

  for (var k = 0; k < jobData.length; k++) {
    value = jobData[k];
    compare = [];

    if (value.tools && Array.isArray(value.tools)) {
      for (var i = 0; i < toolIp.length; i++) {
        for (var j = 0; j < value.tools.length; j++) {
          if (value.tools[j] === toolIp[i]) {
            compare.push(toolIp[i]);
            break;
          }
        }
      }
      if (JSON.stringify(compare) == JSON.stringify(toolIp)) {
        popupTools.push(value);
      }
    }
  }
  if (popupTools) {
    return popupTools;
  } else {
    alert("No jobs found!!");
  }
}

allJobs = () => {
  jobData.forEach(function (data) {
    show(data);
  });
};
//injecting cards to DOM
window.addEventListener("load", allJobs);
