import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice.jsx";
import "./index.css"


const store=configureStore({
  reducer:{
    users: userSlice
  }
});

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
)
