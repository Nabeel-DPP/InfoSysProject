import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
// import AreaRoute from "./routes/areaRoute.js";
// import areaRoutes from "./routes/areaRoute.js";
import areaRoute from "./routes/areaRoute.js";
import bankRoute from "./routes/bankRoute.js";
import goodsRoute from "./routes/goodsRoute.js";
import loginRoute from "./routes/loginRoute.js";
import distRoute from "./routes/distRoute.js";
import orderRoute from "./routes/orderRoute.js";
import orderDetailRoute from "./routes/orderDetailRoute.js";
import dispatchRoute from "./routes/dispatchRoute.js";
import rightsRoute from "./routes/rightsRoute.js";
import rightsSectionRoute from "./routes/rightsSectionRoute.js";
import roleRoute from "./routes/roleRoute.js";
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:5555',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(response);
  console.log("index page");
  return response.status(234).send('Welcome to Library');
});

// app.use('/lib', booksRoute);
// app.use('/users', usersRoute);
// app.use('/login', loginRoute);
// app.use('/report', reportRoute);


app.use("/area", areaRoute );
app.use("/bank", bankRoute );
app.use("/goods", goodsRoute );
app.use("/login", loginRoute );
app.use("/distributor", distRoute );
app.use("/order", orderRoute );
app.use("/orderDetail", orderDetailRoute );
app.use("/dispatch", dispatchRoute );
app.use("/rights", rightsRoute );
app.use("/rtSection", rightsSectionRoute );
app.use("/role", roleRoute );










mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
