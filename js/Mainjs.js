var quoteArray = [
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `“So many books, so little time.”`,
  `“A room without books is like a body without a soul.”`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
  `“You've gotta dance like there's nobody watching,
  Love like you'll never be hurt,
  Sing like there's nobody listening,
  And live like it's heaven on earth.”`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
  `“You only live once, but if you do it right, once is enough.”`,
  `“Be the change that you wish to see in the world.”`,
  `“In three words I can sum up everything I've learned about life: it goes on.”`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
  `“Don’t walk in front of me… I may not follow
  Don’t walk behind me… I may not lead
  Walk beside me… just be my friend”`,
  `“If you tell the truth, you don't have to remember anything.”`,
  `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
  `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
  `“A friend is someone who knows all about you and still loves you.”`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”`,
  `“Here's to the crazy ones. The misfits. The rebels. The troublemakers.”`,
  `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`
];
var quoteArrayName = [
  `― Marilyn Monroe`,
  `― Albert Einstein`,
  `― Frank Zappa`,
  `― Marcus Tullius Cicero`,
  `― Bernard M. Baruch`,
  `― William W. Purkey`,
  `― Dr. Seuss`,
  `― Mae West`,
  `― Mahatma Gandhi`,
  `― Robert Frost`,
  `― J.K. Rowling, `,
  `― Albert Camus`,
  `― Mark Twain`,
  `― C.S. Lewis, The Four Loves`,
  `― Maya Angelou`,
  `― Elbert Hubbard`,
  `― Oscar Wilde`,
  `― Steve Jobs`,
  `― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`
];
var quoteArrayImgs = [
  '<img   src="./imges/2.jpg" alt="">',
  '<img   src="./imges/3.jpg" alt="">',
  '<img   src="./imges/4.jpg" alt="">',
  '<img   src="./imges/5.jpg" alt="">',
  '<img   src="./imges/6.jpg" alt="">',
  '<img   src="./imges/7.jpg" alt="">',
  '<img   src="./imges/8.jpg" alt="">',
  '<img   src="./imges/9.jpg" alt="">',
  '<img   src="./imges/10.jpg" alt="">',
  '<img   src="./imges/11.jpg" alt="">',
  '<img   src="./imges/12.jpg" alt="">',
  '<img   src="./imges/13.jpg" alt="">',
  '<img   src="./imges/14.jpg" alt="">',
  '<img   src="./imges/15.jpg" alt="">',
  '<img   src="./imges/16.jpg" alt="">',
  '<img   src="./imges/17.jpg" alt="">',
  '<img   src="./imges/18.jpg" alt="">',
  '<img   src="./imges/19.jpg" alt="">',
  '<img   src="./imges/20.jpg" alt="">'
];

var usedIndexs = [];
let loadingText = document.querySelector('.cardBtn');
var soundBtn = document.querySelector('.sound');
var copyBtn = document.querySelector('.copy');
var twitterBtn = document.querySelector('.twitter');


function generateQuote () {
  loadingText.innerText = 'Loading Quote';
  loadingText.classList.add('Loading');
  if (usedIndexs.length -1 == quoteArray.length -1) {usedIndexs = [];}

  var checkUsedIndex = false;
  do {
    var randNumber = Math.floor(Math.random()*quoteArray.length);
    if (usedIndexs.includes(quoteArray[randNumber]) == false) {checkUsedIndex = true} ;
  } while (checkUsedIndex == false)

usedIndexs.push(quoteArray[randNumber]);
  var quoteName =  quoteArray[randNumber];
  var ArrayName =  quoteArrayName[randNumber];
  var quoteArrayImgss =  quoteArrayImgs[randNumber];
  document.getElementById('quoteimgs').innerHTML = quoteArrayImgss;
  document.getElementById('authorOutput').innerHTML = ArrayName;
  document.getElementById('quoteOutput').innerHTML = quoteName;
  loadingText.innerText = 'New Quote';
  loadingText.classList.remove('Loading');

}

var quoteText = document.getElementById('quoteOutput');
var autherText = document.getElementById('authorOutput');
soundBtn.addEventListener('click' , ()=> {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}  by ${autherText.innerHTML}`);
  speechSynthesis.speak(utterance);
});
copyBtn.addEventListener('click' , ()=> {
  navigator.clipboard.writeText(quoteText.innerText)
});
twitterBtn.addEventListener('click' , ()=> {
  let tweetUrl = `https://twitter.com/compose/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, '_blank');
});

// Start Movies 

var moviesSection = [
  '<img src="./imges/Movies/2.jpg">',
  '<img src="./imges/Movies/3.jpg">',
  '<img src="./imges/Movies/4.jpg">',
  '<img src="./imges/Movies/5.jpg">',
  '<img src="./imges/Movies/6.jpg">',
  '<img src="./imges/Movies/7.jpg">',
  '<img src="./imges/Movies/8.jpg">',
  '<img src="./imges/Movies/9.jpg">',
  '<img src="./imges/Movies/10.jpg">',
  '<img src="./imges/Movies/11.jpg">',
  '<img src="./imges/Movies/12.jpg">',
  '<img src="./imges/Movies/13.jpg">',
  '<img src="./imges/Movies/14.jpg">',
  '<img src="./imges/Movies/15.jpg">'
];

var movieName = [
  '― The Incredible Hulk 2008',
  '― Iron Man 2',
  '― Thor 2011',
  '― Captain America: The First Avenger 2011',
  '― Marvel’s The First Avengers  2012',
  '― Iron Man 3',
  '― Thor: The Dark World 2013',
  '― Captain America: The Winter Soldier 2014',
  '― Guardians of the Galaxy 2014',
  '― Avengers: Age of Ultron 2015',
  '― Ant-Man 2015',
  '― Captain America: Civil War 2016',
  '― Doctor Strange 2016',
  '― Guardians of the Galaxy Vol. 2'
]

var movieUsedIndex = [];


function moviesRandom () {
  if (movieUsedIndex.length -1 == moviesSection.length -1 ) {
    movieUsedIndex = [];
  }
  var checkMoviesNumber = false;
  do {
    var movieNumber = Math.floor(Math.random()*moviesSection.length);
    if (movieUsedIndex.includes(movieName[movieNumber]) == false) {
      checkMoviesNumber = true ;
    }
  } while (checkMoviesNumber == false)
  movieUsedIndex.push(movieName[movieNumber])
  document.getElementById('movieimgs').innerHTML = moviesSection[movieNumber];
  document.getElementById('movieNames').innerHTML = movieName[movieNumber];
}

// Start Memes

var MemesRandom = [
  
  '<img src="./imges/Mems/2.jpg">',
  '<img src="./imges/Mems/3.jpg">',
  '<img src="./imges/Mems/4.jpg">',
  '<img src="./imges/Mems/5.jpg">',
  '<img src="./imges/Mems/6.jpg">',
  '<img src="./imges/Mems/7.jpg">',
  '<img src="./imges/Mems/8.jpg">',
  '<img src="./imges/Mems/9.jpg">',
  '<img src="./imges/Mems/10.jpg">'
];

var usedMemesIndex = [];

function memesRandom () {
  if(MemesRandom.length -1 == usedMemesIndex.length -1) {
    usedMemesIndex = [];
  }
  
  var checkRandomMemes = false;
  do {
    var numMemes = Math.floor(Math.random() * MemesRandom.length);
    if (usedMemesIndex.includes(MemesRandom[numMemes]) == false ) {
      checkRandomMemes = true;
    }
  }while (checkRandomMemes == false)

  usedMemesIndex.push(MemesRandom[numMemes]);
  document.getElementById('memesimgs').innerHTML = MemesRandom[numMemes];
}