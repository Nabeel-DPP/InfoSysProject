import mongoose from 'mongoose';
const distributorSchema = new mongoose.Schema({
 DistId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  distName: {
    type: String,
    required: true,
  },
  areaID: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  zoneID: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
 status: {
    type: String,  // Number of lead days
    required: true,
  }
  ,
  address: {
    type: String,  // Number of lead days
    required: true,
  },

  balance : 
  {
    type : Number ,
    required: true

  },
  closingBalance: 
  {
    type: Number , 

  },
  distType:
  {
    type: String 
 },
 ssrType: 
 {
    type: String
 }
 ,
 factorCode : 
 {
   type: String
 }
 ,
 arrDate:
 {
   type: Date ,
   required : true 
 },
 emailId: 
 {
    type : String ,

 }
 ,
 phone1:
 {
 type: Number ,
 required:true
 }
 , 
 phone2:
 {
    type:Number 
 },
 LockDays:
 {
    type: Number 
 }
 ,
 ntn: 
 {
   type: Number
 }
 ,
 cnic : 
 {
    type: Number
 }


}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Distributor = mongoose.model('Distributor', distributorSchema);


