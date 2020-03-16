import CaronteService from '../services/caronte';

class PurchaseController {
    
    async showByUser(req,res) {
        const {id: userId} = req.params;
    }

    async show(req,res) {
        const {id} = req.params;

    }

    async store(req,res) {
        const {userId} = req.user;
        const {title, value} = req.params;
    }
}

export default new PurchaseController;