import knex from "../knex";
import Customer from "./interfaces/Customer";

const customersModel = {
  select: async () => {
    return knex("customer").select("*");
  },
  selectEmails: async () => {
    return knex("customer").select("email_address");
  },
  selectById: async (id) => {
    return knex("customer").where({ id }).first();
  },
  create: async (customer) => {
    return knex("customer").insert(customer).returning("*");
  },
  update: async (id, customer) => {
    return knex("customer").update(customer).where({ id }).returning("*");
  },
  delete: async (id) => {
    return knex("customer").where({ id }).del();
  },
};

export default customersModel;
