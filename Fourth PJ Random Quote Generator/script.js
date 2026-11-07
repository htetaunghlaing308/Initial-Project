let btn = document.querySelector('.btn');
let quote_text = document.getElementById('quote-text');
let author = document.querySelector('.author');


 btn.addEventListener('click', () => {
    btn.innerText = "Loading Quote...";
    btn.classList.add('load');
     fetch("https://dummyjson.com/quotes/random")
     .then((response) => {
        return response.json();
     })
     .then((data) => {
        btn.classList.remove('load');
        btn.innerText = "New Quote";
        quote_text.innerText = `${data.quote}`;
        author.innerText = `By ${data.author}`;
     })
     .catch((reject) => {
        console.log(reject);
        btn.classList.remove('load');
        btn.innerText = "New Quote";
     });
     
 });

 let voice = document.getElementById('voice');
 voice.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quote_text.innerText} ${author.innerText}`);
    speechSynthesis.speak(utterance);
 });

 let copy = document.getElementById('copy');
 copy.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quote_text.innerText}  ${author.innerText}`);
 });

let twitter = document.getElementById('Twitter');
twitter.addEventListener('click', (_) => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quote_text.innerText} ${author.innerText}`;
    window.open(tweetUrl, '_blank');
}); 