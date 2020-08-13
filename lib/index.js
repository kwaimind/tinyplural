"use strict";
// https://www.grammarly.com/blog/plural-nouns/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardNouns = exports.isNouns = exports.usNouns = exports.otherNouns = exports.endsInFOrFe = exports.endsInY = exports.endsInO = exports.isNonChanging = exports.isIregular = void 0;
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
exports.endsInFOrFe = function (noun, count) {
    if (count === void 0) { count = 1; }
    var exceptions = ['roof', 'cliff', 'proof'];
    if (exceptions.indexOf(noun) !== -1) {
        return count && count > 1 ? noun + "s" : noun;
    }
    if (/(f|fe)$/gim.test(noun)) {
        return count && count > 1 ? noun.replace(/(f|fe)$/, 'ves') : noun;
    }
    return null;
};
exports.otherNouns = function (noun, count) {
    if (count === void 0) { count = 1; }
    if (/z$/gim.test(noun)) {
        return count && count > 1 ? noun + "zes" : noun;
    }
    if (/(s|ch|sh|x|z)$/gim.test(noun)) {
        return count && count > 1 ? noun + "es" : noun;
    }
    return null;
};
exports.usNouns = function (noun, count) {
    if (count === void 0) { count = 1; }
    var regex = /us$/gim;
    if (regex.test(noun)) {
        return count && count > 1 ? noun.replace(regex, 'i') : noun;
    }
    return null;
};
exports.isNouns = function (noun, count) {
    if (count === void 0) { count = 1; }
    var regex = /is$/gim;
    if (regex.test(noun)) {
        return count && count > 1 ? noun.replace(regex, 'es') : noun;
    }
    return null;
};
exports.standardNouns = function (noun, count) {
    if (count === void 0) { count = 1; }
    return count && count > 1 ? noun + "s" : noun;
};
/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The number of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
var makeSuffix = function (noun, count) {
    if (count === void 0) { count = 1; }
    var nounFns = [
        exports.isIregular,
        exports.isNonChanging,
        exports.endsInO,
        exports.endsInY,
        exports.endsInFOrFe,
        exports.isNouns,
        exports.otherNouns,
        exports.standardNouns,
    ];
    var result;
    for (var i = 0; i < nounFns.length; i++) {
        var callFn = nounFns[i](noun, count);
        if (callFn !== null) {
            result = count + " " + callFn;
            break;
        }
    }
    return result;
};
exports.default = makeSuffix;
