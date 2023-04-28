import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserAuth } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { user } = UserAuth();
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            user?.uid > searchedUser?.uid
              ? user?.uid + searchedUser?.uid
              : searchedUser?.uid + user?.uid,
        };
        break;

      default:
        return state;
        break;
    }
  };

  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};

export const UserChat = () => {
  return useContext(ChatContext);
};
