import mongoose from 'mongoose';
const goodsSchema = new mongoose.Schema({
  gt_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  gt_name: {
    type: String,
    required: true,
  },
  added_date: {
    type: Date,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  status: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  }
 
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Goods = mongoose.model('Goods', goodsSchema);

