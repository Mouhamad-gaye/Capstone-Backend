import Members from '../models/memberSchema.mjs'

export default async function (req, res, next) {
    const id = req.member;
    let member = await Members.findById(id).select("role");
    // console.log(member)
    console.log(id)

    if(!member) {
        return res.status(401).json({msg: "Authorization Denied"});

    }

    if(member.role == "admin") {
        next();
    } else {
        return res.status(401).json({msg: "No Admin priviliges"})
    }
}