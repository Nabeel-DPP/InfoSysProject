import mongoose from 'mongoose';
const areaSchema = new mongoose.Schema({
  AreaId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  AreaName: {
    type: String,
    required: true,
  },
  ZoneId: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  status: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  arr_date: {
    type: Date,  // Date when the area was added or arrived
    default: Date.now,  // Set the default to the current date
  },
  lead_days: {
    type: Number,  // Number of lead days
    required: true,
  },
  Manager: {
    type:Number ,  // 
    // required: true,
  },
  E_Mail: {
    type: String,  // Email of the manager
    // required: true,
   
  },
  Manager_nick: {
    type: String,  // Nickname of the manager
  },
  area_manager: {
    type: Number,  // Name of the area manager
    
  },
  area_manager_email: {
    type: String,  // Email of the area manager
    
  
  },
  area_manager_phone: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    
  },
  manager_phone:
  {
    type: String,
    // required: true,
  }
  ,
  FixPay:
  {
    type: Number,
    // required:true,
  },
  type:
  {
    type: Number,
  
  },
  province:
  {
    type: String,
    
  }

}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
}) ; 

export const  Area = mongoose.model('Area', areaSchema);
// export default Area;