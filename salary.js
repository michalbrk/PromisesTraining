document.addEventListener("DOMContentLoaded", function() {

    //Callback whenever there is data coming from the server
    //When bank sends money
    function getSalary(callback) {
        setTimeout(() => {
            callback(33000);
            
            //Slow network request
        }, 1000);
    }
    
    function subtractTax(salary, callback) {
        
        //Implementing asynchrony to subtraction
        setTimeout(() => {
            callback(salary * .75);
        }, 1000);
    }
    
    function subtractRent(salary, callback) {
        
        //Implementing async to subtraction
        setTimeout(() => {
            callback(salary - 5000);
        }, 1000);
    }
    
    
    //getDisp... has to be supplied with callback function
    //Then we can subtract tax and rent
    function getDisposIncome(callback) {
        
        //It uses async function - callback
        //Here starts a real callback hell!...
        getSalary(salary_1 => {
            subtractTax(salary_1, salary_2 => {
                subtractRent(salary_2, salary_3 => {
                    callback(salary_3);
                });
            });
        });
    }
    
    getDisposIncome(disposable => {
        console.log(disposable); 
    });
});
