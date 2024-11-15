import mongoose from 'mongoose';
const subAreaSchema = new mongoose.Schema({
  id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  area_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  main_area: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  status: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
    required : true 
  }

}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const SubArea = mongoose.model('SubArea', subAreaSchema);


