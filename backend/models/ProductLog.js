import mongoose from 'mongoose';
const productLogSchema = new mongoose.Schema({
  prod_log_id:
  {
    type: Number ,
    required: true,
    unique:true
    
  },
  prod_id: {
    type: Number, // Reference to the Area document
    required: true,
    ref: 'Product' // This should match the model name
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

  tp: {
    type: Number,  // Number of lead days
    required: true,
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


  log_status: {
    type:String,  // Date when the area was added or arrived
    required: true  
    // Set the default to the current date
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


