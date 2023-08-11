import { atom } from 'recoil'

export const exampleTokenState = atom({
    key: "example",
    default:"",
});

export const emailState = atom({
    key: "emailState",
    default: "",
});

export const loggedInState = atom({
    key: "loggedInState",
    default: "false"
})