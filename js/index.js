$(function(){
    $('.buttons button').click(function (ev){
            $('.buttons button, .panels div').removeClass('active');
            $(ev.target).addClass('active');
            $('#'+ev.target.dataset.panel).addClass('active');
    });    
});




/*$(function(){
    $('.buttons button').click(activatePanel);    
});
*/
// document.querySelectorAll('.buttons button')
//     .forEach( btn => btn.addEventListener('click', activatePanel) );

/*
function activatePanel(ev) {
    // 1. Clear all active on buttons and panels
    $('.buttons button, .panels div').removeClass('active');
    //document.querySelectorAll('.buttons button, .panels div')
     //   .forEach( el => el.classList.remove('active') ) ;
     $(ev.target).addClass('active');
    // 2. Set active to clicked button
    //ev.target.classList.add('active');
    // 3. Set active on panel corresponding to button
    $('#'+ev.target.database.panel) .addClass('active');
    //document.getElementById(ev.target.dataset.panel).classList.add('active');
}    
*/



    
     /*.forEach( el => el.classList.remove('active')) ;
     .forEach( function(el){el.classList.remove('active')}); */