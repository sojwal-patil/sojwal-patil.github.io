const hamburger = document.querySelector('.menu-hamburger');

const links_menu_bar = document.querySelector('.links-menu-bar');

let hamburger_active = false;

hamburger.addEventListener('click', () => {
    if (hamburger_active) {
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        links_menu_bar.style.left = "-100%"; 
        document.body.style.overflow = "auto"
    } else {
        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        links_menu_bar.style.left = 0; 
        document.body.style.overflow = "hidden"
    }

    hamburger_active = !hamburger_active;
});

const username = "sojwal-patil";
const container = document.getElementById("github-projects");

async function loadRepos() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        const repos = await response.json();

        container.innerHTML = "";

        repos
            .filter(repo => !repo.fork)
            .forEach(repo => {

                const description = repo.description
                    ? repo.description.length > 100
                        ? repo.description.substring(0, 100) + "..."
                        : repo.description
                    : "No description";

                container.innerHTML += `
                    <div class="project-card">

                        <h3>${repo.name}</h3>

                        <p>${description}</p>

                        <div class="project-info">
                            <span>${repo.language || "Unknown"}</span>
                            
                        </div>

                        <a href="${repo.html_url}" target="_blank">
                            View Repository <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:small;"></i>
                        </a>

                    </div>
                `;
            });

    } catch (error) {
        container.innerHTML = "<p>Unable to load repositories.</p>";
        console.error(error);
    }
}

loadRepos();