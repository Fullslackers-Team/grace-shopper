import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUser } from "../../api/users";
import { login } from "../../api/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		async function getMe() {
			try {
				const resp = await getUser();
				if (resp.data) {
					setUser(resp.data);
					setLoggedIn(true);
				} else {
					setUser(null);
					setLoggedIn(false);
				}
			} catch (error) {
				console.error(error);
			}
		}
		getMe();
	}, [loggedIn]);

	const contextValue = {
		user,
		setUser,
		loggedIn,
		setLoggedIn,
	};
	AuthProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
