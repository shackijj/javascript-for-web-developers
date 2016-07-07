(function () {
	var windowName = document.getElementById('window-name');
	windowName.innerHTML = window.name;

	var topName = document.getElementById('top-name');
	topName.innerHTML = top.name;

	var parentName = document.getElementById('parent-name');
	parentName.innerHTML = parent.name;
})();