class User {
    constructor(id, username, name, bio) {
        this.id = id
        this.username = username
        this.name = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

    get getUsername(){
        return this.username
    }

    set setUsername(newUsername) {
        this.username = newUsername
    }

}

module.exports = User