import mongoose from "mongoose";
import bcrypt from "bcrypt" ; 

const userSchema = new mongoose.Schema(
    {
        Email:{
            type : String , 
            required : true ,
        },

        Password:{
            type : String , 
            required : [true , 'password is required']
        },

    },{timestamps : true},
)

// Hash Password Before Saving
userSchema.pre('save', async function (next) {
    if (this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 10);
    }
    next();
});

//  Hide Password from API Responses
userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.Password; // Remove password field
    return userObject;
};

const User = mongoose.model('User', userSchema);
export default User;


    


    
