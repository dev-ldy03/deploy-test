import User from "../schemas/user.js";

const main = (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.send("<h1>Welcome Express!</h1>");
}

const test = async (req, res) => {
    // DB 에 있는 데이터를 찾는 몽구스 함수 find()
    // Model.find(query, fields, options, callback)

    const users = await User.find() 
    // 모든 User 모델에 모든 데이터를 가져오는 것. 
    console.log(users)
    res.json(users)
}

export {test, main}
