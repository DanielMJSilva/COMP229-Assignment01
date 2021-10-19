// IIFFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
        let deleterButtons = document.querySelectorAll('.btn-danger')
        for(button of deleterButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.Location.assign('/busines-list');
                }
            });
        }
    }

    window.addEventListener("load,Start");


})();