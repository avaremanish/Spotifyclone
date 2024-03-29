
export const initialState ={
    user: null,
    playlist:[],
    playing: false,
    item:null,
};

const reducer =(state, action)=>{
    console.log(action);

    // Action  => type, payload[]

    switch(action.type){
        case "SET_USER":
            return {
                 ...state,
                 user: action.user       
                }
                default:
                return state;
            }
}

export default reducer;