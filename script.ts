document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    //*
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;

    if (nameElement && emailElement && phoneElement &&  educationElement && experienceElement && skillsElement
        && usernameElement
    ) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;


const username = usernameElement.value;
const uniquePath = `resume/${username.replace(/\s+/g,'_')}_cv.html`



        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email}</span></p>
        <p><strong>Phone Number:</strong>  <span id="edit-phone number" class="editable">${phone}</span></p>
    

        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Work Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
        `;

const downloadlink = document.createElement('a')
downloadlink.href = 'data:text/html;charset=utf-8,'+encodeURIComponent(resumeOutput)
downloadlink.download = uniquePath;
downloadlink.textContent = 'Download your CV'


        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
resumeOutputElement.appendChild(downloadlink)            
        } 
        makeEditable();
    } else {
        console.error('One or more form elements are missing');
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || " ";

            //for replace
            if (currentElement.tagName === "p"|| currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type='text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()


            }
        })

        
    })
}