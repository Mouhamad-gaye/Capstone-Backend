import Members from '../models/memberSchema.mjs'

export default async function (req, res, next) {
    const id = req.member;
    let member = await Members.findById(id).select("admin");

    if(!member) {
        return res.status(401).json({msg: "Authorization Denied"});

    }

    if(member.role) {
        next();
    } else {
        return res.status(401).json({msg: "No Admin priviliges"})
    }
}