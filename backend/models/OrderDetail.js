import mongoose, { Schema } from 'mongoose';
const orderDetailSchema = new mongoose.Schema({
 orderDetailID: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
   orderID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  units: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
   price: {
    type: Date,  // Date when the area was added or arrived
    default: Date.now,  // Set the default to the current date
  },
  bonus: {
    type: Number,  // Number of lead days
    required: true,
  },
  value: {
    type: Number,  // Name of the manager
    required: true,
  },
  comments: {
    type: String,  // Email of the manager
    required: true,
    
  },
  prd_remarks: {
    type: String,  //
  },
  dispatch_status: 
  { 
    type: String, 
    required: true,

},
pending_units: {
    type: Number,  
    required: true,

},

batchNo: {
    type: Number,  
    required: true,

},
sch: 
{
    type:Number,

},
pack_on_sch: 
{
    type:Number
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
disp_date:
{
    type: Date
},
type: 
{
    type: Number
},
pending_date:
{
    type : String 
},
builtyNo:
{
    type: String

},
addaName: 
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
dist_price:
{
    type:Number
},
product_scheme:
{
    type:Number
},
bilty_charges:
{
    type:Number
},
units_convert_date:
{
  type: Date
},
old_units:
{
    type:Number
},
old_bonus:
{
    type:Number
},
old_price:
{
   type:Number
},
old_value:
{
    type:Number
},
svn:
{
    type:Number
},
InvNotes:
{
    type: String
},}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
  });

export const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

