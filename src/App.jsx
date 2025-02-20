import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [emojis, setEmojis] = useState(
    ['🤢','❤️','🐙','🤑','👻','🤷‍♀️','😺','👽','🗺️',
      '🐉', '🦄', '🐢', '🐠', '🐺', '🐘', '🦊', '🐦', '🦋', '🐛', '🐜', '🐞', 
      '🌪️', '🌻', '🌹', '🌼', '🌵', '🌲', '🌴', '🌳', '🌲', '🌱', '🌿', '🍁', 
      '🍄', '🍃', '🌝', '🌚', '🌞', '🌜', '🌛', '🌟', '🌈', '💫', '✨', '🌠', 
      '🌌', '🔮', '🪐', '🌍', '🌎', '🌏', '🌊', '🌋', '🏞️', '🏜️', '🏖️', 
      '🏝️', '🏕️', '🏕', '⛷️', '🏂', '🚀', '🛸', '🛷', '⛵', '🚤', '🚢', 
      '🚂', '🚆', '🚅', '🚉', '🚗', '🚙', '🚕', '🛻', '🚓', '🚔', '🚨', '🚧', 
      '🚦', '⛽', '🚏', '🚨', '🛣️', '🛤️', '🚥', '🛑', '📦', '📤', '📥', 
      '📈', '📉', '📊', '📅', '📆', '📃', '📜', '📑', '📋', '📌', '📍', 
      '📎', '📏', '📐', '🖇️', '📒', '📚', '📖', '📃', '📄', '✉️', '📧', 
      '📨', '📩', '💌', '📬', '📮', '📰', '🗞️', '🗂️', '🗃️', '📚', '📘', 
      '📙', '📚', '📓', '📔', '🎓', '🎒', '🧳', '🎁', '🎀', '🎉', '🎊', '🎠', 
      '🎡', '🎢', '🪀', '🎮', '🎰', '🎯', '🎳', '🎲', '♟️', '🎤', '🎧', '🎼', 
      '🎷', '🎺', '🎸', '🎻', '🎹', '🎬', '🎪', '🎨', '🖌️', '🖍️', '🎭', 
      '🖼️', '🧩', '🧸', '🧸', '🎯', '⏳', '⏰', '🕰️', '🕛', '🕓', '🕢', 
      '⏱️', '⏲️', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕙', '🕚', 
      '🧳', '🧳', '🗝️', '🔑', '🛋️', '🛏️', '🛁', '🚽', '🚿', '🪣', '🧴', 
      '🧶', '🧷', '🧵', '🪑', '🛋️', '🛀', '🧹', '🧺', '🧻', '🧽', '🪥', 
      '🧦', '🧧', '🧨', '🧪', '🧯', '🧳', '🧷', '🧶', '💎', '🪙', '💰', 
      '💴', '💵', '💶', '💷', '💸', '💳', '🧾', '🛍️', '🎀', '🎁', '💝', 
      '🎗️', '🏅', '🥇', '🥈', '🥉', '🏆', '🏅', '🥇', '🥈', '🥉', '🏆', '🏵️', 
      '🎖️', '🪙', '🧧', '🧬', '🔬', '🔭', '🧪', '🔮', '🪄', '💡', '🔌', 
      '🔋', '⚡', '🔦', '📡', '💻', '🖥️', '🖨️', '🖱️', '🖲️', '🖧', '📞', 
      '📱', '☎️', '📞', '🔭', '🧭', '📺', '📷', '📸', '📹', '📼', '📠', 
      '🖨️', '🔌', '💡', '💻', '🖥️', '📱', '📞', '📡', '🔋', '⚡', '📺', 
      '🧭', '📻', '🎙️', '🎚️', '🎛️', '🎼', '🎧', '🎶', '🎙️', '🗣️', '👂', 
      '🧔', '👩‍🦰', '👩‍🦳', '👩‍🦲', '🦱', '🦰', '🧑‍🦳', '👱‍♀️', '🧑‍🦰', 
      '👱‍♂️', '👩‍🦱', '🧑‍🦱', '🧑‍🦳', '🧑‍🦲', '👴', '👵', '👩‍🦳', '👨‍🦳'
      ]
      )
  const [emoji,setEmoji] = useState('🗺️')

  // const saidos = [1,2,8]

  useEffect(() => 
      console.log(emojis)
  ,[emojis])

  function trocarEmoji(){
    if(emojis.length > 0){
      let i = Math.floor(Math.random() * emojis.length)
      setEmoji(emojis[i])
      setEmojis(emojis.filter((e) => e != emojis[i]))
    }else{
      // setEmoji("Acabou :P")
      alert("Acabou!")
    }

//////////////////////////
// let i
// do{
//   i = Math.floor(Math.random() * emojis.length)
// }while(saidos.indexOf(i) != -1)
//   setEmoji(emojis[i])
//   setEmojis(emojis.filter((e) => e != emojis[i]))

//   saidos.push(i)
////////////

  }

  return (
    <div className='container-app'>
      <p className='emoji' onClick={trocarEmoji}>
        {emoji}
      </p>
    </div>
  )
}

export default App
