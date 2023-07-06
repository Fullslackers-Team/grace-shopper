import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUser } from "../../api/users";
import { login } from "../../api/auth";
import { getOrderByCreatorId } from "../../api/orders";
import { getOrderItems } from "../../api/orderItems";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [cookies, setCookie] = useCookies(["cart"]);

	useEffect(() => {
		async function getMe() {
			try {
				let newCart = [];
				const resp = await getUser();
				if (resp.data) {
					setUser(resp.data);
					setLoggedIn(true);

					const orderId = await getOrderByCreatorId(resp.data.id);
					const orderItems = await getOrderItems(orderId.data.creator_id);

					for (let i = 0; i < orderItems.length; i++) {
						newCart.push(orderItems[i].product_id);
					}
				} else {
					setUser(null);
					setLoggedIn(false);
				}
				if (cookies["cart"] === undefined) {
					let expires = new Date();
					expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 7);
					setCookie("cart", newCart.join("_"), { path: "/", expires, sameSite: "strict" });
				}
			} catch (error) {
				console.error(error);
			}
		}
		getMe();
	}, []);

	const contextValue = {
		user,
		setUser,
		loggedIn,
		setLoggedIn,
		cookies,
		setCookie,
	};
	AuthProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
