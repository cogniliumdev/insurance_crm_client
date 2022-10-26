import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const ModeratorProtectedRoutes = (props) => {
    const [error, setError] = useState();
    const [isModerator, setIsModerator] = useState(false);
    const history = useHistory();

    UserService.getModeratorBoard().then(
        (response) => {
            console.log(response)
            setIsModerator(true)
        },
        (error) => {
            const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log("error ", _content);
            setError(_content);
            setIsModerator(false);

            if (error.response && error.response.status === 403) {
                EventBus.dispatch("logout");
            }
            history.push("/login")
        }
    );

    return (!error && isModerator ? props.children : null );

};

export default ModeratorProtectedRoutes;