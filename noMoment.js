module.exports = {
  create: function (context) {
    return {
      CallExpression(node) {
        if (
          node.callee.name === "moment" ||
          (node.callee.name === "require" &&
            node.arguments[0].value === "moment")
        ) {
          context.report({
            node: node,
            message: "Importing 'moment' library is not allowed.",
          });
        }
      },
    };
  },
};
