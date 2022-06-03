function getAdmins(map) {
    const admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Stephany", "Admin");
users.set("Jorge", "User");
users.set("Natália", "Admin");

console.log('Usuários administradores:');
console.log(getAdmins(users));