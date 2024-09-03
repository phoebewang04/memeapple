const express = require('express');

const router = express.Router();

// Member API
module.exports = (db) => {

    router.get('/api/member', (req, res) => {
        const keyword = req.query.keyword;
        const status = req.query.status;
            const statusMap = {
                '所有狀態': '',
                '正常': '0',
                '停權': '1'
            };

        // SQL
        let sql = 'SELECT * FROM MemeStudio.MEMBER';
        let params = {};

        if (status != '所有狀態') {
            sql += " WHERE status = :status";
            params.status = statusMap[status];
        }
        if (keyword != '') {
            if (status != '所有狀態') {
                sql += " AND (NAME LIKE :keyword OR EMAIL LIKE :keyword OR PHONE LIKE :keyword)";
            } else {
                sql += " WHERE (NAME LIKE :keyword OR EMAIL LIKE :keyword OR PHONE LIKE :keyword)";
            }
            params.keyword = `%${keyword}%`;
        };

        db.query(sql, params, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });

    return router;
};
