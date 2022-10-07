import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from 'react'


export const withRouter = (Component) => {
    const RouterComponent = (props) => {
        let params = useParams();
        return (
            <Component
                {...props}
                router={{params}}
            />
        );
    }

    return RouterComponent;
}