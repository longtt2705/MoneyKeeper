import  {base, darkTheme, lightTheme,colorOptions} from './themes';
// light-blue
const initialState =[ {theme: { ...base, ...lightTheme, ...colorOptions.blue }},
                      {theme: { ...base, ...lightTheme, ...colorOptions.orange }},
                      {theme: { ...base, ...darkTheme, ...colorOptions.blue }},
                      {theme: { ...base, ...darkTheme, ...colorOptions.orange }}

];


const themeReducer =(state = initialState,action)=>{
    switch(action.type){
        case "ACCTION_TYPE" :
            return;
        default:
            return state;
    }
}
export default themeReducer;