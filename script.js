 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user

	 if(radius ==='' || parseInt(radius,10)<0 ){
     alert("plese enter positive number")
	 }else{
		 let pi = Math.PI
		 let circle = pi*radius*radius
		 alert(`The area of the circle with radius ${radius} is ${circle.toFixed(2)}`)
	 }
      
	 
}

calculateArea();   
 