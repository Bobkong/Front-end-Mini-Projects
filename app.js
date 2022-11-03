const projects = [

    {
        id: 0,
        name: 'Todo List',
        image: 'images/todo.png',
        src: '01-todo-list/index.html'
    },

    {
        id: 1,
        name: 'Countdown Timer',
        image: 'images/countdown.png',
        src: '02-countdown-timer/index.html'
    },

    {
        id: 2,
        name: 'Tabs',
        image: 'images/tabs.webp',
        src: '03-tabs/index.html'
    },

    {
        id: 3,
        name: 'Menu',
        image: 'images/menu.webp',
        src: '04-menu/index.html'
    }, 


    {
        id: 4,
        name: 'Responsive Navbar',
        image: 'images/nav-bar.webp',
        src: '05-navbar/index.html'
    }, 

    {
        id: 5,
        name: 'Reviews',
        image: 'images/reviews.webp',
        src: '06-reviews/index.html'
    }, 

    {
        id: 6,
        name: 'Lorem Ipsum',
        image: 'images/lorem.webp',
        src: '07-lorem-ipsum/index.html'
    },

    {
        id: 7,
        name: 'Color Flipper',
        image: 'images/color-flipper.webp',
        src: '08-color-flipper/index.html'
    }, 

    {
        id: 8,
        name: 'Simple Counter',
        image: 'images/counter.webp',
        src: '09-counter/index.html'
    }, 
]

const projectsDiv = document.querySelector('.projects');
const github = document.querySelector('.develop-github');
github.addEventListener('click', jumpToGithub);

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

function jumpToGithub() {
    window.open('https://github.com/Bobkong/Front-end-Mini-Projects', '_blank');
}

addProjects();