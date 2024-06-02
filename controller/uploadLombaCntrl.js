import { query } from "../database/db.js"

export const getDataLomba = async(req,res)=>{
    try{
        const result = await query('Select * from uploadlomba')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertDataLomba = async(req,res)=>{
    const {nama, organizer, deadline, registration_link, contact_link, level, registration_fee, poster, survey}= req.body
    try {
        await query("INSERT INTO uploadlomba(`nama`, `organizer`, `deadline`, `registration_link`, `contact_link`, `level`, `registration_fee`, `poster`, `survey`) values (?,?,?,?,?,?,?,?,?)", 
        [nama, organizer, deadline, registration_link, contact_link, level, registration_fee, poster, survey])
        return res.status(200).json({msg:"Lomba Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateDataLomba = async(req,res)=>{
    const {nama, organizer, deadline, registration_link, contact_link, level, registration_fee, poster, survey}= req.body
    const {id}=req.params
    try {
        await query("UPDATE uploadlomba SET nama=?, organizer=?, deadline=?, registration_link=?, contact_link=?, level=?, registration_fee=?, poster=?, survey=? where id=?", [nama, organizer, deadline, registration_link, contact_link, level, registration_fee, poster, survey, id])
        return res.status(200).json({msg:"lomba Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteDataLomba = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM uploadlomba where id=?", [id])
        return res.status(200).json({msg:"Lomba Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getDataLombaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from uploadlomba where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
