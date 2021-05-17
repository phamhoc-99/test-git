const initialState = [
     {
          id: "1",
          name: "chicken"
     },
     {
          id: "2",
          name: "Potato"
     },
     {
          id: "3",
          name: "gas"
     },
     {
          id: "4",
          name: "noodle"
     },
     {
          id: "5",
          name: "rice"
     },
     {
          id: "6",
          name: "Combo"
     }
];

const myReducer = (state = initialState, action) => {
     switch (action.type) {
          default: return state;
     }
};

export default myReducer;