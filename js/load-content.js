const buttonProject = document.getElementById('project');
const buttonAboutMe = document.getElementById('aboutme');
const contentDiv = document.getElementById('content');

document.addEventListener('DOMContentLoaded', ()=>{
    buttonProject.addEventListener('click', ()=>{
        fetch('../src/projects.html')
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data =>{
            contentDiv.innerHTML = data;
        })
        .catch(error =>{
            console.error('There has been a problem with your fetch operation:', error);
            contentDiv.innerHTML = '<p>Sorry, there was an error loading the content.</p>';
        })
    })
    buttonAboutMe.addEventListener('click', ()=>{
        fetch('../src/aboutme.html')
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data =>{
            contentDiv.innerHTML = data;
        })
        .catch(error =>{
            console.error('There has been a problem with your fetch operation:', error);
            contentDiv.innerHTML = '<p>Sorry, there was an error loading the content.</p>';
        })
    })
})