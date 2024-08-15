import express from "express";
import customersModel from "./models/customers.model";

const customerController = {
  getAllUsers: async (req, res) => {
    try {
      const result = await customersModel.select();
      res.status(200);
      res.json(result);
    } catch {
      res.status(500);
    }
  },
  getAllEmails: async (req, res) => {
    try {
      const result = await customersModel.selectEmails();
      res.status(200);
      res.json(result);
    } catch {
      res.status(500);
    }
  },
  getUserById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const result = await customersModel.selectById(id);
      res.status(200);
      res.json(result);
    } catch {
      res.status(500);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = req.body;
      const result = await customersModel.create(user);
      res.status(200);
      res.json(result[0]);
    } catch {
      res.status(500);
    }
  },
  updateUser: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const user = req.body;
      const result = await customersModel.update(id, user);
      res.status(200);
      res.json(result[0]);
    } catch {
      res.status(500);
    }
  },
  // deleteUser: async (req, res) => {
  //   try {
  //     const id = Number(req.params.id);
  //     const result = customersModel.delete(id);
  //     res.status(200);
  //     res.json(result);
  //   } catch {
  //     res.status(500);
  //   }
  // },
};

export default customerController;
