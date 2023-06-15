import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		async function getMe() {
			try {
				const { user } = await fetchMe();
				setUser(user);
				setLoggedIn(true);
			} catch (error) {
				setUser(null);
				setLoggedIn(false);
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

	console.log("user from Auth Context", user);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
