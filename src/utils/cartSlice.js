import {createSlice} from '@reduxjs/toolkit'


const cartSlicer = createSlice({
    name :"cart",
    initialState : {
        items : []
    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload)
        },
        editItem :(state,action)=>{

        },
        removeItem : (state, action)=>{

        },
        clearCart :()=>{
            state.items=[]
        }

    }

})

export const { addItem , editItem , removeItem} = cartSlicer.actions
export default cartSlicer.reducer;