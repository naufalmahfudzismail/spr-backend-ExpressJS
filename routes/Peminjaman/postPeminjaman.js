var express = require('express');
var router = express.Router();
var cors = require('cors');

router.post('/', cors() ,function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Content-Type");

    var input = req.body;

    var data = {
        
        nim : input.nim,
        nm_jadwal : input.nm_jadwal,
        tgl : input.tgl,
        jam_pinjam : input.jam_pinjam,
        jam_selesai : input.jam_selesai,
        tujuan : input.tujuan,
        kd_ruang : input.kd_ruang,
        hari : input.hari
    };

    connection.query("INSERT INTO peminjaman SET ?", data , function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({
                "status": 500,
                "error": error,
                "response": null
            }));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({
                "status": res.statusCode,
                "error": null,
                "response": results
            }));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

module.exports = router;