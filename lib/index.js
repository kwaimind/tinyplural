"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsInY = exports.endsInO = exports.isONNoun = exports.isNonChanging = exports.isIregular = void 0;
var irregularNouns_1 = __importDefault(require("./data/irregularNouns"));
var nonChangingNouns_1 = __importDefault(require("./data/nonChangingNouns"));
exports.isIregular = function (noun, count) {
    if (count === void 0) { count = 1; }
    var value = count > 1 ? 'plural' : 'single';
    var getNoun = irregularNouns_1.default.find(function (item) { return item.single === noun; }) || {};
    return getNoun[value] || null;
};
exports.isNonChanging = function (noun) {
    return nonChangingNouns_1.default.find(function (item) { return item === noun; }) || null;
};
exports.isONNoun = function (noun, count) {
    if (count === void 0) { count = 1; }
    var last2Chars = noun.slice(-2);
    if (/on/.test(last2Chars)) {
        return count && count > 1 ? noun.replace(/on/, 'a') : noun;
    }
    return null;
};
exports.endsInO = function (noun, count) {
    if (count === void 0) { count = 1; }
    if (/[^aeiou]o$/gim.test(noun)) {
        return count && count > 1 ? noun + "es" : noun;
    }
    if (/[aeiou]o$/gim.test(noun)) {
        return count && count > 1 ? noun + "s" : noun;
    }
    return null;
};
exports.endsInY = function (noun, count) {
    if (count === void 0) { count = 1; }
    if (/[^aeiou]y$/gim.test(noun)) {
        return count && count > 1 ? noun.replace('y', 'ies') : noun;
    }
    if (/[aeiou]y$/gim.test(noun)) {
        return count && count > 1 ? noun + "s" : noun;
    }
    return null;
};
var makeSuffix = function (noun, count) {
    if (count === void 0) { count = 1; }
    var nounFns = [exports.isIregular, exports.isNonChanging, exports.isONNoun, exports.endsInO];
    var result;
    nounFns.forEach(function (fn) {
        var callFn = fn(noun, count);
        if (callFn !== null) {
            result = count + " " + callFn;
        }
    });
    return result;
};
exports.default = makeSuffix;
