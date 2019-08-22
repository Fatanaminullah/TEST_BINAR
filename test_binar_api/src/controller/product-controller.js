const conn = require('../connection/connection')

module.exports = {
    showData : (req,res) => {
        var sql = `select * from products`

        conn.query(sql,(error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    },
    showDatabyId : (req,res) => {
        var sql = `select * from products where id = ${req.params.id}`

        conn.query(sql, (error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    },
    createData : (req,res) => {
        const data = req.body
        var sql = `insert into products set ? `

        conn.query(sql,data, (error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    },
    updateData : (req,res) => {
        const data = req.body
        var sql = `update products set ? where id = ${req.params.id}`

        conn.query(sql,data, (error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    },
    deleteData : (req,res) => {
        var sql = `delete from products where id = ${req.params.id}`

        conn.query(sql,(error,result) => {
            if(error) return res.send(error.message)

            res.send(result)
        })
    }
}