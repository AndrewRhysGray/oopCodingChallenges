class User {
    constructor(username) {
        this.numberOfArticles = 0;
        this._username = username;
    }

    set username(newUsername) {
        this._username = newUsername;
    }

    setNumberOfArticles(numberOfArticles) {
        this.numberOfArticles = numberOfArticles;
    }

    getNumberOfArticles() {
        return this.numberOfArticles;
    }

    calcScores() {
        // This method will be implemented differently in Author and Editor classes
    }

    expressYourRole() {
        return "User";
    }

    sayHello() {
        return "Hello " + this.expressYourRole() + " " + this._username;
    }
}

class Author extends User {
    calcScores() {
        return this.numberOfArticles * 10 + 20;
    }
}

class Editor extends User {
    calcScores() {
        return this.numberOfArticles * 6 + 15;
    }
}

const author = new Author("Balthazar");
author.setNumberOfArticles(8);
console.log("Author's scores:", author.calcScores());

const editor = new Editor("Melchior");
editor.setNumberOfArticles(15);
console.log("Editor's scores:", editor.calcScores());

class UserAbstract {
    constructor(username) {
        this._username = username;
    }

    set username(newUsername) {
        this._username = newUsername;
    }

    get username() {
        return this._username;
    }

    stateYourRole() {
        throw new Error("This method must be implemented by subclasses");
    }
}

class Admin extends UserAbstract {
    stateYourRole() {
        return "admin";
    }
}

class Viewer extends UserAbstract {
    stateYourRole() {
        return "viewer";
    }
}

const admin = new Admin("Balthazar")
const viewer = new Viewer("Melchior")

console.log(admin.username, admin.stateYourRole())
console.log(viewer.username, viewer.stateYourRole());
