
//  list of projects 

function openSuperReddit(){
    window.open("https://superreddit.herokuapp.com/")
}

export const Projects = [
    {
        title: "SuperReddit",
        youtube: "",
        description: "Forum/discussion application.",
        tech: "UI/UX built with Vanilla CSS and Bootstrap. API and database built with Python, Django, PostgreSQL and deployed to a Heroku Server",
        click: openSuperReddit,
        github: "",
    }
]