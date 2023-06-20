const res = require('express/lib/response');
var config = require('./dbconfig');
const sql = require('mssql');
const request = require('express');

//get all Store
async function getStore() {
    try {
        let pool = await sql.connect(config);
        let qlch = await pool.request().query(`SELECT * from CuaHang`);
        return qlch.recordsets;
    }
    catch(error) {
        console.log(error);
    }
}

//get store by id
async function getStoreID(StoreMaCH) {
    try {
        let pool = await sql.connect(config);
        let ch = await pool.request()
            .input('input', sql.VarChar, StoreMaCH)
            .query("SELECT * from CuaHang where MaCH = @input");
        return ch.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

//delete store
async function deleteStore(id) {

    try {
        let pool = await sql.connect(config);
        let del = await pool.request()
            .input('MaCH',sql.Int, id)    
            .query(`DELETE from CuaHang where MaCH = @MaCH`);
        return del.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


//post Store
async function addStore(store) {
    
    try {
        let pool = await sql.connect(config);
        let add = await pool.request()
            .input('TenCH', sql.NVarChar, store.TenCH)
            .input('TongNV', sql.Int, store.TongNV)
            .input('LoaiCH', sql.NVarChar, store.LoaiCH)
            .input('ThanhPho', sql.NVarChar, store.ThanhPho)
            .input('Quan', sql.NVarChar, store.Quan)
            .input('Duong', sql.NVarChar, store.Duong)
            .input('SoNha', sql.NVarChar, store.SoNha)
            .query(`INSERT into CuaHang (TenCH ,TongNV ,LoaiCH ,ThanhPho ,Quan ,Duong ,SoNha) VALUES (@TenCH ,@TongNV ,@LoaiCH ,@ThanhPho ,@Quan ,@Duong ,@SoNha);`);
        return add.recordsets;
    }
    catch (error) {
        console.log(error);
    }
    
}

//update store
async function updateStore(StoreMaCH, store) {

    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
            .input('input', StoreMaCH) 
            .input('TenCH', store.TenCH)
            .input('TongNV', store.TongNV)
            .input('LoaiCH', store.LoaiCH)
            .input('ThanhPho', store.ThanhPho)
            .input('Quan', store.Quan)
            .input('Duong', store.Duong)
            .input('SoNha', store.SoNha)
            .query(`UPDATE CuaHang SET TenCH = @TenCH ,TongNV = @TongNV ,LoaiCH = @LoaiCH ,ThanhPho = @ThanhPho , Quan = @Quan , Duong = @Duong , SoNha = @SoNha WHERE MaCH = @input;`);
        return update.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

///Staff

//get all Staff 
async function getStaff() {
    try {
        let pool = await sql.connect(config);
        let staff = await pool.request().query("SELECT * from NhanVien");
        return staff.recordsets;
    }
    catch(error) {
        console.log(error);
    }
}

//get staff by MaNV
async function getStaffID(MaNV) {
    try {
        let pool = await sql.connect(config);
        let staff = await pool.request()
            .input('input', sql.VarChar, MaNV)
            .query("SELECT * from NhanVien where MaNV = @input");
        return staff.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

//add staff
async function addStaff(staff) {
    
    try {
        let pool = await sql.connect(config);
        let add = await pool.request()
            .input('MaNV',  sql.Int, staff.MaNV)
            .input('TenNV', sql.NVarChar, staff.TenNV)
            .input('GioiTinh', sql.NVarChar, staff.GioiTinh)
            .input('NgaySinh', sql.Date, staff.NgaySinh)
            .input('ThanhPho', sql.NVarChar, staff.ThanhPho)
            .input('Quan', sql.NVarChar, staff.Quan)
            .input('Email', sql.NVarChar, staff.Email)
            .input('SDT', sql.Int, staff.SDT)
            .input('Duong', sql.NVarChar, staff.Duong)
            .input('SoNha', sql.NVarChar, staff.SoNha)
            .input('MaCH', sql.Int, staff.MaCH)
            .query(`INSERT into NhanVien (MaNV ,TenNV ,GioiTinh ,NgaySinh ,ThanhPho ,Quan, Email, SDT ,Duong ,SoNha) VALUES (@MaNV ,@TenNV ,@GioiTinh ,@NgaySinh ,@ThanhPho ,@Quan, @Email , @SDT ,@Duong ,@SoNha)`);
        return add.recordsets;
    }
    catch (error) {
        console.log(error);
    }
    
}

//delete staff
async function deleteStaff(id) {

    try {
        let pool = await sql.connect(config);
        let del = await pool.request()
            .input('MaNV',sql.Int, id)    
            .query(`DELETE from NhanVien where MaNV = @MaNV`);
        return del.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

//update staff
async function updateStaff(MaNV, nv) {

    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
            .input('input', MaNV) 
            .input('TenNV', nv.TenNV)
            .input('GioiTinh', nv.GioiTinh)
            .input('NgaySinh', nv.NgaySinh)
            .input('ThanhPho', nv.ThanhPho)
            .input('Quan', nv.Quan)
            .input('Email', nv.Email)
            .input('SDT', nv.SDT)
            .input('Duong', nv.Duong)
            .input('SoNha', nv.SoNha)
            .query(`UPDATE NhanVien SET TenNV = @TenNV ,GioiTinh = @GioiTinh ,NgaySinh = @NgaySinh ,ThanhPho = @ThanhPho , Quan = @Quan, Email = @Email , SDT = @SDT , Duong = @Duong, SoNha = @SoNha WHERE MaNV = @input;`);
        return update.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

/////////// USERS
//add user
async function addUser(user) {
    
    try {
        let pool = await sql.connect(config);
        let add = await pool.request()
            .input('username',  sql.VarChar, user.username)
            .input('password', sql.NVarChar, user.password)
            .input('role', sql.NVarChar, user.role)
            .query(`INSERT into users (username , password , role) VALUES (@username , @password , @role)`);
        return add.recordsets;
    }
    catch (error) {
        console.log(error);
    }
    
}

//delete user
async function deleteUser(id) {

    try {
        let pool = await sql.connect(config);
        let del = await pool.request()
            .input('id',sql.Int, id)    
            .query(`DELETE from users where id = @id`);
        return del.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


//get all user 
async function getUser() {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query("SELECT * from users");
        return user.recordsets;
    }
    catch(error) {
        console.log(error);
    }
}

//get user by id
async function getUserID(id) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('input', sql.Int, id)
            .query("SELECT username , role from users where id = @input");
        return user.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

//update user
async function updateUser(id, user) {

    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
            .input('input', id) 
            .input('password', user.password)
            .query(`UPDATE users SET password = @password WHERE id = @input`);
        return update.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports={
    getStore   : getStore,
    getStoreID : getStoreID,
    addStore   : addStore,
    deleteStore: deleteStore,
    updateStore: updateStore,
    getStaff   : getStaff,
    getStaffID : getStaffID,
    addStaff   : addStaff,
    deleteStaff: deleteStaff,
    updateStaff: updateStaff,
    addUser    : addUser,
    deleteUser : deleteUser,
    getUser    : getUser,
    getUserID  : getUserID,
    updateUser : updateUser,
}