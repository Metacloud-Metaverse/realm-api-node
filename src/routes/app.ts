const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth.ts");
const realmController = require("../controllers/RealmController.ts")

router.post('/realm', realmController.saveRealm)
router.post('/realm-user', realmController.saveRealmUser)
router.get('/realm/list', realmController.listRealm)
router.get('/realm/:id', realmController.fetchRealmById)
router.get('/realm-user/list', realmController.listRealmUser)

module.exports = router;
    