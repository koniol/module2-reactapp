$( ".show" ).click(function() {
    var text = $(this).text();
    text = (text === 'Zwiń' ? 'Pokaz' : 'Zwiń');
    
    $(this).text(text); 
    $(this).prev('.toggle').toggle( "slow", function() {
    });
});