var submitQuery = $('input[type="submit"]');
var canvas = $('#pixel_canvas');
var reset = $('#reset');   

submitQuery.click(function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
});

function makeGrid() {
	
	var gridHeight = $('#input_height').val();
	var gridWidth = $('#input_width').val();
	
	for (x = 0; x < gridHeight; x++) {
	   canvas.append('<tr></tr>');
	}
	
	for (y = 0; y < gridWidth; y++) {
	   $('tr').append('<td></td>');
	} 
	
	canvas.on("click", "td", function() {
		var color = $("#colorPicker").val();
		$(this).css('backgroundColor', color); 
	});	
    
    canvas.on("dblclick", "td", function() {
        $(this).css('backgroundColor', '');
    });
}

function clearGrid() {
    canvas.children().remove();
}

reset.on("click", function() {
  canvas.empty();
});

