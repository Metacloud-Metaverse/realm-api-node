const db = require('../models/index.js');
const realmModel = db.Realm;
const realmUserModel = db.Realm_user;
const userModel = db.User;
const apiResponseHandler = require('../helper/ApiResponse.ts')

class RealmController {
    static async saveRealm(req, res, next) {
        try {
            const data = req.body;
            await realmModel.create(data);
            apiResponseHandler.send(req, res, "data", data, "Realm saved successfully")
        }
        catch (error) {
            const message = "error saving an realm";
            apiResponseHandler.sendError(req, res, "data", null, message)
        }
    }
    static async saveRealmUser(req, res, next) {
        try {
            const data = req.body;
            await realmUserModel.create(data);
            apiResponseHandler.send(req, res, "data", data, "Realm assigned to User and saved successfully")
        }
        catch (error) {
            const message = "error saving an realm-user";
            apiResponseHandler.sendError(req, res, "data", null, message)
        }
    }
    static async listRealm(req, res, next) {
        try {
            const data = await realmModel.findAll();
            if (Array.isArray(data) && data.length) {
                apiResponseHandler.send(req, res, "data", data, "List all Realm data successfully")
            } else {
                apiResponseHandler.send(req, res, "data", null, "No Data found ")
            }
        } catch (error) {
                const message = "error fetching realm";
                apiResponseHandler.sendError(req, res, "data", null, message)
            }
        }
    static async fetchRealmById(req, res, next) {
        try {
            const realm_id = req.params.id
            let isRealmExist = await RealmController.realmExist(realm_id)
            if (!isRealmExist) {

                const message = "Realm not available with given id";
                apiResponseHandler.sendError(req, res, "data", null, message)
            } else {
                const data = isRealmExist
                apiResponseHandler.send(req, res, "data", data, "Realm fetched successfully")
            }
        } catch (error) {
            const message = "error fetching realm";
            apiResponseHandler.sendError(req, res, "data", null, message)
        }
    }
    static async listRealmUser(req, res, next) {
        try {
            const data = await realmUserModel.findAll();
            if (Array.isArray(data) && data.length) {
                apiResponseHandler.send(req, res, "data", data, "List all Realm data successfully")
            } else {
                apiResponseHandler.send(req, res, "data", data, "No Data found ")
            }
        } catch (error) {
            const message = "error fetching realm";
            apiResponseHandler.sendError(req, res, "data", null, message)
        }
    }
    static async realmExist(id) {
        return realmModel.findOne({ where: { id: id } })
    }
}

module.exports = RealmController