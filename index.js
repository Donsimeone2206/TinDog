function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        var message;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                message = "leap year.";
            } else {message = "Not leap year.";
                
            }
        }else {message = "leap year.";
            
        }
    }else {message = "Not leap year.";
        
    } return message;

}
console.log(isLeap(2000));