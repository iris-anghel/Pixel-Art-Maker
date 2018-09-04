const submitQuery = $('input[type="submit"]');
const pixelCanvas = $('#pixel_canvas');
const downloadTool = $('#download');
const reset = $('#reset');

gridInit();

function gridInit() {
	let initHeight = 25;
	let initWidth = 25;
	for (let x = 0; x < initHeight; x++) {
		pixelCanvas.append('<tr></tr>');
	}
	 
	for (let y = 0; y < initWidth; y++) {
		$('tr').append('<td></td>');
	} 
}

function makeGrid() {
	let gridHeight = $('#input_height').val();
	let gridWidth = $('#input_width').val();
	
	for (let x = 0; x < gridHeight; x++) {
		pixelCanvas.append('<tr></tr>');
	}
	for (let y = 0; y < gridWidth; y++) {
	   $('tr').append('<td></td>');
	}	
}

function clearGrid() {
    pixelCanvas.children().remove();
}

function emptyCanvas() {
	clearGrid();
	gridInit();
}

submitQuery.click(function(event) {
    event.preventDefault();
	clearGrid();
    makeGrid();
});

pixelCanvas.on("click", "td", function() {
	let color = $("#colorPicker").val();
	$(this).css('backgroundColor', color); 
});	

pixelCanvas.on("mousedown", "tr td", function() {
	let color = $("#colorPicker").val();
	$(this).css('backgroundColor', color);
	$('tr td').bind("mousemove", function () {
		$(this).css('backgroundColor', color);
	}).mouseup(function() {
		$('td').unbind('mousemove');
	});
})

pixelCanvas.on("dblclick", "td", function() {
	$(this).css('backgroundColor', '');
});

reset.on("click", emptyCanvas);

downloadTool.on('click', function() {
	domtoimage.toJpeg(document.getElementById('canvas-wrapper'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'pixel-art.jpeg';
        link.href = dataUrl;
        link.click();
    });
})




