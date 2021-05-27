function incfont() {
        var t = document.getElementById('fontSize').value;
		var allElements = document.querySelectorAll("*");
		allElements.forEach(e => {
			e.setAttribute('style', 'font-size:' + t + 'px !important');
		})
       
        size = t;
        document.getElementById("size").innerHTML = size;

}