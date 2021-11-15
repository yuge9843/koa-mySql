import Admin from "../model/admin"

interface iAdmin {
    name: string,
    password: string
}

class AdminService {
    getAdmin() {
        return Admin.findOne()
    }

    addAdmin(adminInfo: iAdmin) {
        return Admin.create(adminInfo)
    }
}

export default new AdminService