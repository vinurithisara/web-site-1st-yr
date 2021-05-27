function validation(){
	
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var message=document.getElementById("message").value;
	var error_message=document.getElementById("error_message");
	

	error_message.style.padding ="10px";

	if(name==""|| email==""||message=="")
	{
		text="All fields required";
		error_message.innerHTML=text;
		return false;
	}

	

	if(name.length<5){
		text="Pease enter valid name";
		error_message.innerHTML =text;
		return false;
	}

alert("Dear "+ name+ " ,Thank you very much for your feedback.Keep in touch with us!!!");
	return true;
}



	
