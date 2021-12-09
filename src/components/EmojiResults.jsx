import React from 'react'
import EmojiRowResult from './EmojiRowResult.jsx'

const EmojiResults = ({ emojiData }) => {
    return (
        <div>
            <h1>Emoji&apos;s Result</h1>
            <div>
                {emojiData.map(emoji => (
                    <EmojiRowResult key={emoji.keywords } title={ emoji.title } symbol={ emoji.symbol } />
                    )
                )
                }
            </div>
        </div>
    )
}

export default EmojiResults
