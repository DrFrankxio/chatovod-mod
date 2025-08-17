// ==UserScript==
// @name        New script bing.com
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 17/8/2025, 14:36:29
// ==/UserScript==
setTimeout(()=>{
  onkeydown=(e)=>{
    if(e.keyCode==120){
      txt=prompt("Introduce tu emoji.")
      if(txt=="laugh"){
        alert("[size=30]🤣[/size]")
      }
      if(txt=="dead"){
        alert("[size=30]😵[/size]")
      }
      if(txt=="smile"){
        alert("[size=30]🙂[/size]")
      }
      if(txt=="think"){
        alert("[size=30]🤔[/size]")
      }
      if(txt=="nerd"){
        alert("[size=30]🤓[/size]")
      }
      if(txt=="nerdo"){
        alert("[size=30]🤓[/size]")
      }
    }
  }
},1000)
