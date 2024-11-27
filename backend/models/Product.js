import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  prod_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  prod_name: {
    type: String,
    required: true,
  },
  prod_form_id: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  prod_form_name: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },

  prd_type: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },

  generic: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  
  compose:
  {
    type: String ,
    required: true
  },

  pack:
  {
    type:String ,
    required: true
  },

  thera:
  {
    type:String ,
    required: true
  },
  strength:
  {
    type: String ,
    required: true
  },

  status: 
  {
    type: String ,
    required :  true
  }
  ,

  arr_date:
  {
    type: Date ,
    required: true
  },

  ter_date:
  {
    type: Date ,
     required : true
  },

  change_price_date:
  {
    type:Date,
    
  },
  ssr_enabled:
  {
    type: Number ,
    
  },
  trading : 
  {
    type: Number ,
     required : true 
  },


}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Product = mongoose.model('Product', productSchema);



