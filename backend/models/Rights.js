import mongoose from 'mongoose';
const rightsSchema = new mongoose.Schema({
  r_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    // unique: true,  // Ensures no two areas have the same AreaId
  },
  r_code: {
    type: String,
    required: true,
  },
  r_name: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  st: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Rights = mongoose.model('Rights', rightsSchema);


