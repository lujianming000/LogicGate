import bcrypt from 'bcrypt';

//Password hash
export const hashPassword = (password) => {
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(12,(err,salt) => {
            if(err){
                reject(err);
            }
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject(err);
                }

                resolve(hash);
            });
        });
    });
};

//Password compare \
export const comparePassword = (password,hashed) => {
    return bcrypt.compare(password,hashed)
}