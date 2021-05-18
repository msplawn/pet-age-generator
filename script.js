$(document).ready(() => {
    // const init = () => {
    //     const inputs = inputs();
    // }
    
    // const inputs = () => {
        
    // }
    $("#start").click(() => {
        console.log("hello")
        $('.modal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    })
})


