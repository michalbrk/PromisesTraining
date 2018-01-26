document.addEventListener("DOMContentLoaded", function() {

    function sync(callback) {
        setTimeout(function() {
            
            //Deferred function assignement to the constant
            const res = deferred();
            
            //Invoking callback with the deferred function
            //as the argument
            callback(res);
        }, 1000);
    }
    
    function deferred() {
        return 'deferred';
    }
    
    //Callback declaration
    //and invoking of the sync function
    sync(function(result) {
        console.log(result);
    });
});