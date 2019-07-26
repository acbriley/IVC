import {User} from "./user.js"
import {Voyage} from "./voyage.js"
import {VoyageInstance} from "./voyage_instance"

User.hasMany(VoyageInstance);
VoyageInstance.belongsTo(User);