import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const UserProtectedRoutes = (props) => {
    const [error, setError] = useState();
    const [isUser, setIsUser] = useState(false);
    const history = useHistory();

    async function callme() {
        const res = await UserService.getUserBoard();
        console.log(res);
    }
    callme();
    UserService.getUserBoard().then(
        (response) => {
            setIsUser(true)
            console.log(response)
        },
        (error) => {
            const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log("error")
            setError(_content);
            setIsUser(false)

            if (error.response && error.response.status === 401) {
                EventBus.dispatch("logout");
            }
            history.push("/login")
        }
    );

    return (!error && isUser ? props.children : null);

};

export default UserProtectedRoutes;