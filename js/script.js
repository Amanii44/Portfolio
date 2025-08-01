let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
//  تفعيل المهارات عند التمرير (Skills Bar Animation)
document.addEventListener('DOMContentLoaded', (event) => {	

	var options = {
        strings:[
      "Frontend Developer","Designer",
			"Freelancer"
        ],
		typeSpeed: 80,
		backSpeed: 60,
		//clean and write agine speed
		backDelay: 900,
		startDelay: 1000,
        loop:true
	};
	var typed = new Typed('.typing', options);
  });
	//
window.addEventListener("scroll", function () {
  const bars = document.querySelectorAll(".bars-box");
  bars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.classList.add("animate");
    }
  });
});

//  تفعيل "عرض المزيد" للمشاريع

function loadMoreProjects() {
  const container = document.querySelector(".services-content");

  const moreProjects = [
    {
      title: "Digital Dashboard Design",
      description: "Interactive dashboard to monitor system usage, designed using Power BI and UX wireframes.",
      icon: "bx-bar-chart"
    },
    {
      title: "Process Automation Proposal",
      description: "Business analysis document suggesting automation of manual procedures within SFDA internal teams.",
      icon: "bx-git-compare"
    }
  ];

  moreProjects.forEach(project => {
    const box = document.createElement("div");
    box.className = "services-box";
    box.innerHTML = `
      <i class='bx ${project.icon}'></i>
      <h3>${project.title}</h3>
      <div class="project-info">
        <p>${project.description}</p>
      </div>
    `;
    container.appendChild(box);
  });

  // إزالة زر عرض المزيد بعد النقر
  document.querySelector(".load-more").style.display = "none";
}




