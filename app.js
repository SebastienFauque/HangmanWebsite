// define alphabetFull
const alphabetFull = 'abcdefghijklmnopqrstuvwyxz';
//document.getElementById("submitButton").disabled = true; // sets disabled flag for submit button pre playgame
const incorrectGuesses_div = document.getElementById("incorrect-guesses");
const maxincorrectGuesses_div = document.getElementById("max-incorrect-guesses");
let submitButton_div = document.getElementById("submitButton");
let startButton_div = document.getElementById("startButton");
let textoutput_p = document.getElementById("text-output").innerHTML;
let myText_input = document.getElementById("myText").value;


// define guessesObj - need to add secretWord
let guessesObj = {
  available: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
  incorrectGuesses: '',
};

// function submitInput() {
//   console.log("in submitInput");
//   var userInput =  myText_input;
//   return userInput;
// };




function playGame(guessesObj) {
  console.log("in playGame");
  //var myText_input = submitInput(); // import from textbox

  //document.getElementById("submitButton").disabled = false; // enable submit button
  console.log("userInput", myText_input);
  console.log("typeof", typeof myText_input);


  //while loop for getting valid secret word
  while (isValidWord(myText_input) === false) {
    // change whitetext to ask for a valid secret word
    textoutput_p= "Invalid word, enter a valid word";
    submitButton.addEventListener('click', function() {
      console.log("u click submit" )
      //game("r");
    })
    // update myText_div secret word value
    myText_div = document.getElementById("myText").value;
  }
  // change whitetext to ask for letterGuess
  // submitInput() to save letterGuess to "myText"
  //   let correctLength = "myText".length === 1;
  //   let availableLetter = guessObjAvailableList.includes(tempGuess);
  //   let isNotSpace = tempGuess !== ' ';


  console.log("passed while loop", myText_div);



  // document.getElementById("text-out").innerHTML = myText_div; // export to html white text
}




function isValidWord(textboxInput_div) {
  console.log("in isValidWord")
  if (textboxInput_div.length >= 1 && alphabetFull.includes(textboxInput_div)) {

    return true;
  }
  return false;
}









      // Done make playlist with each clip or many clips from same video
      // autoplay each clip
      // Done stop clip after approx. 6 seconds
      // cycle to the next clip upon wrong answer
      // autoplay next clip
      // reset for each new game


// videoPlayer.js
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var videosArr = [
  { // 1 thinking about robbin bank
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 86,
      'end': 90,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 2 robbing bank
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 91,
      'end': 100,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 3 shoot with pan man
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 101,
      'end': 106,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 4 the first hanging after arrow to the neck
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 108,
      'end': 112,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 5 removed from tree,
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 1,
      'end': 67,
      'autoplay': 1
    },
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
  },
  { // Maybe 6 In town trial
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 109,
      'end': 130,
      'autoplay': 1
    },
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
  },
  { // 7 "first time?""
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 95,
      'end': 121,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 8 hood on then drop,
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 123,
      'end': 127,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }
]
function onYouTubeIframeAPIReady() {
  // add looping function around here to loop each video in
  for (let i = 0; i < videosArr.length; i++) {
    videoObj = videosArr[i];
    player = new YT.Player('player', videoObj);
  }
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 12000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// On start game button click, run the playGame function
