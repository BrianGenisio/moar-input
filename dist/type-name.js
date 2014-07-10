"use strict";
module.exports = function(obj) {
  if (!obj || !obj.constructor || !obj.constructor.name)
    return "";
  return obj.constructor.name;
};

//# sourceMappingURL=type-name.js.map