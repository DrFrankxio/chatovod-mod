// ==UserScript==
// @name        MadDrFrank's Script.
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 17/8/2025, 14:36:29
// ==/UserScript==
setTimeout(()=>{
  setInterval(()=>{
    document.getElementsByTagName("textarea")[0].value=document.getElementsByTagName("textarea")[0].value
      .replace(":laugh:","[size=30]🤣[/size]")
      .replace(":ded:","[size=30]😵[/size]")
      .replace(":smile:","[size=30]🙂[/size]")
      .replace(":think:","[size=30]🤔[/size]")
      .replace(":fist:","[size=30]✊🏿[/size]")
      .replace(":geek:","[size=30]🤓[/size]")
      .replace(":alien:","[size=30]👽[/size]")
      .replace(":scientist:","[size=30]👨🏿‍🔬[/size]")
      .replace(":abduzcan:","[size=30]👽👽👽¡¡¡ABDUZCAN A AURONPLAY!!!👽👽👽[/size]")
  },200)
},1000)
