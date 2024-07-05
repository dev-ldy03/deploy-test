import connect from "./connect/connect.js";
import User from "./schemas/user.js";

// 더미 데이터 넣기용

connect();

const user_inserted = await User.create({
    email : "dylee0329@gmail.com",
    name : "이다영",
    age : 22,
},
{
    email : "finnjake0329@gmail.com",
    name : "김희영",
    age : 48,
}
)

const users = await User.find();
console.log(users)