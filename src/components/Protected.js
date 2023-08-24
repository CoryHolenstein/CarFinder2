import { Navigate } from "react-router-dom";
import {
    useRecoilValue
} from 'recoil';
import { isLoggedInState } from '../atoms';

export const Protected = ({ isLoggedIn, children }) => {
    const authenticated = useRecoilValue(isLoggedInState);
    if (authenticated === "false") {
        return <Navigate to="/" replace />;
    }
    return children;
};
