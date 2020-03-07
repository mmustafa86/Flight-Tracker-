// import { CHANGE_SEARCH_FIELD} from './action'

export const setSearchField = (text) => {
    console.log(text)
    return {
        type: 'CHANGE_SEARCH_FIELD',
        search: text
    }
}


