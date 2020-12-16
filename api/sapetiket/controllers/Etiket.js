
const axios = require('axios');
module.exports = {
    // GET /hello
    async index(ctx) {
        console.log(ctx.query)
        try {
            const { data } = await axios.get(
                `http://UMNNAMSV0225.ugurgrp.local:8000/sap/opu/odata/sap/ZBS003_SRV/ETIKETSet('${ctx.query.etk}')?$format=json`
            );
            ctx.send({ etk_no: data.d.Etkno, adt: +data.d.Menge });
        } catch (e) {
            ctx.send(e)
        }
    },
};