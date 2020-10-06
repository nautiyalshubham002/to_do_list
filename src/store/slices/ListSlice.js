const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  add: false,
  list: [
    {
      title: 'nothing to show',
    },
  ],
};

const ListSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const obj = {
        title: action.payload.title,

        desc: action.payload.desc,
      };
      if (state.list[0].title === 'nothing to show') {
        state.list = [];
      }
      state.list.push(obj);
    },
    setAdd: (state, action) => {
      state.add = action.payload;
    },
  },
});
export const {addItem, setAdd} = ListSlice.actions;

export default ListSlice.reducer;
