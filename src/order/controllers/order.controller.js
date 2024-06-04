// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
  const newOrder = await createNewOrderRepo(req.body,req.user._id);
  res.status(200).json({success: true , newOrder})
  } catch (error) {
    return next (new ErrorHandler(400, error));
  } 
};
