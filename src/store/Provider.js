import {useReducer} from 'react'
// file này dùng cung cấp store của bạn tới các compoment qua context (3)
import Context from "./Context"; //(4)
import reducer, {initState} from './reducer';
import logger from './logger'
//(5)
function Provider({children}){
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return(
        <Context.Provider value={[state, dispatch]}>
                {children}
        </Context.Provider>
    )
}
export default Provider