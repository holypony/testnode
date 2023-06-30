const fs = require("fs");
const parseFile = () => {
    fs.readFile("fileFast2.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};
//# sourceMappingURL=repository.js.map