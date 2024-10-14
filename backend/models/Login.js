import mongoose from 'mongoose';
const loginSchema = new mongoose.Schema({
  loginId: {
    type: Number,  // Use String or Number depending on the format of your AreaId
    required: true,
    unique: true,  // Ensures no two areas have the same AreaId
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  name: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  desig: {
    type: Date,  // Date when the area was added or arrived
    default: Date.now,  // Set the default to the current date
  },
  type: {
    type: Number,  // Number of lead days
    required: true,
  },
  dept: {
    type: String,  // Name of the manager
    required: true,
  },
  areaId: {
    type: String,  // Email of the manager
    required: true,
    match: /.+\@.+\..+/,  // Simple email validation
  },
  areaName: {
    type: String,  // Nickname of the manager
  },
  DistId: {
    type: String,  // Name of the area manager
    required: true,
  },
  created: {
    type: Date,  // Email of the area manager
    required: true,
    match: /.+\@.+\..+/,  // Simple email validation
  },
  active: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
passw:
  {
    type: String,
    required: true,
  }
  ,
  zonal:
  {
    type: Number,
    required:true,
  }
  ,
  nickName:
  {
    type: String,
    required:true,
  }
  ,
  subArea:
  {
    type: String,
    required:true,
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Login = mongoose.model('Login', loginSchema);


