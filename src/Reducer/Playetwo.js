
const initialState ={
  name:'RAMA',
  score: 40

}

function PlayertwoReducer(state=initialState,action){
          const{type} = action
           switch(type){
            case 'INC_PLAYERTWO_SCORE':
              return {...state,score:state.score+1}

            case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
              default:
               return state
 
          }

}
export default PlayertwoReducer
