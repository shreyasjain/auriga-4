let contactCount =1
let isError = false

const submitForm = ()=>{

    event.preventDefault()
    
    // Validate mobile number:
    let mob = document.querySelector("#mobile-box")
    mob = mob.value
    if((mob.length>0 && mob.length<10) || mob.length>10){
        isError = true
        document.querySelector("#mobile-error").style.display="block"
    }else{
        document.querySelector("#mobile-error").style.display="none"
    }

    // Validate age:
    let age = document.querySelector("#age-box")
    age = age.value
    if(age<5 || age>60){
        isError = true
        document.querySelector("#age-error").style.display="block"
    }else{
        document.querySelector("#age-error").style.display="none"
    }

    //voterID
    if(age>=18){
        document.querySelector("#id-box").setAttribute("required","true")
    }else{
        isError = true
        if(confirm("Are you an adult?")){
            document.querySelector("#age-box").style.border="1px solid red"
        }else{
            document.querySelector("#id-box").value = ""
        }
    }

    if(!isError){
        printAll()
    }

}
const addContact = ()=>{
    contactCount++
    let div = document.createElement("div")
    let label1 = document.createElement("label")
    let input1 = document.createElement("input")
    let label2 = document.createElement("label")
    let input2 = document.createElement("input")
    div.appendChild(label1)
    div.appendChild(input1)
    div.appendChild(label2)
    div.appendChild(input2)
    input1.setAttribute("type","text")
    input1.setAttribute("required","true")
    input1.setAttribute("class","form-control extra-names")
    input2.setAttribute("type","email")
    input2.setAttribute("required","true")
    input2.setAttribute("class","form-control extra-emails")
    let text1 = document.createTextNode("Name-"+contactCount+": ")
    label1.appendChild(text1)
    let text2 = document.createTextNode("Email-"+contactCount+": ")
    label2.appendChild(text2)
    document.querySelector("#more-contact-box").appendChild(div)
    console.log(div)
}

const printAll = ()=>{
    const name = document.querySelector("#name-box")
    const email = document.querySelector("#email-box")
    const country = document.querySelector("#country-box")
    const extraNames = document.querySelectorAll(".extra-names")
    const extraEmails = document.querySelectorAll(".extra-emails")
    const mobileno = document.querySelector("#mobile-box")
    const age = document.querySelector("#age-box")
    const id = document.querySelector("#id-box")
    let str = ""

    for(let i=0;i<extraNames.length;i++){
        str+="ContactName_"+i+": "+extraNames[i].value+"\n"+"ContactEmail_"+i+": "+extraEmails[i].value+"\n"
    }
    console.log(extraNames)
    console.log(extraEmails)

    alert(
        "Name: "+name.value+"\n"+
        "Email: "+email.value+"\n"+
        "Country: "+country.value+"\n"+
        str+"Mobile No: "+mobileno.value+"\n"+
        "Age: "+age.value+"\n"+
        "VoterID: "+id.value
    )    

}

const tabFunctioning = (tabID,containerID)=>{
    event.preventDefault()

    const allTabs = document.querySelectorAll(".tab")
    for(let i=0;i<allTabs.length;i++){
        allTabs[i].style.color="black"
        allTabs[i].style.borderColor="black"
    }
    document.getElementById(tabID).style.color="white"
    document.getElementById(tabID).style.borderColor="white"

    const allContainers = document.querySelectorAll(".c1")
    for(let i=0;i<allContainers.length;i++){
        allContainers[i].style.display="none"
    }
    document.getElementById(containerID).style.display="block"
}