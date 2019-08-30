import {User} from "./user"
import {Voyage} from "./voyage"
import {VoyageInstance} from "./voyage_instance"
import { Role } from "./role"

User.hasMany(VoyageInstance);
VoyageInstance.belongsTo(User);
Role.belongsToMany(User, {through: 'UserRole'});
User.belongsToMany(Role, {through: 'UserRole'});
