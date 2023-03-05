import React from 'react'
import {connect} from 'react-redux'
import { incplayerone,decplayerone, incplayertwo,decplayertwo,incplayeroneownscore,decplayeroneownscore } from './Actions'
const App = ({husband,wife,incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore,decplayeroneownscore}) => {
  return (
           <center>
          <div>
            <h1>PlayeroneDetails</h1>
            <p>Name:{husband.name}|{''}Score:{husband.score}</p><br/>
             <button onClick={()=>incplayeroneownscore(5)}>INC1</button>
             <button onClick={()=>decplayeroneownscore(2)}>DEC1</button>

                  <hr/>
            <h1>PlayertwoDetails</h1>
            <p>Name:{wife.name}|{''}Score:{wife.score}</p><br/>
            <button onClick={()=>incplayertwo()}>INC2</button>
            <button onClick={()=>decplayertwo()}>DEC2</button>
            
        </div>
        </center>
  )
}
const mapStateToProps = (state) => ({
husband:state.husband,
wife:state.wife

})

export default connect(mapStateToProps,{incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore,decplayeroneownscore})(App)
