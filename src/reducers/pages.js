export const pages = (state = {
    currentUrl : ''
},action)=>{

    switch(action.type){
        case 'URL_CHANGED':

            console.log('Zmieniam url na :',action.url);
            return Object.assign({},state,{
                currentUrl : action.url
            });

        default :
            return state;
        
    }

}