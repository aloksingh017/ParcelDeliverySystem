const Parcel= require('../models/Parcel');

const createParcel= async(req,res)=>{
    try{
        const newParcel= Parcel(req.body);
        const parcel= await newParcel.save();
        res.status(200).json(parcel);
    }catch(error){
        res.status(500).json(error);
    }
}

const getAllParcels= async(req,res)=>{
    try{
        const parcels= await Parcel.find().sort({createdAt:-1});
        req.status(200).json(parcels);
    }catch(error){
        res.status(500).json(error);
    }
}

const updateParcel=async(req,res)=>{
    try{
        const parcel=await Parcel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true});
    }catch(error){
        res.status(500).json(error);
    }
}

const getOneParcel= async(req,res)=>{
   try {const parcel=await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
    }catch(error){
    res.status(500).json(error);
    }
}

const getUserParcel= async(req,res)=>{
    try {
        const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
          createdAt: -1,
        });
        res.status(200).json(parcels);
      } catch (error) {
        res.status(500).json(error);
      }
}

const deleteParcel= async(req,res)=>{
    try {
        await Parcel.findByIdAndDelete(req.params.id);
    
        res.status(200).json({ message: "Parcel has been deleted!" });
      } catch (error) {
        res.status(500).json(error);
      }
}

module.exports={createParcel,getAllParcels,updateParcel,getOneParcel,getUserParcel,deleteParcel};