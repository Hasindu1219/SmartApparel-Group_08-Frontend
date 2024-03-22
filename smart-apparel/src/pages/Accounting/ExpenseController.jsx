import axios from "axios";

const Rest_API_URL = "http://localhost:8080/api/v1/expense/viewExpense";

export const listExpenses = () => axios.get(Rest_API_URL);