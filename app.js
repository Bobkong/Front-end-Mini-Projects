const projects = [

    {
        id: 8,
        name: 'Todo List',
        image: 'images/todo.png',
        src: 'https://bobkong.github.io/Todo-List/'
    },

    {
        id: 6,
        name: 'Countdown Timer',
        image: 'images/countdown.webp',
        src: '12-countdown-timer/setup/index.html'
    },

    {
        id: 5,
        name: 'Tabs',
        image: 'images/tabs.webp',
        src: '11-tabs/setup/index.html'
    },

    {
        id: 4,
        name: 'Menu',
        image: 'images/menu.webp',
        src: '08-menu/setup/index.html'
    }, 


    {
        id: 3,
        name: 'Navbar',
        image: 'images/nav-bar.webp',
        src: '04-navbar/setup/index.html'
    }, 

    {
        id: 2,
        name: 'Reviews',
        image: 'images/reviews.webp',
        src: '03-reviews/setup/index.html'
    }, 

    {
        id: 7,
        name: 'Lorem Ipsum',
        image: 'images/lorem.webp',
        src: '13-lorem-ipsum/setup/index.html'
    },

    {
        id: 0,
        name: 'Color Flipper',
        image: 'images/color-flipper.webp',
        src: '01-color-flipper/setup/index.html'
    }, 

    {
        id: 1,
        name: 'Simple Counter',
        image: 'images/counter.webp',
        src: '02-counter/setup/index.html'
    }, 
]

const projectsDiv = document.querySelector('.projects');

function addProjects() {
    const projectsHtml = [];
    projects.forEach(project => {
        projectsHtml.push(
            `<div class="project-container" data-id=${project.id}>
                <img class="project-image" src=${project.image} alt=${project.name}>
                <p class="project-title">${project.name}</p>
            </div>`
        );
    });
    projectsDiv.innerHTML = projectsHtml.join("");

    const allprojects = document.querySelectorAll('.project-container');
    allprojects.forEach(project => {
        project.addEventListener('click', clickProject)
    })

}

function clickProject(event) {
    console.log(this.getAttribute('data-id'));
    window.open(projects[this.getAttribute('data-id')].src, '_blank');
}

addProjects();