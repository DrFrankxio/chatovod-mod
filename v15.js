// ==UserScript==
// @name        MadDrFrank's Script.
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      -
// @description Reemplaza códigos por emojis en textarea
// ==/UserScript==

// Function to get the current date and time of a specific country
function getDateForCountry(timeZone) {
  const options = {
    timeZone: timeZone,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(new Date());
}

setInterval(() => {
  // Example: Get the date and time for Tokyo, Japan
  const tokyoTime = getDateForCountry('Asia/Tokyo');
  console.log('Tokyo Time:', tokyoTime);

  // Example: Get the date and time for New York, USA
  const newYorkTime = getDateForCountry('America/New_York');
  console.log('New York Time:', newYorkTime);

  // Argentina (Buenos Aires)
  const argentinaTime = getDateForCountry('America/Argentina/Buenos_Aires');
  console.log('Argentina Time:', argentinaTime);

  // España (Madrid)
  const spainTime = getDateForCountry('Europe/Madrid');
  console.log('Spain Time:', spainTime);

  // Chile (Santiago)
  const chileTime = getDateForCountry('America/Santiago');
  console.log('Chile Time:', chileTime);

  // México (Ciudad de México)
  const mexicoTime = getDateForCountry('America/Mexico_City');
  console.log('Mexico Time:', mexicoTime);

  let ta = document.querySelector("textarea");
  if (!ta) return;

  let val = ta.value;

  val = val.replace(":earth:", "[size=30]🌎[/size]")
           .replace(":communism:", "[size=30]☭[/size]")
           .replace(":laugh:", "[size=30]🤣[/size]")
           .replace(":ded:", "[size=30]😵[/size]")
           .replace(":smile:", "[size=30]🙂[/size]")
           .replace(":think:", "[size=30]🤔[/size]")
           .replace(":fist:", "[size=30]✊🏿[/size]")
           .replace(":geek:", "[size=30]🤓[/size]")
           .replace(":scientist:", "[size=30]👨🏿‍🔬[/size]")
           .replace(":alien:", "[size=30]👽[/size]")
           .replace(":abduzcan:", "[size=30]👽👽👽¡¡¡ABDUZCAN A AURONPLAY!!!👽👽👽[/size]")
           .replace(":eval:", () => {
              try {
                return eval(
                  ta.value.split("this[")[1].split("]")[0]
                ).toString();
              } catch(e) {
                return "[error]";
              }
           })
           .replace(":date:", () => {
              try {
                return `
                  [size=30]USA: `+newYorkTime+`[/size]
                  [size=30]Japan: `+tokyoTime+`[/size]
                  [size=30]Spain: `+spainTime+`[/size]
                  [size=30]Mexico:`+mexicoTime+`[/size]
                  [size=30]Chile:`+chileTime+`[/size]
                  [size=30]Argentina:`+argentinaTime+`[/size]
                `;
              } catch(e) {
                return "[error]";
              }
           });

  ta.value = val;
}, 500);
