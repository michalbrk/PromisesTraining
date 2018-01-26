document.addEventListener("DOMContentLoaded", function() {

    function sync() {
        
        //Deferred will be called later (in another stack)
        //because of the setTimeout function
        //even though the postponing is set to 0
        setTimeout(deferred, 0);
        console.log('sync');
    }
    
    function deferred() {
        console.log('deferred');
    }
    
    sync();
});