import mongoose, { Schema } from 'mongoose';
const orderDetailSchema = new mongoose.Schema({
 orderDetailID: {
    type: Number,  
    required: true,
    unique: true,  
  },
   order_id: {
    type: Number,
    required: true,
    ref: "Order"
  },
  product_id: {
    type: Number,  
    required: true,
    ref: "Product"
  },
  base_units: {
    type: Number,  
    required: true,
  },
   cash_price: {
    type: Number,  
    required: true  
  },
  bonus_units: {
    type: Number,  
    required: true,
  },
  value: {
    type: Number,  
    required: true,
  },
  comments: {
    type: String,
    required: true,
    
  },
  prd_remarks: {
    type: String, 
  },
  dispatch_status: 
  { 
    type: String, 
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
dispatch_date:
{
  type:Date
},
type:
{
  type:String
}
,


trade_price:
{
    type:Number ,
     required : true
},
product_scheme:
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
inv_notes:
{
    type: String
},}, {
    timestamps: true,  
  });

export const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

