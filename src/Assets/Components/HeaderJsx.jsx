import '../Components/Comp-Css/HeaderCss.css';

var divisor = document.getElementById("divisor"),
	slider = document.getElementById("slider");
function moveDivisor() {
	divisor.style.width = slider.value + "%";
}

<div id="myCarosel">
	<figure>
		<div id="divisor"></div>
		<label for="vol">Volume (between 0 and 50):</label>
		<input title="Next/Previous" placeholder="placeholder" type="range" min="0" max="100" value="50" id="slider" oninput="moveDivisor()" />
		<input type="submit" />
	</figure>

	{/* <label for="vol">Volume (between 0 and 50):</label>
	<input title="Next/Previous" placeholder="placeholder" type="range" min="0" max="100" value="50" id="slider" oninput="moveDivisor()" />
	<input type="submit" /> */}
</div>
