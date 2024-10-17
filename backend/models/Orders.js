import mongoose, { Schema } from 'mongoose';
const ordersSchema = new mongoose.Schema({
 OrderId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
   tblDistId: {
    type: Number,
    required: true,
  },
  tblAreaId: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  instiId: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
   subAreaId: {
    type: Number,  
     
  },
  FeedDate: {
    type: Date,  // Number of lead days
    required: true,
  },
  dd_amount: {
    type: Number,  // Name of the manager
    required: true,
  },
  order_value: {
    type: Number,  // Email of the manager
    required: true,
    
  },
  Period: {
    type: String,  //
  },
 instructions: 
  { 
    type: String, 
    required: true,

},
ddNumber: {
    type: Number,  
    required: true,

},

orderType: {
    type: String,  
    required: true,

},
status: 
{
    type:Number,

},
forward_date: 
{
    type:Date
},
confirm_date:
{
 type:Date
},
invoice_date:
{
  type: Date
},
cancel_date:
{ type: Date  },
restore_date:
{
    type : Date
},
restore_date:
{
    type: Date 
    
},


crem: 
{
    type: String
},

userId:
{
    type: Number 
}
,
userIp:
{
    type : String
},
invoiceNo:
{
    type: Number
},
invoiceDate: 
{
    type:Date
},

truckNo:
{
    type: String
},


siv:
{
    type: String
},

dispatch_mode:
{
    type:String
},
edit_by:
{
   type:String
},
confirm_by:
{
    type: String
},
forward_by:
{
   type: String

},
edit_status: 
{
    type: Number
},
discount: 
{
    type: Number
}
,
stockist:
{
    type: String 
},
perage : 
{
    type :Number
},
disp_date :
{
    type : Date
},
Return_stock : 
{
    type: String


},
stock_aginst_orderNo:
{
 type : Number 
},
purchase_against_type:
{
    type: Number
},
edit_date: 
{
    type: Date
},
prvs_frwd_date : 
{
    type:Date
},
dd_banks:
{ type: String },


payment_max_date:
{
    type: Date
},
AdvTax:
{
type: Number
},
validatePayment:
{
    type: Number
},}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
  }

);

export const Orders = mongoose.model('Orders', ordersSchema);


