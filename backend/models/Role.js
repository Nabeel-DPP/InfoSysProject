import mongoose from 'mongoose';
const roleSchema = new mongoose.Schema({
  rd_id: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  userId: {
    type: Number,
    required: true,
  },
  areaId: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },



  subAreaId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  distId: {
    type: Number,
    required: true,
  },
  instiId: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },


  zoneId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  rightId: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  rptType: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Role = mongoose.model('Role', roleSchema);


