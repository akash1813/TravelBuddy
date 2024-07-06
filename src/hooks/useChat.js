
import axios from "axios"
export async function getAllChatRooms(values) {
    const data = await axios.get('https://travelbuddy-backend-tuhi.onrender.com/chat/rooms');
    console.log(data)
    return data.data;
}

export async function createChat(values) {
    const data = await axios.post('https://travelbuddy-backend-tuhi.onrender.com/chat', {
        users: ["6687b8052be27e93d9938d4e", values]
    });
    console.log(data)
    return data.data
}