const path = require("path");
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBuild = async () => {
    await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false
        });
    }
};