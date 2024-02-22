// Create a SpeechSynthesisUtterance object for managing speech synthesis
var synth = window.speechSynthesis;

// Word arrays
var nouns = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "does not like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var moreNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Indices to keep track of the next word to speak
var nounIndex = 0;
var verbIndex = 0;
var adjectiveIndex = 0;
var moreNounIndex = 0;
var placeIndex = 0;

// Function to speak the next word from a category
function speakNext(category) {
	var selectedWord = getNextWord(category);
	speakWord(selectedWord);
}

// Function to get the next word from a category
function getNextWord(category) {
	switch (category) {
		case 'nouns':
			return nouns[nounIndex++ % nouns.length];
		case 'verbs':
			return verbs[verbIndex++ % verbs.length];
		case 'adjectives':
			return adjectives[adjectiveIndex++ % adjectives.length];
		case 'moreNouns':
			return moreNouns[moreNounIndex++ % moreNouns.length];
		case 'places':
			return places[placeIndex++ % places.length];
		default:
			return '';
	}
}

// Function to speak a specific word
function speakWord(word) {
	var utterThis = new SpeechSynthesisUtterance(word);
	synth.speak(utterThis);
}

// Function to speak the generated sentence
function speakNow() {
	var sentence = `${getNextWord('nouns')} ${getNextWord('verbs')} ${getNextWord('adjectives')} ${getNextWord('moreNouns')} ${getNextWord('places')}`;
	speakWord(sentence);
}


// Variable to store the last constructed sentence
var lastConstructedSentence = '';

// Function to store the last constructed sentence
function speakNow() {
	lastConstructedSentence = `${getNextWord('nouns')} ${getNextWord('verbs')} ${getNextWord('adjectives')} ${getNextWord('moreNouns')} ${getNextWord('places')}`;
	speakWord(lastConstructedSentence);
}

// Function to play back the last constructed sentence
function playbackLastSentence() {
	if (lastConstructedSentence) {
		speakWord(lastConstructedSentence);
	} else {
		// Handle the case where there is no last constructed sentence
		console.log("No sentence available for playback");
	}
}

