export default function htmlToTxtFormatter(text){
    if(text === null || text === '') {
        return false;
    } else {
        text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
}