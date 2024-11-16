import mongoose from 'mongoose';
const institutionSchema = new mongoose.Schema({
  id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  inst_name:
  {
    type:String,
    required:true
  },
  area_name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  }

}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Institution = mongoose.model('Institution', institutionSchema);


