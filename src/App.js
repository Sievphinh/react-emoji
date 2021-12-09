import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import EmojiResults from './components/EmojiResults.jsx'
import { filterEmoji } from './utils/filterEmoji'
import Emojis from './data/emoji.json'

function App() {
    const [data, setData] = useState(Emojis.slice(0,30))
    const handleChange = (e) => {
        e.preventDefault()
        setData(filterEmoji(e.target.value, 30))
    }
  return (
    <div className="App">
      <h1>Emoji Search App 🐒</h1>
      <input type="text" onChange={handleChange}/>
      <EmojiResults emojiData = {data}/>
    </div>
  );
}

export default App;
