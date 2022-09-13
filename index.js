const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//connection database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'rest_api',
    port: 3306
})

//check database
db.connect(err => {
    if (err) {
        console.log('err' + err);
    } else {
        console.log("database Connected successfully!");
    }
})

//get all data
app.get('/user', (req, res) => {
    //console.log("get all users");
    let qrr = 'select * from user order by status';
    db.query(qrr, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})

//get single data
app.get('/user/:id', (req, res) => {
    //console.log("get all users");
    let qrid = req.params.id;
    let qrr1 = `select * from user where id=${qrid}`;
    db.query(qrr1, (err, results) => {

        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        } else {
            res.send({
                message: 'Data is not Found',
            })
        }
    })
})


//insert dat

app.post('/user', (req, res) => {
    console.log(req.body, "post data success");
    let fullName = req.body.fullname;
    let Email = req.body.email;
    let Mobile = req.body.mobile;
    let Password = req.body.password;
    let Status = req.body.status;
    let qr = `insert into user(fullname, email, mobile, password, status, role) value('${fullName}','${Email}','${Mobile}', '${Password}', 'Inactive', 'user')`

    db.query(qr, (err, results) => {
        // if (err) {
        //     console.log(err)
        // }
        // res.send({
        //     message: 'data Created Successfully',
        //     data: results
        // })
        if (err) {
            return res.send({ status: 0, data: err });
        } else {
            return res.send({ status: 1, data: results });
        }
    })

})


//Update user table data

app.put('/user/:id', (req, res) => {
    console.log(req.body.status);

    let name = req.body.fullname;
    let mail = req.body.email;
    let phone = req.body.mobile;
    let Password = req.body.password;
    let status = req.body.status;
    let uid = req.params.id;
    let query = `Update user set fullname='${name}',email='${mail}', mobile='${phone}', password='${Password}', status='${status}' where id=${uid}`;

    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Update Successfully',
            data: results
        })
    })

})


//Delete data

app.delete('/user/:id', (req, res) => {

    let uid = req.params.id;
    console.log(uid);
    let query = `Delete from user where id=${uid}`;

    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Delete Successfully',
            data: results
        })
    })

})

// method for login:

app.post('/user/login', async function (req, res, next) {
    // console.log(req.body);
    try {
        //   let { username, password } = req.body; 
        let Email = req.body.email;
        let Password = req.body.password;
        console.log(Email);
        //   const hashed_password = md5(password.toString())
        const sql = `SELECT * FROM user WHERE email = ? AND password = ?`
        db.query(
            sql, [Email, Password],
            function (err, result, fields) {
                if (err) {

                    return res.send({ status: 0, msg: "something went wrong " + err });
                } else {
                    if (result.length > 0) {
                        const upsql = "update user set status = 'Active' where email = ?"
                        db.query(
                            upsql, [Email],
                            function (err, uresult, fields) {
                                if (err) {

                                    return res.send({ status: 0, msg: "something went wrong " + err });
                                } else {
                                    return res.send({ status: 1, data: result[0] });

                                }

                            })

                    } else {
                        return res.send({ status: 0, msg: "email or password invalid" });
                    }

                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, msg: error });
    }
});



// method for change password:
app.post('/user/change', async function (req, res, next) {
    console.log(req.body);
    try {
        //   let { username, password } = req.body; 
        let Email = req.body.email;
        let Password = req.body.password;
        //   const hashed_password = md5(password.toString())
        const chsql = `update user set password = '${Password}' where email= '${Email}'`
        db.query(
            chsql, [Email, Password],
            function (err, result, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: result[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error: error });
    }
});


//method for add product:

app.post('/product', (req, res) => {
    console.log(req.body, "post data success");
    let BrandId = req.body.brandId;
    let Productname = req.body.productname;
    let Product_title = req.body.product_title;
    let Product_info = req.body.product_info;
    let Product_price = req.body.product_price;
    let Image = req.body.image;
    let qr = `insert into user(brandId, productname, product_title, product_info, product_price, image) value('${BrandId}','${Productname}','${Product_title}', '${Product_info}','${Product_price}','${Image}')`

    db.query(qr, (err, results) => {
        // if (err) {
        //     console.log(err)
        // }
        // res.send({
        //     message: 'data Created Successfully',
        //     data: results
        // })
        if (err) {
            return res.send({ status: 0, data: err });
        } else {
            return res.send({ status: 1, data: results });
        }
    })

})
// logout method:

app.get('/user/inactive/:email', async function (req, res, next) {
    
    try {
        console.log(req.params.email);
        //   let { username, password } = req.body; 
        let Email = req.params.email;
        
        //   const hashed_password = md5(password.toString())
        const chsql = `update user set status = 'Inactive' where email= '${Email}'`
        db.query(
            chsql, [Email],
            function (err, result, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: result[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error:"error ->"+ error });
    }
});

// attendance (punch_in) method
app.post('/attendance', (req, res) => {
    console.log(req.body, "post data success");
    let Employee = req.body.employee_id;
   
    let att = `insert into attendance(employee_id, date, punch_in, punch_out) value('${Employee}', current_date, current_time, 'N/A')`

    db.query(att, (err, results) => {
        if (err) {
            return res.send({ status: 0, data: err });
        } else {
            return res.send({ status: 1, data: results });
        }
    })

})
// attendance (punch_out) method
app.post('/attendance/change', async function (req, res, next) {
    console.log(req.body);
    try {
        //   let { username, password } = req.body; 
        let Employee = req.body.employee_id;
        
        //   const hashed_password = md5(password.toString())
        const upatt = `update attendance set punch_out = current_time where employee_id= '${Employee}'`
        db.query(
            upatt, [Employee],
            function (err, results, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: results[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error: error });
    }
});


//show attendance method:
app.get('/attendance/show', (req, res) => {
    //console.log("get all users");
    let attshow = 'select a.id id, a.employee_id employee_id, u.fullname fullname, a.date date, a.punch_in punch_in, a.punch_out punch_out, timediff(a.punch_out,a.punch_in) as working from attendance a join user u on a.employee_id = u.employee_id order by a.punch_out desc';
    db.query(attshow, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})

//user deactive method:
app.post('/user/deactive', async function (req, res, next) {
    console.log(req.body);
    try {
        //   let { username, password } = req.body; 
        let Employee = req.body.employee_id;
        
        //   const hashed_password = md5(password.toString())
        const deact = `update user set password = 'N/A-----' where employee_id= '${Employee}'`
        db.query(
            deact, [Employee],
            function (err, results, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: results[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error: error });
    }
});

//user active method:
app.post('/user/active', async function (req, res, next) {
    console.log(req.body);
    try {
        //   let { username, password } = req.body; 
        let Employee = req.body.employee_id;
        
        //   const hashed_password = md5(password.toString())
        const act = `update user set password = '123456' where employee_id= '${Employee}'`
        db.query(
            act, [Employee],
            function (err, results, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: results[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error: error });
    }
});

//user activity log history method:
app.post('/user/info', (req, res) => {
    console.log(req.body, "post data success");
    let Employee = req.body.employee_id;
    let fullName = req.body.fullname;
    let Email = req.body.email;
    
    
    let activel = `insert into userinfo(employee_id, fullname, email, login_time, logout_time) value('${Employee}','${fullName}','${Email}', now(), 'N/A')`

    db.query(activel, (err, results) => {
       
        if (err) {
            return res.send({ status: 0, data: err });
        } else {
            return res.send({ status: 1, data: results });
        }
    })

})

//user activity log history update method:
app.get('/user/infoupdate/:employee_id', async function (req, res, next) {
    
    try {
        console.log(req.params.employee_id);
        //   let { username, password } = req.body; 
        let Employee = req.params.employee_id;
        
        //   const hashed_password = md5(password.toString())
        const uplog = `update userinfo set logout_time = now() where employee_id= '${Employee}'`
        db.query(
            uplog, [Employee],
            function (err, result, fields) {
                if (err) {
                    console.log(err + "=> ")
                    return res.send({ status: 0, data: err });
                } else {
                    return res.send({ status: 1, data: result[0] });
                }

            })
    } catch (error) {
        console.log(error)
        return res.send({ status: 0, error:"error ->"+ error });
    }
});

//show activity method:
app.get('/activity/show', (req, res) => {
    //console.log("get all users");
    let attshow = 'select * from userinfo order by logout_time desc';
    db.query(attshow, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})


//insert user method:


app.post('/user/adduser', (req, res) => {
    console.log(req.body, "post data success");
    let Employee = req.body.employee_id;
    let fullName = req.body.fullname;
    let Email = req.body.email;
    let Mobile = req.body.mobile;
    let Password = req.body.password;
    let Title = req.body.title;
    let Department = req.body.department;
    let Image = req.body.image;
    let adduser = `insert into user(employee_id, fullname, email, mobile, password, title, department, status, role, image) value('${Employee}', '${fullName}','${Email}','${Mobile}', '${Password}', '${Title}','${Department}', 'Inactive', 'user', '${Image}')`

    db.query(adduser, (err, results) => {
        // if (err) {
        //     console.log(err)
        // }
        // res.send({
        //     message: 'data Created Successfully',
        //     data: results
        // })
        if (err) {
            return res.send({ status: 0, data: err });
        } else {
            return res.send({ status: 1, data: results });
        }
    })

})

//show data for specific user method:
app.get('/user/show/:email', (req, res) => {
    //console.log("get all users");
    let Email = req.params.email;
    let qrr1 = `select * from user where email='${Email}'`;
    db.query(qrr1, (err, results) => {

        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        } else {
            res.send({
                message: 'Data is not Found',
            })
        }
    })
})

//show attendance using specific date method:
app.get('/attendance/showdate/:date', (req, res) => {
    //console.log("get all users");
    let Date1 = req.params.date;
    let Date2 = req.params.date;
    let attshowm = `select a.id id, a.employee_id employee_id, u.fullname fullname, a.date date, a.punch_in punch_in, a.punch_out punch_out, timediff(a.punch_out,a.punch_in) as working from attendance a join user u on a.employee_id = u.employee_id where date between '${Date1}' and '${Date2}'`;
    db.query(attshowm, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})




//show attendance new method:
app.get('/attendance/showUser', (req, res) => {
    //console.log("get all users");
    let attshowU = `select a.id id, a.employee_id employee_id, u.fullname fullname, a.date date, a.punch_in punch_in, a.punch_out punch_out, timediff(a.punch_out,a.punch_in) as working from attendance a join user u on a.employee_id = u.employee_id where date between '2022-08-26' and '2022-08-27'`;
    db.query(attshowU, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})



app.listen(5000, () => {
    console.log("server is running on 5000 port");
})