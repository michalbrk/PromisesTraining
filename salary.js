document.addEventListener("DOMContentLoaded", function() {

    //Setting two salaries so that 
    //subtraction can go independently
    function getSalary(salary) {
        return new Promise(reslov => {
            setTimeout(() => {
                reslov(salary);
            }, 1000);
        });
    }
        
    function getSalarySum() {
        return Promise.all([
            getSalary(10000),
            getSalary(20000),
            getSalary(55000),
            getSalary(89000),
            getSalary(115000),
            getSalary(213000)
        ]).then(salaries => {
            return salaries.reduce((prev, curr) => prev + curr, 0)
        });
    }
    
    function subtractTax(salary) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(salary * .75);
            }, 200);
        });
    }
    
    function subtractRent(salary) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(salary - 5000);
            }, 200);
        });
    }
    
    function getDisposIncome(callback) {
        
        //True cleanup that promises bring
        return getSalarySum().then(subtractTax).then(subtractRent);
    }
    
    
    //Then is a method that puts a callback
    //in the promises chain
    getDisposIncome().then(disposable => {
        console.log(disposable);
    });
});
