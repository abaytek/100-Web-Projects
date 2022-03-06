let r,g,b;
	let arr = ["to left", "to right","to top","to bottom","to bottom left","to bottom right","to top left","to top right"]
	sOne = document.querySelector('.space-one')
	sTwo = document.querySelector('.space-two')
	sThree = document.querySelector('.space-three')
	btnGenerator = document.querySelector('.btn-generator')
	btnRandom = document.querySelector('.btn-random')
	btnRadiant = document.querySelector('.btn-radiant')
	hOne = document.querySelector('.one')
	hTwo = document.querySelector('.two')
	inputL = document.querySelector('.a')
	inputM = document.querySelector('.b')
	inputR = document.querySelector('.c')
	
	function setColors(){
		let r,g,b;
		r = Math.floor(Math.random() * 256).toString(16);
		g = Math.floor(Math.random() * 256).toString(16);
		b = Math.floor(Math.random() * 256).toString(16);
		color = `#${r}${g}${b}`;
		r = (r.length === 2)?r:'0' + r;
		g = (g.length === 2)?g:'0' + g;
		b = (b.length === 2)?b:'0' + b;
		inputL.value = color;
		sOne.style.backgroundColor = color;
		document.body.style.backgroundColor = color	
	}
	function setGradiant(){
		let r,g,b,R,G,B;
		r = Math.floor(Math.random() * 256).toString(16);
		g = Math.floor(Math.random() * 256).toString(16);
		b = Math.floor(Math.random() * 256).toString(16);
		
		R = Math.floor(Math.random() * 256).toString(16);
		G = Math.floor(Math.random() * 256).toString(16);
		B = Math.floor(Math.random() * 256).toString(16);
		
		let orientation = arr[Math.floor(Math.random()*8)]
		
		color = `#${r}${g}${b}`;
		Color = `#${R}${G}${B}`;
		r = (r.length === 2)?r:'0' + r;
		g = (g.length === 2)?g:'0' + g;
		b = (b.length === 2)?b:'0' + b;
		R = (R.length === 2)?R:'0' + R;
		G = (G.length === 2)?G:'0' + G;
		B = (B.length === 2)?B:'0' + B;
		sTwo.style.backgroundImage = "linear-gradient("+orientation+", "+color+", "+Color+")";
		inputM.value = "linear-gradient("+orientation+", "+color+", "+Color+")";		
	}
	function sethsl(){
		let h,s,l;
		h = Math.floor(Math.random() * 360).toString();
		s = Math.floor(Math.random() * 101).toString();
		l = Math.floor(Math.random() * 101).toString();
		color = `hsl(${h}, ${s}%, ${l}%)`;
		inputR.value = color;
		sThree.style.backgroundColor = color;	
	}