import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer=(stae,action)=>{
    
  }

  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};

export const UserChat = () => {
  return useContext(ChatContext);
};
