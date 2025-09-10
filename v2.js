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
  onkeydown=(e)=>{
    if(e.keyCode==120){
      txt=prompt(`
      Introduce tu emoji:
        laugh 🤣
        dead 😵
        smile 🙂
        think 🤣
        nerd 🤔
        nerdo 🤓
        fist ✊
        alien 👽
        scientist 👨🏿‍🔬
        abduzcan => ojalá y lo abduzcan al Auronplay
      `)
      switch(txt){
        case "laugh":
            msg="🤣"
          break
        case "dead":
            msg="😵"
          break
        case "smile":
            msg="🙂"
          break
        case "laugh":
            msg="🤣"
          break
        case "think":
            msg="🤔"
          break
        case "nerdo":
            msg="🤓"
          break
        case "fist":
            msg="✊🏿"
          break
        case "alien":
            msg="👽"
          break
        case "scientist":
            msg="👨🏿‍🔬"
          break
        case "abduzcan":
            msg="👽👽👽¡¡¡ABDUZCAN A AURONPLAY!!!👽👽👽"
          break
      }
      document.getElementsByTagName("textarea")[0].value="[size=30]"+msg+"[/size]"
    }
  }
},1000)
