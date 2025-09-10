// ==UserScript==
// @name        MadDrFrank's Script.
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      -
// @description Reemplaza códigos por emojis en textarea
// ==/UserScript==

setInterval(() => {
  let ta = document.querySelector("textarea");
  if (!ta) return;

  let val = ta.value;

  val = val.replace(":earth:", "[size=30]🌎[/size]")
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
           });

  ta.value = val;
}, 500);
