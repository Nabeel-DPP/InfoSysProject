import mongoose from 'mongoose';
const productQuotaSchema = new mongoose.Schema({
  Qid: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    // unique: true,  // Ensures no two areas have the same AreaId
  },
  AreaId: {
    type: Number,
    required: true,
    ref:'Area'
  },
  DistId: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
    ref:'Distributor'
  },
  PrdId: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
    ref: 'Product'
  },
  Quota: {
    type: Number,  // Date when the area was added or arrived
      // Set the default to the current date
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const ProductQuota = mongoose.model('ProductQuota', productQuotaSchema);


