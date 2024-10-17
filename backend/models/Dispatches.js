import mongoose, { Schema } from 'mongoose';
const dispatchesSchema = new mongoose.Schema({
    dispatch_id: {
        type: Number,  
        required: true,
        unique: true
    
    },
    pending_units: {
        type: Number,  
        required: true,
    
    },
    
    batchNo: {
        type: Number,  
        required: true,
    
    },
   
    invoice_date:
    {
  type: Date
},
invoice_no:
{
    type: String ,
    required : true
},

pending_date:
{
    type : String 
},
biltyNo:
{
    type: String

},
gtId: 
{
    type: Number
},
cartons:
{
    type: String
},
dispatch_entry_date:
{
    type: Date
},
dist_receiving:
{
    type: String
},
dist_flag_date:
{
    type: Date
},
dist_flag_month:
{
    type:String
},
dist_flag_entry:
{
    type: Number
},
bilty_charges:
{
    type:Number
},}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
  }

);

export const Dispatches = mongoose.model('dispatch', dispatchesSchema);