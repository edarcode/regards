import { User } from "../../../dbRelations.js";

export const getAllUsersController = async (req, res) => {
	const users = await User.findAll();
	res.json(users);
};
