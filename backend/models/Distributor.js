import mongoose from 'mongoose';
const distributorSchema = new mongoose.Schema({
 DistId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  DistName: {
    type: String,
    required: true,
  },
  AreaID: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  ZoneID: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  Status: {
    type: Date,  // Date when the area was added or arrived
    default: Date.now,  // Set the default to the current date
  },
  Status: {
    type: String,  // Number of lead days
    required: true,
  }
  ,
  Address: {
    type: String,  // Number of lead days
    required: true,
  },

  Balance : 
  {
    type : Number ,
    required: true

  },
  closing_balance: 
  {
    type: Number , 

  },
  dist_type:
  {
    type: String 
 },
 ssr_type: 
 {
    type: String
 }
 ,
 factory_code : 
 {
   type: String
 }
 ,
 Arr_Date:
 {
   type: Date ,
   required : true 
 },
 email_id: 
 {
    type : String ,

 }
 ,
 phone1:
 {
 type: Number ,
 required: ture
 }
 , 
 phone2:
 {
    type:Number 
 },
 lock_days:
 {
    type: Number 
 }
 ,
 NTN: 
 {
   type: String 
 }
 ,
 CNIC : 
 {
    type: Number
 }


}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Dist = mongoose.model('Dist', distributorSchema);


