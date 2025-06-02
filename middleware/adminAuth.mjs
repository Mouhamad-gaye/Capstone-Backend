import Members from '../models/memberSchema.mjs'

export default async function (req, res, next) {
    const id = req.member;
    let member = await Members.findById(id).select("admin");

    if(!user) {
        return res.status(401).json({msg: "Authorization Denied"});

    }

    if(user.admin) {
        next();
    } else {
        return res.status(401).json({msg: "No Admin priviliges"})
    }
}