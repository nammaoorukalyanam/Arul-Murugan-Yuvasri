const translations = {
  en: {
    musicOff:"Music Off",home:"Home",coupleNav:"The Couple",detailsNav:"Wedding Details",storyNav:"Our Story",locationNav:"Location",contactNav:"Contact",
    eyebrow:"Together Forever",invite:"We cordially invite you to celebrate our wedding",date:"Thursday, 17th September 2026",viewInvitation:"View Invitation",
    coupleEyebrow:"A MATCH MADE IN HEAVEN",meet:"Meet the Couple",groomRole:"Groom",brideRole:"Bride",groomJob:"Asst. Professor, Jairams College, Karur",
    detailsEyebrow:"WITH THE BLESSINGS OF OUR FAMILIES",detailsTitle:"Wedding Details",weddingDateLabel:"Wedding Date",weddingDateValue:"Thursday,<br>17th September 2026",
    muhurthamLabel:"Muhurtham",muhurthamValue:"Above 7.00 AM",venueLabel:"Wedding Venue",venueValue:"Arulmigu Kalyana Narasingaperumal Temple",
    storyEyebrow:"A BEAUTIFUL BEGINNING",storyTitle:"Two hearts, one blessed journey.",storyText:"“With the love of our families and the grace of the divine, we begin a new chapter together. Your presence will make our celebration even more meaningful.”",
    saveDate:"SAVE THE DATE",countTitle:"Counting the moments",days:"Days",hours:"Hours",mins:"Minutes",secs:"Seconds",
    receptionEyebrow:"LET THE CELEBRATION CONTINUE",receptionTitle:"Reception",mapReception:"View on Google Maps",weddingVenueShort:"Wedding Venue",receptionVenueShort:"Reception Venue",map:"View on Maps",
    rsvpEyebrow:"YOUR PRESENCE IS OUR BLESSING",rsvpTitle:"We look forward to celebrating with you.",rsvpText:"Thank you for being a part of our special day.",footer:"callto:91761 08863"
  },
  ta: {
    musicOff:"இசை நிறுத்தப்பட்டது",home:"முகப்பு",coupleNav:"மணமக்கள்",detailsNav:"திருமண விவரங்கள்",storyNav:"எங்கள் கதை",locationNav:"இடம்",contactNav:"தொடர்பு",
    eyebrow:"என்றும் இணைந்து",invite:"எங்கள் திருமண விழாவை மகிழ்வுடன் கொண்டாட உங்களை அன்புடன் அழைக்கிறோம்",date:"வியாழக்கிழமை, 17 செப்டம்பர் 2026",viewInvitation:"அழைப்பிதழைப் பார்க்க",
    coupleEyebrow:"இறைவனால் இணைக்கப்பட்ட இரு இதயங்கள்",meet:"மணமக்கள்",groomRole:"மணமகன்",brideRole:"மணமகள்",groomJob:"உதவிப் பேராசிரியர், ஜெயராம்ஸ் கல்லூரி, கரூர்",
    detailsEyebrow:"எங்கள் குடும்பங்களின் ஆசீர்வாதத்துடன்",detailsTitle:"திருமண விவரங்கள்",weddingDateLabel:"திருமண நாள்",weddingDateValue:"வியாழக்கிழமை,<br>17 செப்டம்பர் 2026",
    muhurthamLabel:"முகூர்த்தம்",muhurthamValue:"காலை 7.00 மணிக்கு மேல்",venueLabel:"திருமண நடைபெறும் இடம்",venueValue:"அருள்மிகு கல்யாண நரசிங்கப்பெருமாள் திருக்கோவில்",
    storyEyebrow:"ஒரு அழகான தொடக்கம்",storyTitle:"இரு இதயங்கள், ஒரே ஆசீர்வதிக்கப்பட்ட பயணம்.",storyText:"“எங்கள் குடும்பங்களின் அன்புடனும் இறைவனின் அருளுடனும் புதிய அத்தியாயத்தை ஒன்றாகத் தொடங்குகிறோம். உங்கள் வருகை எங்கள் மகிழ்ச்சியை மேலும் சிறப்பாக்கும்.”",
    saveDate:"தேதியை நினைவில் கொள்ளுங்கள்",countTitle:"திருமணத்தை நோக்கி",days:"நாட்கள்",hours:"மணிநேரம்",mins:"நிமிடங்கள்",secs:"வினாடிகள்",
    receptionEyebrow:"கொண்டாட்டம் தொடரட்டும்",receptionTitle:"வரவேற்பு",mapReception:"Google Maps-ல் பார்க்க",weddingVenueShort:"திருமண இடம்",receptionVenueShort:"வரவேற்பு இடம்",map:"வரைபடத்தில் பார்க்க",
    rsvpEyebrow:"உங்கள் வருகையே எங்கள் ஆசீர்வாதம்",rsvpTitle:"உங்களுடன் இந்த மகிழ்ச்சியைப் பகிர ஆவலுடன் காத்திருக்கிறோம்.",rsvpText:"எங்கள் சிறப்பு நாளில் எங்களுடன் இருப்பதற்கு நன்றி.",footer:"அன்புடன் உருவாக்கப்பட்ட அழைப்பிதழ்"
  }
};
let lang="en";
const langBtn=document.getElementById("langBtn");
function setLang(next){
  lang=next;
  document.documentElement.lang=lang==="ta"?"ta":"en";
  document.body.classList.toggle("tamil",lang==="ta");
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]!==undefined) el.innerHTML=translations[lang][key];
  });
  langBtn.textContent=lang==="en"?"தமிழ்":"English";
}
langBtn.addEventListener("click",()=>setLang(lang==="en"?"ta":"en"));

const menuBtn=document.getElementById("menuBtn"), navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const target=new Date("2026-09-17T07:00:00+05:30").getTime();
function tick(){
  let d=Math.max(0,target-Date.now());
  const days=Math.floor(d/86400000); d%=86400000;
  const hours=Math.floor(d/3600000); d%=3600000;
  const mins=Math.floor(d/60000); d%=60000;
  const secs=Math.floor(d/1000);
  document.getElementById("days").textContent=String(days).padStart(2,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("mins").textContent=String(mins).padStart(2,"0");
  document.getElementById("secs").textContent=String(secs).padStart(2,"0");
}
tick(); setInterval(tick,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

let playing = false;
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

function updateButtonUI() {
  const musicLabel = musicBtn.querySelector("b");
  if (playing) {
    musicLabel.textContent = (lang === "ta") ? "இசை இயங்குகிறது" : "Music On";
  } else {
    musicLabel.textContent = translations[lang].musicOff;
  }
}

function startAudio() {
  bgMusic.play().then(() => {
    playing = true;
    updateButtonUI();
    removeInteractionListeners();
  }).catch((error) => {
    // Autoplay was blocked by the browser policy; waiting for user interaction
    playing = false;
    updateButtonUI();
  });
}

// Fallback handlers for browser autoplay restrictions
function handleFirstInteraction() {
  if (!playing) {
    startAudio();
  }
}

function removeInteractionListeners() {
  ["click", "touchstart", "scroll", "keydown"].forEach((event) => {
    window.removeEventListener(event, handleFirstInteraction);
  });
}

// 1. Attempt autoplay immediately on load
startAudio();

// 2. Add fallback listeners in case autoplay is blocked
["click", "touchstart", "scroll", "keydown"].forEach((event) => {
  window.addEventListener(event, handleFirstInteraction, { once: true });
});

// 3. Manual toggle button listener
musicBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents triggering the window interaction listener
  playing = !playing;
  
  if (playing) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
  updateButtonUI();
});

setLang("en");
