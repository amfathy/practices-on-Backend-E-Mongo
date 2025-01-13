import bcrypt from 'bcrypt' ; 

// exports.hashPassword = async(password)=>{
//     return await bcrypt.hash(password,10);
// }

const isMatch = async(password,savedPassword)=>{
    return await bcrypt.compare(password,savedPassword);
}

export default {
    isMatch };
