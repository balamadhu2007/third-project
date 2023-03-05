
const initialState ={
    name:'balu',
    score: 180

}

 function PlayeroneReducer(state=initialState,action){
            const{type,payload} = action
          switch(type){
              case 'INC_PLAYERONE_SCORE':
              return {...state,score:state.score+1}
 
                case 'DEC_PLAYERONE_SCORE':
                return {...state,score:state.score-1}
                case 'INC_PLAYERONE_OWNSCORE':
              return {...state,score:state.score+payload}
 
                case 'DEC_PLAYERONE_OWNSCORE':
                return {...state,score:state.score-payload}
                default:
                return state
   
            }

}
export default PlayeroneReducer