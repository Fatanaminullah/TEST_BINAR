const conn = require('../connection/connection')
const bcrypt = require("bcryptjs");

module.exports = {
    register : async (req,res) => {
        var sql = `insert into users set ?`

        var data = req.body

        req.body.password = await bcrypt.hash(req.body.password, 8);

        conn.query(sql,data, (error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    },
    login : async (req,res) => {
        var sql = `select * from users where username = '${req.body.username}'`

        const { username, password } = req.body;
        
        conn.query(sql, (error,result) => {
            if(error) return res.send(error.response.message)

            if(result.length === 0) return res.status(400).send('Username or Password incorrect')

            const user = result[0];

            const hash = bcrypt.compareSync(password, user.password);
    
            if (!hash) return res.status(400).send("username or password incorrect");
        
            res.send(result)
        })
    }
}