document.addEventListener("DOMContentLoaded", function() {

    //Replace the callback with the promise
    function getSalary() {
        return new Promise(reslov => {
            setTimeout(() => {
                reslov(33000);
            }, 1000);
        });
    }
    
    function subtractTax(salary) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(salary * .75);
            }, 1000);
        });
    }
    
    function subtractRent(salary) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(salary - 5000);
            }, 1000);
        });
    }
    
    function getDisposIncome(callback) {
        
        const salaryPromise = getSalary();
        const taxPromise = salaryPromise.then(salary_1 => {
            return subtractTax(salary_1);
        });
        
        const rentPromise = taxPromise.then(salary_2 => {
            return subtractRent(salary_2);
        });
        
        return rentPromise;
    }
    
    
    //Then is a method that puts a callback
    //in the promises chain
    getDisposIncome().then(disposable => {
        console.log(disposable);
    });
});
