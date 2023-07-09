const jwt = require("jsonwebtoken");

const authRequired = async (req, res, next) => {
	try {
		const token = req.signedCookies.token;
		req.user = jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {
		res.status(401).send({
			name: "Unauthorized",
			message: "Please Log In",
		});
		return;
	}
	next();
};

const adminRequired = async (req, res, next) => {
	try {
		if (req.user.role !== "admin") {
			res.status(401).send({
				name: "Unauthorized",
				message: "Missing required role.",
			});
			return;
		}
	} catch (error) {}
	next();
};

module.exports = { authRequired, adminRequired };
