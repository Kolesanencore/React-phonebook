import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const persistedUser = JSON.parse(localStorage.getItem('user'));
const persistedToken = localStorage.getItem('token');
const persistedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const initialState = {
  user: persistedUser || { name: null, email: null },
  token: persistedToken,
  isLoggedIn: persistedIsLoggedIn,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import { register, logIn, logOut, refreshUser } from './operations';

// const persistedUser = JSON.parse(localStorage.getItem('user'));
// const persistedToken = localStorage.getItem('token');
// const persistedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// const initialState = {
//   user: persistedUser || { name: null, email: null },
//   token: persistedToken,
//   isLoggedIn: persistedIsLoggedIn,
//   isRefreshing: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state, action) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
