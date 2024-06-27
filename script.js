
const clickables = document.getElementsByClassName("clickable");
const aboutButton = document.getElementById("about");
const headerText = document.getElementsByClassName("header")[0];
const emailForm = document.getElementById("emailForm");
const myResume = document.getElementById("resume");


function makeArray(htmlCol){
    returnArray = [];
    for(i = 0; i < htmlCol.length; i++){
        console.log(htmlCol[i]);
        returnArray[i] = htmlCol[i];
    }
    return returnArray;
}

// emailForm.addEventListener("submit", sendEmail())
aboutButton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (document.getElementById("info").hidden == true){
        document.getElementById("info").hidden=false;
    }
    else{
        document.getElementById("info").hidden = true;
    }
}
)

document.getElementById("resumeAnchor").addEventListener("click", (event)=>{
    toggleHidden(event, myResume.id);
    console.log("well?")
})

function toggleHidden(event, elementId){
    event.preventDefault();
    if (document.getElementById(elementId).hidden == true){
        document.getElementById(elementId).hidden=false;
        console.log("running!")
    }
    else{
        document.getElementById(elementId).hidden = true;
        console.log('oops');
    }
}



window.addEventListener("load" ,()=>{
    console.log("fully loaded");
    headerText.classList.add("headerAfterAnimation");
})

clickArray = makeArray(clickables);

for(index in clickArray){
    console.log(clickArray[index]);
}

for(index in clickArray){
    clickArray[index].addEventListener("mouseover",(e)=>{
        e.target.classList.add("hover");
    }
    );
    clickArray[index].addEventListener("mouseout", (e)=>{
        e.target.classList.remove("hover");
    }
    );
}


function sendEmail(){
    Email.send({

        SecureToken: "16ccddec-7a8f-43b8-9958-fae5394aacce",
        To : "kpmcgra@gmail.com",
        From : "kpmcgra@gmail.com",
        Subject : "contact from mysite",
        Body : "name: "+ document.getElementById("name").value +"<br> Email: " + document.getElementById("email").value + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}

