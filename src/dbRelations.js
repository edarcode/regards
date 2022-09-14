import { connDb } from "./db.js";
import { defineUser } from "./models/User.js";

// definir modelos

defineUser(connDb);

export const { User } = connDb.models;

// Relaciones
User.belongsToMany(User, {
	as: "friends",
	through: "UserUser",
	timestamps: false
});
