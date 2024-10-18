import mongoose from 'mongoose';
const productLogSchema = new mongoose.Schema({
  prd_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  scheme_id: {
    type: Number,
    required: true,
  },
  bonus_scheme: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  bonus_units: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  fp: {
    type:Number,  // Date when the area was added or arrived
  // Set the default to the current date
  },


  entry_date: {
    type:Date,  // Date when the area was added or arrived
  // Set the default to the current date
  },


  remarks: {
    type:String,  // Date when the area was added or arrived
  // Set the default to the current date
  },

 type: {
    type:Number,  // Date when the area was added or arrived
  // Set the default to the current date
  },


  bonus_status: {
    type:String,  // Date when the area was added or arrived
  // Set the default to the current date
  },

  tp: {
    type: Number,  // Number of lead days
    required: true,
  },

mrp:
{
  type: Number,
  required: true
}




}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const ProductLog = mongoose.model('ProductLog', productLogSchema);


