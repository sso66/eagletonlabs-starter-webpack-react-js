// reducer.js
console.log( "Mounting reducer.js" );

export const reducer = ( state = "GO", action ) => {
    switch ( action.type ) {
   
        case "STOP":
            state = "STOP";
            break;
            
        case "CAUTION":
            state = "CAUTION";
            break;
            
        case "GO":
            state = "GO";
            break;
    }
    
    return state;
}

// eof