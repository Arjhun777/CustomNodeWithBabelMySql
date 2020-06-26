import { Router } from "express";
import { mySqlCon } from "Src/server";

const router = Router();

router.get('/', async(req, res) => {
    if (mySqlCon) {
        mySqlCon.query('select product_id as product from sql_inventory.products', (err, result) => {
            if(err) {
                req.statusCode = 400;
                req.send(err);
            }
            res.send(result);
        });
    }
});

export default router;