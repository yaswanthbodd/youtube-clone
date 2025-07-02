export const API_KEY = 'AIzaSyCbLALAp39q5oFmJgW3DJ3eg_cQxeWv3gE';

export const value_counter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }else{
        return value;
    }
}