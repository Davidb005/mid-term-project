let body = document.querySelector("body")
let section = document.createElement("section")
let div = document.createElement("div")
let h1 = document.createElement ("h1")
let img = document.createElement ("img")
let p = document.createElement ("p")
let h2 = document.createElement("h2")
let h3 = document.createElement ("h3")
let h4 = document.createElement("h4")

div.appendChild(h1)
div.appendChild(h2)
div.appendChild(h3)
div.appendChild(h4)
div.appendChild(img)
div.appendChild(p)
section.appendChild(div)
body.appendChild(section)

window.onload = async () => {
    try {
        const data = await getProjects();
        const projectInfoName = document.querySelector("h1")
        const projectInfoImg = document.querySelector("img")
        const projectInfoText = document.querySelector ("p")
        const projectInfoId = document.querySelector ("h2")
        const projectInfoDescription = document.querySelector("h3")
        const projectInfoCompletition = document.querySelector("h4")
        projectInfoText.textContent = data[3].content
        projectInfoId.textContent = data[3].uuid
        projectInfoImg.src = data[3].image;
        projectInfoImg.setAttribute("width", 200);
        projectInfoName.textContent = data[3].name
        projectInfoDescription.textContent = data[3].description
        projectInfoCompletition.textContent = data [3].completed_on
    } catch (error) {
        console.error('Error:', error);
    }
};
async function getProjects(){
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    const data = await response.json();
    return data
}
getProjects();