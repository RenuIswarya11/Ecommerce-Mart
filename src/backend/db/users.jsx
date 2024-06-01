import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ishwarya",
    lastName: "Yarramsetti",
    email: "demo1@gmail.com",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Ishwarya",
      lastName: "Yarramsetti",
      street: "Abc Street",
      district: "Eastgodavari",
      state: "Andhra Pradesh",
      pinCode: "532185",
      phone: "45667885424"
  }]
  },
  {
    _id: uuid(),
    firstName: "Person1",
    lastName: "Person2",
    email: "demo2@gmail.com",
    password: "12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Ishwarya",
      lastName: "Yarramsetti",
      street: "Abc Street",
      district: "Eastgodavari",
      state: "Andhra Pradesh",
      pinCode: "532185",
      phone: "45667885424"
  },]
  },
];
