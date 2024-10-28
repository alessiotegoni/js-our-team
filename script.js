const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const ourTeamContainer = document.querySelector(".our-team__container");

const displayOurTeam = () =>
  teamMembers.forEach(
    (member) =>
      (ourTeamContainer.innerHTML += `
    <li class="col-lg-6 col-xxl-4">
        <div class="card mb-3 overflow-hidden">
          <div class="row g-0">
            <div class="col-sm-4">
              <img
                src="${member.img}"
                class="w-100"
                alt="${member.name}"
              />
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text fw-medium">${member.role}</p>
                <p class="card-text">
                  <a class="fw-medium card-link text-decoration-none"
                    >${member.email}</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
  `)
  );

displayOurTeam();
