import axios from "axios";
import { useRouter } from "next/navigation";

export async function getUserByEmail(email : string) {
    const { data } = await axios.get(`http://localhost:8080/users/verify-email/${email}`)
    return data;
} 

type UserInput = {
    email: string;
    name?: string;
    password: string;
  };

export async function createUser(data: UserInput) {
    const response = await axios.post("http://localhost:8080/users", data);
    return response.data;
}