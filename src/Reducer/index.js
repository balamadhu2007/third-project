import{combineReducers} from  'redux'  
import PlayeroneReducer from './Playerone'
import PlayertwoReducer from './Playetwo'

   const reducer = combineReducers({
        husband:PlayeroneReducer,
        wife:PlayertwoReducer
})
export default reducer