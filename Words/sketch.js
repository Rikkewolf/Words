var link;
var link1;
var button4;
var buttonStart;
var testwords = ["digital", "black", "box", "language", "words", "algorithm", "word", "random", "design", "information", "science", "corona", "covid-19", "virus", "meme"];
var swears = ["fuck", "shit", "cunt", "ass", "pussy", "suck", "cock", "dick", "bitch", "asshole", "piss", "damn", "bastard", "god", "satan", "hell", "heaven", "nigga", "nigger", "crap", "moist", "dickhead", "motherfucker", "minge"];
var testposs = 	['wdt', 'wp', 'wp$', 'wrb'];
var testposs1 = ['cc', 'cd', 'dt', 'ex', 'fw',];
var testposs2 =	['in', 'jj', 'jjr', 'jjs', 'ls', 'md'];
var testposs3 = ['nn', 'nns', 'nnp', 'nnps'];
var testposs4 = ['pdt', 'pos', 'prp', 'prp$'];
var testposs5 = ['rb', 'rbr', 'rbs', 'rp', 'sym', 'to',];
var testposs6 = ['vb', 'vbd', 'vbg', 'vbn', 'vbp', 'vbz'];
var lexicon = new RiLexicon();
var output = '';
var rs;
var textarea;
var s;

function preload() {
	myfont = loadFont ("https://raw.githubusercontent.com/Rikkewolf/Words/master/ModernNo20.ttf");
	myfont1 = loadFont ("https://raw.githubusercontent.com/Rikkewolf/Words/master/HelveticaBold.ttf");
	myfont2 = loadFont ("https://raw.githubusercontent.com/Rikkewolf/Words/master/Helvetica.ttf");
	img = loadImage("https://raw.githubusercontent.com/Rikkewolf/Words/master/wordpic.png");

}

function setup() {
	button4 = createButton('');
	button4.remove();
	createCanvas(windowWidth, 2300);
	colorMode(RGB, 100);
	noStroke();
	background (98.7, 93.7, 93.7) //white
	fill (9, 9, 9); //black
	rect(0, 0, windowWidth, 200);
	fill (26.7, 67.5, 29.4); //green
	rect(0, 200, windowWidth, 800)
	textAlign(CENTER);
	fill (98.7, 93.7, 93.7);
	textSize(50);
	textFont(myfont);
	text('Welcome to Word$', width*0.5, 117.5);
	stroke(100);
	line(0, 160, windowWidth, 160);
	
	//section 1
	noStroke();
	textLeading(30);
	fill(76.5, 91, 76.9);
	rect(windowWidth/2-60, 320, 630, 590); //placeholder for pic
	image(img, windowWidth/2-60, 320, 630, 590);
	fill(98.7, 93.7, 93.7);
	rect(windowWidth/2-575, 380, 575, 470);
	buttonStart = createButton('Get Started');
	buttonStart.size(100,30);
	buttonStart.position(windowWidth/2-130, 790);
	buttonStart.mousePressed(start);
	
	fill (26.7, 67.5, 29.4);
	textSize(30);
	text('About Word$', windowWidth/2-575, 430, 575);
	text('Evaluate your Expression', windowWidth/2-575, 640, 575)
	fill(27, 36, 27);
	textFont(myfont1);
	textSize(14);
	textLeading(30);
	text('Word$ is the place for you if you want to save money when expressing yourself. Whether you want an assessment of your most used sentences, help with keeping your monthly word bill on the down low or buy a subscription to that one word you just can not live without, Word$ is here to help.', windowWidth/2-515, 460, 455);
	text('In collaboration with the leaders of online communication and with access to the latest data Word$ is able to keep up with all the trends and provide you with the most accurate calculations.', windowWidth/2-515, 670, 455); 

	
	//section 2
	fill(9, 9, 9);
	rect(0, 1000, windowWidth, 350);
	fill(98.7, 93.7, 93.7);
	textFont(myfont1);
	textSize(25);
	textAlign(LEFT);
	text('Most Popular Subscribtions Right Now', 10, 1040);
		textSize(15);
	textAlign(CENTER, CENTER);
	text('05/14/2026', windowWidth/2, 1300); 
	text('Word of the Day: OXYPHENBUTAZONE - A type of inflammatory medication. 0.39 / Month', windowWidth/2, 1320);
	for (var j = 50; j < width; j+=230) {
		rect (j, 1060, 160, 170);
	}
	
	textAlign(CENTER, CENTER);
	textSize(50);
	textFont(myfont);	
	fill(9, 9, 9);
	text('Corona', 130, 1135);
	text('Fuck', 360, 1135);
	text('Virus', 590, 1135);
	text('No', 820, 1135);
	text('Time', 1050, 1135);
	text('Her', 1280, 1135);
	text('Critic', 1510, 1135);
	text('Shit', 1740, 1135);
	text('Music', 1970, 1135);
	text('Meme', 2200, 1135);
	text('Chocolate', 2430, 1135);
	text('Trump', 2660, 1135);
	text('Be', 2890, 1135);
	text('Ice \n Cream', 3120, 1135);
	text('Fear', 3350, 1135);
	text('Art', 3580, 1135);
	text('Black', 3810, 1135);
	text('Dandruff', 4040, 1135);
	
	//circle next
	stroke(100);
	ellipse(windowWidth-90, 1300, 60, 60);
	fill (98.7, 93.7, 93.7);
	text('>', windowWidth-90, 1290);
	
	noStroke();
	textSize(16);
	textFont(myfont1);	
	text('4.95 / Month', 130, 1250);
	text('3.95 / Month', 360, 1250);
	text('3.99 / Month', 590, 1250);
	text('2.59 / Month', 820, 1250);
	text('1.99 / Month', 1050, 1250);
	text('3.59 / Month', 1280, 1250);
	text('2.59 / Month', 1510, 1250);
	text('1.99 / Month', 1740, 1250);
	text('4.59 / Month', 1970, 1250);
	text('3.95 / Month', 2200, 1250);
	text('4.95 / Month', 2430, 1250);
	text('1.99 / Month', 2660, 1250);
	text('2.59 / Month', 2890, 1250);
	text('2.59 / Month', 3120, 1250);
	text('1.99 / Month', 3350, 1250);
	text('3.99 / Month', 3580, 1250);
	text('4.59 / Month', 3810, 1250);
	text('3.59 / Month', 4040, 1250);
	
	
	//section 3
	fill (16.7, 57.5, 19.4);
	textFont(myfont);
	textSize(40);
	textAlign(CENTER);
	text('Linguistic Capitalism', width*0.5, 1390);
	textAlign(CENTER);
	textSize(20);
	text('How we calculate the worth of your words', width*0.25-200, 1450, 200);
	textAlign(CENTER);
	text('Reviews', width*0.75, 1450, 200);
	textAlign(CENTER);
	text ('The History Of Word$', width*0.5-100, 1450, 200);
	fill(27, 36, 27);
	textSize(14);
	textAlign(CENTER);
	textFont(myfont2);
	textLeading(25);
	text('It can be quite the math problem to figure out what is a reasonable price for your expressions.  Our calculations are made by our patented algorithm and based on data gathered from a big range of online platforms. As such the algorithm relies on a long list of parameters. Some of which are: \n Changes in trends, frequent use, subject matter, context, intent, influence, body language, identity of [Redacted], trademarks, semiotics, the [Redacted] market, coherence, intended recipient, semantics, Jeff [Redacted] mood, whether it has appeared in [Redacted], cohesion, vocabulary, [Redacted] opinions, the current [Redacted] climate. \n \n We encourage you to remember these parameters when expressing yourself on a day to day basis, that way you can save both time and money on your monthly bill.', width*0.25-250, 1500, 300);
	textAlign(CENTER);
	text('Please remember that while our algorithm has been implemented on multiple platforms for over a year, this site is only in early stages of development. Please forgive the limited interaction possibilities but do leave a review and tell us what you would like implemented in the future.', width*0.75-50, 1500, 300);
	textAlign(CENTER);
	textLeading(20);
	text('After the global lock-down of 2020, online communication compagnies such as GOOGLE, ZOOM, YOUTUBE and MICROSOFT among others gained a huge boost in users. To minimize the spread of misinformation and encourage proper thoughtful communication these compagnies decided to take a collective stand and implement the bla bla bla initiative. The compagnies would survey the data of their platforms in search for words regarding sensitive subjects and bill their users a small amount for using the words in question. If the bill was not paid the words would simply be deleted. This way reputable companies and sources could subscribe to the topics in their field and make sure that their expert knowledge could rise above any misuse of sensitive words or technical terms. \n \n Over the years the initiative gained traction and more and more subjects got covered by the protective protocols. However with the added protection of our precious language came the problem of setting a standard across platforms in regards to fees for word-use. In late 2024 Word$ found the solution. A universal algorithm that could be used by all communication systems and use machine learning and the data gathered from each platform to keep up with all the relevant conditions. \n \n Ever since, we here at Word$ have made sure the internet is a place free of misinformation and a safe space for all. ', width*0.5-150, 1500, 300);
	textSize(16);
	fill (16.7, 57.5, 19.4);
	textFont(myfont1);
	text('Five stars! This site is great! It cut my monthly bill in half! Im a bit of a potty mouth but this lets me correct my mistakes before I make them. \n - Steve 29 \n \n \n 3 stars. I dont like green, can you change the color to blue, please. \n - Karen 46 \n \n \n 4 stars. The service is fine but the layout is [Redacted]. Hope they fix it soon. \n - Greg 26 \n \n \n 3 stars. A picture is worth 1000 words so you can only afford one? \n Mary 32', width*0.75-50, 1700, 300);
	
	link1 = createA("https://docs.google.com/document/d/1qX8DEA-FQB7ECrCB1c3e-dO3X_EP0zC1snkcER_DLps/edit?usp=sharing", "Leave a free comment >", "_blank"); //go to feedback
	link1.position(windowWidth-290, 2250);
	textAlign(CENTER, CENTER);
	
	fill (9, 9, 9);
	rect (0, 2230, windowWidth, 70);
	fill (98.7, 93.7, 93.7);
	link = createA("https://torelaurits.wixsite.com/futurecoronavirus", " < Go Back To Exhibition", "_blank"); //go to hub site
	link.position(30, 2250);
}

function start () {
	buttonStart.remove();
	noStroke();
	fill(76.5, 91, 76.9);
	rect(windowWidth/2-60, 320, 630, 590); //placeholder for pic
	fill(98.7, 93.7, 93.7);
	rect(windowWidth/2-575, 380, 575, 470);
	
	fill (26.7, 67.5, 29.4);
	textSize(30);
	text('Create Your Account', windowWidth/2-575, 430, 575);
	
	fill(27, 36, 27);
	textFont(myfont1);
	textSize(14);
	textLeading(30);
	text('To start, simply fill in your information and press Begin', windowWidth/2-515, 460, 455); 
	
	input = createInput('First name');
	input.position(windowWidth/2-500, 515);
	input.size(415);
	
	input1 = createInput('Last name');
	input1.position(windowWidth/2-500, 565);
	input1.size(415);
	
	input2 = createInput('Email');
	input2.position(windowWidth/2-500, 615);
	input2.size(415);
	
	input3 = createInput('Password');
	input3.position(windowWidth/2-500, 665);
	input3.size(415);
	
	button3 = createButton('Begin');
	button3.size(100,30);
	button3.position(windowWidth/2-130, 790);
	button3.mousePressed(begin);		
}

function begin (){
	button3.remove();
	
	input.remove();
	input1.remove();
	input2.remove();
	input3.remove(); 
	
	fill(98.7, 93.7, 93.7);
	rect(windowWidth/2-575, 380, 575, 470); 
	
	fill (26.7, 67.5, 29.4);
	textFont(myfont);
	textSize(30);
	text('Your Expression', windowWidth/2-575, 430, 575);
	
	textarea = createElement('textarea');
	textarea.position(windowWidth/2-500, 460);
	textarea.size(415, 300);
			
	button = createButton('submit');
	button.position(windowWidth/2-130, 790);
	button.size(100, 30);
	button.mousePressed(processRita);
	
}

function processRita() {
	
	var s = textarea.value();
	rs = new RiString(s);
	var words = rs.words();
	var pos = rs.pos();
	var testword = random(testwords);
	var testpos = random(testposs);
	var testpos1 = random(testposs1);
	var testpos2 = random(testposs2);
	var testpos3 = random(testposs3);
	var testpos4 = random(testposs4);
	var testpos5 = random(testposs5);
	var testpos6 = random(testposs6);
	var swear = random(swears);
	var price1 = int(random(46, 132));
	
		
	for(var i = 0; i < words.length; i++) { 
		
			
	if (words[i] === testword) {
	//output += random(RiTa.similarBySound(words[i]));
		output += "[redacted]"
		
	} 
	
	else if (words[i] === swear) {
		output += "[You kiss your mom with that mouth?!]";
	
	} 
	
	else if (pos[i] === testpos) {
		output += random(RiTa.similarBySound(words[i]));
	
	} 
	else if (pos[i] === testpos1) {
		output += random(RiTa.similarByLetter(words[i]));
	
	} 	
	else if (pos[i] === testpos2) {
		output += "[redacted]";
		} 
	
	else if (pos[i] === testpos3) {
		output += random(RiTa.similarBySound(words[i]));
	
	} 
	else if (pos[i] === testpos4) {
		output += random(RiTa.similarByLetter(words[i]))
	
	} 	
	else if (pos[i] === testpos5) {
		output += random(RiTa.similarBySound(words[i]));
		
	} 
	else if (pos[i] === testpos6) {
		output += "[redacted]";
	
		
	} else { 
	output += words[i];
	}
	output += " ";
	}
	
	fill(9, 9, 9);
	textFont(myfont);
	text('Your price', windowWidth/2-60, 430, 630);
	text(price1, windowWidth/2-60, 480, 630);
	text('$', windowWidth/2, 480, 630);
	textarea.remove();
	button.remove();
	
	fill(27, 36, 27);
	textFont(myfont1);
	textSize(14);
	textLeading(30);
	text(s, windowWidth/2-515, 470, 455); 
	
	button4 = createButton('Rewrite');
	button4.position(windowWidth/2-275, 790);
	button4.size(100, 30);
	button4.mousePressed(reset);
	
	button5 = createButton('Lower Price');
	button5.position(windowWidth/2-130, 790);
	button5.size(100, 30);
	button5.mousePressed(lower);

}

function lower(){
	var price2 = int(random(0, 35));
	
	button5.remove();
	button4.remove();
	
	fill(76.5, 91, 76.9);
	rect(windowWidth/2, 320, 680, 590);	
	
	fill(9, 9, 9);
	textFont(myfont1);
	textSize(14);
	text(output, windowWidth/2+30, 460, 570);
	
	textFont(myfont);
	textSize(30);
	text('Improved Text:', windowWidth/2, 430, 630);
	text('New Price:', windowWidth/2, 750, 630);
	text(price2, windowWidth/2, 800, 630);
	text('$', windowWidth/2+40, 800, 630);
	
	button6 = createButton('Send');
	button6.position(windowWidth/2-130, 790);
	button6.size(100, 30);
	button6.mousePressed(send);
	
	button7 = createButton('Rewrite');
	button7.position(windowWidth/2-275, 790);
	button7.size(100, 30);
	button7.mousePressed(reset1);
}

function reset (){
	button4.remove();
	button5.remove();
	
	fill(76.5, 91, 76.9);
	rect(windowWidth/2, 320, 680, 590);	
	fill(9, 9, 9);
	textFont(myfont1);
	textSize(14);
	text('Oops! We`re not entirely done figuring out how to delete your message from our archives. A patch will be coming soon.', windowWidth/2+30, 460, 570);
	textSize(18);
	text('In the mean time simply refresh the page in order to write a new message.', windowWidth/2+30, 520, 570);
}

function reset1 (){
	button6.remove();
	button7.remove();
	
	fill(76.5, 91, 76.9);
	rect(windowWidth/2, 320, 680, 590);	
	fill(9, 9, 9);
	textFont(myfont1);
	textSize(14);
	text('Oops! We`re not entirely done figuring out how to delete your message from our archives. A patch will be coming soon.', windowWidth/2+30, 460, 570);
	textSize(18);
	text('In the mean time simply refresh the page in order to write a new message.', windowWidth/2+30, 520, 570);
}

function send(){
	button6.remove();
	button7.remove();
	
	fill(76.5, 91, 76.9);
	rect(windowWidth/2, 320, 680, 590);	
	fill(9, 9, 9);
	textFont(myfont);
	textSize(30);
	text('Your message has been sent to your email along with your bill. Thank you for using Word$!', windowWidth/2+30, 460, 570);
	
}


function mousePressed(){
	var d = dist(mouseX, mouseY, windowWidth-90, 1300);
	var e = dist(mouseX, mouseY, 90, 1300);
	
	if (d < 60) {
	fill(9, 9, 9);
	rect(0, 1000, windowWidth, 350);
	fill(98.7, 93.7, 93.7);
	textFont(myfont1);
	textSize(25);
	textAlign(LEFT);
	text('Most Popular Subscribtions Left Now', 10, 1030);
	textSize(15);
	textAlign(CENTER, CENTER);
	text('05/14/2026', windowWidth/2, 1300); 
	text('Word of the Day: OXYPHENBUTAZONE - A type of inflammatory medication. 0.39 / Month', windowWidth/2, 1320);
	for (var j = 50; j < width; j+=230) {
		rect (j, 1060, 160, 170);	
	}
	textAlign(CENTER, CENTER);
	textSize(50);
	textFont(myfont);	
	fill(9, 9, 9);
	text('Critic', 130, 1135);
	text('Disney', 360, 1135);
	text('Music', 590, 1135);
	text('Death', 820, 1135);
	text('Covid', 1050, 1135);
	text('Yeet', 1280, 1135);
	text('Politics', 1510, 1135);
	text('Be', 1740, 1135);
	text('Yes', 1970, 1135);
	text('Blog', 2200, 1135);
	text('AK-47', 2430, 1135);
	text('The', 2660, 1135);
	text('Data', 2890, 1135);
	text('Book', 3120, 1135);
	text('News', 3350, 1135);
	text('Game', 3580, 1135);
	text('White', 3810, 1135);
	text('Name', 4040, 1135);
	
	//circle next 2
	stroke(100);
	ellipse(90, 1300, 60, 60);
	fill (98.7, 93.7, 93.7);
	text('<', 90, 1290);
	
	noStroke();
	textSize(16);
	textFont(myfont1);	
	text('3.95 / Month', 130, 1250);
	text('4.95 / Month', 360, 1250);
	text('1.99 / Month', 590, 1250);
	text('2.59 / Month', 820, 1250);
	text('2.59 / Month', 1050, 1250);
	text('1.99 / Month', 1280, 1250);
	text('3.99 / Month', 1510, 1250);
	text('4.59 / Month', 1740, 1250);
	text('3.59 / Month', 1970, 1250);
	text('3.95 / Month', 2200, 1250);
	text('4.95 / Month', 2430, 1250);
	text('1.99 / Month', 2660, 1250);
	text('2.59 / Month', 2890, 1250);
	text('2.59 / Month', 3120, 1250);
	text('1.99 / Month', 3350, 1250);
	text('3.99 / Month', 3580, 1250);
	text('4.59 / Month', 3810, 1250);
	text('3.59 / Month', 4040, 1250);
	
	} else if (e < 60) {
		
	fill(9, 9, 9);
	rect(0, 1000, windowWidth, 350);
	fill(98.7, 93.7, 93.7);
	textFont(myfont1);
	textSize(25);
	textAlign(LEFT);
	text('Most Popular Subscribtions Right Now', 10, 1030);
	textSize(15);
	textAlign(CENTER, CENTER);
	text('05/14/2026', windowWidth/2, 1300); 
	text('Word of the Day: OXYPHENBUTAZONE - A type of inflammatory medication. 0.39 / Month', windowWidth/2, 1320);
	for (var j = 50; j < width; j+=230) {
		rect (j, 1060, 160, 170);
	}
	
	textAlign(CENTER, CENTER);
	textSize(50);
	textFont(myfont);	
	fill(9, 9, 9);
	text('Corona', 130, 1135);
	text('Fuck', 360, 1135);
	text('Virus', 590, 1135);
	text('No', 820, 1135);
	text('Time', 1050, 1135);
	text('Her', 1280, 1135);
	text('Critic', 1510, 1135);
	text('Shit', 1740, 1135);
	text('Music', 1970, 1135);
	text('Meme', 2200, 1135);
	text('Chocolate', 2430, 1135);
	text('Trump', 2660, 1135);
	text('Be', 2890, 1135);
	text('Ice \n Cream', 3120, 1135);
	text('Fear', 3350, 1135);
	text('Art', 3580, 1135);
	text('Black', 3810, 1135);
	text('Dandruff', 4040, 1135);
	
	//circle next 3
	stroke(100);
	ellipse(windowWidth-90, 1300, 60, 60);
	fill (98.7, 93.7, 93.7);
	text('>', windowWidth-90, 1290);
	
	
	
	noStroke();
	textSize(16);
	textFont(myfont1);	
	text('4,95 / Month', 130, 1250);
	text('3.95 / Month', 360, 1250);
	text('3.99 / Month', 590, 1250);
	text('2.59 / Month', 820, 1250);
	text('1.99 / Month', 1050, 1250);
	text('3.59 / Month', 1280, 1250);
	text('2.59 / Month', 1510, 1250);
	text('1.99 / Month', 1740, 1250);
	text('4.59 / Month', 1970, 1250);
	text('3.95 / Month', 2200, 1250);
	text('4.95 / Month', 2430, 1250);
	text('1.99 / Month', 2660, 1250);
	text('2.59 / Month', 2890, 1250);
	text('2.59 / Month', 3120, 1250);
	text('1.99 / Month', 3350, 1250);
	text('3.99 / Month', 3580, 1250);
	text('4.59 / Month', 3810, 1250);
	text('3.59 / Month', 4040, 1250);
	}
	
	
}
