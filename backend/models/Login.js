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
    type:String,  // Use String or Number depending on the ZoneId format
    required: true,
  },
  name: {
    type: String,  // Example: 'Active', 'Inactive', or other statuses
    required: true,
  },
  desig: {
    type: String,  // Date when the area was added or arrived
     // Set the default to the current date
  },
  type: {
    type: String,  // Number of lead days
    required: true,
  },
  dept: {
    type: String,  // Name of the manager
    required: true,
  },
  areaId: {
    type: Number,  // Email of the manager
    required: true,
    ref:"Area"
      // Simple email validation
  },
  areaName: {
    type: String,  // Nickname of the manager
  },
  distId: {
    type: Number,  // Name of the area manager
    required: true,
    ref:"Distributor"
  },
  created: {
    type: Date,  // Email of the area manager
    required: true,
    match: /.+\@.+\..+/,  // Simple email validation
  },
  active: {
    type: Number,  // Example: 'Active', 'Inactive', or other statuses
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
    type: Number,
    required:true,
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

export const Login = mongoose.model('Login', loginSchema);


