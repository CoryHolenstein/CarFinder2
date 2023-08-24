import { atom } from 'recoil'

export const exampleTokenState = atom({
    key: "example",
    default:"",
});

export const usernameState = atom({
    key: "usernameState",
    default: "",
});

export const isLoggedInState = atom({
    key: "isLoggedInState",
    default: "false"
})