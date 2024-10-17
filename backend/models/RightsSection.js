import mongoose from 'mongoose';
const rightsSectionSchema = new mongoose.Schema({
  code: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  name: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const RightsSection = mongoose.model('RightsSections', rightsSectionSchema);


