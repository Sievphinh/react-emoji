import emojis from '../data/emoji.json'

export const filterEmoji = (searchText, limitSearch) => {
    return emojis.filter(emo => emo.title.toLowerCase().includes(searchText) || emo.keywords.toLowerCase().includes(searchText )).slice(0, limitSearch)    
}

