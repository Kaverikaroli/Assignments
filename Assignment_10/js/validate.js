
function validate(event){
    const firstName=document.getElementById("firstName").value;
    const Lastname=document.getElementById("Lastname").value;
    const city=document.getElementById("city").value;
    if(firstName==""){
       
        const errFirstName=document.getElementById("errFirstName");
        errFirstName.innerText="Please enter the First Name";
        event.preventDefault();
        return false;
    }
    else if (Lastname=="") {
        const errLastName=document.getElementById("errLastName");
        errLastName.innerText="Please enter the Last Name";
        event.preventDefault();
        return false;
    } else if(city=="") {
        const errcity=document.getElementById("errcity");
        errcity.innerText="Please enter the city Name";
        event.preventDefault();
        return false;
        
    }
    return true;
} 


function validate1(event){
    const firstName=document.getElementById("firstName").value;
    const Lastname=document.getElementById("Lastname").value;
    const city=document.getElementById("city").value;
    if(firstName==""){
       
        const errFirstName=document.getElementById("errFirstName1");
        errFirstName.innerText="Please enter the First Name";
        event.preventDefault();
        return false;
    }
    else if (Lastname=="") {
        const errLastName=document.getElementById("errLastName1");
        errLastName.innerText="Please enter the Last Name";
        event.preventDefault();
        return false;
    } else if(city=="") {
        const errcity=document.getElementById("errcity1");
        errcity.innerText="Please enter the city Name";
        event.preventDefault();
        return false;
        
    }
    return true;
} 


