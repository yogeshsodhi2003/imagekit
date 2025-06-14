
import mongoose ,{Schema , models, model} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    name: string;
    email: string;
    password: string;
    createdAt?: string;
}

const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: String, default: Date.now}

})

UserSchema.pre("save", async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
})

const User = models?.User || model<IUser>('User' , UserSchema);

export default User;