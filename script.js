 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	    
  //    let radius =   document.getElementById('radius').value.trim();
	 // let btn = document.getElementById('btn');
	 if(radius ===''){
     alert("plese enter input")
	 }else{
		 let pi = 3.14;
		 let circle = 2*pi*radius
		 alert(`The area of the circle with radius ${radius} is 50.27`)
	 }
      
	 
}

calculateArea();
