import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data, id) => {
  return await OrderModel({...data, user: id , "paymentInfo.id": id }).save();
};
