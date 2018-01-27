document.addEventListener("DOMContentLoaded", function() {

    //Callback whenever there is data coming from the server
    //When bank sends money
    function getSalary(callback) {
        setTimeout(() => {
            callback(33000);
            
            //Slow network request
        }, 1000);
    }
    
    function subtractTax(salary) {
        return salary * .75;
    }
    
    function subtractRent(salary) {
        return salary - 5000;
    }
    
    
    //getDisp... has to be supplied with callback function
    //Then we can subtract tax and rent
    function getDisposIncome(callback) {
        
        //It uses async function - callback
        getSalary(salary => {
            
            //This is done in the callback
            salary = subtractTax(salary);
            salary = subtractRent(salary);
            callback(salary);
        });
    }
    
    getDisposIncome(salary => {
        console.log(salary); 
    });
});
