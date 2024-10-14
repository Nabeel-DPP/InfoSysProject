import mongoose from 'mongoose';
const bankSchema = new mongoose.Schema({
  bank_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  bank_name: {
    type: String,
    required: true,
  },
  status: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  branch_code: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  add_date: {
    type: Date,  // Date when the area was added or arrived
    default: Date.now,  // Set the default to the current date
  },
  bank_abr: {
    type: string,  // Number of lead days
    required: true,
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Bank = mongoose.model('Bank', bankSchema);

