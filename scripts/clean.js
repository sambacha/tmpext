const fse = require("fs-extra");
const path = require("path");
const { extension } = require("../package.json");

function clean() {
  fse.removeSync(extension.outDir);
  fse.ensureDirSync(extension.outDir);
  fse.copyFileSync(
    path.join("src", "manifest.json"),
    path.join(extension.outDir, "manifest.json")
  );
}

clean();
