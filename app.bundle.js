/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-line-break/dist/LineBreak.js":
/*!*******************************************************!*\
  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(/*! ./Trie */ "./node_modules/css-line-break/dist/Trie.js");

var _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ "./node_modules/css-line-break/dist/linebreak-trie.js");

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/Trie.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Trie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),

/***/ "./node_modules/css-line-break/dist/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-line-break/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(/*! ./LineBreak */ "./node_modules/css-line-break/dist/LineBreak.js");

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),

/***/ "./node_modules/css-line-break/dist/linebreak-trie.js":
/*!************************************************************!*\
  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Angle.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Angle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Bounds.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Bounds.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(/*! ./drawing/BezierCurve */ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js");

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error( true ? 'Unable to get document size' : undefined);
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Clone.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Clone.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

var _ResourceLoader = __webpack_require__(/*! ./ResourceLoader */ "./node_modules/html2canvas/dist/npm/ResourceLoader.js");

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(/*! ./PseudoNodeContent */ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (true) {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (true) {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (true) {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (true) {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject( true ? 'Body element not found in Document that is getting rendered' : undefined);
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject( true ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : undefined);
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Color.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Color.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Feature.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Feature.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Font.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Font.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error( true ? 'No document found for font metrics' : undefined);
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Gradient.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Gradient.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(/*! ./Angle */ "./node_modules/html2canvas/dist/npm/Angle.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Input.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _Circle = __webpack_require__(/*! ./drawing/Circle */ "./node_modules/html2canvas/dist/npm/drawing/Circle.js");

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Length.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if ( true && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ListItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ListItem.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Logger.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Logger.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _borderRadius = __webpack_require__(/*! ./parsing/borderRadius */ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js");

var _display = __webpack_require__(/*! ./parsing/display */ "./node_modules/html2canvas/dist/npm/parsing/display.js");

var _float = __webpack_require__(/*! ./parsing/float */ "./node_modules/html2canvas/dist/npm/parsing/float.js");

var _font = __webpack_require__(/*! ./parsing/font */ "./node_modules/html2canvas/dist/npm/parsing/font.js");

var _letterSpacing = __webpack_require__(/*! ./parsing/letterSpacing */ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js");

var _lineBreak = __webpack_require__(/*! ./parsing/lineBreak */ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _margin = __webpack_require__(/*! ./parsing/margin */ "./node_modules/html2canvas/dist/npm/parsing/margin.js");

var _overflow = __webpack_require__(/*! ./parsing/overflow */ "./node_modules/html2canvas/dist/npm/parsing/overflow.js");

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

var _padding = __webpack_require__(/*! ./parsing/padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _textShadow = __webpack_require__(/*! ./parsing/textShadow */ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js");

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _transform = __webpack_require__(/*! ./parsing/transform */ "./node_modules/html2canvas/dist/npm/parsing/transform.js");

var _visibility = __webpack_require__(/*! ./parsing/visibility */ "./node_modules/html2canvas/dist/npm/parsing/visibility.js");

var _wordBreak = __webpack_require__(/*! ./parsing/word-break */ "./node_modules/html2canvas/dist/npm/parsing/word-break.js");

var _zIndex = __webpack_require__(/*! ./parsing/zIndex */ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js");

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (true) {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeParser.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeParser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(/*! ./StackingContext */ "./node_modules/html2canvas/dist/npm/StackingContext.js");

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (true) {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (true) {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if ( true && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Proxy.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Proxy.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject( true ? 'No proxy defined' : undefined);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject( true ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : undefined);
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : undefined);
            };
        }

        xhr.send();
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/PseudoNodeContent.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Renderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Renderer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Gradient = __webpack_require__(/*! ./Gradient */ "./node_modules/html2canvas/dist/npm/Gradient.js");

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (true) {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ResourceLoader.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ResourceLoader.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (true) {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (true) {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (true) {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) loading image' : undefined);
            }, timeout);
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/StackingContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/StackingContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextBounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextBounds.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Unicode.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Unicode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(/*! css-line-break */ "./node_modules/css-line-break/dist/index.js");

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Util.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Window.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Window.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(/*! ./NodeParser */ "./node_modules/html2canvas/dist/npm/NodeParser.js");

var _Renderer = __webpack_require__(/*! ./Renderer */ "./node_modules/html2canvas/dist/npm/Renderer.js");

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Clone = __webpack_require__(/*! ./Clone */ "./node_modules/html2canvas/dist/npm/Clone.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (true) {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (true) {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (true) {
                    logger.log('Starting renderer');
                }

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (true) {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js":
/*!******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _Vector = __webpack_require__(/*! ./Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Circle.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Circle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Path.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Path.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Size.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Size.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Vector.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Vector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(/*! ./Window */ "./node_modules/html2canvas/dist/npm/Window.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "$npm_package_version");

    if ( true && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (true) {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/background.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/background.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(/*! ../drawing/Size */ "./node_modules/html2canvas/dist/npm/drawing/Size.js");

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(/*! ../drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(/*! ../Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _padding = __webpack_require__(/*! ./padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (true) {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/border.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/border.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/borderRadius.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/display.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/display.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/float.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/float.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/font.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/font.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/lineBreak.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/listStyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(/*! ./background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/margin.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/margin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflow.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/padding.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/padding.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/position.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/position.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textDecoration.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textShadow.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textTransform.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/transform.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/transform.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/visibility.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/visibility.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/word-break.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/word-break.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/zIndex.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ../drawing/Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _textDecoration = __webpack_require__(/*! ../parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);


var node = document.getElementById('frame_container');
var image_avatar = document.getElementById('avatar');
html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(node, {
    allowTaint: true,
    foreignObjectRendering: true
}).then(canvas => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "manpower_efficiency.jpg";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    // link.click();
});

console.log(image_avatar)
// var myImage = new Image(100, 100);
// myImage.src = image_avatar;
// document.body.appendChild(myImage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvTGluZUJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L1RyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9saW5lYnJlYWstdHJpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0JvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Gb250LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9HcmFkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTm9kZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTm9kZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1BzZXVkb05vZGVDb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUmVzb3VyY2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1N0YWNraW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVGV4dEJvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVGV4dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vV2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL0JlemllckN1cnZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vZHJhd2luZy9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9ib3JkZXJSYWRpdXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9mb250LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2xldHRlclNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGluZUJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2xpc3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9tYXJnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvb3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvb3ZlcmZsb3dXcmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3BhZGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdGV4dERlY29yYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdGV4dFNoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0VHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy92aXNpYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3dvcmQtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvekluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9yZW5kZXJlci9DYW52YXNSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcmVuZGVyZXIvRm9yZWlnbk9iamVjdFJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGtDQUFrQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXJwQixZQUFZLG1CQUFPLENBQUMsMERBQVE7O0FBRTVCLHFCQUFxQixtQkFBTyxDQUFDLDhFQUFrQjs7QUFFL0M7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLDBEQUFROztBQUU1QixzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0NBQWtDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRWpNLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKOztBQUVBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsWUFBWTtBQUNaLGFBQWE7QUFDYjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWSw0QkFBNEI7QUFDeEM7QUFDQSxZQUFZLDJDQUEyQyxXQUFXO0FBQ2xFLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVksNENBQTRDO0FBQ3hELFlBQVksMkJBQTJCO0FBQ3ZDLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVksb0NBQW9DO0FBQ2hELFlBQVk7QUFDWixZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNobUJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLFlBQVksbUJBQU8sQ0FBQywwREFBUTs7QUFFNUIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDOUpZOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsSGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsWUFBWSxtQkFBTyxDQUFDLDBEQUFROztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlCQUFpQixtQkFBTyxDQUFDLG9FQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM1Qlk7O0FBRWIsbzlpRDs7Ozs7Ozs7Ozs7O0FDRmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGNBQWMsbUJBQU8sQ0FBQywrRUFBa0I7O0FBRXhDOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLHlGQUF1Qjs7QUFFbEQ7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLEtBQXFDLG1DQUFtQyxTQUFFO0FBQ2xHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQixvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMxTWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEIsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGNBQWMsbUJBQU8sQ0FBQywrREFBVTs7QUFFaEMsYUFBYSxtQkFBTyxDQUFDLDZEQUFTOztBQUU5QixzQkFBc0IsbUJBQU8sQ0FBQywrRUFBa0I7O0FBRWhEOztBQUVBLFlBQVksbUJBQU8sQ0FBQywyREFBUTs7QUFFNUIsa0JBQWtCLG1CQUFPLENBQUMsdUZBQXNCOztBQUVoRCxzQkFBc0IsbUJBQU8sQ0FBQyxpR0FBMkI7O0FBRXpEOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLHFGQUFxQjs7QUFFdEQsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZ0NBQWdDLElBQXFDO0FBQ3JFO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0QkFBNEIsSUFBcUM7QUFDakU7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCLDRCQUE0QixJQUFxQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLDRDQUE0QztBQUM1QyxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsd0JBQXdCLElBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLDZCQUE2QiwrQkFBK0IsR0FBRzs7QUFFakc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsOEJBQThCLEtBQXFDLG1FQUFtRSxTQUFFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYSw0QkFBNEIsS0FBcUMsa0ZBQWtGLFNBQUU7QUFDbEssU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ3JrQmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDLGlDQUFpQyxlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSx5Q0FBeUMsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYSxFQUFFLDJCQUEyQiwwQkFBMEIsWUFBWSxFQUFFLDJDQUEyQyw4QkFBOEIsRUFBRSxPQUFPLDZFQUE2RSxFQUFFLEdBQUcsRUFBRTs7QUFFcnBCLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Six3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHVCQUF1QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDaFdhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDhEQUFVOztBQUUvQjs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEU7Ozs7Ozs7Ozs7OztBQ2hEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGtDQUFrQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXJwQixjQUFjLG1CQUFPLENBQUMsZ0VBQVc7O0FBRWpDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsRTs7Ozs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDN0dhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsK0VBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXNDO0FBQ3RDO0FBQ0E7QUFDQSxrREFBVztBQUNYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTGluZUJyZWFrZXIgPSBleHBvcnRzLmlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGV4cG9ydHMubGluZUJyZWFrQXRJbmRleCA9IGV4cG9ydHMuY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGV4cG9ydHMuVW5pY29kZVRyaWUgPSBleHBvcnRzLkJSRUFLX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX05PVF9BTExPV0VEID0gZXhwb3J0cy5CUkVBS19NQU5EQVRPUlkgPSBleHBvcnRzLmNsYXNzZXMgPSBleHBvcnRzLkxFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9UcmllID0gcmVxdWlyZSgnLi9UcmllJyk7XG5cbnZhciBfbGluZWJyZWFrVHJpZSA9IHJlcXVpcmUoJy4vbGluZWJyZWFrLXRyaWUnKTtcblxudmFyIF9saW5lYnJlYWtUcmllMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVicmVha1RyaWUpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMRVRURVJfTlVNQkVSX01PRElGSUVSID0gZXhwb3J0cy5MRVRURVJfTlVNQkVSX01PRElGSUVSID0gNTA7XG5cbi8vIE5vbi10YWlsb3JhYmxlIExpbmUgQnJlYWtpbmcgQ2xhc3Nlc1xudmFyIEJLID0gMTsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgQ1IgPSAyOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlciksIGV4Y2VwdCBiZXR3ZWVuIENSIGFuZCBMRlxudmFyIExGID0gMzsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgQ00gPSA0OyAvLyAgUHJvaGliaXQgYSBsaW5lIGJyZWFrIGJldHdlZW4gdGhlIGNoYXJhY3RlciBhbmQgdGhlIHByZWNlZGluZyBjaGFyYWN0ZXJcbnZhciBOTCA9IDU7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIFNHID0gNjsgLy8gIERvIG5vdCBvY2N1ciBpbiB3ZWxsLWZvcm1lZCB0ZXh0XG52YXIgV0ogPSA3OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlIGFuZCBhZnRlclxudmFyIFpXID0gODsgLy8gIFByb3ZpZGUgYSBicmVhayBvcHBvcnR1bml0eVxudmFyIEdMID0gOTsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZSBhbmQgYWZ0ZXJcbnZhciBTUCA9IDEwOyAvLyBFbmFibGUgaW5kaXJlY3QgbGluZSBicmVha3NcbnZhciBaV0ogPSAxMTsgLy8gUHJvaGliaXQgbGluZSBicmVha3Mgd2l0aGluIGpvaW5lciBzZXF1ZW5jZXNcbi8vIEJyZWFrIE9wcG9ydHVuaXRpZXNcbnZhciBCMiA9IDEyOyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYmVmb3JlIGFuZCBhZnRlciB0aGUgY2hhcmFjdGVyXG52YXIgQkEgPSAxMzsgLy8gIEdlbmVyYWxseSBwcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBhZnRlciB0aGUgY2hhcmFjdGVyXG52YXIgQkIgPSAxNDsgLy8gIEdlbmVyYWxseSBwcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBiZWZvcmUgdGhlIGNoYXJhY3RlclxudmFyIEhZID0gMTU7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBhZnRlciB0aGUgY2hhcmFjdGVyLCBleGNlcHQgaW4gbnVtZXJpYyBjb250ZXh0XG52YXIgQ0IgPSAxNjsgLy8gICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBjb250aW5nZW50IG9uIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbi8vIENoYXJhY3RlcnMgUHJvaGliaXRpbmcgQ2VydGFpbiBCcmVha3NcbnZhciBDTCA9IDE3OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgQ1AgPSAxODsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIEVYID0gMTk7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBJTiA9IDIwOyAvLyAgQWxsb3cgb25seSBpbmRpcmVjdCBsaW5lIGJyZWFrcyBiZXR3ZWVuIHBhaXJzXG52YXIgTlMgPSAyMTsgLy8gIEFsbG93IG9ubHkgaW5kaXJlY3QgbGluZSBicmVha3MgYmVmb3JlXG52YXIgT1AgPSAyMjsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGFmdGVyXG52YXIgUVUgPSAyMzsgLy8gIEFjdCBsaWtlIHRoZXkgYXJlIGJvdGggb3BlbmluZyBhbmQgY2xvc2luZ1xuLy8gTnVtZXJpYyBDb250ZXh0XG52YXIgSVMgPSAyNDsgLy8gIFByZXZlbnQgYnJlYWtzIGFmdGVyIGFueSBhbmQgYmVmb3JlIG51bWVyaWNcbnZhciBOVSA9IDI1OyAvLyAgRm9ybSBudW1lcmljIGV4cHJlc3Npb25zIGZvciBsaW5lIGJyZWFraW5nIHB1cnBvc2VzXG52YXIgUE8gPSAyNjsgLy8gIERvIG5vdCBicmVhayBmb2xsb3dpbmcgYSBudW1lcmljIGV4cHJlc3Npb25cbnZhciBQUiA9IDI3OyAvLyAgRG8gbm90IGJyZWFrIGluIGZyb250IG9mIGEgbnVtZXJpYyBleHByZXNzaW9uXG52YXIgU1kgPSAyODsgLy8gIFByZXZlbnQgYSBicmVhayBiZWZvcmU7IGFuZCBhbGxvdyBhIGJyZWFrIGFmdGVyXG4vLyBPdGhlciBDaGFyYWN0ZXJzXG52YXIgQUkgPSAyOTsgLy8gIEFjdCBsaWtlIEFMIHdoZW4gdGhlIHJlc29sdmVkRUFXIGlzIE47IG90aGVyd2lzZTsgYWN0IGFzIElEXG52YXIgQUwgPSAzMDsgLy8gIEFyZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgb3Igc3ltYm9scyB0aGF0IGFyZSB1c2VkIHdpdGggYWxwaGFiZXRpYyBjaGFyYWN0ZXJzXG52YXIgQ0ogPSAzMTsgLy8gIFRyZWF0IGFzIE5TIG9yIElEIGZvciBzdHJpY3Qgb3Igbm9ybWFsIGJyZWFraW5nLlxudmFyIEVCID0gMzI7IC8vICBEbyBub3QgYnJlYWsgZnJvbSBmb2xsb3dpbmcgRW1vamkgTW9kaWZpZXJcbnZhciBFTSA9IDMzOyAvLyAgRG8gbm90IGJyZWFrIGZyb20gcHJlY2VkaW5nIEVtb2ppIEJhc2VcbnZhciBIMiA9IDM0OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSDMgPSAzNTsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEhMID0gMzY7IC8vICBEbyBub3QgYnJlYWsgYXJvdW5kIGEgZm9sbG93aW5nIGh5cGhlbjsgb3RoZXJ3aXNlIGFjdCBhcyBBbHBoYWJldGljXG52YXIgSUQgPSAzNzsgLy8gIEJyZWFrIGJlZm9yZSBvciBhZnRlcjsgZXhjZXB0IGluIHNvbWUgbnVtZXJpYyBjb250ZXh0XG52YXIgSkwgPSAzODsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEpWID0gMzk7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBKVCA9IDQwOyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgUkkgPSA0MTsgLy8gIEtlZXAgcGFpcnMgdG9nZXRoZXIuIEZvciBwYWlyczsgYnJlYWsgYmVmb3JlIGFuZCBhZnRlciBvdGhlciBjbGFzc2VzXG52YXIgU0EgPSA0MjsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGNvbnRpbmdlbnQgb24gYWRkaXRpb25hbCwgbGFuZ3VhZ2Utc3BlY2lmaWMgY29udGV4dCBhbmFseXNpc1xudmFyIFhYID0gNDM7IC8vICBIYXZlIGFzIHlldCB1bmtub3duIGxpbmUgYnJlYWtpbmcgYmVoYXZpb3Igb3IgdW5hc3NpZ25lZCBjb2RlIHBvc2l0aW9uc1xuXG52YXIgY2xhc3NlcyA9IGV4cG9ydHMuY2xhc3NlcyA9IHtcbiAgICBCSzogQkssXG4gICAgQ1I6IENSLFxuICAgIExGOiBMRixcbiAgICBDTTogQ00sXG4gICAgTkw6IE5MLFxuICAgIFNHOiBTRyxcbiAgICBXSjogV0osXG4gICAgWlc6IFpXLFxuICAgIEdMOiBHTCxcbiAgICBTUDogU1AsXG4gICAgWldKOiBaV0osXG4gICAgQjI6IEIyLFxuICAgIEJBOiBCQSxcbiAgICBCQjogQkIsXG4gICAgSFk6IEhZLFxuICAgIENCOiBDQixcbiAgICBDTDogQ0wsXG4gICAgQ1A6IENQLFxuICAgIEVYOiBFWCxcbiAgICBJTjogSU4sXG4gICAgTlM6IE5TLFxuICAgIE9QOiBPUCxcbiAgICBRVTogUVUsXG4gICAgSVM6IElTLFxuICAgIE5VOiBOVSxcbiAgICBQTzogUE8sXG4gICAgUFI6IFBSLFxuICAgIFNZOiBTWSxcbiAgICBBSTogQUksXG4gICAgQUw6IEFMLFxuICAgIENKOiBDSixcbiAgICBFQjogRUIsXG4gICAgRU06IEVNLFxuICAgIEgyOiBIMixcbiAgICBIMzogSDMsXG4gICAgSEw6IEhMLFxuICAgIElEOiBJRCxcbiAgICBKTDogSkwsXG4gICAgSlY6IEpWLFxuICAgIEpUOiBKVCxcbiAgICBSSTogUkksXG4gICAgU0E6IFNBLFxuICAgIFhYOiBYWFxufTtcblxudmFyIEJSRUFLX01BTkRBVE9SWSA9IGV4cG9ydHMuQlJFQUtfTUFOREFUT1JZID0gJyEnO1xudmFyIEJSRUFLX05PVF9BTExPV0VEID0gZXhwb3J0cy5CUkVBS19OT1RfQUxMT1dFRCA9ICfDlyc7XG52YXIgQlJFQUtfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfQUxMT1dFRCA9ICfDtyc7XG52YXIgVW5pY29kZVRyaWUgPSBleHBvcnRzLlVuaWNvZGVUcmllID0gKDAsIF9UcmllLmNyZWF0ZVRyaWVGcm9tQmFzZTY0KShfbGluZWJyZWFrVHJpZTIuZGVmYXVsdCk7XG5cbnZhciBBTFBIQUJFVElDUyA9IFtBTCwgSExdO1xudmFyIEhBUkRfTElORV9CUkVBS1MgPSBbQkssIENSLCBMRiwgTkxdO1xudmFyIFNQQUNFID0gW1NQLCBaV107XG52YXIgUFJFRklYX1BPU1RGSVggPSBbUFIsIFBPXTtcbnZhciBMSU5FX0JSRUFLUyA9IEhBUkRfTElORV9CUkVBS1MuY29uY2F0KFNQQUNFKTtcbnZhciBLT1JFQU5fU1lMTEFCTEVfQkxPQ0sgPSBbSkwsIEpWLCBKVCwgSDIsIEgzXTtcbnZhciBIWVBIRU4gPSBbSFksIEJBXTtcblxudmFyIGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBleHBvcnRzLmNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBmdW5jdGlvbiBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMpIHtcbiAgICB2YXIgbGluZUJyZWFrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnc3RyaWN0JztcblxuICAgIHZhciB0eXBlcyA9IFtdO1xuICAgIHZhciBpbmRpY2llcyA9IFtdO1xuICAgIHZhciBjYXRlZ29yaWVzID0gW107XG4gICAgY29kZVBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlUG9pbnQsIGluZGV4KSB7XG4gICAgICAgIHZhciBjbGFzc1R5cGUgPSBVbmljb2RlVHJpZS5nZXQoY29kZVBvaW50KTtcbiAgICAgICAgaWYgKGNsYXNzVHlwZSA+IExFVFRFUl9OVU1CRVJfTU9ESUZJRVIpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIGNsYXNzVHlwZSAtPSBMRVRURVJfTlVNQkVSX01PRElGSUVSO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ25vcm1hbCcsICdhdXRvJywgJ2xvb3NlJ10uaW5kZXhPZihsaW5lQnJlYWspICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gVSsyMDEwLCDigJMgVSsyMDEzLCDjgJwgVSszMDFDLCDjgqAgVSszMEEwXG4gICAgICAgICAgICBpZiAoWzB4MjAxMCwgMHgyMDEzLCAweDMwMWMsIDB4MzBhMF0uaW5kZXhPZihjb2RlUG9pbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKENCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IENNIHx8IGNsYXNzVHlwZSA9PT0gWldKKSB7XG4gICAgICAgICAgICAvLyBMQjEwIFRyZWF0IGFueSByZW1haW5pbmcgY29tYmluaW5nIG1hcmsgb3IgWldKIGFzIEFMLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBMQjkgRG8gbm90IGJyZWFrIGEgY29tYmluaW5nIGNoYXJhY3RlciBzZXF1ZW5jZTsgdHJlYXQgaXQgYXMgaWYgaXQgaGFzIHRoZSBsaW5lIGJyZWFraW5nIGNsYXNzIG9mXG4gICAgICAgICAgICAvLyB0aGUgYmFzZSBjaGFyYWN0ZXIgaW4gYWxsIG9mIHRoZSBmb2xsb3dpbmcgcnVsZXMuIFRyZWF0IFpXSiBhcyBpZiBpdCB3ZXJlIENNLlxuICAgICAgICAgICAgdmFyIHByZXYgPSB0eXBlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgaWYgKExJTkVfQlJFQUtTLmluZGV4T2YocHJldikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRpY2llc1tpbmRleCAtIDFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQ0opIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKGxpbmVCcmVhayA9PT0gJ3N0cmljdCcgPyBOUyA6IElEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IFNBKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBBSSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIHN1cHBsZW1lbnRhcnkgY2hhcmFjdGVycywgYSB1c2VmdWwgZGVmYXVsdCBpcyB0byB0cmVhdCBjaGFyYWN0ZXJzIGluIHRoZSByYW5nZSAxMDAwMC4uMUZGRkQgYXMgQUxcbiAgICAgICAgLy8gYW5kIGNoYXJhY3RlcnMgaW4gdGhlIHJhbmdlcyAyMDAwMC4uMkZGRkQgYW5kIDMwMDAwLi4zRkZGRCBhcyBJRCwgdW50aWwgdGhlIGltcGxlbWVudGF0aW9uIGNhbiBiZSByZXZpc2VkXG4gICAgICAgIC8vIHRvIHRha2UgaW50byBhY2NvdW50IHRoZSBhY3R1YWwgbGluZSBicmVha2luZyBwcm9wZXJ0aWVzIGZvciB0aGVzZSBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBYWCkge1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAweDIwMDAwICYmIGNvZGVQb2ludCA8PSAweDJmZmZkIHx8IGNvZGVQb2ludCA+PSAweDMwMDAwICYmIGNvZGVQb2ludCA8PSAweDNmZmZkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goSUQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcy5wdXNoKGNsYXNzVHlwZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2luZGljaWVzLCB0eXBlcywgY2F0ZWdvcmllc107XG59O1xuXG52YXIgaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQgPSBmdW5jdGlvbiBpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChhLCBiLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpIHtcbiAgICB2YXIgY3VycmVudCA9IGNsYXNzVHlwZXNbY3VycmVudEluZGV4XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSA/IGEuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgOiBhID09PSBjdXJyZW50KSB7XG4gICAgICAgIHZhciBpID0gY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAoaSA8PSBjbGFzc1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgdmFyIG5leHQgPSBjbGFzc1R5cGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50ID09PSBTUCkge1xuICAgICAgICB2YXIgX2kgPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKF9pID4gMCkge1xuICAgICAgICAgICAgX2ktLTtcbiAgICAgICAgICAgIHZhciBwcmV2ID0gY2xhc3NUeXBlc1tfaV07XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpID8gYS5pbmRleE9mKHByZXYpICE9PSAtMSA6IGEgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBjbGFzc1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbmV4dCA9IGNsYXNzVHlwZXNbbl07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9uZXh0ID09PSBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbmV4dCAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldiAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgcHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZSA9IGZ1bmN0aW9uIHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSB7XG4gICAgdmFyIGkgPSBjdXJyZW50SW5kZXg7XG4gICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgICB2YXIgdHlwZSA9IGNsYXNzVHlwZXNbaV07XG4gICAgICAgIGlmICh0eXBlID09PSBTUCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG52YXIgX2xpbmVCcmVha0F0SW5kZXggPSBmdW5jdGlvbiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaW5kZXgsIGZvcmJpZGRlbkJyZWFrcykge1xuICAgIGlmIChpbmRpY2llc1tpbmRleF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9yYmlkZGVuQnJlYWtzKSAmJiBmb3JiaWRkZW5CcmVha3NbY3VycmVudEluZGV4XSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgdmFyIGJlZm9yZUluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICB2YXIgYWZ0ZXJJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgdmFyIGN1cnJlbnQgPSBjbGFzc1R5cGVzW2N1cnJlbnRJbmRleF07XG5cbiAgICAvLyBMQjQgQWx3YXlzIGJyZWFrIGFmdGVyIGhhcmQgbGluZSBicmVha3MuXG4gICAgLy8gTEI1IFRyZWF0IENSIGZvbGxvd2VkIGJ5IExGLCBhcyB3ZWxsIGFzIENSLCBMRiwgYW5kIE5MIGFzIGhhcmQgbGluZSBicmVha3MuXG4gICAgdmFyIGJlZm9yZSA9IGJlZm9yZUluZGV4ID49IDAgPyBjbGFzc1R5cGVzW2JlZm9yZUluZGV4XSA6IDA7XG4gICAgdmFyIG5leHQgPSBjbGFzc1R5cGVzW2FmdGVySW5kZXhdO1xuXG4gICAgaWYgKGN1cnJlbnQgPT09IENSICYmIG5leHQgPT09IExGKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICBpZiAoSEFSRF9MSU5FX0JSRUFLUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTUFOREFUT1JZO1xuICAgIH1cblxuICAgIC8vIExCNiBEbyBub3QgYnJlYWsgYmVmb3JlIGhhcmQgbGluZSBicmVha3MuXG4gICAgaWYgKEhBUkRfTElORV9CUkVBS1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCNyBEbyBub3QgYnJlYWsgYmVmb3JlIHNwYWNlcyBvciB6ZXJvIHdpZHRoIHNwYWNlLlxuICAgIGlmIChTUEFDRS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI4IEJyZWFrIGJlZm9yZSBhbnkgY2hhcmFjdGVyIGZvbGxvd2luZyBhIHplcm8td2lkdGggc3BhY2UsIGV2ZW4gaWYgb25lIG9yIG1vcmUgc3BhY2VzIGludGVydmVuZS5cbiAgICBpZiAocHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpID09PSBaVykge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjhhIERvIG5vdCBicmVhayBiZXR3ZWVuIGEgemVybyB3aWR0aCBqb2luZXIgYW5kIGFuIGlkZW9ncmFwaCwgZW1vamkgYmFzZSBvciBlbW9qaSBtb2RpZmllci5cbiAgICBpZiAoVW5pY29kZVRyaWUuZ2V0KGNvZGVQb2ludHNbY3VycmVudEluZGV4XSkgPT09IFpXSiAmJiAobmV4dCA9PT0gSUQgfHwgbmV4dCA9PT0gRUIgfHwgbmV4dCA9PT0gRU0pKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjExIERvIG5vdCBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgV29yZCBqb2luZXIgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gV0ogfHwgbmV4dCA9PT0gV0opIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTIgRG8gbm90IGJyZWFrIGFmdGVyIE5CU1AgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gR0wpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTJhIERvIG5vdCBicmVhayBiZWZvcmUgTkJTUCBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLCBleGNlcHQgYWZ0ZXIgc3BhY2VzIGFuZCBoeXBoZW5zLlxuICAgIGlmIChbU1AsIEJBLCBIWV0uaW5kZXhPZihjdXJyZW50KSA9PT0gLTEgJiYgbmV4dCA9PT0gR0wpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTMgRG8gbm90IGJyZWFrIGJlZm9yZSDigJhd4oCZIG9yIOKAmCHigJkgb3Ig4oCYO+KAmSBvciDigJgv4oCZLCBldmVuIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAoW0NMLCBDUCwgRVgsIElTLCBTWV0uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTQgRG8gbm90IGJyZWFrIGFmdGVyIOKAmFvigJksIGV2ZW4gYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykgPT09IE9QKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE1IERvIG5vdCBicmVhayB3aXRoaW4g4oCY4oCdW+KAmSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoUVUsIE9QLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE2IERvIG5vdCBicmVhayBiZXR3ZWVuIGNsb3NpbmcgcHVuY3R1YXRpb24gYW5kIGEgbm9uc3RhcnRlciAobGI9TlMpLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChbQ0wsIENQXSwgTlMsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTcgRG8gbm90IGJyZWFrIHdpdGhpbiDigJjigJTigJTigJksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKEIyLCBCMiwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxOCBCcmVhayBhZnRlciBzcGFjZXMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNQKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTkgRG8gbm90IGJyZWFrIGJlZm9yZSBvciBhZnRlciBxdW90YXRpb24gbWFya3MsIHN1Y2ggYXMg4oCYIOKAnSDigJkuXG4gICAgaWYgKGN1cnJlbnQgPT09IFFVIHx8IG5leHQgPT09IFFVKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIwIEJyZWFrIGJlZm9yZSBhbmQgYWZ0ZXIgdW5yZXNvbHZlZCBDQi5cbiAgICBpZiAobmV4dCA9PT0gQ0IgfHwgY3VycmVudCA9PT0gQ0IpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMSBEbyBub3QgYnJlYWsgYmVmb3JlIGh5cGhlbi1taW51cywgb3RoZXIgaHlwaGVucywgZml4ZWQtd2lkdGggc3BhY2VzLCBzbWFsbCBrYW5hLCBhbmQgb3RoZXIgbm9uLXN0YXJ0ZXJzLCBvciBhZnRlciBhY3V0ZSBhY2NlbnRzLlxuICAgIGlmIChbQkEsIEhZLCBOU10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgY3VycmVudCA9PT0gQkIpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjFhIERvbid0IGJyZWFrIGFmdGVyIEhlYnJldyArIEh5cGhlbi5cbiAgICBpZiAoYmVmb3JlID09PSBITCAmJiBIWVBIRU4uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjFiIERvbuKAmXQgYnJlYWsgYmV0d2VlbiBTb2xpZHVzIGFuZCBIZWJyZXcgbGV0dGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gU1kgJiYgbmV4dCA9PT0gSEwpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjIgRG8gbm90IGJyZWFrIGJldHdlZW4gdHdvIGVsbGlwc2VzLCBvciBiZXR3ZWVuIGxldHRlcnMsIG51bWJlcnMgb3IgZXhjbGFtYXRpb25zIGFuZCBlbGxpcHNpcy5cbiAgICBpZiAobmV4dCA9PT0gSU4gJiYgQUxQSEFCRVRJQ1MuY29uY2F0KElOLCBFWCwgTlUsIElELCBFQiwgRU0pLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIzIERvIG5vdCBicmVhayBiZXR3ZWVuIGRpZ2l0cyBhbmQgbGV0dGVycy5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gTlUgfHwgQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gTlUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjNhIERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHJlZml4ZXMgYW5kIGlkZW9ncmFwaHMsIG9yIGJldHdlZW4gaWRlb2dyYXBocyBhbmQgbnVtZXJpYyBwb3N0Zml4ZXMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFBSICYmIFtJRCwgRUIsIEVNXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSUQsIEVCLCBFTV0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gUE8pIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjQgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwcmVmaXgvcG9zdGZpeCBhbmQgbGV0dGVycywgb3IgYmV0d2VlbiBsZXR0ZXJzIGFuZCBwcmVmaXgvcG9zdGZpeC5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgUFJFRklYX1BPU1RGSVguaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgUFJFRklYX1BPU1RGSVguaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjUgRG8gbm90IGJyZWFrIGJldHdlZW4gdGhlIGZvbGxvd2luZyBwYWlycyBvZiBjbGFzc2VzIHJlbGV2YW50IHRvIG51bWJlcnM6XG4gICAgaWYgKFxuICAgIC8vIChQUiB8IFBPKSDDlyAoIE9QIHwgSFkgKT8gTlVcbiAgICBbUFIsIFBPXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiAobmV4dCA9PT0gTlUgfHwgW09QLCBIWV0uaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY2xhc3NUeXBlc1thZnRlckluZGV4ICsgMV0gPT09IE5VKSB8fFxuICAgIC8vICggT1AgfCBIWSApIMOXIE5VXG4gICAgW09QLCBIWV0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gTlUgfHxcbiAgICAvLyBOVSDDl1x0KE5VIHwgU1kgfCBJUylcbiAgICBjdXJyZW50ID09PSBOVSAmJiBbTlUsIFNZLCBJU10uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIE5VIChOVSB8IFNZIHwgSVMpKiDDlyAoTlUgfCBTWSB8IElTIHwgQ0wgfCBDUClcbiAgICBpZiAoW05VLCBTWSwgSVMsIENMLCBDUF0uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKHByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGNsYXNzVHlwZXNbcHJldkluZGV4XTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBOVSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW1NZLCBJU10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOVSAoTlUgfCBTWSB8IElTKSogKENMIHwgQ1ApPyDDlyAoUE8gfCBQUikpXG4gICAgaWYgKFtQUiwgUE9dLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHZhciBfcHJldkluZGV4ID0gW0NMLCBDUF0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgPyBiZWZvcmVJbmRleCA6IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKF9wcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIF90eXBlID0gY2xhc3NUeXBlc1tfcHJldkluZGV4XTtcbiAgICAgICAgICAgIGlmIChfdHlwZSA9PT0gTlUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtTWSwgSVNdLmluZGV4T2YoX3R5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIF9wcmV2SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMQjI2IERvIG5vdCBicmVhayBhIEtvcmVhbiBzeWxsYWJsZS5cbiAgICBpZiAoSkwgPT09IGN1cnJlbnQgJiYgW0pMLCBKViwgSDIsIEgzXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSlYsIEgyXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBbSlYsIEpUXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSlQsIEgzXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBKVCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNyBUcmVhdCBhIEtvcmVhbiBTeWxsYWJsZSBCbG9jayB0aGUgc2FtZSBhcyBJRC5cbiAgICBpZiAoS09SRUFOX1NZTExBQkxFX0JMT0NLLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFtJTiwgUE9dLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IEtPUkVBTl9TWUxMQUJMRV9CTE9DSy5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBQUikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyOCBEbyBub3QgYnJlYWsgYmV0d2VlbiBhbHBoYWJldGljcyAo4oCcYXTigJ0pLlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyOSBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHB1bmN0dWF0aW9uIGFuZCBhbHBoYWJldGljcyAo4oCcZS5nLuKAnSkuXG4gICAgaWYgKGN1cnJlbnQgPT09IElTICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMwIERvIG5vdCBicmVhayBiZXR3ZWVuIGxldHRlcnMsIG51bWJlcnMsIG9yIG9yZGluYXJ5IHN5bWJvbHMgYW5kIG9wZW5pbmcgb3IgY2xvc2luZyBwYXJlbnRoZXNlcy5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuY29uY2F0KE5VKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBPUCB8fCBBTFBIQUJFVElDUy5jb25jYXQoTlUpLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IENQKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMwYSBCcmVhayBiZXR3ZWVuIHR3byByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scyBpZiBhbmQgb25seSBpZiB0aGVyZSBhcmUgYW4gZXZlbiBudW1iZXIgb2YgcmVnaW9uYWxcbiAgICAvLyBpbmRpY2F0b3JzIHByZWNlZGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGJyZWFrLlxuICAgIGlmIChjdXJyZW50ID09PSBSSSAmJiBuZXh0ID09PSBSSSkge1xuICAgICAgICB2YXIgaSA9IGluZGljaWVzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgaWYgKGNsYXNzVHlwZXNbaV0gPT09IFJJKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTEIzMGIgRG8gbm90IGJyZWFrIGJldHdlZW4gYW4gZW1vamkgYmFzZSBhbmQgYW4gZW1vamkgbW9kaWZpZXIuXG4gICAgaWYgKGN1cnJlbnQgPT09IEVCICYmIG5leHQgPT09IEVNKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbn07XG5cbnZhciBsaW5lQnJlYWtBdEluZGV4ID0gZXhwb3J0cy5saW5lQnJlYWtBdEluZGV4ID0gZnVuY3Rpb24gbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBpbmRleCkge1xuICAgIC8vIExCMiBOZXZlciBicmVhayBhdCB0aGUgc3RhcnQgb2YgdGV4dC5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMyBBbHdheXMgYnJlYWsgYXQgdGhlIGVuZCBvZiB0ZXh0LlxuICAgIGlmIChpbmRleCA+PSBjb2RlUG9pbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTUFOREFUT1JZO1xuICAgIH1cblxuICAgIHZhciBfY29kZVBvaW50c1RvQ2hhcmFjdGUgPSBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMpLFxuICAgICAgICBfY29kZVBvaW50c1RvQ2hhcmFjdGUyID0gX3NsaWNlZFRvQXJyYXkoX2NvZGVQb2ludHNUb0NoYXJhY3RlLCAyKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGUyWzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlMlsxXTtcblxuICAgIHJldHVybiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaW5kZXgpO1xufTtcblxudmFyIGNzc0Zvcm1hdHRlZENsYXNzZXMgPSBmdW5jdGlvbiBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgbGluZUJyZWFrOiAnbm9ybWFsJywgd29yZEJyZWFrOiAnbm9ybWFsJyB9O1xuICAgIH1cblxuICAgIHZhciBfY29kZVBvaW50c1RvQ2hhcmFjdGUzID0gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zLmxpbmVCcmVhayksXG4gICAgICAgIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTQgPSBfc2xpY2VkVG9BcnJheShfY29kZVBvaW50c1RvQ2hhcmFjdGUzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFsxXSxcbiAgICAgICAgaXNMZXR0ZXJOdW1iZXIgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzJdO1xuXG4gICAgaWYgKG9wdGlvbnMud29yZEJyZWFrID09PSAnYnJlYWstYWxsJyB8fCBvcHRpb25zLndvcmRCcmVhayA9PT0gJ2JyZWFrLXdvcmQnKSB7XG4gICAgICAgIGNsYXNzVHlwZXMgPSBjbGFzc1R5cGVzLm1hcChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtOVSwgQUwsIFNBXS5pbmRleE9mKHR5cGUpICE9PSAtMSA/IElEIDogdHlwZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gb3B0aW9ucy53b3JkQnJlYWsgPT09ICdrZWVwLWFsbCcgPyBpc0xldHRlck51bWJlci5tYXAoZnVuY3Rpb24gKGlzTGV0dGVyTnVtYmVyLCBpKSB7XG4gICAgICAgIHJldHVybiBpc0xldHRlck51bWJlciAmJiBjb2RlUG9pbnRzW2ldID49IDB4NGUwMCAmJiBjb2RlUG9pbnRzW2ldIDw9IDB4OWZmZjtcbiAgICB9KSA6IG51bGw7XG5cbiAgICByZXR1cm4gW2luZGljaWVzLCBjbGFzc1R5cGVzLCBmb3JiaWRkZW5CcmVha3BvaW50c107XG59O1xuXG52YXIgaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZXhwb3J0cy5pbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBmdW5jdGlvbiBpbmxpbmVCcmVha09wcG9ydHVuaXRpZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSAoMCwgX1V0aWwudG9Db2RlUG9pbnRzKShzdHIpO1xuICAgIHZhciBvdXRwdXQgPSBCUkVBS19OT1RfQUxMT1dFRDtcblxuICAgIHZhciBfY3NzRm9ybWF0dGVkQ2xhc3NlcyA9IGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucyksXG4gICAgICAgIF9jc3NGb3JtYXR0ZWRDbGFzc2VzMiA9IF9zbGljZWRUb0FycmF5KF9jc3NGb3JtYXR0ZWRDbGFzc2VzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMV0sXG4gICAgICAgIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzJdO1xuXG4gICAgY29kZVBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlUG9pbnQsIGkpIHtcbiAgICAgICAgb3V0cHV0ICs9ICgwLCBfVXRpbC5mcm9tQ29kZVBvaW50KShjb2RlUG9pbnQpICsgKGkgPj0gY29kZVBvaW50cy5sZW5ndGggLSAxID8gQlJFQUtfTUFOREFUT1JZIDogX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGkgKyAxLCBmb3JiaWRkZW5CcmVha3BvaW50cykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbn07XG5cbnZhciBCcmVhayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcmVhayhjb2RlUG9pbnRzLCBsaW5lQnJlYWssIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyZWFrKTtcblxuICAgICAgICB0aGlzLl9jb2RlUG9pbnRzID0gY29kZVBvaW50cztcbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGxpbmVCcmVhayA9PT0gQlJFQUtfTUFOREFUT1JZO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCcmVhaywgW3tcbiAgICAgICAga2V5OiAnc2xpY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2xpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gX1V0aWwuZnJvbUNvZGVQb2ludC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheSh0aGlzLl9jb2RlUG9pbnRzLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKSkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJyZWFrO1xufSgpO1xuXG52YXIgTGluZUJyZWFrZXIgPSBleHBvcnRzLkxpbmVCcmVha2VyID0gZnVuY3Rpb24gTGluZUJyZWFrZXIoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSAoMCwgX1V0aWwudG9Db2RlUG9pbnRzKShzdHIpO1xuXG4gICAgdmFyIF9jc3NGb3JtYXR0ZWRDbGFzc2VzMyA9IGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucyksXG4gICAgICAgIF9jc3NGb3JtYXR0ZWRDbGFzc2VzNCA9IF9zbGljZWRUb0FycmF5KF9jc3NGb3JtYXR0ZWRDbGFzc2VzMywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzFdLFxuICAgICAgICBmb3JiaWRkZW5CcmVha3BvaW50cyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFsyXTtcblxuICAgIHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgICB2YXIgbGFzdEVuZCA9IDA7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGluZUJyZWFrID0gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB3aGlsZSAobmV4dEluZGV4IDwgbGVuZ3RoICYmIChsaW5lQnJlYWsgPSBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgKytuZXh0SW5kZXgsIGZvcmJpZGRlbkJyZWFrcG9pbnRzKSkgPT09IEJSRUFLX05PVF9BTExPV0VEKSB7fVxuXG4gICAgICAgICAgICBpZiAobGluZUJyZWFrICE9PSBCUkVBS19OT1RfQUxMT1dFRCB8fCBuZXh0SW5kZXggPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5ldyBCcmVhayhjb2RlUG9pbnRzLCBsaW5lQnJlYWssIGxhc3RFbmQsIG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgbGFzdEVuZCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmllID0gZXhwb3J0cy5jcmVhdGVUcmllRnJvbUJhc2U2NCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8xX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzFfMiA9IGV4cG9ydHMuVVRSSUUyX0lOREVYX1NISUZUID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMSA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKiogU2hpZnQgc2l6ZSBmb3IgZ2V0dGluZyB0aGUgaW5kZXgtMiB0YWJsZSBvZmZzZXQuICovXG52YXIgVVRSSUUyX1NISUZUXzIgPSBleHBvcnRzLlVUUklFMl9TSElGVF8yID0gNTtcblxuLyoqIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTEgdGFibGUgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9TSElGVF8xID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMSA9IDYgKyA1O1xuXG4vKipcbiAqIFNoaWZ0IHNpemUgZm9yIHNoaWZ0aW5nIGxlZnQgdGhlIGluZGV4IGFycmF5IHZhbHVlcy5cbiAqIEluY3JlYXNlcyBwb3NzaWJsZSBkYXRhIHNpemUgd2l0aCAxNi1iaXQgaW5kZXggdmFsdWVzIGF0IHRoZSBjb3N0XG4gKiBvZiBjb21wYWN0YWJpbGl0eS5cbiAqIFRoaXMgcmVxdWlyZXMgZGF0YSBibG9ja3MgdG8gYmUgYWxpZ25lZCBieSBVVFJJRTJfREFUQV9HUkFOVUxBUklUWS5cbiAqL1xudmFyIFVUUklFMl9JTkRFWF9TSElGVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYX1NISUZUID0gMjtcblxuLyoqXG4gKiBEaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBzaGlmdCBzaXplcyxcbiAqIGZvciBnZXR0aW5nIGFuIGluZGV4LTEgb2Zmc2V0IGZyb20gYW4gaW5kZXgtMiBvZmZzZXQuIDY9MTEtNVxuICovXG52YXIgVVRSSUUyX1NISUZUXzFfMiA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzFfMiA9IFVUUklFMl9TSElGVF8xIC0gVVRSSUUyX1NISUZUXzI7XG5cbi8qKlxuICogVGhlIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGUgZm9yIFUrRDgwMC4uVStEQkZGIHN0b3JlcyB2YWx1ZXMgZm9yXG4gKiBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF91bml0c18gbm90IGNvZGUgX3BvaW50c18uXG4gKiBWYWx1ZXMgZm9yIGxlYWQgc3Vycm9nYXRlIGNvZGUgX3BvaW50c18gYXJlIGluZGV4ZWQgd2l0aCB0aGlzIHBvcnRpb24gb2YgdGhlIHRhYmxlLlxuICogTGVuZ3RoPTMyPTB4MjA9MHg0MDA+PlVUUklFMl9TSElGVF8yLiAoVGhlcmUgYXJlIDEwMjQ9MHg0MDAgbGVhZCBzdXJyb2dhdGVzLilcbiAqL1xudmFyIFVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IDB4MTAwMDAgPj4gVVRSSUUyX1NISUZUXzI7XG5cbi8qKiBOdW1iZXIgb2YgZW50cmllcyBpbiBhIGRhdGEgYmxvY2suIDMyPTB4MjAgKi9cbnZhciBVVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IDEgPDwgVVRSSUUyX1NISUZUXzI7XG4vKiogTWFzayBmb3IgZ2V0dGluZyB0aGUgbG93ZXIgYml0cyBmb3IgdGhlIGluLWRhdGEtYmxvY2sgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9EQVRBX01BU0sgPSBleHBvcnRzLlVUUklFMl9EQVRBX01BU0sgPSBVVFJJRTJfREFUQV9CTE9DS19MRU5HVEggLSAxO1xuXG52YXIgVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gMHg0MDAgPj4gVVRSSUUyX1NISUZUXzI7XG4vKiogQ291bnQgdGhlIGxlbmd0aHMgb2YgYm90aCBCTVAgcGllY2VzLiAyMDgwPTB4ODIwICovXG52YXIgVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IFVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUICsgVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEg7XG4vKipcbiAqIFRoZSAyLWJ5dGUgVVRGLTggdmVyc2lvbiBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb2xsb3dzIGF0IG9mZnNldCAyMDgwPTB4ODIwLlxuICogTGVuZ3RoIDMyPTB4MjAgZm9yIGxlYWQgYnl0ZXMgQzAuLkRGLCByZWdhcmRsZXNzIG9mIFVUUklFMl9TSElGVF8yLlxuICovXG52YXIgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSDtcbnZhciBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSAweDgwMCA+PiA2OyAvKiBVKzA4MDAgaXMgdGhlIGZpcnN0IGNvZGUgcG9pbnQgYWZ0ZXIgMi1ieXRlIFVURi04ICovXG4vKipcbiAqIFRoZSBpbmRleC0xIHRhYmxlLCBvbmx5IHVzZWQgZm9yIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMsIGF0IG9mZnNldCAyMTEyPTB4ODQwLlxuICogVmFyaWFibGUgbGVuZ3RoLCBmb3IgY29kZSBwb2ludHMgdXAgdG8gaGlnaFN0YXJ0LCB3aGVyZSB0aGUgbGFzdCBzaW5nbGUtdmFsdWUgcmFuZ2Ugc3RhcnRzLlxuICogTWF4aW11bSBsZW5ndGggNTEyPTB4MjAwPTB4MTAwMDAwPj5VVFJJRTJfU0hJRlRfMS5cbiAqIChGb3IgMHgxMDAwMDAgc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cyBVKzEwMDAwLi5VKzEwZmZmZi4pXG4gKlxuICogVGhlIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGUgZm9yIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgc3RhcnRzXG4gKiBhZnRlciB0aGlzIGluZGV4LTEgdGFibGUuXG4gKlxuICogQm90aCB0aGUgaW5kZXgtMSB0YWJsZSBhbmQgdGhlIGZvbGxvd2luZyBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlXG4gKiBhcmUgb21pdHRlZCBjb21wbGV0ZWx5IGlmIHRoZXJlIGlzIG9ubHkgQk1QIGRhdGEuXG4gKi9cbnZhciBVVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8xX09GRlNFVCA9IFVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUICsgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEg7XG5cbi8qKlxuICogTnVtYmVyIG9mIGluZGV4LTEgZW50cmllcyBmb3IgdGhlIEJNUC4gMzI9MHgyMFxuICogVGhpcyBwYXJ0IG9mIHRoZSBpbmRleC0xIHRhYmxlIGlzIG9taXR0ZWQgZnJvbSB0aGUgc2VyaWFsaXplZCBmb3JtLlxuICovXG52YXIgVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSAweDEwMDAwID4+IFVUUklFMl9TSElGVF8xO1xuXG4vKiogTnVtYmVyIG9mIGVudHJpZXMgaW4gYW4gaW5kZXgtMiBibG9jay4gNjQ9MHg0MCAqL1xudmFyIFVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gMSA8PCBVVFJJRTJfU0hJRlRfMV8yO1xuLyoqIE1hc2sgZm9yIGdldHRpbmcgdGhlIGxvd2VyIGJpdHMgZm9yIHRoZSBpbi1pbmRleC0yLWJsb2NrIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9NQVNLID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9NQVNLID0gVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIIC0gMTtcblxudmFyIGNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZXhwb3J0cy5jcmVhdGVUcmllRnJvbUJhc2U2NCA9IGZ1bmN0aW9uIGNyZWF0ZVRyaWVGcm9tQmFzZTY0KGJhc2U2NCkge1xuICAgIHZhciBidWZmZXIgPSAoMCwgX1V0aWwuZGVjb2RlKShiYXNlNjQpO1xuICAgIHZhciB2aWV3MzIgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyAoMCwgX1V0aWwucG9seVVpbnQzMkFycmF5KShidWZmZXIpIDogbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIHZpZXcxNiA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/ICgwLCBfVXRpbC5wb2x5VWludDE2QXJyYXkpKGJ1ZmZlcikgOiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gMjQ7XG5cbiAgICB2YXIgaW5kZXggPSB2aWV3MTYuc2xpY2UoaGVhZGVyTGVuZ3RoIC8gMiwgdmlldzMyWzRdIC8gMik7XG4gICAgdmFyIGRhdGEgPSB2aWV3MzJbNV0gPT09IDIgPyB2aWV3MTYuc2xpY2UoKGhlYWRlckxlbmd0aCArIHZpZXczMls0XSkgLyAyKSA6IHZpZXczMi5zbGljZShNYXRoLmNlaWwoKGhlYWRlckxlbmd0aCArIHZpZXczMls0XSkgLyA0KSk7XG5cbiAgICByZXR1cm4gbmV3IFRyaWUodmlldzMyWzBdLCB2aWV3MzJbMV0sIHZpZXczMlsyXSwgdmlldzMyWzNdLCBpbmRleCwgZGF0YSk7XG59O1xuXG52YXIgVHJpZSA9IGV4cG9ydHMuVHJpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmllKGluaXRpYWxWYWx1ZSwgZXJyb3JWYWx1ZSwgaGlnaFN0YXJ0LCBoaWdoVmFsdWVJbmRleCwgaW5kZXgsIGRhdGEpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWUpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yVmFsdWUgPSBlcnJvclZhbHVlO1xuICAgICAgICB0aGlzLmhpZ2hTdGFydCA9IGhpZ2hTdGFydDtcbiAgICAgICAgdGhpcy5oaWdoVmFsdWVJbmRleCA9IGhpZ2hWYWx1ZUluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBmb3IgYSBjb2RlIHBvaW50IGFzIHN0b3JlZCBpbiB0aGUgVHJpZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2RlUG9pbnQgdGhlIGNvZGUgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoVHJpZSwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPCAweDBkODAwIHx8IGNvZGVQb2ludCA+IDB4MGRiZmYgJiYgY29kZVBvaW50IDw9IDB4MGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3JkaW5hcnkgQk1QIGNvZGUgcG9pbnQsIGV4Y2x1ZGluZyBsZWFkaW5nIHN1cnJvZ2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJNUCB1c2VzIGEgc2luZ2xlIGxldmVsIGxvb2t1cC4gIEJNUCBpbmRleCBzdGFydHMgYXQgb2Zmc2V0IDAgaW4gdGhlIFRyaWUyIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAvLyAxNiBiaXQgZGF0YSBpcyBzdG9yZWQgaW4gdGhlIGluZGV4IGFycmF5IGl0c2VsZi5cbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2NvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMl07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExlYWQgU3Vycm9nYXRlIENvZGUgUG9pbnQuICBBIFNlcGFyYXRlIGluZGV4IHNlY3Rpb24gaXMgc3RvcmVkIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWFkIHN1cnJvZ2F0ZSBjb2RlIHVuaXRzIGFuZCBjb2RlIHBvaW50cy5cbiAgICAgICAgICAgICAgICAgICAgLy8gICBUaGUgbWFpbiBpbmRleCBoYXMgdGhlIGNvZGUgdW5pdCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvLyAgIEZvciB0aGlzIGZ1bmN0aW9uLCB3ZSBuZWVkIHRoZSBjb2RlIHBvaW50IGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoaXMgZXhwcmVzc2lvbiBjb3VsZCBiZSByZWZhY3RvcmVkIGZvciBzbGlnaHRseSBpbXByb3ZlZCBlZmZpY2llbmN5LCBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3Vycm9nYXRlIGNvZGUgcG9pbnRzIHdpbGwgYmUgc28gcmFyZSBpbiBwcmFjdGljZSB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0LlxuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgKyAoY29kZVBvaW50IC0gMHhkODAwID4+IFVUUklFMl9TSElGVF8yKV07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPCB0aGlzLmhpZ2hTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwbGVtZW50YWwgY29kZSBwb2ludCwgdXNlIHR3by1sZXZlbCBsb29rdXAuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gVVRSSUUyX0lOREVYXzFfT0ZGU0VUIC0gVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIICsgKGNvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMSk7XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtpeF07XG4gICAgICAgICAgICAgICAgICAgIGl4ICs9IGNvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMiAmIFVUUklFMl9JTkRFWF8yX01BU0s7XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtpeF07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4MTBmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5oaWdoVmFsdWVJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWxsIHRocm91Z2guICBUaGUgY29kZSBwb2ludCBpcyBvdXRzaWRlIG9mIHRoZSBsZWdhbCByYW5nZSBvZiAwLi4weDEwZmZmZi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVHJpZTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciB0b0NvZGVQb2ludHMgPSBleHBvcnRzLnRvQ29kZVBvaW50cyA9IGZ1bmN0aW9uIHRvQ29kZVBvaW50cyhzdHIpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHIuY2hhckNvZGVBdChpKyspO1xuICAgICAgICBpZiAodmFsdWUgPj0gMHhkODAwICYmIHZhbHVlIDw9IDB4ZGJmZiAmJiBpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmEgPSBzdHIuY2hhckNvZGVBdChpKyspO1xuICAgICAgICAgICAgaWYgKChleHRyYSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCgoKHZhbHVlICYgMHgzZmYpIDw8IDEwKSArIChleHRyYSAmIDB4M2ZmKSArIDB4MTAwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGVQb2ludHM7XG59O1xuXG52YXIgZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoKSB7XG4gICAgaWYgKFN0cmluZy5mcm9tQ29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludC5hcHBseShTdHJpbmcsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBjb2RlVW5pdHMgPSBbXTtcblxuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgY29kZVBvaW50ID0gYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaCgoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMCwgY29kZVBvaW50ICUgMHg0MDAgKyAweGRjMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gMHg0MDAwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVVbml0cyk7XG4gICAgICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG4vLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG52YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG59XG5cbnZhciBkZWNvZGUgPSBleHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsXG4gICAgICAgIGkgPSB2b2lkIDAsXG4gICAgICAgIHAgPSAwLFxuICAgICAgICBlbmNvZGVkMSA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDIgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQzID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkNCA9IHZvaWQgMDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSA6IG5ldyBBcnJheShidWZmZXJMZW5ndGgpO1xuICAgIHZhciBieXRlcyA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/IGJ1ZmZlciA6IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMildO1xuICAgICAgICBlbmNvZGVkNCA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMyldO1xuXG4gICAgICAgIGJ5dGVzW3ArK10gPSBlbmNvZGVkMSA8PCAyIHwgZW5jb2RlZDIgPj4gNDtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMiAmIDE1KSA8PCA0IHwgZW5jb2RlZDMgPj4gMjtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMyAmIDMpIDw8IDYgfCBlbmNvZGVkNCAmIDYzO1xuICAgIH1cblxuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG52YXIgcG9seVVpbnQxNkFycmF5ID0gZXhwb3J0cy5wb2x5VWludDE2QXJyYXkgPSBmdW5jdGlvbiBwb2x5VWludDE2QXJyYXkoYnVmZmVyKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxlbmd0aDsgX2kgKz0gMikge1xuICAgICAgICBieXRlcy5wdXNoKGJ1ZmZlcltfaSArIDFdIDw8IDggfCBidWZmZXJbX2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufTtcblxudmFyIHBvbHlVaW50MzJBcnJheSA9IGV4cG9ydHMucG9seVVpbnQzMkFycmF5ID0gZnVuY3Rpb24gcG9seVVpbnQzMkFycmF5KGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGxlbmd0aDsgX2kyICs9IDQpIHtcbiAgICAgICAgYnl0ZXMucHVzaChidWZmZXJbX2kyICsgM10gPDwgMjQgfCBidWZmZXJbX2kyICsgMl0gPDwgMTYgfCBidWZmZXJbX2kyICsgMV0gPDwgOCB8IGJ1ZmZlcltfaTJdKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RvQ29kZVBvaW50cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9VdGlsLnRvQ29kZVBvaW50cztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2Zyb21Db2RlUG9pbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVXRpbC5mcm9tQ29kZVBvaW50O1xuICB9XG59KTtcblxudmFyIF9MaW5lQnJlYWsgPSByZXF1aXJlKCcuL0xpbmVCcmVhaycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmVCcmVha2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xpbmVCcmVhay5MaW5lQnJlYWtlcjtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICdLd0FBQUFBQUFBQUFDQTRBSURvQUFQQWZBQUFDQUFBQUFBQUlBQkFBR0FCQUFFZ0FVQUJZQUY0QVpnQmVBR1lBWUFCb0FIQUFlQUJlQUdZQWZBQ0VBSUFBaUFDUUFKZ0FvQUNvQUswQXRRQzlBTVVBWGdCbUFGNEFaZ0JlQUdZQXpRRFZBRjRBWmdEUkFOa0EzZ0RtQU93QTlBRDhBQVFCREFFVUFSb0JJZ0dBQUlnQUp3RXZBVGNCUHdGRkFVMEJUQUZVQVZ3QlpBRnNBWE1CZXdHREFUQUFpd0dUQVpzQm9nR2tBYXdCdEFHOEFjSUJ5Z0hTQWRvQjRBSG9BZkFCK0FIK0FRWUNEZ0lXQXY0QkhnSW1BaTRDTmdJK0FrVUNUUUpUQWxzQ1l3SnJBbkVDZVFLQkFrMENpUUtSQXBrQ29RS29BckFDdUFMQUFzUUN6QUl3QU5RQzNBTGtBakFBN0FMMEF2d0NBUU1KQXhBREdBTXdBQ0FESmdNdUF6WURQZ09BQUVZRFNnTlNBMUlEVWdOYUExb0RZQU5pQTJJRGdBQ0FBR29EZ0FCeUEzWURmZ09BQUlRRGdBQ0tBNUlEbWdPQUFJQUFvZ09xQTRBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUs4RHR3T0FBSUFBdndQSEE4OEQxd1BmQXlBRDV3UHNBL1FEL0FPQUFJQUFCQVFNQkJJRWdBQVdCQjRFSmdRdUJETUVJQU03QkVFRVhnQkpCQ0FEVVFSWkJHRUVhUVF3QURBQWNRUStBWGtFZ1FTSkJKRUVnQUNZQklBQW9BU29CSzhFdHdRd0FMOEV4UVNBQUlBQWdBQ0FBSUFBZ0FDZ0FNMEVYZ0JlQUY0QVhnQmVBRjRBWGdCZUFOVUVYZ0RaQk9FRVhnRHBCUEVFK1FRQkJRa0ZFUVVaQlNFRktRVXhCVFVGUFFWRkJVd0ZWQVZjQlY0QVl3VmVBR3NGY3dWN0JZTUZpd1dTQlY0QW1nV2dCYWNGWGdCZUFGNEFYZ0JlQUtzRlhnQ3lCYkVGdWdXN0JjSUZ3Z1hJQmNJRndnWFFCZFFGM0FYa0Jlc0Y4d1g3QlFNR0N3WVRCaHNHSXdZckJqTUdPd1plQUQ4R1J3Wk5CbDRBVkFaYkJsNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUdNR1hnQnFCbkVHWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCNUJvQUc0d1NHQm80R2t3YUFBSUFESGdSNUFGNEFYZ0JlQUpzR2dBQkdBNEFBb3dhckJyTUdzd2FnQUxzR3d3YkxCakFBMHdiYUJ0b0czUWJhQnRvRzJnYmFCdG9HMmdibEJ1c0c4d2I3QmdNSEN3Y1RCeHNIQ3djakJ5c0hNQWMxQnpVSE9nZENCOW9HU2dkU0Ixb0hZQWZhQmxvSGFBZmFCbElIMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCalVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSGJRZGVBRjRBTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZDFCMzBITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCNE1IMmdhS0I2OEVnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJOEhsd2RlQUo4SHB3ZUFBSUFBcndlM0IxNEFYZ0MvQjhVSHlnY3dBTkFIMkFmZ0I0QUE2QWZ3Qno0QitBY0FDRndCQ0FnUENCY0lvZ0VZQVI4SUp3aUFBQzhJTndnL0NDQURSd2hQQ0ZjSVh3aG5DRW9ER2dTQUFJQUFnQUJ2Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0loQWlMQ0k0SU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnZ3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUI1NElOUWMxQjZJSTJnYXFDTElJdWdpQUFJQUF2Z2pHQ0lBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXl3aUhBWUFBMHdpQUFOa0kzUWpsQ08wSTlBajhDSUFBZ0FDQUFBSUpDZ2tTQ1JvSklna25DVFlITHdrM0NaWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaUFBSUFBQUFGQUFYZ0JlQUdBQWNBQmVBSHdBUUFDUUFLQUFyUUM5QUo0QVhnQmVBRTBBM2dCUkFONEE3QUQ4QU13QkdnRUFBS2NCTndFRkFVd0JYQUY0UWtoQ21FS25BcmNDZ0FISEFzQUJ6NExBQWNBQndBSEFBZCtDNkFCb0FHK0MvNExBQWNBQndBSEFBYytERjRNQUFjQUI1NE0zZ3dlRFY0Tm5nM2VEYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FFZURxQUJWZzZXRHFBQm9RNmdBYUFCb0FIWER2Y09Ody8zRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEbmNQQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQjdjUFB3bEdDVTRKTUFDQUFJQUFnQUJXQ1Y0SllRbUFBR2tKY0FsNENYd0pnQWt3QURBQU1BQXdBSWdKZ0FDTENaTUpnQUNaQ1o4Sm93bXJDWUFBc3drd0FGNEFYZ0I4QUlBQXV3a0FCTU1KeVFtQUFNNEpnQURWQ1RBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBcXdZV0JOa0lNQUF3QURBQU1BRGRDZUFKNkFudUNSNEU5Z2t3QVA0SkJRb05DakFBTUFDQUFCVUswd2lBQUIwS0pBb3NDalFLZ0FBd0FEd0tRd3FBQUVzS3ZRbWRDVk1LV3dvd0FEQUFnQUNBQUxjRU1BQ0FBR01LZ0FCckNqQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUFlQkRBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSWtFUFFGekNub0tpUVNDQ29vS2tBcUpCSmdLb0Fxa0Nva0VHQUdzQ3JRS3ZBckJDakFBTUFESkN0RUtGUUhaQ3VFSy9nSHBDdkVLTUFBd0FEQUFNQUNBQUl3RStRb3dBSUFBUHdFQkN6QUFNQUF3QURBQU1BQ0FBQWtMRVFzd0FJQUFQd0VaQ3lFTGdBQU9DQ2tMTUFBeEN6a0xNQUF3QURBQU1BQXdBREFBWGdCZUFFRUxNQUF3QURBQU1BQXdBREFBTUFBd0FFa0xUUXRWQzRBQVhBdGtDNEFBaVFrd0FEQUFNQUF3QURBQU1BQXdBREFBYkF0eEMza0xnQXVGQzRzTE1BQXdBSk1MbHd1ZkN6QUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXB3c3dBREFBTUFDQUFJQUFnQUN2QzRBQWdBQ0FBSUFBZ0FDQUFMY0xNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXZ3dUFBTWNMZ0FDQUFJQUFnQUNBQUlBQXlndUFBSUFBZ0FDQUFJQUEwUXN3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQU5rTGdBQ0FBSUFBNEFzd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNKQ1I0RTZBc3dBREFBaHdId0M0QUErQXNBREFnTUVBd3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQ0FBSUFBR0F3ZERDVU1NQUF3QUMwTU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RdzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhQUXd3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRFVITlFjMUJ6VUhOUWMxQnpVSE5RYzJCekFBTUFBNUREVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWRGRERBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFUUXhTREZvTU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUY0QVhnQmVBRjRBWGdCZUFGNEFZZ3hlQUdvTVhnQnhESGtNZnd4ZUFJVU1YZ0JlQUkwTU1BQXdBREFBTUFBd0FGNEFYZ0NWREowTU1BQXdBREFBTUFCZUFGNEFwUXhlQUtzTXN3eTdERjRBd2d5OURNb01YZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0RSRE5rTWVRQnFDZUFNM0F4OEFPWU03QXowRFBnTVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0NnQUFBTm9BQUhEUTRORmcwd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQWVEU1lOTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUM0Tk1BQmVBRjRBTmcwd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FENE5SZzFPRFZZTlhnMW1EVEFBYlEwd0FEQUFNQUF3QURBQU1BQXdBREFBMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCblVOZWczQ0JZQU53Z1dGRGRvR2pBM2FCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdhVURad05wQTJvRGRvRzJnYXdEYmNOdnczSERkb0cyZ2JQRGRZTjNBM2ZEZVlOMmdic0RmTU4yZ2JhQnZvTi9nM2FCZ1lPRGc3YUJsNEFYZ0JlQUJZT1hnQmVBQ1VHMmdZZURsNEFKQTVlQUN3TzJ3M2FCdG9HTVE0NUR0b0cyZ2JhQnRvR1FRN2FCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdaSkRqVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIxRU8yZ1kxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZFpEalVITlFjMUJ6VUhOUWMxQjJFT05RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSGFBNDFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIzQU8yZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1kxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIyRU8yZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1pKRHRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQmtrT2VBNmdBS0FBb0FBd0FEQUFNQUF3QUtBQW9BQ2dBS0FBb0FDZ0FLQUFnQTR3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BRC8vd1FBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBQXdBQkFBRUFBZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFLQUJNQUZ3QWVBQnNBR2dBZUFCY0FGZ0FTQUI0QUd3QVlBQThBR0FBY0FFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FHQUFZQUI0QUhnQWVBQk1BSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRmdBYkFCSUFIZ0FlQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJZQURRQVJBQjRBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVVBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQWtBRmdBYUFCc0FHd0FiQUI0QUhRQWRBQjRBVHdBWEFCNEFEUUFlQUI0QUdnQWJBRThBVHdBT0FGQUFIUUFkQUIwQVR3QlBBQmNBVHdCUEFFOEFGZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFIZ0FlQUI0QVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUZBQVR3QkFBRThBVHdCUEFFQUFUd0JRQUZBQVR3QlFBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWRBQjBBSGdBZEFCNEFEZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFKQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQWtBQ1FBSkFBa0FDUUFKQUFrQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBS3dBckFGQUFVQUJRQUZBQUdBQlFBQ3NBS3dBckFDc0FIZ0FlQUZBQUhnQlFBRkFBVUFBckFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUFlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QVlBQTBBS3dBckFCNEFIZ0FiQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQURRQUVBQjRBQkFBRUFCNEFCQUFFQUJNQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQUt3QXJBQ3NBS3dBckFGWUFWZ0JXQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBR2dBYUFCb0FHQUFZQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRXdBRUFDc0FFd0FUQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQm9BR1FBWkFCNEFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCTUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFCUUFGQUFCQUFFQUI0QUJBQUVBQVFBQkFCUUFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQWVBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBRkFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUI0QUhnQVlBQk1BVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFyQUNzQUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dBckFDc0FVQUJRQUZBQVVBQXJBQ3NBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBckFDc0FLd0FyQUZBQVVBQXJBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBR2dBYUFGQUFVQUJRQUZBQVVBQk1BQjRBR3dCUUFCNEFLd0FyQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQXJBRkFBVUFBckFDc0FCQUFyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBRUFBUUFVQUJRQUZBQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUFyQUNzQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QXJBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUJzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUNzQUt3QXJBRkFBVUFBckFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0JRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUNzQVVBQlFBQ3NBVUFBckFGQUFVQUFyQUNzQUt3QlFBRkFBS3dBckFDc0FVQUJRQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFLd0FyQUNzQUJBQUVBQVFBS3dBRUFBUUFCQUFFQUNzQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQnNBSGdBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUNzQUt3QUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQUt3QlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUJRQUI0QUt3QXJBQ3NBS3dCUUFGQUFVQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCb0FVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QUVBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBS3dBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFBUUFCQUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QXJBQ3NBR3dCY0FGd0FYQUJjQUZ3QVhBQmNBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQWVBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBRFFBTkFDc0FLd0FyQUNzQUt3QmNBRndBS3dCY0FDc0FLd0JjQUZ3QUt3QmNBQ3NBS3dCY0FDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FLd0JjQUZ3QVhBQmNBRndBWEFCY0FDc0FYQUJjQUZ3QUt3QmNBQ3NBWEFBckFDc0FYQUJjQUNzQVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBckFDb0FLZ0JjQUNzQUt3QmNBRndBWEFCY0FGd0FLd0JjQUNzQUtnQXFBQ29BS2dBcUFDb0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBRndBWEFCY0FGd0FVQUFPQUE0QURnQU9BQjRBRGdBT0FBa0FEZ0FPQUEwQUNRQVRBQk1BRXdBVEFCTUFDUUFlQUJNQUhnQWVBQjRBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFBUUFIZ0FFQUI0QUJBQVdBQkVBRmdBUkFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBTkFBUUFCQUFFQUFRQUJBQU5BQVFBQkFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQURRQU5BQjRBSGdBZUFCNEFIZ0FlQUFRQUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QURnQU9BQTBBRGdBZUFCNEFIZ0FlQUI0QUNRQUpBQ3NBS3dBckFDc0FLd0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUZ3QVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QU5BQTBBSGdBZUFCNEFIZ0JjQUZ3QVhBQmNBRndBWEFBcUFDb0FLZ0FxQUZ3QVhBQmNBRndBS2dBcUFDb0FYQUFxQUNvQUtnQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQmNBRndBWEFBcUFDb0FLZ0FxQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FYQUFxQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUtnQXFBQ29BS2dBcUFDb0FVQUJRQUZBQVVBQlFBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QUVBQVFBQkFBZUFBMEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJZQUVRQXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEUUFOQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUEwQURRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FEUUFOQUJVQVhBQU5BQjRBRFFBYkFGd0FLZ0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FUQUJNQURRQU5BQTRBSGdBVEFCTUFIZ0FFQUFRQUJBQUpBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FlQUNzQUt3QXJBQk1BRXdCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0JjQUZ3QVhBQmNBRndBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNzQUt3QXJBQ3NBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QmNBQ3NBS3dBckFDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUNzQUt3QWVBQjRBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ3NBQkFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUtnQXFBQ29BS2dBcUFDb0FLZ0JjQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQjRBRFFBTkFBMEFEUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQVFBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBTkFBMEFEUUFOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dCUUFGQUFVQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQVVBQlFBRkFBQkFCUUFGQUFVQUJRQUFRQUJBQUVBRkFBVUFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBRUFBUUFCQUFFQUFRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUNzQVVBQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBSGdBZUFCNEFVQUJRQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFLd0FyQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQTRBSGdBckFBMEFEUUFOQUEwQURRQU5BQTBBQ1FBTkFBMEFEUUFJQUFRQUN3QUVBQVFBRFFBSkFBMEFEUUFNQUIwQUhRQWVBQmNBRndBV0FCY0FGd0FYQUJZQUZ3QWRBQjBBSGdBZUFCUUFGQUFVQUEwQUFRQUJBQVFBQkFBRUFBUUFCQUFKQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FlQUJjQUZ3QWRBQlVBRlFBZUFCNEFIZ0FlQUI0QUhnQVlBQllBRVFBVkFCVUFGUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQU5BQjRBRFFBTkFBMEFEUUFlQUEwQURRQU5BQWNBSGdBZUFCNEFIZ0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBQ3NBS3dCUEFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBV0FCRUFUd0JRQUU4QVR3QlBBRThBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQllBRVFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBR3dBYkFCc0FHd0FiQUJzQUd3QWFBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FhQUJzQUd3QWJBQnNBR2dBYkFCc0FHZ0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdCUUFCb0FIZ0FkQUI0QVVBQWVBQm9BSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVHdBZUFGQUFHd0FlQUI0QVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUIwQUhRQWVBRkFBSGdCUUFCNEFVQUFlQUZBQVR3QlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFVQUJRQUZBQVVBQlBBRThBVUFCUUFGQUFVQUJRQUU4QVVBQlFBRThBVUFCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JRQUZBQVVBQlFBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFGQUFVQUJRQUZBQVR3QWVBQjRBS3dBckFDc0FLd0FkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFlQUIwQUhRQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhnQWVBQjRBSFFBZUFCMEFHd0FiQUI0QUhRQWVBQjRBSGdBZUFCMEFIZ0FlQUIwQUhRQWRBQjBBSGdBZUFCMEFIZ0FkQUI0QUhRQWRBQjBBSFFBZEFCMEFIZ0FkQUI0QUhnQWVBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQlFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQVdBQkVBRmdBUkFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUUFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjBBSFFBZEFCNEFIZ0FkQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWVBQjBBSFFBZUFCNEFIUUFlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUNVQUpRQWRBQjBBSlFBZUFDVUFKUUFsQUNBQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSGdBZUFCNEFIZ0FkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCNEFIUUFkQUIwQUhnQWRBQ1VBSFFBZEFCNEFIUUFkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhRQWRBQjBBSFFBbEFCNEFKUUFsQUNVQUhRQWxBQ1VBSFFBZEFCMEFKUUFsQUIwQUhRQWxBQjBBSFFBbEFDVUFKUUFlQUIwQUhnQWVBQjRBSGdBZEFCMEFKUUFkQUIwQUhRQWRBQjBBSFFBbEFDVUFKUUFsQUNVQUhRQWxBQ1VBSUFBbEFCMEFIUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUpRQWxBQ0FBSUFBZ0FDQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUJjQUZ3QVhBQmNBRndBWEFCNEFFd0FUQUNVQUhnQWVBQjRBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFBUUFCQUFlQUI0QUt3QXJBQ3NBS3dBckFCTUFEUUFOQUEwQVVBQVRBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBMEFEUUFOQUEwQURRQU5BQTBBRFFBZUFBMEFGZ0FOQUI0QUhnQVhBQmNBSGdBZUFCY0FGd0FXQUJFQUZnQVJBQllBRVFBV0FCRUFEUUFOQUEwQURRQVRBRkFBRFFBTkFCNEFEUUFOQUI0QUhnQWVBQjRBSGdBTUFBd0FEUUFOQUEwQUhnQU5BQTBBRmdBTkFBMEFEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUEwQUVRQVJBQ1VBSlFCSEFGY0FWd0FXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUNVQUpRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZRQVdBQkVBRVFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFBUUFCQUFFQUFRQUJBQUVBQ1VBVndCWEFGY0FWd0EyQUNVQUpRQlhBRmNBVndCSEFFY0FKUUFsQUNVQUt3QlJBRmNBVVFCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZFQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCUkFGY0FVUUJYQUZFQVZ3QlhBRmNBVndCWEFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGRUFLd0FyQUFRQUJBQVZBQlVBUndCSEFGY0FGUUJSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JSQUZjQVZ3QlhBRmNBVndCWEFGRUFVUUJYQUZjQVZ3QlhBQlVBVVFCSEFFY0FWd0FyQUNzQUt3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QXJBQ1VBSlFCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBS3dBckFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFFY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEUUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQUJBQUVBQVFBQkFBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQlFBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBZUFBMEFEUUFOQUEwQURRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBSGdBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQVVBQlFBRkFBQkFCUUFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUJvQUhnQXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURnQU9BQk1BRXdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdCUUFBNEFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUNzQUt3QXJBQVFBSGdBZUFCNEFIZ0FlQUI0QURRQU5BQTBBSGdBZUFCNEFIZ0FyQUZBQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFCNEFIZ0JjQUZ3QVhBQmNBRndBS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FYQUJjQUZ3QVhBQmNBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUhnQU5BQTBBRFFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BWEFBcUFDb0FLZ0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUZ3QUtnQXFBQ29BWEFCY0FDb0FLZ0JjQUZ3QVhBQmNBRndBS2dBcUFGd0FLZ0JjQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUNvQUtnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUEwQURRQlFBRkFBVUFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQURRQUVBQVFBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBVkFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVUFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQUt3QXJBQ3NBS3dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FLd0FyQUNzQUt3QUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRllBQkFCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FCNEFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQXJBRllBVmdCV0FGWUFWZ0FyQUZZQUt3QldBRllBS3dCV0FGWUFLd0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUVRQVdBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFhQUI0QUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUdBQVJBQkVBR0FBWUFCTUFFd0FXQUJFQUZBQXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDVUFKUUFsQUNVQUpRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBbEFDVUFGZ0FSQUNVQUpRQWxBQ1VBSlFBbEFDVUFFUUFsQUJFQUt3QVZBQlVBRXdBVEFDVUFGZ0FSQUJZQUVRQVdBQkVBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBYkFCb0FKUUFyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBY0FLd0FUQUNVQUpRQWJBQm9BSlFBbEFCWUFFUUFsQUNVQUVRQWxBQkVBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFCVUFGUUFsQUNVQUpRQVRBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQllBSlFBUkFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FXQUNVQUVRQWxBQllBRVFBUkFCWUFFUUFSQUJVQVZ3QlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUVjQVJ3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQUt3QXJBRmNBVndCWEFGY0FWd0JYQUNzQUt3QlhBRmNBVndCWEFGY0FWd0FyQUNzQVZ3QlhBRmNBS3dBckFDc0FHZ0FiQUNVQUpRQWxBQnNBR3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFRQUIwQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQURRQU5BQTBBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FEUUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FLd0FyQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FEUUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUJBQUVBQVFBS3dBRUFBUUFLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FCQUFFQUFRQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBRFFBTkFBMEFEUUFOQUEwQURRQU5BQjRBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFBMEFEUUFOQUEwQURRQU5BQlFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU5BQTBBRFFBTkFBMEFEUUFOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQWVBQTRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQURRQU5BQjRBRFFBZUFBUUFCQUFFQUI0QUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFBT0FGQUFEUUFOQUEwQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBTkFBMEFIZ0FOQUEwQUhnQUVBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFDc0FLd0FFQUFRQUJBQXJBQ3NBVUFBckFDc0FLd0FyQUNzQUt3QUVBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUEwQURRQU5BQTBBSGdCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FEUUFyQUI0QUt3QXJBQVFBQkFBRUFBUUFVQUJRQUI0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBT0FBMEFEUUFUQUJNQUhnQWVBQjRBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQVVBQlFBRkFBVUFBRUFBUUFLd0FyQUFRQURRQU5BQjRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBckFDc0FLd0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVhBQmNBQTBBRFFBTkFDb0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBT0FCNEFEUUFOQUEwQURRQU9BQjRBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFOQUNzQURnQU9BQTRBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBT0FCTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FFQUNzQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQlFBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBU0FCSUFFZ0FRd0JEQUVNQVVBQlFBRkFBVUFCREFGQUFVQUJRQUVnQVF3QklBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBU0FCREFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBTkFBMEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBRUFBUUFCQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFOQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQURRQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFY0FSd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QWVBQVFBQkFBTkFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBRUFBUUFCQUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQXJBQ3NBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QWVBQjRBVUFCUUFGQUFVQUJRQUNzQVVBQXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQWVBQjRBRFFBTkFBMEFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FGZ0FXQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQUt3QXJBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QXJBRkFBS3dBckFDc0FLd0JRQUNzQVVBQXJBRkFBS3dCUUFGQUFVQUFyQUZBQVVBQXJBRkFBS3dBckFGQUFLd0JRQUNzQVVBQXJBRkFBS3dCUUFDc0FVQUJRQUNzQVVBQXJBQ3NBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0FsQUNVQUpRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWVBQ1VBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFDVUFKUUFsQUNVQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQ1VBSlFBbEFDVUFKUUFlQUNVQUpRQWxBQ1VBSlFBZ0FDQUFJQUFsQUNVQUlBQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlRQWhBQ0VBSVFBaEFDVUFKUUFnQUNBQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFJQUFsQUNVQUpRQWxBQ0FBSlFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFnQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUNVQUhnQWxBQjRBSlFBbEFDVUFKUUFsQUNBQUpRQWxBQ1VBSlFBZUFDVUFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFJQUFnQUNBQUlBQWdBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGd0FYQUJjQUZRQVZBQlVBSGdBZUFCNEFIZ0FsQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWxBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSlFBbEFDVUFJQUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUt3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQSc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgQU5HTEUgPSAvKFsrLV0/XFxkKlxcLj9cXGQrKShkZWd8Z3JhZHxyYWR8dHVybikvaTtcblxudmFyIHBhcnNlQW5nbGUgPSBleHBvcnRzLnBhcnNlQW5nbGUgPSBmdW5jdGlvbiBwYXJzZUFuZ2xlKGFuZ2xlKSB7XG4gICAgdmFyIG1hdGNoID0gYW5nbGUubWF0Y2goQU5HTEUpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB2YWx1ZSAvIDE4MDtcbiAgICAgICAgICAgIGNhc2UgJ2dyYWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJIC8gMjAwICogdmFsdWU7XG4gICAgICAgICAgICBjYXNlICdyYWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3R1cm4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJICogMiAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvdW5kQ3VydmVzID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoRm9yQm9yZGVyID0gZXhwb3J0cy5wYXJzZURvY3VtZW50U2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ29udGVudEJveCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveCA9IGV4cG9ydHMucGFyc2VCb3VuZHMgPSBleHBvcnRzLkJvdW5kcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuL2RyYXdpbmcvVmVjdG9yJyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQmV6aWVyQ3VydmUgPSByZXF1aXJlKCcuL2RyYXdpbmcvQmV6aWVyQ3VydmUnKTtcblxudmFyIF9CZXppZXJDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CZXppZXJDdXJ2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUT1AgPSAwO1xudmFyIFJJR0hUID0gMTtcbnZhciBCT1RUT00gPSAyO1xudmFyIExFRlQgPSAzO1xuXG52YXIgSCA9IDA7XG52YXIgViA9IDE7XG5cbnZhciBCb3VuZHMgPSBleHBvcnRzLkJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3VuZHMoeCwgeSwgdywgaCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm91bmRzKTtcblxuICAgICAgICB0aGlzLmxlZnQgPSB4O1xuICAgICAgICB0aGlzLnRvcCA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvdW5kcywgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZnJvbUNsaWVudFJlY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbUNsaWVudFJlY3QoY2xpZW50UmVjdCwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMoY2xpZW50UmVjdC5sZWZ0ICsgc2Nyb2xsWCwgY2xpZW50UmVjdC50b3AgKyBzY3JvbGxZLCBjbGllbnRSZWN0LndpZHRoLCBjbGllbnRSZWN0LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQm91bmRzO1xufSgpO1xuXG52YXIgcGFyc2VCb3VuZHMgPSBleHBvcnRzLnBhcnNlQm91bmRzID0gZnVuY3Rpb24gcGFyc2VCb3VuZHMobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgIHJldHVybiBCb3VuZHMuZnJvbUNsaWVudFJlY3Qobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG59O1xuXG52YXIgY2FsY3VsYXRlUGFkZGluZ0JveCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhZGRpbmdCb3goYm91bmRzLCBib3JkZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBib3VuZHMud2lkdGggLSAoYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLmhlaWdodCAtIChib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpKTtcbn07XG5cbnZhciBjYWxjdWxhdGVDb250ZW50Qm94ID0gZXhwb3J0cy5jYWxjdWxhdGVDb250ZW50Qm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlQ29udGVudEJveChib3VuZHMsIHBhZGRpbmcsIGJvcmRlcnMpIHtcbiAgICAvLyBUT0RPIHN1cHBvcnQgcGVyY2VudGFnZSBwYWRkaW5nc1xuICAgIHZhciBwYWRkaW5nVG9wID0gcGFkZGluZ1tUT1BdLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW1JJR0hUXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdbQk9UVE9NXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYWRkaW5nW0xFRlRdLnZhbHVlO1xuXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoYm91bmRzLmxlZnQgKyBwYWRkaW5nTGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBwYWRkaW5nVG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBib3VuZHMud2lkdGggLSAoYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQpLCBib3VuZHMuaGVpZ2h0IC0gKGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tKSk7XG59O1xuXG52YXIgcGFyc2VEb2N1bWVudFNpemUgPSBleHBvcnRzLnBhcnNlRG9jdW1lbnRTaXplID0gZnVuY3Rpb24gcGFyc2VEb2N1bWVudFNpemUoZG9jdW1lbnQpIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmICghYm9keSB8fCAhZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1VuYWJsZSB0byBnZXQgZG9jdW1lbnQgc2l6ZScgOiAnJyk7XG4gICAgfVxuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KE1hdGgubWF4KGJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCksIE1hdGgubWF4KGJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCksIE1hdGgubWF4KGJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkpO1xuXG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWF4KE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSwgTWF0aC5tYXgoYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpLCBNYXRoLm1heChib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpO1xuXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgcGFyc2VQYXRoRm9yQm9yZGVyID0gZXhwb3J0cy5wYXJzZVBhdGhGb3JCb3JkZXIgPSBmdW5jdGlvbiBwYXJzZVBhdGhGb3JCb3JkZXIoY3VydmVzLCBib3JkZXJTaWRlKSB7XG4gICAgc3dpdGNoIChib3JkZXJTaWRlKSB7XG4gICAgICAgIGNhc2UgVE9QOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BMZWZ0SW5uZXIsIGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lcik7XG4gICAgICAgIGNhc2UgUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy50b3BSaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIpO1xuICAgICAgICBjYXNlIEJPVFRPTTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXIpO1xuICAgICAgICBjYXNlIExFRlQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLmJvdHRvbUxlZnRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lciwgY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcExlZnRJbm5lcik7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZVBhdGhGcm9tQ3VydmVzID0gZnVuY3Rpb24gY3JlYXRlUGF0aEZyb21DdXJ2ZXMob3V0ZXIxLCBpbm5lcjEsIG91dGVyMiwgaW5uZXIyKSB7XG4gICAgdmFyIHBhdGggPSBbXTtcbiAgICBpZiAob3V0ZXIxIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjEuc3ViZGl2aWRlKDAuNSwgZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIxKTtcbiAgICB9XG5cbiAgICBpZiAob3V0ZXIyIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjIuc3ViZGl2aWRlKDAuNSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjIpO1xuICAgIH1cblxuICAgIGlmIChpbm5lcjIgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMi5zdWJkaXZpZGUoMC41LCB0cnVlKS5yZXZlcnNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjIpO1xuICAgIH1cblxuICAgIGlmIChpbm5lcjEgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMS5zdWJkaXZpZGUoMC41LCBmYWxzZSkucmV2ZXJzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbn07XG5cbnZhciBjYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlQm9yZGVyQm94UGF0aChjdXJ2ZXMpIHtcbiAgICByZXR1cm4gW2N1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRPdXRlcl07XG59O1xuXG52YXIgY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgoY3VydmVzKSB7XG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdElubmVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXJdO1xufTtcblxudmFyIHBhcnNlQm91bmRDdXJ2ZXMgPSBleHBvcnRzLnBhcnNlQm91bmRDdXJ2ZXMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kQ3VydmVzKGJvdW5kcywgYm9yZGVycywgYm9yZGVyUmFkaXVzKSB7XG4gICAgdmFyIHRsaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX0xFRlRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgdGx2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfTEVGVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgdHJoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfUklHSFRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgdHJ2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfUklHSFRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIGJyaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX1JJR0hUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIGJydiA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX1JJR0hUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBibGggPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9MRUZUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIGJsdiA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX0xFRlRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG5cbiAgICB2YXIgZmFjdG9ycyA9IFtdO1xuICAgIGZhY3RvcnMucHVzaCgodGxoICsgdHJoKSAvIGJvdW5kcy53aWR0aCk7XG4gICAgZmFjdG9ycy5wdXNoKChibGggKyBicmgpIC8gYm91bmRzLndpZHRoKTtcbiAgICBmYWN0b3JzLnB1c2goKHRsdiArIGJsdikgLyBib3VuZHMuaGVpZ2h0KTtcbiAgICBmYWN0b3JzLnB1c2goKHRydiArIGJydikgLyBib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgbWF4RmFjdG9yID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZmFjdG9ycyk7XG5cbiAgICBpZiAobWF4RmFjdG9yID4gMSkge1xuICAgICAgICB0bGggLz0gbWF4RmFjdG9yO1xuICAgICAgICB0bHYgLz0gbWF4RmFjdG9yO1xuICAgICAgICB0cmggLz0gbWF4RmFjdG9yO1xuICAgICAgICB0cnYgLz0gbWF4RmFjdG9yO1xuICAgICAgICBicmggLz0gbWF4RmFjdG9yO1xuICAgICAgICBicnYgLz0gbWF4RmFjdG9yO1xuICAgICAgICBibGggLz0gbWF4RmFjdG9yO1xuICAgICAgICBibHYgLz0gbWF4RmFjdG9yO1xuICAgIH1cblxuICAgIHZhciB0b3BXaWR0aCA9IGJvdW5kcy53aWR0aCAtIHRyaDtcbiAgICB2YXIgcmlnaHRIZWlnaHQgPSBib3VuZHMuaGVpZ2h0IC0gYnJ2O1xuICAgIHZhciBib3R0b21XaWR0aCA9IGJvdW5kcy53aWR0aCAtIGJyaDtcbiAgICB2YXIgbGVmdEhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBibHY7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b3BMZWZ0T3V0ZXI6IHRsaCA+IDAgfHwgdGx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCB0bGgsIHRsdiwgQ09STkVSLlRPUF9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wKSxcbiAgICAgICAgdG9wTGVmdElubmVyOiB0bGggPiAwIHx8IHRsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIE1hdGgubWF4KDAsIHRsaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBNYXRoLm1heCgwLCB0bHYgLSBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLCBDT1JORVIuVE9QX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSxcbiAgICAgICAgdG9wUmlnaHRPdXRlcjogdHJoID4gMCB8fCB0cnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyB0b3BXaWR0aCwgYm91bmRzLnRvcCwgdHJoLCB0cnYsIENPUk5FUi5UT1BfUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3ApLFxuICAgICAgICB0b3BSaWdodElubmVyOiB0cmggPiAwIHx8IHRydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIE1hdGgubWluKHRvcFdpZHRoLCBib3VuZHMud2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgdG9wV2lkdGggPiBib3VuZHMud2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoID8gMCA6IHRyaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIHRydiAtIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgQ09STkVSLlRPUF9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSxcbiAgICAgICAgYm90dG9tUmlnaHRPdXRlcjogYnJoID4gMCB8fCBicnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3R0b21XaWR0aCwgYm91bmRzLnRvcCArIHJpZ2h0SGVpZ2h0LCBicmgsIGJydiwgQ09STkVSLkJPVFRPTV9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQpLFxuICAgICAgICBib3R0b21SaWdodElubmVyOiBicmggPiAwIHx8IGJydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIE1hdGgubWluKGJvdHRvbVdpZHRoLCBib3VuZHMud2lkdGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLnRvcCArIE1hdGgubWluKHJpZ2h0SGVpZ2h0LCBib3VuZHMuaGVpZ2h0ICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgYnJoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgpLCBicnYgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpLFxuICAgICAgICBib3R0b21MZWZ0T3V0ZXI6IGJsaCA+IDAgfHwgYmx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wICsgbGVmdEhlaWdodCwgYmxoLCBibHYsIENPUk5FUi5CT1RUT01fTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQpLFxuICAgICAgICBib3R0b21MZWZ0SW5uZXI6IGJsaCA+IDAgfHwgYmx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGxlZnRIZWlnaHQsIE1hdGgubWF4KDAsIGJsaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBibHYgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgsIENPUk5FUi5CT1RUT01fTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKVxuICAgIH07XG59O1xuXG52YXIgQ09STkVSID0ge1xuICAgIFRPUF9MRUZUOiAwLFxuICAgIFRPUF9SSUdIVDogMSxcbiAgICBCT1RUT01fUklHSFQ6IDIsXG4gICAgQk9UVE9NX0xFRlQ6IDNcbn07XG5cbnZhciBnZXRDdXJ2ZVBvaW50cyA9IGZ1bmN0aW9uIGdldEN1cnZlUG9pbnRzKHgsIHksIHIxLCByMiwgcG9zaXRpb24pIHtcbiAgICB2YXIga2FwcGEgPSA0ICogKChNYXRoLnNxcnQoMikgLSAxKSAvIDMpO1xuICAgIHZhciBveCA9IHIxICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcbiAgICB2YXIgb3kgPSByMiAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxuICAgIHZhciB4bSA9IHggKyByMTsgLy8geC1taWRkbGVcbiAgICB2YXIgeW0gPSB5ICsgcjI7IC8vIHktbWlkZGxlXG5cbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgQ09STkVSLlRPUF9MRUZUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSAtIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0gLSBveCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5KSk7XG4gICAgICAgIGNhc2UgQ09STkVSLlRPUF9SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4ICsgb3gsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0gLSBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5CT1RUT01fUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5ICsgb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4ICsgb3gsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0pKTtcbiAgICAgICAgY2FzZSBDT1JORVIuQk9UVE9NX0xFRlQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSAtIG94LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkgKyBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkpKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jbG9uZVdpbmRvdyA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xuXG52YXIgX1Byb3h5ID0gcmVxdWlyZSgnLi9Qcm94eScpO1xuXG52YXIgX1Jlc291cmNlTG9hZGVyID0gcmVxdWlyZSgnLi9SZXNvdXJjZUxvYWRlcicpO1xuXG52YXIgX1Jlc291cmNlTG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jlc291cmNlTG9hZGVyKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyJyk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xuXG52YXIgX1BzZXVkb05vZGVDb250ZW50ID0gcmVxdWlyZSgnLi9Qc2V1ZG9Ob2RlQ29udGVudCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSUdOT1JFX0FUVFJJQlVURSA9ICdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZSc7XG5cbnZhciBEb2N1bWVudENsb25lciA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRDbG9uZXIoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCBjb3B5SW5saW5lLCByZW5kZXJlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9jdW1lbnRDbG9uZXIpO1xuXG4gICAgICAgIHRoaXMucmVmZXJlbmNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvcHlTdHlsZXMgPSBjb3B5SW5saW5lO1xuICAgICAgICB0aGlzLmlubGluZUltYWdlcyA9IGNvcHlJbmxpbmU7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIgPSBuZXcgX1Jlc291cmNlTG9hZGVyMi5kZWZhdWx0KG9wdGlvbnMsIGxvZ2dlciwgd2luZG93KTtcbiAgICAgICAgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIGNvdW50ZXJzOiB7fSxcbiAgICAgICAgICAgIHF1b3RlRGVwdGg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IHRoaXMuY2xvbmVOb2RlKGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEb2N1bWVudENsb25lciwgW3tcbiAgICAgICAga2V5OiAnaW5saW5lQWxsSW1hZ2VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUFsbEltYWdlcyhub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmxpbmVJbWFnZXMgJiYgbm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpLm1hcChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc291cmNlTG9hZGVyLmlubGluZUltYWdlKGJhY2tncm91bmRJbWFnZS5hcmdzWzBdKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nICYmIHR5cGVvZiBpbWcuc3JjID09PSAnc3RyaW5nJyA/ICd1cmwoXCInICsgaW1nLnNyYyArICdcIiknIDogJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJycgKyBiYWNrZ3JvdW5kSW1hZ2UucHJlZml4ICsgYmFja2dyb3VuZEltYWdlLm1ldGhvZCArICcoJyArIGJhY2tncm91bmRJbWFnZS5hcmdzLmpvaW4oJywnKSArICcpJyk7XG4gICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBNdWx0aXBsZSBiYWNrZ3JvdW5kcyBzb21laG93IGJyb2tlbiBpbiBDaHJvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZXMuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIuaW5saW5lSW1hZ2Uobm9kZS5zcmMpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZyAmJiBub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5zdHlsZSwgaW1nLmNsb25lTm9kZShmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lZENoaWxkLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbmxpbmVGb250cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVGb250cyhkb2N1bWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5tYXAoZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKHNoZWV0LmhyZWYpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCh0ZXh0LCBzaGVldC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTaGVldEZvbnRzKHNoZWV0LCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAoZm9udHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZm9udCk7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZm9udHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZm9udHMubWFwKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChmb250LmZvcm1hdHNbMF0uc3JjKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhVXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LmZvbnRGYWNlLnNldFByb3BlcnR5KCdzcmMnLCAndXJsKFwiJyArIGRhdGFVcmkgKyAnXCIpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Bmb250LWZhY2UgeycgKyBmb250LmZvbnRGYWNlLmNzc1RleHQgKyAnICc7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGZvbnRDc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gZm9udENzcy5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICBfdGhpczIuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVFbGVtZW50Q2xvbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWxlbWVudENsb25lKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3B5U3R5bGVzICYmIG5vZGUgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IG5vZGUudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWc7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gY2xvbmUgY2FudmFzIGNvbnRlbnRzLCBjYW52YXMgaXMgdGFpbnRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBJZnJhbWUgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IGdlbmVyYXRlSWZyYW1lS2V5KCk7XG4gICAgICAgICAgICAgICAgdGVtcElmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHRtbDJjYW52YXMtaW50ZXJuYWwtaWZyYW1lLWtleScsIGlmcmFtZUtleSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3BhcnNlQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9wYXJzZUJvdW5kcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3BhcnNlQm91bmRzLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIuY2FjaGVbaWZyYW1lS2V5XSA9IGdldElmcmFtZURvY3VtZW50RWxlbWVudChub2RlLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbmRlcmVyKGRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IF90aGlzMy5vcHRpb25zLmFzeW5jLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dUYWludDogX3RoaXMzLm9wdGlvbnMuYWxsb3dUYWludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VUaW1lb3V0OiBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnaW5nOiBfdGhpczMub3B0aW9ucy5sb2dnaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IF90aGlzMy5vcHRpb25zLnByb3h5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiBfdGhpczMub3B0aW9ucy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogX3RoaXMzLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiBfdGhpczMub3B0aW9ucy5mb3JlaWduT2JqZWN0UmVuZGVyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ09SUzogX3RoaXMzLm9wdGlvbnMudXNlQ09SUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbmV3IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWTogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMzLmxvZ2dlci5jaGlsZChpZnJhbWVLZXkpKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZnJhbWVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcElmcmFtZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElmcmFtZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCgoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSksIGlmcmFtZUNhbnZhcyksIHRlbXBJZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcElmcmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50ICYmIG5vZGUuc2hlZXQgJiYgbm9kZS5zaGVldC5jc3NSdWxlcykge1xuICAgICAgICAgICAgICAgIHZhciBjc3MgPSBbXS5zbGljZS5jYWxsKG5vZGUuc2hlZXQuY3NzUnVsZXMsIDApLnJlZHVjZShmdW5jdGlvbiAoY3NzLCBydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZSAmJiBydWxlLmNzc1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzICsgcnVsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGFjY2VzcyBjc3NUZXh0IHByb3BlcnR5JywgcnVsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmVOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IHRoaXMuY3JlYXRlRWxlbWVudENsb25lKG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIgd2luZG93ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBzdHlsZUJlZm9yZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCAnOmJlZm9yZScpIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBzdHlsZUFmdGVyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsICc6YWZ0ZXInKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPT09IG5vZGUgJiYgY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgPSBjbG9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxCb2R5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMoY2xvbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY291bnRlcnMgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnBhcnNlQ291bnRlclJlc2V0KShzdHlsZSwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG4gICAgICAgICAgICB2YXIgY29udGVudEJlZm9yZSA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucmVzb2x2ZVBzZXVkb0NvbnRlbnQpKG5vZGUsIHN0eWxlQmVmb3JlLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NDUklQVCcgJiZcbiAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgIWNoaWxkLmhhc0F0dHJpYnV0ZShJR05PUkVfQVRUUklCVVRFKSAmJiAodHlwZW9mIHRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAhdGhpcy5vcHRpb25zLmlnbm9yZUVsZW1lbnRzKGNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcHlTdHlsZXMgfHwgY2hpbGQubm9kZU5hbWUgIT09ICdTVFlMRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHRoaXMuY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb250ZW50QWZ0ZXIgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnJlc29sdmVQc2V1ZG9Db250ZW50KShub2RlLCBzdHlsZUFmdGVyLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcbiAgICAgICAgICAgICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucG9wQ291bnRlcnMpKGNvdW50ZXJzLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgJiYgY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGVCZWZvcmUsIGNvbnRlbnRCZWZvcmUsIFBTRVVET19CRUZPUkUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGVBZnRlciwgY29udGVudEFmdGVyLCBQU0VVRE9fQUZURVIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHRoaXMuY29weVN0eWxlcyAmJiAhKG5vZGUgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCBjbG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGNsb25lKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zY3JvbGxUb3AgIT09IDAgfHwgbm9kZS5zY3JvbGxMZWZ0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cy5wdXNoKFtjbG9uZSwgbm9kZS5zY3JvbGxMZWZ0LCBub2RlLnNjcm9sbFRvcF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVDYW52YXNDb250ZW50cyhub2RlLCBjbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTRUxFQ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUudmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERvY3VtZW50Q2xvbmVyO1xufSgpO1xuXG52YXIgZ2V0U2hlZXRGb250cyA9IGZ1bmN0aW9uIGdldFNoZWV0Rm9udHMoc2hlZXQsIGRvY3VtZW50KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiAoc2hlZXQuY3NzUnVsZXMgPyBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzKSA6IFtdKS5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUudHlwZSA9PT0gQ1NTUnVsZS5GT05UX0ZBQ0VfUlVMRTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgdmFyIHNyYyA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdzcmMnKSk7XG4gICAgICAgIHZhciBmb3JtYXRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3JjW2ldLm1ldGhvZCA9PT0gJ3VybCcgJiYgc3JjW2kgKyAxXSAmJiBzcmNbaSArIDFdLm1ldGhvZCA9PT0gJ2Zvcm1hdCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBzcmNbaV0uYXJnc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmb250ID0ge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IGEuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzcmNbaSArIDFdLmFyZ3NbMF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHMucHVzaChmb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUT0RPIHNlbGVjdCBjb3JyZWN0IGZvcm1hdCBmb3IgYnJvd3NlciksXG5cbiAgICAgICAgICAgIGZvcm1hdHM6IGZvcm1hdHMuZmlsdGVyKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgvXndvZmYvaS50ZXN0KGZvbnQuZm9ybWF0KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZvbnRGYWNlOiBydWxlLnN0eWxlXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgIHJldHVybiBmb250LmZvcm1hdHMubGVuZ3RoO1xuICAgIH0pO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgYmFzZUhyZWYpIHtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcbiAgICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgYmFzZS5ocmVmID0gYmFzZUhyZWY7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoZG9jLmhlYWQpIHtcbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgfVxuICAgIGlmIChkb2MuYm9keSkge1xuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlLnNoZWV0ID8gZ2V0U2hlZXRGb250cyhzdHlsZS5zaGVldCwgZG9jKSA6IFtdO1xufTtcblxudmFyIHJlc3RvcmVPd25lclNjcm9sbCA9IGZ1bmN0aW9uIHJlc3RvcmVPd25lclNjcm9sbChvd25lckRvY3VtZW50LCB4LCB5KSB7XG4gICAgaWYgKG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgKHggIT09IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgfHwgeSAhPT0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCkpIHtcbiAgICAgICAgb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9XG59O1xuXG52YXIgY2xvbmVDYW52YXNDb250ZW50cyA9IGZ1bmN0aW9uIGNsb25lQ2FudmFzQ29udGVudHMoY2FudmFzLCBjbG9uZWRDYW52YXMpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoY2xvbmVkQ2FudmFzKSB7XG4gICAgICAgICAgICBjbG9uZWRDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjbG9uZWRDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHZhciBjbG9uZWRDdHggPSBjbG9uZWRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRDdHgucHV0SW1hZ2VEYXRhKGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb25lZEN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgaW5saW5lUHNldWRvRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlLCBjb250ZW50SXRlbXMsIHBzZXVkb0VsdCkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvbnRlbnQgfHwgc3R5bGUuY29udGVudCA9PT0gJ25vbmUnIHx8IHN0eWxlLmNvbnRlbnQgPT09ICctbW96LWFsdC1jb250ZW50JyB8fCBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzcHNldWRvZWxlbWVudCcpO1xuICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50KTtcblxuICAgIGlmIChjb250ZW50SXRlbXMpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNvbnRlbnRJdGVtcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY29udGVudEl0ZW1zW2ldO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9Qc2V1ZG9Ob2RlQ29udGVudC5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuSU1BR0U6XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKSgndXJsKCcgKyBpdGVtLnZhbHVlICsgJyknKVswXS5hcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX1BzZXVkb05vZGVDb250ZW50LlBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhUOlxuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmNsYXNzTmFtZSA9IFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFICsgJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUjtcbiAgICBjbG9uZS5jbGFzc05hbWUgKz0gcHNldWRvRWx0ID09PSBQU0VVRE9fQkVGT1JFID8gJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgOiAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSO1xuICAgIGlmIChwc2V1ZG9FbHQgPT09IFBTRVVET19CRUZPUkUpIHtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGFub255bW91c1JlcGxhY2VkRWxlbWVudCwgY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50O1xufTtcblxudmFyIFVSTF9SRUdFWFAgPSAvXnVybFxcKCguKylcXCkkL2k7XG52YXIgUFNFVURPX0JFRk9SRSA9ICc6YmVmb3JlJztcbnZhciBQU0VVRE9fQUZURVIgPSAnOmFmdGVyJztcbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSA9ICdfX19odG1sMmNhbnZhc19fX3BzZXVkb2VsZW1lbnRfYmVmb3JlJztcbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSID0gJ19fX2h0bWwyY2FudmFzX19fcHNldWRvZWxlbWVudF9hZnRlcic7XG5cbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFID0gJ3tcXG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufSc7XG5cbnZhciBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzID0gZnVuY3Rpb24gY3JlYXRlUHNldWRvSGlkZVN0eWxlcyhib2R5KSB7XG4gICAgY3JlYXRlU3R5bGVzKGJvZHksICcuJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFICsgUFNFVURPX0JFRk9SRSArIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUgKyAnXFxuICAgICAgICAgLicgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSICsgUFNFVURPX0FGVEVSICsgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSk7XG59O1xuXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVzKGJvZHksIHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IGJvZHkub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICBib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbn07XG5cbnZhciBpbml0Tm9kZSA9IGZ1bmN0aW9uIGluaXROb2RlKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYyWzBdLFxuICAgICAgICB4ID0gX3JlZjJbMV0sXG4gICAgICAgIHkgPSBfcmVmMlsyXTtcblxuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHg7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB5O1xufTtcblxudmFyIGdlbmVyYXRlSWZyYW1lS2V5ID0gZnVuY3Rpb24gZ2VuZXJhdGVJZnJhbWVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKS50b1N0cmluZygxNik7XG59O1xuXG52YXIgREFUQV9VUklfUkVHRVhQID0gL15kYXRhOnRleHRcXC8oLispOyhiYXNlNjQpPywoLiopJC9pO1xuXG52YXIgZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUuY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucHJveHkgPyAoMCwgX1Byb3h5LlByb3h5KShub2RlLnNyYywgb3B0aW9ucykudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gaHRtbC5tYXRjaChEQVRBX1VSSV9SRUdFWFApO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl0gPT09ICdiYXNlNjQnID8gd2luZG93LmF0b2IoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSkgOiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG5vZGUub3duZXJEb2N1bWVudCwgKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUub3BlbigpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZUxvYWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVJZnJhbWVDb250YWluZXIgPSBmdW5jdGlvbiBjcmVhdGVJZnJhbWVDb250YWluZXIob3duZXJEb2N1bWVudCwgYm91bmRzKSB7XG4gICAgdmFyIGNsb25lSWZyYW1lQ29udGFpbmVyID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdodG1sMmNhbnZhcy1jb250YWluZXInO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUubGVmdCA9ICctMTAwMDBweCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLndpZHRoID0gYm91bmRzLndpZHRoLnRvU3RyaW5nKCk7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuaGVpZ2h0ID0gYm91bmRzLmhlaWdodC50b1N0cmluZygpO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnNjcm9sbGluZyA9ICdubyc7IC8vIGlvcyB3b24ndCBzY3JvbGwgd2l0aG91dCBpdFxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShJR05PUkVfQVRUUklCVVRFLCAndHJ1ZScpO1xuICAgIGlmICghb3duZXJEb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ0JvZHkgZWxlbWVudCBub3QgZm91bmQgaW4gRG9jdW1lbnQgdGhhdCBpcyBnZXR0aW5nIHJlbmRlcmVkJyA6ICcnKTtcbiAgICB9XG5cbiAgICBvd25lckRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVJZnJhbWVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG59O1xuXG52YXIgaWZyYW1lTG9hZGVyID0gZnVuY3Rpb24gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY2xvbmVXaW5kb3cub25sb2FkID0gY2xvbmVJZnJhbWVDb250YWluZXIub25sb2FkID0gZG9jdW1lbnRDbG9uZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50Q2xvbmUuYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgJiYgZG9jdW1lbnRDbG9uZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgY2xvbmVXaW5kb3cgPSBleHBvcnRzLmNsb25lV2luZG93ID0gZnVuY3Rpb24gY2xvbmVXaW5kb3cob3duZXJEb2N1bWVudCwgYm91bmRzLCByZWZlcmVuY2VFbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHJlbmRlcmVyKSB7XG4gICAgdmFyIGNsb25lciA9IG5ldyBEb2N1bWVudENsb25lcihyZWZlcmVuY2VFbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIGZhbHNlLCByZW5kZXJlcik7XG4gICAgdmFyIHNjcm9sbFggPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgIHZhciBzY3JvbGxZID0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcblxuICAgIHJldHVybiBjcmVhdGVJZnJhbWVDb250YWluZXIob3duZXJEb2N1bWVudCwgYm91bmRzKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgICAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgICAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgIC8qIENocm9tZSBkb2Vzbid0IGRldGVjdCByZWxhdGl2ZSBiYWNrZ3JvdW5kLWltYWdlcyBhc3NpZ25lZCBpbiBpbmxpbmUgPHN0eWxlPiBzaGVldHMgd2hlbiBmZXRjaGVkIHRocm91Z2ggZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICAgICAgIGlmIHdpbmRvdyB1cmwgaXMgYWJvdXQ6YmxhbmssIHdlIGNhbiBhc3NpZ24gdGhlIHVybCB0byBjdXJyZW50IGJ5IHdyaXRpbmcgb250byB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIHZhciBpZnJhbWVMb2FkID0gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsb25lci5zY3JvbGxlZEVsZW1lbnRzLmZvckVhY2goaW5pdE5vZGUpO1xuICAgICAgICAgICAgY2xvbmVXaW5kb3cuc2Nyb2xsVG8oYm91bmRzLmxlZnQsIGJvdW5kcy50b3ApO1xuICAgICAgICAgICAgaWYgKC8oaVBhZHxpUGhvbmV8aVBvZCkvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIChjbG9uZVdpbmRvdy5zY3JvbGxZICE9PSBib3VuZHMudG9wIHx8IGNsb25lV2luZG93LnNjcm9sbFggIT09IGJvdW5kcy5sZWZ0KSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRvcCA9IC1ib3VuZHMudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gLWJvdW5kcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoW2Nsb25lSWZyYW1lQ29udGFpbmVyLCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCwgY2xvbmVyLnJlc291cmNlTG9hZGVyXSk7XG5cbiAgICAgICAgICAgIHZhciBvbmNsb25lID0gb3B0aW9ucy5vbmNsb25lO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBjbG9uZVdpbmRvdy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQgfHwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IHR5cGVvZiBvbmNsb25lID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xvbmUoZG9jdW1lbnRDbG9uZSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkgOiByZXN1bHQgOiBQcm9taXNlLnJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ0Vycm9yIGZpbmRpbmcgdGhlICcgKyByZWZlcmVuY2VFbGVtZW50Lm5vZGVOYW1lICsgJyBpbiB0aGUgY2xvbmVkIGRvY3VtZW50JyA6ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRDbG9uZS5vcGVuKCk7XG4gICAgICAgIGRvY3VtZW50Q2xvbmUud3JpdGUoc2VyaWFsaXplRG9jdHlwZShkb2N1bWVudC5kb2N0eXBlKSArICc8aHRtbD48L2h0bWw+Jyk7XG4gICAgICAgIC8vIENocm9tZSBzY3JvbGxzIHRoZSBwYXJlbnQgZG9jdW1lbnQgZm9yIHNvbWUgcmVhc29uIGFmdGVyIHRoZSB3cml0ZSB0byB0aGUgY2xvbmVkIHdpbmRvdz8/P1xuICAgICAgICByZXN0b3JlT3duZXJTY3JvbGwocmVmZXJlbmNlRWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS5yZXBsYWNlQ2hpbGQoZG9jdW1lbnRDbG9uZS5hZG9wdE5vZGUoY2xvbmVyLmRvY3VtZW50RWxlbWVudCksIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS5jbG9zZSgpO1xuXG4gICAgICAgIHJldHVybiBpZnJhbWVMb2FkO1xuICAgIH0pO1xufTtcblxudmFyIHNlcmlhbGl6ZURvY3R5cGUgPSBmdW5jdGlvbiBzZXJpYWxpemVEb2N0eXBlKGRvY3R5cGUpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgaWYgKGRvY3R5cGUpIHtcbiAgICAgICAgc3RyICs9ICc8IURPQ1RZUEUgJztcbiAgICAgICAgaWYgKGRvY3R5cGUubmFtZSkge1xuICAgICAgICAgICAgc3RyICs9IGRvY3R5cGUubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0eXBlLmludGVybmFsU3Vic2V0KSB7XG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5pbnRlcm5hbFN1YnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0eXBlLnB1YmxpY0lkKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1wiJyArIGRvY3R5cGUucHVibGljSWQgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUuc3lzdGVtSWQpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5zeXN0ZW1JZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgKz0gJz4nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEhFWDMgPSAvXiMoW2EtZjAtOV17M30pJC9pO1xudmFyIGhleDMgPSBmdW5jdGlvbiBoZXgzKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYMyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV1bMF0gKyBtYXRjaFsxXVswXSwgMTYpLCBwYXJzZUludChtYXRjaFsxXVsxXSArIG1hdGNoWzFdWzFdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzJdICsgbWF0Y2hbMV1bMl0sIDE2KSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBIRVg2ID0gL14jKFthLWYwLTldezZ9KSQvaTtcbnZhciBoZXg2ID0gZnVuY3Rpb24gaGV4Nih2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKEhFWDYpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gW3BhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygwLCAyKSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoMiwgNCksIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDQsIDYpLCAxNiksIG51bGxdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgUkdCID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvO1xudmFyIHJnYiA9IGZ1bmN0aW9uIHJnYih2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKFJHQik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyKG1hdGNoWzFdKSwgTnVtYmVyKG1hdGNoWzJdKSwgTnVtYmVyKG1hdGNoWzNdKSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBSR0JBID0gL15yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGQ/XFwuP1xcZCspXFxzKlxcKSQvO1xudmFyIHJnYmEgPSBmdW5jdGlvbiByZ2JhKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCQSk7XG4gICAgaWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBOdW1iZXIobWF0Y2hbNF0pXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGZyb21BcnJheSA9IGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBbTWF0aC5taW4oYXJyYXlbMF0sIDI1NSksIE1hdGgubWluKGFycmF5WzFdLCAyNTUpLCBNYXRoLm1pbihhcnJheVsyXSwgMjU1KSwgYXJyYXkubGVuZ3RoID4gMyA/IGFycmF5WzNdIDogbnVsbF07XG59O1xuXG52YXIgbmFtZWRDb2xvciA9IGZ1bmN0aW9uIG5hbWVkQ29sb3IobmFtZSkge1xuICAgIHZhciBjb2xvciA9IE5BTUVEX0NPTE9SU1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIHJldHVybiBjb2xvciA/IGNvbG9yIDogZmFsc2U7XG59O1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sb3IodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yKTtcblxuICAgICAgICB2YXIgX3JlZiA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gZnJvbUFycmF5KHZhbHVlKSA6IGhleDModmFsdWUpIHx8IHJnYih2YWx1ZSkgfHwgcmdiYSh2YWx1ZSkgfHwgbmFtZWRDb2xvcih2YWx1ZSkgfHwgaGV4Nih2YWx1ZSkgfHwgWzAsIDAsIDAsIG51bGxdLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCA0KSxcbiAgICAgICAgICAgIHIgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGcgPSBfcmVmMlsxXSxcbiAgICAgICAgICAgIGIgPSBfcmVmMlsyXSxcbiAgICAgICAgICAgIGEgPSBfcmVmMlszXTtcblxuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb2xvciwgW3tcbiAgICAgICAga2V5OiAnaXNUcmFuc3BhcmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RyYW5zcGFyZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hICE9PSBudWxsICYmIHRoaXMuYSAhPT0gMSA/ICdyZ2JhKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnLCcgKyB0aGlzLmEgKyAnKScgOiAncmdiKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnKSc7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sb3I7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yO1xuXG5cbnZhciBOQU1FRF9DT0xPUlMgPSB7XG4gICAgdHJhbnNwYXJlbnQ6IFswLCAwLCAwLCAwXSxcbiAgICBhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1LCBudWxsXSxcbiAgICBhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1LCBudWxsXSxcbiAgICBhcXVhOiBbMCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyLCBudWxsXSxcbiAgICBhenVyZTogWzI0MCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGJlaWdlOiBbMjQ1LCAyNDUsIDIyMCwgbnVsbF0sXG4gICAgYmlzcXVlOiBbMjU1LCAyMjgsIDE5NiwgbnVsbF0sXG4gICAgYmxhY2s6IFswLCAwLCAwLCBudWxsXSxcbiAgICBibGFuY2hlZGFsbW9uZDogWzI1NSwgMjM1LCAyMDUsIG51bGxdLFxuICAgIGJsdWU6IFswLCAwLCAyNTUsIG51bGxdLFxuICAgIGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjYsIG51bGxdLFxuICAgIGJyb3duOiBbMTY1LCA0MiwgNDIsIG51bGxdLFxuICAgIGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzUsIG51bGxdLFxuICAgIGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MCwgbnVsbF0sXG4gICAgY2hhcnRyZXVzZTogWzEyNywgMjU1LCAwLCBudWxsXSxcbiAgICBjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzAsIG51bGxdLFxuICAgIGNvcmFsOiBbMjU1LCAxMjcsIDgwLCBudWxsXSxcbiAgICBjb3JuZmxvd2VyYmx1ZTogWzEwMCwgMTQ5LCAyMzcsIG51bGxdLFxuICAgIGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMCwgbnVsbF0sXG4gICAgY3JpbXNvbjogWzIyMCwgMjAsIDYwLCBudWxsXSxcbiAgICBjeWFuOiBbMCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGRhcmtibHVlOiBbMCwgMCwgMTM5LCBudWxsXSxcbiAgICBkYXJrY3lhbjogWzAsIDEzOSwgMTM5LCBudWxsXSxcbiAgICBkYXJrZ29sZGVucm9kOiBbMTg0LCAxMzQsIDExLCBudWxsXSxcbiAgICBkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxuICAgIGRhcmtncmVlbjogWzAsIDEwMCwgMCwgbnVsbF0sXG4gICAgZGFya2dyZXk6IFsxNjksIDE2OSwgMTY5LCBudWxsXSxcbiAgICBkYXJra2hha2k6IFsxODksIDE4MywgMTA3LCBudWxsXSxcbiAgICBkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5LCBudWxsXSxcbiAgICBkYXJrb2xpdmVncmVlbjogWzg1LCAxMDcsIDQ3LCBudWxsXSxcbiAgICBkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDAsIG51bGxdLFxuICAgIGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDQsIG51bGxdLFxuICAgIGRhcmtyZWQ6IFsxMzksIDAsIDAsIG51bGxdLFxuICAgIGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyLCBudWxsXSxcbiAgICBkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzLCBudWxsXSxcbiAgICBkYXJrc2xhdGVibHVlOiBbNzIsIDYxLCAxMzksIG51bGxdLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5LCBudWxsXSxcbiAgICBkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OSwgbnVsbF0sXG4gICAgZGFya3R1cnF1b2lzZTogWzAsIDIwNiwgMjA5LCBudWxsXSxcbiAgICBkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTEsIG51bGxdLFxuICAgIGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3LCBudWxsXSxcbiAgICBkZWVwc2t5Ymx1ZTogWzAsIDE5MSwgMjU1LCBudWxsXSxcbiAgICBkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXG4gICAgZGltZ3JleTogWzEwNSwgMTA1LCAxMDUsIG51bGxdLFxuICAgIGRvZGdlcmJsdWU6IFszMCwgMTQ0LCAyNTUsIG51bGxdLFxuICAgIGZpcmVicmljazogWzE3OCwgMzQsIDM0LCBudWxsXSxcbiAgICBmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDAsIG51bGxdLFxuICAgIGZvcmVzdGdyZWVuOiBbMzQsIDEzOSwgMzQsIG51bGxdLFxuICAgIGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXG4gICAgZ2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMCwgbnVsbF0sXG4gICAgZ2hvc3R3aGl0ZTogWzI0OCwgMjQ4LCAyNTUsIG51bGxdLFxuICAgIGdvbGQ6IFsyNTUsIDIxNSwgMCwgbnVsbF0sXG4gICAgZ29sZGVucm9kOiBbMjE4LCAxNjUsIDMyLCBudWxsXSxcbiAgICBncmF5OiBbMTI4LCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgZ3JlZW46IFswLCAxMjgsIDAsIG51bGxdLFxuICAgIGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3LCBudWxsXSxcbiAgICBncmV5OiBbMTI4LCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgaG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwLCBudWxsXSxcbiAgICBob3RwaW5rOiBbMjU1LCAxMDUsIDE4MCwgbnVsbF0sXG4gICAgaW5kaWFucmVkOiBbMjA1LCA5MiwgOTIsIG51bGxdLFxuICAgIGluZGlnbzogWzc1LCAwLCAxMzAsIG51bGxdLFxuICAgIGl2b3J5OiBbMjU1LCAyNTUsIDI0MCwgbnVsbF0sXG4gICAga2hha2k6IFsyNDAsIDIzMCwgMTQwLCBudWxsXSxcbiAgICBsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTAsIG51bGxdLFxuICAgIGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1LCBudWxsXSxcbiAgICBsYXduZ3JlZW46IFsxMjQsIDI1MiwgMCwgbnVsbF0sXG4gICAgbGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNSwgbnVsbF0sXG4gICAgbGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMCwgbnVsbF0sXG4gICAgbGlnaHRjb3JhbDogWzI0MCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMCwgbnVsbF0sXG4gICAgbGlnaHRncmF5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXG4gICAgbGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDQsIG51bGxdLFxuICAgIGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTEsIG51bGxdLFxuICAgIGxpZ2h0cGluazogWzI1NSwgMTgyLCAxOTMsIG51bGxdLFxuICAgIGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMiwgbnVsbF0sXG4gICAgbGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MCwgbnVsbF0sXG4gICAgbGlnaHRza3libHVlOiBbMTM1LCAyMDYsIDI1MCwgbnVsbF0sXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzLCBudWxsXSxcbiAgICBsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTMsIG51bGxdLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBbMTc2LCAxOTYsIDIyMiwgbnVsbF0sXG4gICAgbGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0LCBudWxsXSxcbiAgICBsaW1lOiBbMCwgMjU1LCAwLCBudWxsXSxcbiAgICBsaW1lZ3JlZW46IFs1MCwgMjA1LCA1MCwgbnVsbF0sXG4gICAgbGluZW46IFsyNTAsIDI0MCwgMjMwLCBudWxsXSxcbiAgICBtYWdlbnRhOiBbMjU1LCAwLCAyNTUsIG51bGxdLFxuICAgIG1hcm9vbjogWzEyOCwgMCwgMCwgbnVsbF0sXG4gICAgbWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzAsIG51bGxdLFxuICAgIG1lZGl1bWJsdWU6IFswLCAwLCAyMDUsIG51bGxdLFxuICAgIG1lZGl1bW9yY2hpZDogWzE4NiwgODUsIDIxMSwgbnVsbF0sXG4gICAgbWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOSwgbnVsbF0sXG4gICAgbWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTMsIG51bGxdLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogWzEyMywgMTA0LCAyMzgsIG51bGxdLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTQsIG51bGxdLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNCwgbnVsbF0sXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBbMTk5LCAyMSwgMTMzLCBudWxsXSxcbiAgICBtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMiwgbnVsbF0sXG4gICAgbWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MCwgbnVsbF0sXG4gICAgbWlzdHlyb3NlOiBbMjU1LCAyMjgsIDIyNSwgbnVsbF0sXG4gICAgbW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxLCBudWxsXSxcbiAgICBuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzMsIG51bGxdLFxuICAgIG5hdnk6IFswLCAwLCAxMjgsIG51bGxdLFxuICAgIG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwLCBudWxsXSxcbiAgICBvbGl2ZTogWzEyOCwgMTI4LCAwLCBudWxsXSxcbiAgICBvbGl2ZWRyYWI6IFsxMDcsIDE0MiwgMzUsIG51bGxdLFxuICAgIG9yYW5nZTogWzI1NSwgMTY1LCAwLCBudWxsXSxcbiAgICBvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwLCBudWxsXSxcbiAgICBvcmNoaWQ6IFsyMTgsIDExMiwgMjE0LCBudWxsXSxcbiAgICBwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MCwgbnVsbF0sXG4gICAgcGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1MiwgbnVsbF0sXG4gICAgcGFsZXR1cnF1b2lzZTogWzE3NSwgMjM4LCAyMzgsIG51bGxdLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3LCBudWxsXSxcbiAgICBwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxMywgbnVsbF0sXG4gICAgcGVhY2hwdWZmOiBbMjU1LCAyMTgsIDE4NSwgbnVsbF0sXG4gICAgcGVydTogWzIwNSwgMTMzLCA2MywgbnVsbF0sXG4gICAgcGluazogWzI1NSwgMTkyLCAyMDMsIG51bGxdLFxuICAgIHBsdW06IFsyMjEsIDE2MCwgMjIxLCBudWxsXSxcbiAgICBwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMCwgbnVsbF0sXG4gICAgcHVycGxlOiBbMTI4LCAwLCAxMjgsIG51bGxdLFxuICAgIHJlYmVjY2FwdXJwbGU6IFsxMDIsIDUxLCAxNTMsIG51bGxdLFxuICAgIHJlZDogWzI1NSwgMCwgMCwgbnVsbF0sXG4gICAgcm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0MywgbnVsbF0sXG4gICAgcm95YWxibHVlOiBbNjUsIDEwNSwgMjI1LCBudWxsXSxcbiAgICBzYWRkbGVicm93bjogWzEzOSwgNjksIDE5LCBudWxsXSxcbiAgICBzYWxtb246IFsyNTAsIDEyOCwgMTE0LCBudWxsXSxcbiAgICBzYW5keWJyb3duOiBbMjQ0LCAxNjQsIDk2LCBudWxsXSxcbiAgICBzZWFncmVlbjogWzQ2LCAxMzksIDg3LCBudWxsXSxcbiAgICBzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzgsIG51bGxdLFxuICAgIHNpZW5uYTogWzE2MCwgODIsIDQ1LCBudWxsXSxcbiAgICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyLCBudWxsXSxcbiAgICBza3libHVlOiBbMTM1LCAyMDYsIDIzNSwgbnVsbF0sXG4gICAgc2xhdGVibHVlOiBbMTA2LCA5MCwgMjA1LCBudWxsXSxcbiAgICBzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0LCBudWxsXSxcbiAgICBzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0LCBudWxsXSxcbiAgICBzbm93OiBbMjU1LCAyNTAsIDI1MCwgbnVsbF0sXG4gICAgc3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyNywgbnVsbF0sXG4gICAgc3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwLCBudWxsXSxcbiAgICB0YW46IFsyMTAsIDE4MCwgMTQwLCBudWxsXSxcbiAgICB0ZWFsOiBbMCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2LCBudWxsXSxcbiAgICB0b21hdG86IFsyNTUsIDk5LCA3MSwgbnVsbF0sXG4gICAgdHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4LCBudWxsXSxcbiAgICB2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4LCBudWxsXSxcbiAgICB3aGVhdDogWzI0NSwgMjIyLCAxNzksIG51bGxdLFxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgd2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDUsIG51bGxdLFxuICAgIHllbGxvdzogWzI1NSwgMjU1LCAwLCBudWxsXSxcbiAgICB5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MCwgbnVsbF1cbn07XG5cbnZhciBUUkFOU1BBUkVOVCA9IGV4cG9ydHMuVFJBTlNQQVJFTlQgPSBuZXcgQ29sb3IoWzAsIDAsIDAsIDBdKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0ZvcmVpZ25PYmplY3RSZW5kZXJlcicpO1xuXG52YXIgdGVzdFJhbmdlQm91bmRzID0gZnVuY3Rpb24gdGVzdFJhbmdlQm91bmRzKGRvY3VtZW50KSB7XG4gICAgdmFyIFRFU1RfSEVJR0hUID0gMTIzO1xuXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIGlmIChyYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvdW5kdGVzdCcpO1xuICAgICAgICAgICAgdGVzdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gVEVTVF9IRUlHSFQgKyAncHgnO1xuICAgICAgICAgICAgdGVzdEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3RFbGVtZW50KTtcblxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZSh0ZXN0RWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2VCb3VuZHMgPSByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciByYW5nZUhlaWdodCA9IE1hdGgucm91bmQocmFuZ2VCb3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVzdEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHJhbmdlSGVpZ2h0ID09PSBURVNUX0hFSUdIVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gaU9TIDEwLjMgdGFpbnRzIGNhbnZhcyB3aXRoIGJhc2U2NCBpbWFnZXMgdW5sZXNzIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbnZhciB0ZXN0QmFzZTY0ID0gZnVuY3Rpb24gdGVzdEJhc2U2NChkb2N1bWVudCwgc3JjKSB7XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgLy8gU2luZ2xlIHBpeGVsIGJhc2U2NCBpbWFnZSByZW5kZXJzIGZpbmUgb24gaU9TIDEwLjM/Pz9cbiAgICAgICAgaW1nLnNyYyA9IHNyYztcblxuICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1nLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25sb2FkKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgdGVzdENPUlMgPSBmdW5jdGlvbiB0ZXN0Q09SUygpIHtcbiAgICByZXR1cm4gdHlwZW9mIG5ldyBJbWFnZSgpLmNyb3NzT3JpZ2luICE9PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciB0ZXN0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24gdGVzdFJlc3BvbnNlVHlwZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgdGVzdFNWRyA9IGZ1bmN0aW9uIHRlc3RTVkcoZG9jdW1lbnQpIHtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnPjwvc3ZnPic7XG5cbiAgICB0cnkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNHcmVlblBpeGVsID0gZnVuY3Rpb24gaXNHcmVlblBpeGVsKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YVswXSA9PT0gMCAmJiBkYXRhWzFdID09PSAyNTUgJiYgZGF0YVsyXSA9PT0gMCAmJiBkYXRhWzNdID09PSAyNTU7XG59O1xuXG52YXIgdGVzdEZvcmVpZ25PYmplY3QgPSBmdW5jdGlvbiB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgc2l6ZSA9IDEwMDtcbiAgICBjYW52YXMud2lkdGggPSBzaXplO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAyNTUsIDApJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGdyZWVuSW1hZ2VTcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgaW1nLnNyYyA9IGdyZWVuSW1hZ2VTcmM7XG4gICAgdmFyIHN2ZyA9ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcpKHNpemUsIHNpemUsIDAsIDAsIGltZyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgIHJldHVybiAoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5sb2FkU2VyaWFsaXplZFNWRykoc3ZnKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICB2YXIgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSkuZGF0YTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBncmVlbkltYWdlU3JjICsgJyknO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgICAvLyBGaXJlZm94IDU1IGRvZXMgbm90IHJlbmRlciBpbmxpbmUgPGltZyAvPiB0YWdzXG4gICAgICAgIHJldHVybiBpc0dyZWVuUGl4ZWwoZGF0YSkgPyAoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5sb2FkU2VyaWFsaXplZFNWRykoKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuY3JlYXRlRm9yZWlnbk9iamVjdFNWRykoc2l6ZSwgc2l6ZSwgMCwgMCwgbm9kZSkpIDogUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIC8vIEVkZ2UgZG9lcyBub3QgcmVuZGVyIGJhY2tncm91bmQtaW1hZ2VzXG4gICAgICAgIHJldHVybiBpc0dyZWVuUGl4ZWwoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59O1xuXG52YXIgRkVBVFVSRVMgPSB7XG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1JBTkdFX0JPVU5EUygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RSYW5nZUJvdW5kcyhkb2N1bWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfUkFOR0VfQk9VTkRTJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9TVkdfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RTVkcoZG9jdW1lbnQpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1NWR19EUkFXSU5HJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9CQVNFNjRfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gdGVzdEJhc2U2NChkb2N1bWVudCwgc3JjKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQkFTRTY0X0RSQVdJTkcnLCB7IHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgQXJyYXkuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygd2luZG93LmZldGNoID09PSAnZnVuY3Rpb24nID8gdGVzdEZvcmVpZ25PYmplY3QoZG9jdW1lbnQpIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0NPUlNfSU1BR0VTKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdENPUlMoKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9DT1JTX0lNQUdFUycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfUkVTUE9OU0VfVFlQRSgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RSZXNwb25zZVR5cGUoKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9SRVNQT05TRV9UWVBFJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9DT1JTX1hIUigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0NPUlNfWEhSJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGRUFUVVJFUzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9udE1ldHJpY3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0FNUExFX1RFWFQgPSAnSGlkZGVuIFRleHQnO1xuXG52YXIgRm9udE1ldHJpY3MgPSBleHBvcnRzLkZvbnRNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRNZXRyaWNzKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250TWV0cmljcyk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb250TWV0cmljcywgW3tcbiAgICAgICAga2V5OiAnX3BhcnNlTWV0cmljcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VNZXRyaWNzKGZvbnQpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHZhciBpbWcgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHZhciBzcGFuID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuX2RvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdObyBkb2N1bWVudCBmb3VuZCBmb3IgZm9udCBtZXRyaWNzJyA6ICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcblxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gX1V0aWwuU01BTExfSU1BR0U7XG4gICAgICAgICAgICBpbWcud2lkdGggPSAxO1xuICAgICAgICAgICAgaW1nLmhlaWdodCA9IDE7XG5cbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgIGltZy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ2Jhc2VsaW5lJztcblxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnQuZm9udFNpemU7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIHNwYW4uc3R5bGUucGFkZGluZyA9ICcwJztcblxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTQU1QTEVfVEVYVCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICB2YXIgYmFzZWxpbmUgPSBpbWcub2Zmc2V0VG9wIC0gc3Bhbi5vZmZzZXRUb3AgKyAyO1xuXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU0FNUExFX1RFWFQpKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmxpbmVIZWlnaHQgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIGltZy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3N1cGVyJztcblxuICAgICAgICAgICAgdmFyIG1pZGRsZSA9IGltZy5vZmZzZXRUb3AgLSBjb250YWluZXIub2Zmc2V0VG9wICsgMjtcblxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4geyBiYXNlbGluZTogYmFzZWxpbmUsIG1pZGRsZTogbWlkZGxlIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE1ldHJpY3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0cmljcyhmb250KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZm9udC5mb250RmFtaWx5ICsgJyAnICsgZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHRoaXMuX3BhcnNlTWV0cmljcyhmb250KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb250TWV0cmljcztcbn0oKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZXhwb3J0cy5wYXJzZUdyYWRpZW50ID0gZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IGV4cG9ydHMuTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLlJBRElBTF9HUkFESUVOVF9TSEFQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX0FuZ2xlID0gcmVxdWlyZSgnLi9BbmdsZScpO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNJREVfT1JfQ09STkVSID0gL14odG8gKT8obGVmdHx0b3B8cmlnaHR8Ym90dG9tKSggKGxlZnR8dG9wfHJpZ2h0fGJvdHRvbSkpPyQvaTtcbnZhciBQRVJDRU5UQUdFX0FOR0xFUyA9IC9eKFsrLV0/XFxkKlxcLj9cXGQrKSUgKFsrLV0/XFxkKlxcLj9cXGQrKSUkL2k7XG52YXIgRU5EU19XSVRIX0xFTkdUSCA9IC8ocHgpfCV8KCAwKSQvaTtcbnZhciBGUk9NX1RPX0NPTE9SU1RPUCA9IC9eKGZyb218dG98Y29sb3Itc3RvcClcXCgoPzooW1xcZC5dKykoJSk/LFxccyopPyguKz8pXFwpJC9pO1xudmFyIFJBRElBTF9TSEFQRV9ERUZJTklUSU9OID0gL15cXHMqKGNpcmNsZXxlbGxpcHNlKT9cXHMqKCg/OihbXFxkLl0rKShweHxyP2VtfCUpXFxzKig/OihbXFxkLl0rKShweHxyP2VtfCUpKT8pfGNsb3Nlc3Qtc2lkZXxjbG9zZXN0LWNvcm5lcnxmYXJ0aGVzdC1zaWRlfGZhcnRoZXN0LWNvcm5lcik/XFxzKig/OmF0XFxzKig/OihsZWZ0fGNlbnRlcnxyaWdodCl8KFtcXGQuXSspKHB4fHI/ZW18JSkpXFxzKyg/Oih0b3B8Y2VudGVyfGJvdHRvbSl8KFtcXGQuXSspKHB4fHI/ZW18JSkpKT8oPzpcXHN8JCkvaTtcblxudmFyIEdSQURJRU5UX1RZUEUgPSBleHBvcnRzLkdSQURJRU5UX1RZUEUgPSB7XG4gICAgTElORUFSX0dSQURJRU5UOiAwLFxuICAgIFJBRElBTF9HUkFESUVOVDogMVxufTtcblxudmFyIFJBRElBTF9HUkFESUVOVF9TSEFQRSA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0ge1xuICAgIENJUkNMRTogMCxcbiAgICBFTExJUFNFOiAxXG59O1xuXG52YXIgTEVOR1RIX0ZPUl9QT1NJVElPTiA9IHtcbiAgICBsZWZ0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSxcbiAgICB0b3A6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpLFxuICAgIGNlbnRlcjogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzUwJScpLFxuICAgIHJpZ2h0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpLFxuICAgIGJvdHRvbTogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKVxufTtcblxudmFyIExpbmVhckdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uIExpbmVhckdyYWRpZW50KGNvbG9yU3RvcHMsIGRpcmVjdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5lYXJHcmFkaWVudCk7XG5cbiAgICB0aGlzLnR5cGUgPSBHUkFESUVOVF9UWVBFLkxJTkVBUl9HUkFESUVOVDtcbiAgICB0aGlzLmNvbG9yU3RvcHMgPSBjb2xvclN0b3BzO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xufTtcblxudmFyIFJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uIFJhZGlhbEdyYWRpZW50KGNvbG9yU3RvcHMsIHNoYXBlLCBjZW50ZXIsIHJhZGl1cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpYWxHcmFkaWVudCk7XG5cbiAgICB0aGlzLnR5cGUgPSBHUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDtcbiAgICB0aGlzLmNvbG9yU3RvcHMgPSBjb2xvclN0b3BzO1xuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbn07XG5cbnZhciBwYXJzZUdyYWRpZW50ID0gZXhwb3J0cy5wYXJzZUdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VHcmFkaWVudChjb250YWluZXIsIF9yZWYsIGJvdW5kcykge1xuICAgIHZhciBhcmdzID0gX3JlZi5hcmdzLFxuICAgICAgICBtZXRob2QgPSBfcmVmLm1ldGhvZCxcbiAgICAgICAgcHJlZml4ID0gX3JlZi5wcmVmaXg7XG5cbiAgICBpZiAobWV0aG9kID09PSAnbGluZWFyLWdyYWRpZW50Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VMaW5lYXJHcmFkaWVudChhcmdzLCBib3VuZHMsICEhcHJlZml4KTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAnbGluZWFyJykge1xuICAgICAgICAvLyBUT0RPIGhhbmRsZSBjb3JyZWN0IGFuZ2xlXG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KFsndG8gYm90dG9tJ10uY29uY2F0KHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyhhcmdzLnNsaWNlKDMpKSksIGJvdW5kcywgISFwcmVmaXgpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAncmFkaWFsLWdyYWRpZW50Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHByZWZpeCA9PT0gJy13ZWJraXQtJyA/IHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzKSA6IGFyZ3MsIGJvdW5kcyk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdncmFkaWVudCcgJiYgYXJnc1swXSA9PT0gJ3JhZGlhbCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUmFkaWFsR3JhZGllbnQoY29udGFpbmVyLCB0cmFuc2Zvcm1PYnNvbGV0ZUNvbG9yU3RvcHModHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3Muc2xpY2UoMSkpKSwgYm91bmRzKTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VDb2xvclN0b3BzID0gZnVuY3Rpb24gcGFyc2VDb2xvclN0b3BzKGFyZ3MsIGZpcnN0Q29sb3JTdG9wSW5kZXgsIGxpbmVMZW5ndGgpIHtcbiAgICB2YXIgY29sb3JTdG9wcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0Q29sb3JTdG9wSW5kZXg7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFyZ3NbaV07XG4gICAgICAgIHZhciBIQVNfTEVOR1RIID0gRU5EU19XSVRIX0xFTkdUSC50ZXN0KHZhbHVlKTtcbiAgICAgICAgdmFyIGxhc3RTcGFjZUluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJyAnKTtcbiAgICAgICAgdmFyIF9jb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoSEFTX0xFTkdUSCA/IHZhbHVlLnN1YnN0cmluZygwLCBsYXN0U3BhY2VJbmRleCkgOiB2YWx1ZSk7XG4gICAgICAgIHZhciBfc3RvcCA9IEhBU19MRU5HVEggPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCh2YWx1ZS5zdWJzdHJpbmcobGFzdFNwYWNlSW5kZXggKyAxKSkgOiBpID09PSBmaXJzdENvbG9yU3RvcEluZGV4ID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJykgOiBpID09PSBhcmdzLmxlbmd0aCAtIDEgPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpIDogbnVsbDtcbiAgICAgICAgY29sb3JTdG9wcy5wdXNoKHsgY29sb3I6IF9jb2xvciwgc3RvcDogX3N0b3AgfSk7XG4gICAgfVxuXG4gICAgdmFyIGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcyA9IGNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgY29sb3IgPSBfcmVmMi5jb2xvcixcbiAgICAgICAgICAgIHN0b3AgPSBfcmVmMi5zdG9wO1xuXG4gICAgICAgIHZhciBhYnNvbHV0ZVN0b3AgPSBsaW5lTGVuZ3RoID09PSAwID8gMCA6IHN0b3AgPyBzdG9wLmdldEFic29sdXRlVmFsdWUobGluZUxlbmd0aCkgLyBsaW5lTGVuZ3RoIDogbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgc3RvcDogYWJzb2x1dGVTdG9wXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICB2YXIgcHJldmlvdXNDb2xvclN0b3AgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbMF0uc3RvcDtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBpZiAocHJldmlvdXNDb2xvclN0b3AgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBfc3RvcDIgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbX2ldLnN0b3A7XG4gICAgICAgICAgICBpZiAoX3N0b3AyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfaTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW25dLnN0b3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBuIC0gX2kgKyAxO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Q29sb3JTdGVwID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW25dLnN0b3A7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplID0gKG5leHRDb2xvclN0ZXAgLSBwcmV2aW91c0NvbG9yU3RvcCkgLyBzdGVwcztcbiAgICAgICAgICAgICAgICBmb3IgKDsgX2kgPCBuOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29sb3JTdG9wID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW19pXS5zdG9wID0gcHJldmlvdXNDb2xvclN0b3AgKyBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29sb3JTdG9wID0gX3N0b3AyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcztcbn07XG5cbnZhciBwYXJzZUxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VMaW5lYXJHcmFkaWVudChhcmdzLCBib3VuZHMsIGhhc1ByZWZpeCkge1xuICAgIHZhciBhbmdsZSA9ICgwLCBfQW5nbGUucGFyc2VBbmdsZSkoYXJnc1swXSk7XG4gICAgdmFyIEhBU19TSURFX09SX0NPUk5FUiA9IFNJREVfT1JfQ09STkVSLnRlc3QoYXJnc1swXSk7XG4gICAgdmFyIEhBU19ESVJFQ1RJT04gPSBIQVNfU0lERV9PUl9DT1JORVIgfHwgYW5nbGUgIT09IG51bGwgfHwgUEVSQ0VOVEFHRV9BTkdMRVMudGVzdChhcmdzWzBdKTtcbiAgICB2YXIgZGlyZWN0aW9uID0gSEFTX0RJUkVDVElPTiA/IGFuZ2xlICE9PSBudWxsID8gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBwcmVmaXgsIHRoZSAwwrAgYW5nbGUgcG9pbnRzIGR1ZSBFYXN0IChpbnN0ZWFkIG9mIE5vcnRoIHBlciBXM0MpXG4gICAgaGFzUHJlZml4ID8gYW5nbGUgLSBNYXRoLlBJICogMC41IDogYW5nbGUsIGJvdW5kcykgOiBIQVNfU0lERV9PUl9DT1JORVIgPyBwYXJzZVNpZGVPckNvcm5lcihhcmdzWzBdLCBib3VuZHMpIDogcGFyc2VQZXJjZW50YWdlQW5nbGUoYXJnc1swXSwgYm91bmRzKSA6IGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEksIGJvdW5kcyk7XG4gICAgdmFyIGZpcnN0Q29sb3JTdG9wSW5kZXggPSBIQVNfRElSRUNUSU9OID8gMSA6IDA7XG5cbiAgICAvLyBUT0RPOiBGaXggc29tZSBpbmFjY3VyYWN5IHdpdGggY29sb3Igc3RvcHMgd2l0aCBweCB2YWx1ZXNcbiAgICB2YXIgbGluZUxlbmd0aCA9IE1hdGgubWluKCgwLCBfVXRpbC5kaXN0YW5jZSkoTWF0aC5hYnMoZGlyZWN0aW9uLngwKSArIE1hdGguYWJzKGRpcmVjdGlvbi54MSksIE1hdGguYWJzKGRpcmVjdGlvbi55MCkgKyBNYXRoLmFicyhkaXJlY3Rpb24ueTEpKSwgYm91bmRzLndpZHRoICogMiwgYm91bmRzLmhlaWdodCAqIDIpO1xuXG4gICAgcmV0dXJuIG5ldyBMaW5lYXJHcmFkaWVudChwYXJzZUNvbG9yU3RvcHMoYXJncywgZmlyc3RDb2xvclN0b3BJbmRleCwgbGluZUxlbmd0aCksIGRpcmVjdGlvbik7XG59O1xuXG52YXIgcGFyc2VSYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uIHBhcnNlUmFkaWFsR3JhZGllbnQoY29udGFpbmVyLCBhcmdzLCBib3VuZHMpIHtcbiAgICB2YXIgbSA9IGFyZ3NbMF0ubWF0Y2goUkFESUFMX1NIQVBFX0RFRklOSVRJT04pO1xuICAgIHZhciBzaGFwZSA9IG0gJiYgKG1bMV0gPT09ICdjaXJjbGUnIHx8IC8vIGV4cGxpY2l0IHNoYXBlIHNwZWNpZmljYXRpb25cbiAgICBtWzNdICE9PSB1bmRlZmluZWQgJiYgbVs1XSA9PT0gdW5kZWZpbmVkKSAvLyBvbmx5IG9uZSByYWRpdXMgY29vcmRpbmF0ZVxuICAgID8gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSA6IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFO1xuICAgIHZhciByYWRpdXMgPSB7fTtcbiAgICB2YXIgY2VudGVyID0ge307XG5cbiAgICBpZiAobSkge1xuICAgICAgICAvLyBSYWRpdXNcbiAgICAgICAgaWYgKG1bM10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmFkaXVzLnggPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzNdLCBtWzRdKS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobVs1XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYWRpdXMueSA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bNV0sIG1bNl0pLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3NpdGlvblxuICAgICAgICBpZiAobVs3XSkge1xuICAgICAgICAgICAgY2VudGVyLnggPSBMRU5HVEhfRk9SX1BPU0lUSU9OW21bN10udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH0gZWxzZSBpZiAobVs4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIueCA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bOF0sIG1bOV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1bMTBdKSB7XG4gICAgICAgICAgICBjZW50ZXIueSA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVsxMF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH0gZWxzZSBpZiAobVsxMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VudGVyLnkgPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzExXSwgbVsxMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdyYWRpZW50Q2VudGVyID0ge1xuICAgICAgICB4OiBjZW50ZXIueCA9PT0gdW5kZWZpbmVkID8gYm91bmRzLndpZHRoIC8gMiA6IGNlbnRlci54LmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKSxcbiAgICAgICAgeTogY2VudGVyLnkgPT09IHVuZGVmaW5lZCA/IGJvdW5kcy5oZWlnaHQgLyAyIDogY2VudGVyLnkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KVxuICAgIH07XG4gICAgdmFyIGdyYWRpZW50UmFkaXVzID0gY2FsY3VsYXRlUmFkaXVzKG0gJiYgbVsyXSB8fCAnZmFydGhlc3QtY29ybmVyJywgc2hhcGUsIGdyYWRpZW50Q2VudGVyLCByYWRpdXMsIGJvdW5kcyk7XG5cbiAgICByZXR1cm4gbmV3IFJhZGlhbEdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBtID8gMSA6IDAsIE1hdGgubWluKGdyYWRpZW50UmFkaXVzLngsIGdyYWRpZW50UmFkaXVzLnkpKSwgc2hhcGUsIGdyYWRpZW50Q2VudGVyLCBncmFkaWVudFJhZGl1cyk7XG59O1xuXG52YXIgY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24gPSBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihyYWRpYW4sIGJvdW5kcykge1xuICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICB2YXIgSEFMRl9XSURUSCA9IHdpZHRoICogMC41O1xuICAgIHZhciBIQUxGX0hFSUdIVCA9IGhlaWdodCAqIDAuNTtcbiAgICB2YXIgbGluZUxlbmd0aCA9IE1hdGguYWJzKHdpZHRoICogTWF0aC5zaW4ocmFkaWFuKSkgKyBNYXRoLmFicyhoZWlnaHQgKiBNYXRoLmNvcyhyYWRpYW4pKTtcbiAgICB2YXIgSEFMRl9MSU5FX0xFTkdUSCA9IGxpbmVMZW5ndGggLyAyO1xuXG4gICAgdmFyIHgwID0gSEFMRl9XSURUSCArIE1hdGguc2luKHJhZGlhbikgKiBIQUxGX0xJTkVfTEVOR1RIO1xuICAgIHZhciB5MCA9IEhBTEZfSEVJR0hUIC0gTWF0aC5jb3MocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XG4gICAgdmFyIHgxID0gd2lkdGggLSB4MDtcbiAgICB2YXIgeTEgPSBoZWlnaHQgLSB5MDtcblxuICAgIHJldHVybiB7IHgwOiB4MCwgeDE6IHgxLCB5MDogeTAsIHkxOiB5MSB9O1xufTtcblxudmFyIHBhcnNlVG9wUmlnaHQgPSBmdW5jdGlvbiBwYXJzZVRvcFJpZ2h0KGJvdW5kcykge1xuICAgIHJldHVybiBNYXRoLmFjb3MoYm91bmRzLndpZHRoIC8gMiAvICgoMCwgX1V0aWwuZGlzdGFuY2UpKGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCkgLyAyKSk7XG59O1xuXG52YXIgcGFyc2VTaWRlT3JDb3JuZXIgPSBmdW5jdGlvbiBwYXJzZVNpZGVPckNvcm5lcihzaWRlLCBib3VuZHMpIHtcbiAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigwLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgLyAyLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDMgKiBNYXRoLlBJIC8gMiwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAncmlnaHQgdG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIGxlZnQnOlxuICAgICAgICBjYXNlICd0byBsZWZ0IGJvdHRvbSc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSArIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wIGxlZnQnOlxuICAgICAgICBjYXNlICdsZWZ0IHRvcCc6XG4gICAgICAgIGNhc2UgJ3RvIGJvdHRvbSByaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0IGJvdHRvbSc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSAtIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAnYm90dG9tIGxlZnQnOlxuICAgICAgICBjYXNlICdsZWZ0IGJvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCByaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0IHRvcCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24ocGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdib3R0b20gcmlnaHQnOlxuICAgICAgICBjYXNlICdyaWdodCBib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AgbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigyICogTWF0aC5QSSAtIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJLCBib3VuZHMpO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZVBlcmNlbnRhZ2VBbmdsZSA9IGZ1bmN0aW9uIHBhcnNlUGVyY2VudGFnZUFuZ2xlKGFuZ2xlLCBib3VuZHMpIHtcbiAgICB2YXIgX2FuZ2xlJHNwbGl0JG1hcCA9IGFuZ2xlLnNwbGl0KCcgJykubWFwKHBhcnNlRmxvYXQpLFxuICAgICAgICBfYW5nbGUkc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF9hbmdsZSRzcGxpdCRtYXAsIDIpLFxuICAgICAgICBsZWZ0ID0gX2FuZ2xlJHNwbGl0JG1hcDJbMF0sXG4gICAgICAgIHRvcCA9IF9hbmdsZSRzcGxpdCRtYXAyWzFdO1xuXG4gICAgdmFyIHJhdGlvID0gbGVmdCAvIDEwMCAqIGJvdW5kcy53aWR0aCAvICh0b3AgLyAxMDAgKiBib3VuZHMuaGVpZ2h0KTtcblxuICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLmF0YW4oaXNOYU4ocmF0aW8pID8gMSA6IHJhdGlvKSArIE1hdGguUEkgLyAyLCBib3VuZHMpO1xufTtcblxudmFyIGZpbmRDb3JuZXIgPSBmdW5jdGlvbiBmaW5kQ29ybmVyKGJvdW5kcywgeCwgeSwgY2xvc2VzdCkge1xuICAgIHZhciBjb3JuZXJzID0gW3sgeDogMCwgeTogMCB9LCB7IHg6IDAsIHk6IGJvdW5kcy5oZWlnaHQgfSwgeyB4OiBib3VuZHMud2lkdGgsIHk6IDAgfSwgeyB4OiBib3VuZHMud2lkdGgsIHk6IGJvdW5kcy5oZWlnaHQgfV07XG5cbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNvcm5lcnMucmVkdWNlKGZ1bmN0aW9uIChzdGF0LCBjb3JuZXIpIHtcbiAgICAgICAgdmFyIGQgPSAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBjb3JuZXIueCwgeSAtIGNvcm5lci55KTtcbiAgICAgICAgaWYgKGNsb3Nlc3QgPyBkIDwgc3RhdC5vcHRpbXVtRGlzdGFuY2UgOiBkID4gc3RhdC5vcHRpbXVtRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0aW11bUNvcm5lcjogY29ybmVyLFxuICAgICAgICAgICAgICAgIG9wdGltdW1EaXN0YW5jZTogZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0O1xuICAgIH0sIHtcbiAgICAgICAgb3B0aW11bURpc3RhbmNlOiBjbG9zZXN0ID8gSW5maW5pdHkgOiAtSW5maW5pdHksXG4gICAgICAgIG9wdGltdW1Db3JuZXI6IG51bGxcbiAgICB9KS5vcHRpbXVtQ29ybmVyO1xufTtcblxudmFyIGNhbGN1bGF0ZVJhZGl1cyA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVJhZGl1cyhleHRlbnQsIHNoYXBlLCBjZW50ZXIsIHJhZGl1cywgYm91bmRzKSB7XG4gICAgdmFyIHggPSBjZW50ZXIueDtcbiAgICB2YXIgeSA9IGNlbnRlci55O1xuICAgIHZhciByeCA9IDA7XG4gICAgdmFyIHJ5ID0gMDtcblxuICAgIHN3aXRjaCAoZXh0ZW50KSB7XG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3Qtc2lkZSc6XG4gICAgICAgICAgICAvLyBUaGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIHNvIHRoYXQgdGhhdCBpdCBleGFjdGx5IG1lZXRzIHRoZSBzaWRlIG9mIHRoZSBncmFkaWVudCBib3ggY2xvc2VzdCB0byB0aGUgZ3JhZGllbnTigJlzIGNlbnRlci5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGFwZSBpcyBhbiBlbGxpcHNlLCBpdCBleGFjdGx5IG1lZXRzIHRoZSBjbG9zZXN0IHNpZGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcbiAgICAgICAgICAgICAgICByeCA9IHJ5ID0gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpLCBNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgcnggPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHJ5ID0gTWF0aC5taW4oTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjbG9zZXN0LWNvcm5lcic6XG4gICAgICAgICAgICAvLyBUaGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIHNvIHRoYXQgdGhhdCBpdCBwYXNzZXMgdGhyb3VnaCB0aGUgY29ybmVyIG9mIHRoZSBncmFkaWVudCBib3ggY2xvc2VzdCB0byB0aGUgZ3JhZGllbnTigJlzIGNlbnRlci5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGFwZSBpcyBhbiBlbGxpcHNlLCB0aGUgZW5kaW5nIHNoYXBlIGlzIGdpdmVuIHRoZSBzYW1lIGFzcGVjdC1yYXRpbyBpdCB3b3VsZCBoYXZlIGlmIGNsb3Nlc3Qtc2lkZSB3ZXJlIHNwZWNpZmllZC5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbigoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSByYXRpbyByeS9yeCAod2hpY2ggaXMgdG8gYmUgdGhlIHNhbWUgYXMgZm9yIFwiY2xvc2VzdC1zaWRlXCIpXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKSAvIE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvcm5lciA9IGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICByeCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoY29ybmVyLnggLSB4LCAoY29ybmVyLnkgLSB5KSAvIGMpO1xuICAgICAgICAgICAgICAgIHJ5ID0gYyAqIHJ4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFydGhlc3Qtc2lkZSc6XG4gICAgICAgICAgICAvLyBTYW1lIGFzIGNsb3Nlc3Qtc2lkZSwgZXhjZXB0IHRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgYmFzZWQgb24gdGhlIGZhcnRoZXN0IHNpZGUocylcbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1heChNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZhcnRoZXN0LWNvcm5lcic6XG4gICAgICAgICAgICAvLyBTYW1lIGFzIGNsb3Nlc3QtY29ybmVyLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3QgY29ybmVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0IHJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgZmFydGhlc3Qtc2lkZSB3ZXJlIHNwZWNpZmllZC5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1heCgoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSByYXRpbyByeS9yeCAod2hpY2ggaXMgdG8gYmUgdGhlIHNhbWUgYXMgZm9yIFwiZmFydGhlc3Qtc2lkZVwiKVxuICAgICAgICAgICAgICAgIHZhciBfYyA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICB2YXIgX2Nvcm5lciA9IGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcnggPSAoMCwgX1V0aWwuZGlzdGFuY2UpKF9jb3JuZXIueCAtIHgsIChfY29ybmVyLnkgLSB5KSAvIF9jKTtcbiAgICAgICAgICAgICAgICByeSA9IF9jICogcng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gcGl4ZWwgb3IgcGVyY2VudGFnZSB2YWx1ZXNcbiAgICAgICAgICAgIHJ4ID0gcmFkaXVzLnggfHwgMDtcbiAgICAgICAgICAgIHJ5ID0gcmFkaXVzLnkgIT09IHVuZGVmaW5lZCA/IHJhZGl1cy55IDogcng7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByeCxcbiAgICAgICAgeTogcnlcbiAgICB9O1xufTtcblxudmFyIHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyA9IGV4cG9ydHMudHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZnVuY3Rpb24gdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3MpIHtcbiAgICB2YXIgc2hhcGUgPSAnJztcbiAgICB2YXIgcmFkaXVzID0gJyc7XG4gICAgdmFyIGV4dGVudCA9ICcnO1xuICAgIHZhciBwb3NpdGlvbiA9ICcnO1xuICAgIHZhciBpZHggPSAwO1xuXG4gICAgdmFyIFBPU0lUSU9OID0gL14obGVmdHxjZW50ZXJ8cmlnaHR8XFxkKyg/OnB4fHI/ZW18JSk/KSg/OlxccysodG9wfGNlbnRlcnxib3R0b218XFxkKyg/OnB4fHI/ZW18JSk/KSk/JC9pO1xuICAgIHZhciBTSEFQRV9BTkRfRVhURU5UID0gL14oY2lyY2xlfGVsbGlwc2UpP1xccyooY2xvc2VzdC1zaWRlfGNsb3Nlc3QtY29ybmVyfGZhcnRoZXN0LXNpZGV8ZmFydGhlc3QtY29ybmVyfGNvbnRhaW58Y292ZXIpPyQvaTtcbiAgICB2YXIgUkFESVVTID0gL15cXGQrKHB4fHI/ZW18JSk/KD86XFxzK1xcZCsocHh8cj9lbXwlKT8pPyQvaTtcblxuICAgIHZhciBtYXRjaFN0YXJ0UG9zaXRpb24gPSBhcmdzW2lkeF0ubWF0Y2goUE9TSVRJT04pO1xuICAgIGlmIChtYXRjaFN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoU2hhcGVFeHRlbnQgPSBhcmdzW2lkeF0ubWF0Y2goU0hBUEVfQU5EX0VYVEVOVCk7XG4gICAgaWYgKG1hdGNoU2hhcGVFeHRlbnQpIHtcbiAgICAgICAgc2hhcGUgPSBtYXRjaFNoYXBlRXh0ZW50WzFdIHx8ICcnO1xuICAgICAgICBleHRlbnQgPSBtYXRjaFNoYXBlRXh0ZW50WzJdIHx8ICcnO1xuICAgICAgICBpZiAoZXh0ZW50ID09PSAnY29udGFpbicpIHtcbiAgICAgICAgICAgIGV4dGVudCA9ICdjbG9zZXN0LXNpZGUnO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dGVudCA9PT0gJ2NvdmVyJykge1xuICAgICAgICAgICAgZXh0ZW50ID0gJ2ZhcnRoZXN0LWNvcm5lcic7XG4gICAgICAgIH1cbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoU3RhcnRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcbiAgICBpZiAobWF0Y2hTdGFydFJhZGl1cykge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hFbmRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XG4gICAgaWYgKG1hdGNoRW5kUG9zaXRpb24pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoRW5kUmFkaXVzID0gYXJnc1tpZHhdLm1hdGNoKFJBRElVUyk7XG4gICAgaWYgKG1hdGNoRW5kUmFkaXVzKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaFBvc2l0aW9uID0gbWF0Y2hFbmRQb3NpdGlvbiB8fCBtYXRjaFN0YXJ0UG9zaXRpb247XG4gICAgaWYgKG1hdGNoUG9zaXRpb24gJiYgbWF0Y2hQb3NpdGlvblsxXSkge1xuICAgICAgICBwb3NpdGlvbiA9IG1hdGNoUG9zaXRpb25bMV0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzFdKSA/ICdweCcgOiAnJyk7XG4gICAgICAgIGlmIChtYXRjaFBvc2l0aW9uWzJdKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSAnICcgKyBtYXRjaFBvc2l0aW9uWzJdICsgKC9eXFxkKyQvLnRlc3QobWF0Y2hQb3NpdGlvblsyXSkgPyAncHgnIDogJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoUmFkaXVzID0gbWF0Y2hFbmRSYWRpdXMgfHwgbWF0Y2hTdGFydFJhZGl1cztcbiAgICBpZiAobWF0Y2hSYWRpdXMpIHtcbiAgICAgICAgcmFkaXVzID0gbWF0Y2hSYWRpdXNbMF07XG4gICAgICAgIGlmICghbWF0Y2hSYWRpdXNbMV0pIHtcbiAgICAgICAgICAgIHJhZGl1cyArPSAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uICYmICFzaGFwZSAmJiAhcmFkaXVzICYmICFleHRlbnQpIHtcbiAgICAgICAgcmFkaXVzID0gcG9zaXRpb247XG4gICAgICAgIHBvc2l0aW9uID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gJ2F0ICcgKyBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW1tzaGFwZSwgZXh0ZW50LCByYWRpdXMsIHBvc2l0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuICEhcztcbiAgICB9KS5qb2luKCcgJyldLmNvbmNhdChhcmdzLnNsaWNlKGlkeCkpO1xufTtcblxudmFyIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyhhcmdzKSB7XG4gICAgcmV0dXJuIGFyZ3MubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IubWF0Y2goRlJPTV9UT19DT0xPUlNUT1ApO1xuICAgIH0pXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIC5tYXAoZnVuY3Rpb24gKHYsIGluZGV4KSB7XG4gICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3NbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh2WzFdKSB7XG4gICAgICAgICAgICBjYXNlICdmcm9tJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgMCUnO1xuICAgICAgICAgICAgY2FzZSAndG8nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAxMDAlJztcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yLXN0b3AnOlxuICAgICAgICAgICAgICAgIGlmICh2WzNdID09PSAnJScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnICcgKyB2WzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgJyArIHBhcnNlRmxvYXQodlsyXSkgKiAxMDAgKyAnJSc7XG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlZm9ybWF0SW5wdXRCb3VuZHMgPSBleHBvcnRzLmlubGluZVNlbGVjdEVsZW1lbnQgPSBleHBvcnRzLmlubGluZVRleHRBcmVhRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lSW5wdXRFbGVtZW50ID0gZXhwb3J0cy5nZXRJbnB1dEJvcmRlclJhZGl1cyA9IGV4cG9ydHMuSU5QVVRfQkFDS0dST1VORCA9IGV4cG9ydHMuSU5QVVRfQk9SREVSUyA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XG5cbnZhciBfYm9yZGVyID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JvcmRlcicpO1xuXG52YXIgX0NpcmNsZSA9IHJlcXVpcmUoJy4vZHJhd2luZy9DaXJjbGUnKTtcblxudmFyIF9DaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2lyY2xlKTtcblxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuL2RyYXdpbmcvVmVjdG9yJyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF9UZXh0Qm91bmRzID0gcmVxdWlyZSgnLi9UZXh0Qm91bmRzJyk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSU5QVVRfQ09MT1IgPSBleHBvcnRzLklOUFVUX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbNDIsIDQyLCA0Ml0pO1xudmFyIElOUFVUX0JPUkRFUl9DT0xPUiA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoWzE2NSwgMTY1LCAxNjVdKTtcbnZhciBJTlBVVF9CQUNLR1JPVU5EX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMjIyLCAyMjIsIDIyMl0pO1xudmFyIElOUFVUX0JPUkRFUiA9IHtcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3JkZXJDb2xvcjogSU5QVVRfQk9SREVSX0NPTE9SLFxuICAgIGJvcmRlclN0eWxlOiBfYm9yZGVyLkJPUkRFUl9TVFlMRS5TT0xJRFxufTtcbnZhciBJTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gW0lOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUl07XG52YXIgSU5QVVRfQkFDS0dST1VORCA9IGV4cG9ydHMuSU5QVVRfQkFDS0dST1VORCA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IElOUFVUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgYmFja2dyb3VuZEltYWdlOiBbXSxcbiAgICBiYWNrZ3JvdW5kQ2xpcDogX2JhY2tncm91bmQuQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YLFxuICAgIGJhY2tncm91bmRPcmlnaW46IF9iYWNrZ3JvdW5kLkJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YXG59O1xuXG52YXIgUkFESU9fQk9SREVSX1JBRElVUyA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCc1MCUnKTtcbnZhciBSQURJT19CT1JERVJfUkFESVVTX1RVUExFID0gW1JBRElPX0JPUkRFUl9SQURJVVMsIFJBRElPX0JPUkRFUl9SQURJVVNdO1xudmFyIElOUFVUX1JBRElPX0JPUkRFUl9SQURJVVMgPSBbUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRV07XG5cbnZhciBDSEVDS0JPWF9CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzNweCcpO1xudmFyIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUgPSBbQ0hFQ0tCT1hfQk9SREVSX1JBRElVUywgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU107XG52YXIgSU5QVVRfQ0hFQ0tCT1hfQk9SREVSX1JBRElVUyA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFXTtcblxudmFyIGdldElucHV0Qm9yZGVyUmFkaXVzID0gZXhwb3J0cy5nZXRJbnB1dEJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIGdldElucHV0Qm9yZGVyUmFkaXVzKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSAncmFkaW8nID8gSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA6IElOUFVUX0NIRUNLQk9YX0JPUkRFUl9SQURJVVM7XG59O1xuXG52YXIgaW5saW5lSW5wdXRFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVJbnB1dEVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaWYgKG5vZGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBNYXRoLm1pbihjb250YWluZXIuYm91bmRzLndpZHRoLCBjb250YWluZXIuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94JyA/IFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjE2LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU1NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4yNzM0NywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC40NDA3MSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5Njk0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU2NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC43Mjk4MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC4yMyksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjg0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjM0MDg1KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzkzNjMsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNzkpXSA6IG5ldyBfQ2lyY2xlMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgLyA0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgLyA0LCBzaXplIC8gNCkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5saW5lRm9ybUVsZW1lbnQoZ2V0SW5wdXRWYWx1ZShub2RlKSwgbm9kZSwgY29udGFpbmVyLCBmYWxzZSk7XG4gICAgfVxufTtcblxudmFyIGlubGluZVRleHRBcmVhRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lVGV4dEFyZWFFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xuICAgIGlubGluZUZvcm1FbGVtZW50KG5vZGUudmFsdWUsIG5vZGUsIGNvbnRhaW5lciwgdHJ1ZSk7XG59O1xuXG52YXIgaW5saW5lU2VsZWN0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lU2VsZWN0RWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZVNlbGVjdEVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgdmFyIG9wdGlvbiA9IG5vZGUub3B0aW9uc1tub2RlLnNlbGVjdGVkSW5kZXggfHwgMF07XG4gICAgaW5saW5lRm9ybUVsZW1lbnQob3B0aW9uID8gb3B0aW9uLnRleHQgfHwgJycgOiAnJywgbm9kZSwgY29udGFpbmVyLCBmYWxzZSk7XG59O1xuXG52YXIgcmVmb3JtYXRJbnB1dEJvdW5kcyA9IGV4cG9ydHMucmVmb3JtYXRJbnB1dEJvdW5kcyA9IGZ1bmN0aW9uIHJlZm9ybWF0SW5wdXRCb3VuZHMoYm91bmRzKSB7XG4gICAgaWYgKGJvdW5kcy53aWR0aCA+IGJvdW5kcy5oZWlnaHQpIHtcbiAgICAgICAgYm91bmRzLmxlZnQgKz0gKGJvdW5kcy53aWR0aCAtIGJvdW5kcy5oZWlnaHQpIC8gMjtcbiAgICAgICAgYm91bmRzLndpZHRoID0gYm91bmRzLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGJvdW5kcy53aWR0aCA8IGJvdW5kcy5oZWlnaHQpIHtcbiAgICAgICAgYm91bmRzLnRvcCArPSAoYm91bmRzLmhlaWdodCAtIGJvdW5kcy53aWR0aCkgLyAyO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gYm91bmRzLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRzO1xufTtcblxudmFyIGlubGluZUZvcm1FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lRm9ybUVsZW1lbnQodmFsdWUsIG5vZGUsIGNvbnRhaW5lciwgYWxsb3dMaW5lYnJlYWspIHtcbiAgICB2YXIgYm9keSA9IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIGJvZHkpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSwgd3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgKyAncHgnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wICsgJ3B4JztcbiAgICAgICAgaWYgKCFhbGxvd0xpbmVicmVhaykge1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRleHQgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZSh0ZXh0LCBjb250YWluZXIpKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG59O1xuXG52YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUobm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IG5vZGUudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/IG5ldyBBcnJheShub2RlLnZhbHVlLmxlbmd0aCArIDEpLmpvaW4oJ1xcdTIwMjInKSA6IG5vZGUudmFsdWU7XG5cbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwID8gbm9kZS5wbGFjZWhvbGRlciB8fCAnJyA6IHZhbHVlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBleHBvcnRzLkxFTkdUSF9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTEVOR1RIX1dJVEhfVU5JVCA9IC8oW1xcZC5dKykocHh8cj9lbXwlKS9pO1xuXG52YXIgTEVOR1RIX1RZUEUgPSBleHBvcnRzLkxFTkdUSF9UWVBFID0ge1xuICAgIFBYOiAwLFxuICAgIFBFUkNFTlRBR0U6IDFcbn07XG5cbnZhciBMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMZW5ndGgpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAxKSA9PT0gJyUnID8gTEVOR1RIX1RZUEUuUEVSQ0VOVEFHRSA6IExFTkdUSF9UWVBFLlBYO1xuICAgICAgICB2YXIgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIGdpdmVuIGZvciBMZW5ndGg6IFwiJyArIHZhbHVlICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IGlzTmFOKHBhcnNlZFZhbHVlKSA/IDAgOiBwYXJzZWRWYWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTGVuZ3RoLCBbe1xuICAgICAgICBrZXk6ICdpc1BlcmNlbnRhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQZXJjZW50YWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTEVOR1RIX1RZUEUuUEVSQ0VOVEFHRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QWJzb2x1dGVWYWx1ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBYnNvbHV0ZVZhbHVlKHBhcmVudExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQZXJjZW50YWdlKCkgPyBwYXJlbnRMZW5ndGggKiAodGhpcy52YWx1ZSAvIDEwMCkgOiB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUodikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgodik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGVuZ3RoO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMZW5ndGg7XG5cblxudmFyIGdldFJvb3RGb250U2l6ZSA9IGZ1bmN0aW9uIGdldFJvb3RGb250U2l6ZShjb250YWluZXIpIHtcbiAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudDtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Um9vdEZvbnRTaXplKHBhcmVudCkgOiBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKTtcbn07XG5cbnZhciBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdChjb250YWluZXIsIHZhbHVlLCB1bml0KSB7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJ3B4JzpcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCh2YWx1ZSArIHVuaXQpO1xuICAgICAgICBjYXNlICdlbSc6XG4gICAgICAgIGNhc2UgJ3JlbSc6XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbmV3IExlbmd0aCh2YWx1ZSk7XG4gICAgICAgICAgICBsZW5ndGgudmFsdWUgKj0gdW5pdCA9PT0gJ2VtJyA/IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpIDogZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcik7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGNvcnJlY3RseSBpZiB1bmtub3duIHVuaXQgaXMgdXNlZFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgoJzAnKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVDb3VudGVyVGV4dCA9IGV4cG9ydHMuaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZXhwb3J0cy5nZXRMaXN0T3duZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX2xpc3RTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2luZy9saXN0U3R5bGUnKTtcblxudmFyIF9Vbmljb2RlID0gcmVxdWlyZSgnLi9Vbmljb2RlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIE1hcmdpbiBiZXR3ZWVuIHRoZSBlbnVtZXJhdGlvbiBhbmQgdGhlIGxpc3QgaXRlbSBjb250ZW50XG52YXIgTUFSR0lOX1JJR0hUID0gNztcblxudmFyIGFuY2VzdG9yVHlwZXMgPSBbJ09MJywgJ1VMJywgJ01FTlUnXTtcblxudmFyIGdldExpc3RPd25lciA9IGV4cG9ydHMuZ2V0TGlzdE93bmVyID0gZnVuY3Rpb24gZ2V0TGlzdE93bmVyKGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50O1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSBhbmNlc3RvclR5cGVzLmluZGV4T2YocGFyZW50LnRhZ05hbWUpICE9PSAtMTtcbiAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9IHdoaWxlIChwYXJlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lci5wYXJlbnQ7XG59O1xuXG52YXIgaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVMaXN0SXRlbUVsZW1lbnQobm9kZSwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHZhciBsaXN0U3R5bGUgPSBjb250YWluZXIuc3R5bGUubGlzdFN0eWxlO1xuXG4gICAgaWYgKCFsaXN0U3R5bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgIHZhciB3cmFwcGVyID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzd3JhcHBlcicpO1xuICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgd3JhcHBlcik7XG5cbiAgICB3cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB3cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHdyYXBwZXIuc3R5bGUubGV0dGVyU3BhY2luZyA9ICdub3JtYWwnO1xuXG4gICAgc3dpdGNoIChsaXN0U3R5bGUubGlzdFN0eWxlUG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfUE9TSVRJT04uT1VUU0lERTpcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCAtIGNvbnRhaW5lci5ib3VuZHMubGVmdCAtIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bMV0uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKSArIE1BUkdJTl9SSUdIVCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfUE9TSVRJT04uSU5TSURFOlxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gY29udGFpbmVyLmJvdW5kcy5sZWZ0IC0gY29udGFpbmVyLnN0eWxlLm1hcmdpblszXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gdm9pZCAwO1xuICAgIHZhciBNQVJHSU5fVE9QID0gY29udGFpbmVyLnN0eWxlLm1hcmdpblswXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpO1xuICAgIHZhciBzdHlsZUltYWdlID0gbGlzdFN0eWxlLmxpc3RTdHlsZUltYWdlO1xuICAgIGlmIChzdHlsZUltYWdlKSB7XG4gICAgICAgIGlmIChzdHlsZUltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHN0eWxlSW1hZ2UuYXJnc1swXTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKSAqIDAuNTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgY29udGFpbmVyLmJvdW5kcy5oZWlnaHQgLSAxLjUgKiBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHN0eWxlLmxpc3RTdHlsZUltYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGFpbmVyLmxpc3RJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGV4dCA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjcmVhdGVDb3VudGVyVGV4dChjb250YWluZXIubGlzdEluZGV4LCBsaXN0U3R5bGUubGlzdFN0eWxlVHlwZSwgdHJ1ZSkpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArICdweCc7XG4gICAgfVxuXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQod3JhcHBlciwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlciwgMCkpO1xuICAgIH1cbn07XG5cbnZhciBST01BTl9VUFBFUiA9IHtcbiAgICBpbnRlZ2VyczogWzEwMDAsIDkwMCwgNTAwLCA0MDAsIDEwMCwgOTAsIDUwLCA0MCwgMTAsIDksIDUsIDQsIDFdLFxuICAgIHZhbHVlczogWydNJywgJ0NNJywgJ0QnLCAnQ0QnLCAnQycsICdYQycsICdMJywgJ1hMJywgJ1gnLCAnSVgnLCAnVicsICdJVicsICdJJ11cbn07XG5cbnZhciBBUk1FTklBTiA9IHtcbiAgICBpbnRlZ2VyczogWzkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCwgNTAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfVlCcsICfVkycsICfVkicsICfVkScsICfVkCcsICfVjycsICfVjicsICfVjScsICfVjCcsICfViycsICfViicsICfViScsICfViCcsICfVhycsICfVhicsICfVhScsICfVhCcsICfVgycsICfVgicsICfVgScsICfVgCcsICfUvycsICfUvicsICfUvScsICfUvCcsICfUuycsICfUuicsICfUuScsICfUuCcsICfUtycsICfUticsICfUtScsICfUtCcsICfUsycsICfUsicsICfUsSddXG59O1xuXG52YXIgSEVCUkVXID0ge1xuICAgIGludGVnZXJzOiBbMTAwMDAsIDkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxOSwgMTgsIDE3LCAxNiwgMTUsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXSxcbiAgICB2YWx1ZXM6IFsn15nXsycsICfXmNezJywgJ9eX17MnLCAn15bXsycsICfXldezJywgJ9eU17MnLCAn15PXsycsICfXktezJywgJ9eR17MnLCAn15DXsycsICfXqicsICfXqScsICfXqCcsICfXpycsICfXpicsICfXpCcsICfXoicsICfXoScsICfXoCcsICfXnicsICfXnCcsICfXmycsICfXmdeYJywgJ9eZ15cnLCAn15nXlicsICfXmNeWJywgJ9eY15UnLCAn15knLCAn15gnLCAn15cnLCAn15YnLCAn15UnLCAn15QnLCAn15MnLCAn15InLCAn15EnLCAn15AnXVxufTtcblxudmFyIEdFT1JHSUFOID0ge1xuICAgIGludGVnZXJzOiBbMTAwMDAsIDkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCwgNTAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfhg7UnLCAn4YOwJywgJ+GDrycsICfhg7QnLCAn4YOuJywgJ+GDrScsICfhg6wnLCAn4YOrJywgJ+GDqicsICfhg6knLCAn4YOoJywgJ+GDpycsICfhg6YnLCAn4YOlJywgJ+GDpCcsICfhg7MnLCAn4YOiJywgJ+GDoScsICfhg6AnLCAn4YOfJywgJ+GDnicsICfhg50nLCAn4YOyJywgJ+GDnCcsICfhg5snLCAn4YOaJywgJ+GDmScsICfhg5gnLCAn4YOXJywgJ+GDsScsICfhg5YnLCAn4YOVJywgJ+GDlCcsICfhg5MnLCAn4YOSJywgJ+GDkScsICfhg5AnXVxufTtcblxudmFyIGNyZWF0ZUFkZGl0aXZlQ291bnRlciA9IGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgbWluLCBtYXgsIHN5bWJvbHMsIGZhbGxiYWNrLCBzdWZmaXgpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCBmYWxsYmFjaywgc3VmZml4Lmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJldHVybiBzeW1ib2xzLmludGVnZXJzLnJlZHVjZShmdW5jdGlvbiAoc3RyaW5nLCBpbnRlZ2VyLCBpbmRleCkge1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gaW50ZWdlcikge1xuICAgICAgICAgICAgdmFsdWUgLT0gaW50ZWdlcjtcbiAgICAgICAgICAgIHN0cmluZyArPSBzeW1ib2xzLnZhbHVlc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCAnJykgKyBzdWZmaXg7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKHZhbHVlLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCByZXNvbHZlcikge1xuICAgIHZhciBzdHJpbmcgPSAnJztcblxuICAgIGRvIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMpIHtcbiAgICAgICAgICAgIHZhbHVlLS07XG4gICAgICAgIH1cbiAgICAgICAgc3RyaW5nID0gcmVzb2x2ZXIodmFsdWUpICsgc3RyaW5nO1xuICAgICAgICB2YWx1ZSAvPSBjb2RlUG9pbnRSYW5nZUxlbmd0aDtcbiAgICB9IHdoaWxlICh2YWx1ZSAqIGNvZGVQb2ludFJhbmdlTGVuZ3RoID49IGNvZGVQb2ludFJhbmdlTGVuZ3RoKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCBjb2RlUG9pbnRSYW5nZVN0YXJ0LCBjb2RlUG9pbnRSYW5nZUVuZCwgaXNOdW1lcmljLCBzdWZmaXgpIHtcbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBjb2RlUG9pbnRSYW5nZUVuZCAtIGNvZGVQb2ludFJhbmdlU3RhcnQgKyAxO1xuXG4gICAgcmV0dXJuICh2YWx1ZSA8IDAgPyAnLScgOiAnJykgKyAoY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKE1hdGguYWJzKHZhbHVlKSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGlzTnVtZXJpYywgZnVuY3Rpb24gKGNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKE1hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpICsgY29kZVBvaW50UmFuZ2VTdGFydCk7XG4gICAgfSkgKyBzdWZmaXgpO1xufTtcblxudmFyIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsIHN5bWJvbHMpIHtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnLiAnO1xuXG4gICAgdmFyIGNvZGVQb2ludFJhbmdlTGVuZ3RoID0gc3ltYm9scy5sZW5ndGg7XG4gICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlcihNYXRoLmFicyh2YWx1ZSksIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBmYWxzZSwgZnVuY3Rpb24gKGNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gc3ltYm9sc1tNYXRoLmZsb29yKGNvZGVQb2ludCAlIGNvZGVQb2ludFJhbmdlTGVuZ3RoKV07XG4gICAgfSkgKyBzdWZmaXg7XG59O1xuXG52YXIgQ0pLX1pFUk9TID0gMSA8PCAwO1xudmFyIENKS19URU5fQ09FRkZJQ0lFTlRTID0gMSA8PCAxO1xudmFyIENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgPSAxIDw8IDI7XG52YXIgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTID0gMSA8PCAzO1xuXG52YXIgY3JlYXRlQ0pLQ291bnRlciA9IGZ1bmN0aW9uIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsIG51bWJlcnMsIG11bHRpcGxpZXJzLCBuZWdhdGl2ZVNpZ24sIHN1ZmZpeCwgZmxhZ3MpIHtcbiAgICBpZiAodmFsdWUgPCAtOTk5OSB8fCB2YWx1ZSA+IDk5OTkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTCwgc3VmZml4Lmxlbmd0aCA+IDApO1xuICAgIH1cbiAgICB2YXIgdG1wID0gTWF0aC5hYnModmFsdWUpO1xuICAgIHZhciBzdHJpbmcgPSBzdWZmaXg7XG5cbiAgICBpZiAodG1wID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJzWzBdICsgc3RyaW5nO1xuICAgIH1cblxuICAgIGZvciAodmFyIGRpZ2l0ID0gMDsgdG1wID4gMCAmJiBkaWdpdCA8PSA0OyBkaWdpdCsrKSB7XG4gICAgICAgIHZhciBjb2VmZmljaWVudCA9IHRtcCAlIDEwO1xuXG4gICAgICAgIGlmIChjb2VmZmljaWVudCA9PT0gMCAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfWkVST1MpICYmIHN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG51bWJlcnNbY29lZmZpY2llbnRdICsgc3RyaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZWZmaWNpZW50ID4gMSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0NPRUZGSUNJRU5UUykgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPT09IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUykgJiYgdmFsdWUgPiAxMDAgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPiAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUykpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG51bWJlcnNbY29lZmZpY2llbnRdICsgKGRpZ2l0ID4gMCA/IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gOiAnJykgKyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPiAwKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBtdWx0aXBsaWVyc1tkaWdpdCAtIDFdICsgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHRtcCA9IE1hdGguZmxvb3IodG1wIC8gMTApO1xuICAgIH1cblxuICAgIHJldHVybiAodmFsdWUgPCAwID8gbmVnYXRpdmVTaWduIDogJycpICsgc3RyaW5nO1xufTtcblxudmFyIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMgPSAn5Y2B55m+5Y2D6JCsJztcbnZhciBDSElORVNFX0ZPUk1BTF9NVUxUSVBMSUVSUyA9ICfmi77kvbDku5/okKwnO1xudmFyIEpBUEFORVNFX05FR0FUSVZFID0gJ+ODnuOCpOODiuOCuSc7XG52YXIgS09SRUFOX05FR0FUSVZFID0gJ+uniOydtOuEiOyKpCAnO1xuXG52YXIgY3JlYXRlQ291bnRlclRleHQgPSBleHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIHR5cGUsIGFwcGVuZFN1ZmZpeCkge1xuICAgIHZhciBkZWZhdWx0U3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJy4gJyA6ICcnO1xuICAgIHZhciBjamtTdWZmaXggPSBhcHBlbmRTdWZmaXggPyAn44CBJyA6ICcnO1xuICAgIHZhciBrb3JlYW5TdWZmaXggPSBhcHBlbmRTdWZmaXggPyAnLCAnIDogJyc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuRElTQzpcbiAgICAgICAgICAgIHJldHVybiAn4oCiJztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSVJDTEU6XG4gICAgICAgICAgICByZXR1cm4gJ+KXpic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU1FVQVJFOlxuICAgICAgICAgICAgcmV0dXJuICfil74nO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUxfTEVBRElOR19aRVJPOlxuICAgICAgICAgICAgdmFyIHN0cmluZyA9IGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgNDgsIDU3LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcubGVuZ3RoIDwgNCA/ICcwJyArIHN0cmluZyA6IHN0cmluZztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OAh+S4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAzOTk5LCBST01BTl9VUFBFUiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9ST01BTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9HUkVFSzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk0NSwgOTY5LCBmYWxzZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA5NywgMTIyLCBmYWxzZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVVBQRVJfQUxQSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2NSwgOTAsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5BUkFCSUNfSU5ESUM6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAxNjMyLCAxNjQxLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9BUk1FTklBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDk5OTksIEFSTUVOSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BUk1FTklBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDk5OTksIEFSTUVOSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkJFTkdBTEk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAyNTM0LCAyNTQzLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DQU1CT0RJQU46XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0hNRVI6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2MTEyLCA2MTIxLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfRUFSVEhMWV9CUkFOQ0g6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICflrZDkuJHlr4Xlja/ovrDlt7PljYjmnKrnlLPphYnmiIzkuqUnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19IRUFWRU5MWV9TVEVNOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn55Sy5LmZ5LiZ5LiB5oiK5bex5bqa6L6b5aOs55m4JywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfSURFT0dSQVBISUM6XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTLCAn6LKgJywgY2prU3VmZml4LCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjueiys+WPg+iChuS8jemZuOafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LKgJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUywgJ+i0nycsIGNqa1N1ZmZpeCwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7notLDlj4HogobkvI3pmYbmn5LmjYznjpYnLCBDSElORVNFX0ZPUk1BTF9NVUxUSVBMSUVSUywgJ+i0nycsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+S4hycsIEpBUEFORVNFX05FR0FUSVZFLCBjamtTdWZmaXgsIDApO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aOx5byQ5Y+C5Zub5LyN5YWt5LiD5YWr5LmdJywgJ+aLvueZvuWNg+S4hycsIEpBUEFORVNFX05FR0FUSVZFLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+yYgeydvOydtOyCvOyCrOyYpOycoey5oO2MlOq1rCcsICfsi63rsLHsspzrp4wnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsICfljYHnmb7ljYPokKwnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgMCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LKz5Y+D5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+aLvueZvuWNgycsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFVkFOQUdBUkk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDk2NiwgMHg5NmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdFT1JHSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTk5OTksIEdFT1JHSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HVUpBUkFUSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YWU2LCAweGFlZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGE2NiwgMHhhNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkhFQlJFVzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDEwOTk5LCBIRUJSRVcsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44GC44GE44GG44GI44GK44GL44GN44GP44GR44GT44GV44GX44GZ44Gb44Gd44Gf44Gh44Gk44Gm44Go44Gq44Gr44Gs44Gt44Gu44Gv44Gy44G144G444G744G+44G/44KA44KB44KC44KE44KG44KI44KJ44KK44KL44KM44KN44KP44KQ44KR44KS44KTJyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkFfSVJPSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgYTjgo3jga/jgavjgbvjgbjjgajjgaHjgorjgazjgovjgpLjgo/jgYvjgojjgZ/jgozjgZ3jgaTjga3jgarjgonjgoDjgYbjgpDjga7jgYrjgY/jgoTjgb7jgZHjgbXjgZPjgYjjgabjgYLjgZXjgY3jgobjgoHjgb/jgZfjgpHjgbLjgoLjgZvjgZknKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQU5OQURBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhjZTYsIDB4Y2VmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCs+OCteOCt+OCueOCu+OCveOCv+ODgeODhOODhuODiOODiuODi+ODjOODjeODjuODj+ODkuODleODmOODm+ODnuODn+ODoOODoeODouODpOODpuODqOODqeODquODq+ODrOODreODr+ODsOODseODsuODsycsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkFfSVJPSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgqTjg63jg4/jg4vjg5vjg5jjg4jjg4Hjg6rjg4zjg6vjg7Ljg6/jgqvjg6jjgr/jg6zjgr3jg4Tjg43jg4rjg6njg6Djgqbjg7Djg47jgqrjgq/jg6Tjg57jgrHjg5XjgrPjgqjjg4bjgqLjgrXjgq3jg6bjg6Hjg5/jgrfjg7Hjg5Ljg6LjgrvjgrknLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxBTzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZWQwLCAweGVkOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTU9OR09MSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHgxODEwLCAweDE4MTksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk1ZQU5NQVI6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDEwNDAsIDB4MTA0OSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuT1JJWUE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGI2NiwgMHhiNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlBFUlNJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDZmMCwgMHg2ZjksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRBTUlMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhiZTYsIDB4YmVmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5URUxVR1U6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGM2NiwgMHhjNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRIQUk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGU1MCwgMHhlNTksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRJQkVUQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGYyMCwgMHhmMjksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUw6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA0OCwgNTcsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMb2dnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9nZ2VyKGVuYWJsZWQsIGlkLCBzdGFydCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9nZ2VyKTtcblxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBlbmFibGVkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgPyBzdGFydCA6IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTG9nZ2VyLCBbe1xuICAgICAgICBrZXk6ICdjaGlsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGlsZChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5lbmFibGVkLCBpZCwgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwod2luZG93LmNvbnNvbGUubG9nLCB3aW5kb3cuY29uc29sZSkuYXBwbHkod2luZG93LmNvbnNvbGUsIFtEYXRlLm5vdygpIC0gdGhpcy5zdGFydCArICdtcycsIHRoaXMuaWQgPyAnaHRtbDJjYW52YXMgKCcgKyB0aGlzLmlkICsgJyk6JyA6ICdodG1sMmNhbnZhczonXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzLCAwKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXJyb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkICYmIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwod2luZG93LmNvbnNvbGUuZXJyb3IsIHdpbmRvdy5jb25zb2xlKS5hcHBseSh3aW5kb3cuY29uc29sZSwgW0RhdGUubm93KCkgLSB0aGlzLnN0YXJ0ICsgJ21zJywgdGhpcy5pZCA/ICdodG1sMmNhbnZhcyAoJyArIHRoaXMuaWQgKyAnKTonIDogJ2h0bWwyY2FudmFzOiddLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTG9nZ2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JhY2tncm91bmQnKTtcblxudmFyIF9ib3JkZXIgPSByZXF1aXJlKCcuL3BhcnNpbmcvYm9yZGVyJyk7XG5cbnZhciBfYm9yZGVyUmFkaXVzID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JvcmRlclJhZGl1cycpO1xuXG52YXIgX2Rpc3BsYXkgPSByZXF1aXJlKCcuL3BhcnNpbmcvZGlzcGxheScpO1xuXG52YXIgX2Zsb2F0ID0gcmVxdWlyZSgnLi9wYXJzaW5nL2Zsb2F0Jyk7XG5cbnZhciBfZm9udCA9IHJlcXVpcmUoJy4vcGFyc2luZy9mb250Jyk7XG5cbnZhciBfbGV0dGVyU3BhY2luZyA9IHJlcXVpcmUoJy4vcGFyc2luZy9sZXR0ZXJTcGFjaW5nJyk7XG5cbnZhciBfbGluZUJyZWFrID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpbmVCcmVhaycpO1xuXG52YXIgX2xpc3RTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2luZy9saXN0U3R5bGUnKTtcblxudmFyIF9tYXJnaW4gPSByZXF1aXJlKCcuL3BhcnNpbmcvbWFyZ2luJyk7XG5cbnZhciBfb3ZlcmZsb3cgPSByZXF1aXJlKCcuL3BhcnNpbmcvb3ZlcmZsb3cnKTtcblxudmFyIF9vdmVyZmxvd1dyYXAgPSByZXF1aXJlKCcuL3BhcnNpbmcvb3ZlcmZsb3dXcmFwJyk7XG5cbnZhciBfcGFkZGluZyA9IHJlcXVpcmUoJy4vcGFyc2luZy9wYWRkaW5nJyk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BhcnNpbmcvcG9zaXRpb24nKTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0RGVjb3JhdGlvbicpO1xuXG52YXIgX3RleHRTaGFkb3cgPSByZXF1aXJlKCcuL3BhcnNpbmcvdGV4dFNoYWRvdycpO1xuXG52YXIgX3RleHRUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3BhcnNpbmcvdGV4dFRyYW5zZm9ybScpO1xuXG52YXIgX3RyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90cmFuc2Zvcm0nKTtcblxudmFyIF92aXNpYmlsaXR5ID0gcmVxdWlyZSgnLi9wYXJzaW5nL3Zpc2liaWxpdHknKTtcblxudmFyIF93b3JkQnJlYWsgPSByZXF1aXJlKCcuL3BhcnNpbmcvd29yZC1icmVhaycpO1xuXG52YXIgX3pJbmRleCA9IHJlcXVpcmUoJy4vcGFyc2luZy96SW5kZXgnKTtcblxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSU5QVVRfVEFHUyA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ107XG5cbnZhciBOb2RlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVDb250YWluZXIobm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLnN0YXJ0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5saXN0U3RhcnQgPSBub2RlLnN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcbiAgICAgICAgdmFyIHN0eWxlID0gZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSAoMCwgX2Rpc3BsYXkucGFyc2VEaXNwbGF5KShzdHlsZS5kaXNwbGF5KTtcblxuICAgICAgICB2YXIgSVNfSU5QVVQgPSBub2RlLnR5cGUgPT09ICdyYWRpbycgfHwgbm9kZS50eXBlID09PSAnY2hlY2tib3gnO1xuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfcG9zaXRpb24ucGFyc2VQb3NpdGlvbikoc3R5bGUucG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CQUNLR1JPVU5EIDogKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZCkoc3R5bGUsIHJlc291cmNlTG9hZGVyKSxcbiAgICAgICAgICAgIGJvcmRlcjogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQk9SREVSUyA6ICgwLCBfYm9yZGVyLnBhcnNlQm9yZGVyKShzdHlsZSksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IChub2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuSFRNTElucHV0RWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgJiYgSVNfSU5QVVQgPyAoMCwgX0lucHV0LmdldElucHV0Qm9yZGVyUmFkaXVzKShub2RlKSA6ICgwLCBfYm9yZGVyUmFkaXVzLnBhcnNlQm9yZGVyUmFkaXVzKShzdHlsZSksXG4gICAgICAgICAgICBjb2xvcjogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQ09MT1IgOiBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmNvbG9yKSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICBmbG9hdDogKDAsIF9mbG9hdC5wYXJzZUNTU0Zsb2F0KShzdHlsZS5mbG9hdCksXG4gICAgICAgICAgICBmb250OiAoMCwgX2ZvbnQucGFyc2VGb250KShzdHlsZSksXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAoMCwgX2xldHRlclNwYWNpbmcucGFyc2VMZXR0ZXJTcGFjaW5nKShzdHlsZS5sZXR0ZXJTcGFjaW5nKSxcbiAgICAgICAgICAgIGxpc3RTdHlsZTogZGlzcGxheSA9PT0gX2Rpc3BsYXkuRElTUExBWS5MSVNUX0lURU0gPyAoMCwgX2xpc3RTdHlsZS5wYXJzZUxpc3RTdHlsZSkoc3R5bGUpIDogbnVsbCxcbiAgICAgICAgICAgIGxpbmVCcmVhazogKDAsIF9saW5lQnJlYWsucGFyc2VMaW5lQnJlYWspKHN0eWxlLmxpbmVCcmVhayksXG4gICAgICAgICAgICBtYXJnaW46ICgwLCBfbWFyZ2luLnBhcnNlTWFyZ2luKShzdHlsZSksXG4gICAgICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KHN0eWxlLm9wYWNpdHkpLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IElOUFVUX1RBR1MuaW5kZXhPZihub2RlLnRhZ05hbWUpID09PSAtMSA/ICgwLCBfb3ZlcmZsb3cucGFyc2VPdmVyZmxvdykoc3R5bGUub3ZlcmZsb3cpIDogX292ZXJmbG93Lk9WRVJGTE9XLkhJRERFTixcbiAgICAgICAgICAgIG92ZXJmbG93V3JhcDogKDAsIF9vdmVyZmxvd1dyYXAucGFyc2VPdmVyZmxvd1dyYXApKHN0eWxlLm92ZXJmbG93V3JhcCA/IHN0eWxlLm92ZXJmbG93V3JhcCA6IHN0eWxlLndvcmRXcmFwKSxcbiAgICAgICAgICAgIHBhZGRpbmc6ICgwLCBfcGFkZGluZy5wYXJzZVBhZGRpbmcpKHN0eWxlKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAoMCwgX3RleHREZWNvcmF0aW9uLnBhcnNlVGV4dERlY29yYXRpb24pKHN0eWxlKSxcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICgwLCBfdGV4dFNoYWRvdy5wYXJzZVRleHRTaGFkb3cpKHN0eWxlLnRleHRTaGFkb3cpLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogKDAsIF90ZXh0VHJhbnNmb3JtLnBhcnNlVGV4dFRyYW5zZm9ybSkoc3R5bGUudGV4dFRyYW5zZm9ybSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtLnBhcnNlVHJhbnNmb3JtKShzdHlsZSksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAoMCwgX3Zpc2liaWxpdHkucGFyc2VWaXNpYmlsaXR5KShzdHlsZS52aXNpYmlsaXR5KSxcbiAgICAgICAgICAgIHdvcmRCcmVhazogKDAsIF93b3JkQnJlYWsucGFyc2VXb3JkQnJlYWspKHN0eWxlLndvcmRCcmVhayksXG4gICAgICAgICAgICB6SW5kZXg6ICgwLCBfekluZGV4LnBhcnNlWkluZGV4KShwb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlNUQVRJQyA/IHN0eWxlLnpJbmRleCA6ICdhdXRvJylcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1RyYW5zZm9ybWVkKCkpIHtcbiAgICAgICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBwcm92aWRlcyB2YWx1ZXMgcG9zdC10cmFuc2Zvcm0sIHdlIHdhbnQgdGhlbSB3aXRob3V0IHRoZSB0cmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsMCwwLDEsMCwwKSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzcGxheSA9PT0gX2Rpc3BsYXkuRElTUExBWS5MSVNUX0lURU0pIHtcbiAgICAgICAgICAgIHZhciBsaXN0T3duZXIgPSAoMCwgX0xpc3RJdGVtLmdldExpc3RPd25lcikodGhpcyk7XG4gICAgICAgICAgICBpZiAobGlzdE93bmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJbmRleCA9IGxpc3RPd25lci5saXN0SXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxpc3RPd25lci5saXN0SXRlbXMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJbmRleCA9IG5vZGUuaGFzQXR0cmlidXRlKCd2YWx1ZScpICYmIHR5cGVvZiBub2RlLnZhbHVlID09PSAnbnVtYmVyJyA/IG5vZGUudmFsdWUgOiBsaXN0SW5kZXggPT09IDAgPyB0eXBlb2YgbGlzdE93bmVyLmxpc3RTdGFydCA9PT0gJ251bWJlcicgPyBsaXN0T3duZXIubGlzdFN0YXJ0IDogMSA6IGxpc3RPd25lci5saXN0SXRlbXNbbGlzdEluZGV4IC0gMV0ubGlzdEluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE8gbW92ZSBib3VuZCByZXRyaWV2YWwgZm9yIGFsbCBub2RlcyB0byBhIGxhdGVyIHN0YWdlP1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJ2ZWRCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kQ3VydmVzKShfdGhpcy5ib3VuZHMsIF90aGlzLnN0eWxlLmJvcmRlciwgX3RoaXMuc3R5bGUuYm9yZGVyUmFkaXVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBnZXRJbWFnZShub2RlLCByZXNvdXJjZUxvYWRlcik7XG4gICAgICAgIHRoaXMuYm91bmRzID0gSVNfSU5QVVQgPyAoMCwgX0lucHV0LnJlZm9ybWF0SW5wdXRCb3VuZHMpKCgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSkgOiAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMuY3VydmVkQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZEN1cnZlcykodGhpcy5ib3VuZHMsIHRoaXMuc3R5bGUuYm9yZGVyLCB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9ICcnICsgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAobm9kZS5pZCA/ICcjJyArIG5vZGUuaWQgOiAnJykgKyBub2RlLmNsYXNzTmFtZS50b1N0cmluZygpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoID8gJy4nICsgcyA6ICcnO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTm9kZUNvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2xpcFBhdGhzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaXBQYXRocygpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRDbGlwcyA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZ2V0Q2xpcFBhdGhzKCkgOiBbXTtcbiAgICAgICAgICAgIHZhciBpc0NsaXBwZWQgPSB0aGlzLnN0eWxlLm92ZXJmbG93ICE9PSBfb3ZlcmZsb3cuT1ZFUkZMT1cuVklTSUJMRTtcblxuICAgICAgICAgICAgcmV0dXJuIGlzQ2xpcHBlZCA/IHBhcmVudENsaXBzLmNvbmNhdChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKHRoaXMuY3VydmVkQm91bmRzKV0pIDogcGFyZW50Q2xpcHM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSW5GbG93JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5GbG93KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290RWxlbWVudCgpICYmICF0aGlzLmlzRmxvYXRpbmcoKSAmJiAhdGhpcy5pc0Fic29sdXRlbHlQb3NpdGlvbmVkKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzVmlzaWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gISgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLk5PTkUpICYmIHRoaXMuc3R5bGUub3BhY2l0eSA+IDAgJiYgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID09PSBfdmlzaWJpbGl0eS5WSVNJQklMSVRZLlZJU0lCTEU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzQWJzb2x1dGVseVBvc2l0aW9uZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDICYmIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5SRUxBVElWRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNQb3NpdGlvbmVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zaXRpb25lZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0Zsb2F0aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmxvYXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5mbG9hdCAhPT0gX2Zsb2F0LkZMT0FULk5PTkU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUm9vdEVsZW1lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb290RWxlbWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNUcmFuc2Zvcm1lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RyYW5zZm9ybWVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUudHJhbnNmb3JtICE9PSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Bvc2l0aW9uZWRXaXRoWkluZGV4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zaXRpb25lZFdpdGhaSW5kZXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Bvc2l0aW9uZWQoKSAmJiAhdGhpcy5zdHlsZS56SW5kZXguYXV0bztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbmxpbmVMZXZlbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0lubGluZUxldmVsKCkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfRkxFWCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0dSSUQpIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9MSVNUX0lURU0pIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9UQUJMRSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSW5saW5lQmxvY2tPcklubGluZVRhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5saW5lQmxvY2tPcklubGluZVRhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9CTE9DSykgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX1RBQkxFKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBOb2RlQ29udGFpbmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlQ29udGFpbmVyO1xuXG5cbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuU1ZHU1ZHRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICB2YXIgcyA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5sb2FkSW1hZ2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMuc2VyaWFsaXplVG9TdHJpbmcobm9kZSkpKTtcbiAgICB9XG4gICAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZShpbWcuY3VycmVudFNyYyB8fCBpbWcuc3JjKTtcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRDYW52YXMoY2FudmFzKTtcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgICAgIHZhciBpZnJhbWVLZXkgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pbnRlcm5hbC1pZnJhbWUta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaWZyYW1lS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTm9kZVBhcnNlciA9IHVuZGVmaW5lZDtcblxudmFyIF9TdGFja2luZ0NvbnRleHQgPSByZXF1aXJlKCcuL1N0YWNraW5nQ29udGV4dCcpO1xuXG52YXIgX1N0YWNraW5nQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGFja2luZ0NvbnRleHQpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xuXG52YXIgX2xpc3RTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2luZy9saXN0U3R5bGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5vZGVQYXJzZXIgPSBleHBvcnRzLk5vZGVQYXJzZXIgPSBmdW5jdGlvbiBOb2RlUGFyc2VyKG5vZGUsIHJlc291cmNlTG9hZGVyLCBsb2dnZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdTdGFydGluZyBub2RlIHBhcnNpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdChub2RlLCBudWxsLCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgdmFyIHN0YWNrID0gbmV3IF9TdGFja2luZ0NvbnRleHQyLmRlZmF1bHQoY29udGFpbmVyLCBudWxsLCB0cnVlKTtcblxuICAgIHBhcnNlTm9kZVRyZWUobm9kZSwgY29udGFpbmVyLCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHBhcnNpbmcgbm9kZSB0cmVlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xufTtcblxudmFyIElHTk9SRURfTk9ERV9OQU1FUyA9IFsnU0NSSVBUJywgJ0hFQUQnLCAnVElUTEUnLCAnT0JKRUNUJywgJ0JSJywgJ09QVElPTiddO1xuXG52YXIgcGFyc2VOb2RlVHJlZSA9IGZ1bmN0aW9uIHBhcnNlTm9kZVRyZWUobm9kZSwgcGFyZW50LCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW5kZXggPiA1MDAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlY3Vyc2lvbiBlcnJvciB3aGlsZSBwYXJzaW5nIG5vZGUgdHJlZScpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNoaWxkTm9kZSA9IG5vZGUuZmlyc3RDaGlsZCwgbmV4dE5vZGU7IGNoaWxkTm9kZTsgY2hpbGROb2RlID0gbmV4dE5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhciBkZWZhdWx0VmlldyA9IGNoaWxkTm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuVGV4dCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBUZXh0IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuVGV4dCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5kYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUoY2hpbGROb2RlLCBwYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoSUdOT1JFRF9OT0RFX05BTUVTLmluZGV4T2YoY2hpbGROb2RlLm5vZGVOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KGNoaWxkTm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lSW5wdXRFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lVGV4dEFyZWFFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0lucHV0LmlubGluZVNlbGVjdEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuc3R5bGUubGlzdFN0eWxlICYmIGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUubGlzdFN0eWxlVHlwZSAhPT0gX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTk9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9MaXN0SXRlbS5pbmxpbmVMaXN0SXRlbUVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOID0gY2hpbGROb2RlLnRhZ05hbWUgIT09ICdURVhUQVJFQSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lciwgY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3RhY2sgPSB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjb250YWluZXIuaXNQb3NpdGlvbmVkKCkgPyBzdGFjay5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkgOiBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFN0YWNrID0gbmV3IF9TdGFja2luZ0NvbnRleHQyLmRlZmF1bHQoY29udGFpbmVyLCBwYXJlbnRTdGFjaywgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3RhY2suY29udGV4dHMucHVzaChjaGlsZFN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZU5vZGVUcmVlKGNoaWxkTm9kZSwgY29udGFpbmVyLCBjaGlsZFN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2suY2hpbGRyZW4ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlTm9kZVRyZWUoY2hpbGROb2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LlNWR1NWR0VsZW1lbnQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LlNWR1NWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KGNoaWxkTm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgICAgICAgICB2YXIgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoX2NvbnRhaW5lciwgY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGlmIChfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChfY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgIC8vIGZvciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDpmYWxzZSwgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICB2YXIgX3BhcmVudFN0YWNrID0gX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IF9jb250YWluZXIuaXNQb3NpdGlvbmVkKCkgPyBzdGFjay5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkgOiBzdGFjaztcbiAgICAgICAgICAgICAgICB2YXIgX2NoaWxkU3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChfY29udGFpbmVyLCBfcGFyZW50U3RhY2ssIF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgX3BhcmVudFN0YWNrLmNvbnRleHRzLnB1c2goX2NoaWxkU3RhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKF9jb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBub2RlKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pc1Jvb3RFbGVtZW50KCkgfHwgY29udGFpbmVyLmlzUG9zaXRpb25lZFdpdGhaSW5kZXgoKSB8fCBjb250YWluZXIuc3R5bGUub3BhY2l0eSA8IDEgfHwgY29udGFpbmVyLmlzVHJhbnNmb3JtZWQoKSB8fCBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290KGNvbnRhaW5lciwgbm9kZSk7XG59O1xuXG52YXIgY3JlYXRlc1N0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSB8fCBjb250YWluZXIuaXNGbG9hdGluZygpO1xufTtcblxudmFyIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QgPSBmdW5jdGlvbiBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290KGNvbnRhaW5lciwgbm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lID09PSAnQk9EWScgJiYgY29udGFpbmVyLnBhcmVudCBpbnN0YW5jZW9mIF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0ICYmIGNvbnRhaW5lci5wYXJlbnQuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUHJveHkgPSB1bmRlZmluZWQ7XG5cbnZhciBfRmVhdHVyZSA9IHJlcXVpcmUoJy4vRmVhdHVyZScpO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQcm94eSA9IGV4cG9ydHMuUHJveHkgPSBmdW5jdGlvbiBQcm94eShzcmMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucHJveHkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnTm8gcHJveHkgZGVmaW5lZCcgOiBudWxsKTtcbiAgICB9XG4gICAgdmFyIHByb3h5ID0gb3B0aW9ucy5wcm94eTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXNwb25zZVR5cGUgPSBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfWEhSICYmIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkVTUE9OU0VfVFlQRSA/ICdibG9iJyA6ICd0ZXh0JztcbiAgICAgICAgdmFyIHhociA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhociBpbnN0YW5jZW9mIFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnRmFpbGVkIHRvIHByb3h5IHJlc291cmNlICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgKyAnIHdpdGggc3RhdHVzIGNvZGUgJyArIHhoci5zdGF0dXMgOiAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICB4aHIub3BlbignR0VUJywgcHJveHkgKyAnP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNyYykgKyAnJnJlc3BvbnNlVHlwZT0nICsgcmVzcG9uc2VUeXBlKTtcblxuICAgICAgICBpZiAocmVzcG9uc2VUeXBlICE9PSAndGV4dCcgJiYgeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gb3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBwcm94eWluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUNvbnRlbnQgPSBleHBvcnRzLnJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5wb3BDb3VudGVycyA9IGV4cG9ydHMucGFyc2VDb3VudGVyUmVzZXQgPSBleHBvcnRzLlRPS0VOX1RZUEUgPSBleHBvcnRzLlBTRVVET19DT05URU5UX0lURU1fVFlQRSA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xuXG52YXIgX2xpc3RTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2luZy9saXN0U3R5bGUnKTtcblxudmFyIFBTRVVET19DT05URU5UX0lURU1fVFlQRSA9IGV4cG9ydHMuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0ge1xuICAgIFRFWFQ6IDAsXG4gICAgSU1BR0U6IDFcbn07XG5cbnZhciBUT0tFTl9UWVBFID0gZXhwb3J0cy5UT0tFTl9UWVBFID0ge1xuICAgIFNUUklORzogMCxcbiAgICBBVFRSSUJVVEU6IDEsXG4gICAgVVJMOiAyLFxuICAgIENPVU5URVI6IDMsXG4gICAgQ09VTlRFUlM6IDQsXG4gICAgT1BFTlFVT1RFOiA1LFxuICAgIENMT1NFUVVPVEU6IDZcbn07XG5cbnZhciBwYXJzZUNvdW50ZXJSZXNldCA9IGV4cG9ydHMucGFyc2VDb3VudGVyUmVzZXQgPSBmdW5jdGlvbiBwYXJzZUNvdW50ZXJSZXNldChzdHlsZSwgZGF0YSkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvdW50ZXJSZXNldCB8fCBzdHlsZS5jb3VudGVyUmVzZXQgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ZXJOYW1lcyA9IFtdO1xuICAgIHZhciBjb3VudGVyUmVzZXRzID0gc3R5bGUuY291bnRlclJlc2V0LnNwbGl0KC9cXHMqLFxccyovKTtcbiAgICB2YXIgbGVuQ291bnRlclJlc2V0cyA9IGNvdW50ZXJSZXNldHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5Db3VudGVyUmVzZXRzOyBpKyspIHtcbiAgICAgICAgdmFyIF9jb3VudGVyUmVzZXRzJGkkc3BsaSA9IGNvdW50ZXJSZXNldHNbaV0uc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIF9jb3VudGVyUmVzZXRzJGkkc3BsaTIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlclJlc2V0cyRpJHNwbGksIDIpLFxuICAgICAgICAgICAgY291bnRlck5hbWUgPSBfY291bnRlclJlc2V0cyRpJHNwbGkyWzBdLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gX2NvdW50ZXJSZXNldHMkaSRzcGxpMlsxXTtcblxuICAgICAgICBjb3VudGVyTmFtZXMucHVzaChjb3VudGVyTmFtZSk7XG4gICAgICAgIHZhciBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV07XG4gICAgICAgIGlmICghY291bnRlcikge1xuICAgICAgICAgICAgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY291bnRlci5wdXNoKHBhcnNlSW50KGluaXRpYWxWYWx1ZSB8fCAwLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVyTmFtZXM7XG59O1xuXG52YXIgcG9wQ291bnRlcnMgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZnVuY3Rpb24gcG9wQ291bnRlcnMoY291bnRlck5hbWVzLCBkYXRhKSB7XG4gICAgdmFyIGxlbkNvdW50ZXJzID0gY291bnRlck5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZXNbaV1dLnBvcCgpO1xuICAgIH1cbn07XG5cbnZhciByZXNvbHZlUHNldWRvQ29udGVudCA9IGV4cG9ydHMucmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBmdW5jdGlvbiByZXNvbHZlUHNldWRvQ29udGVudChub2RlLCBzdHlsZSwgZGF0YSkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvbnRlbnQgfHwgc3R5bGUuY29udGVudCA9PT0gJ25vbmUnIHx8IHN0eWxlLmNvbnRlbnQgPT09ICctbW96LWFsdC1jb250ZW50JyB8fCBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHBhcnNlQ29udGVudChzdHlsZS5jb250ZW50KTtcblxuICAgIHZhciBsZW4gPSB0b2tlbnMubGVuZ3RoO1xuICAgIHZhciBjb250ZW50SXRlbXMgPSBbXTtcbiAgICB2YXIgcyA9ICcnO1xuXG4gICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyIChpZiB0aGVyZSBpcyBhIFwiY291bnRlci1pbmNyZW1lbnRcIiBkZWNsYXJhdGlvbilcbiAgICB2YXIgY291bnRlckluY3JlbWVudCA9IHN0eWxlLmNvdW50ZXJJbmNyZW1lbnQ7XG4gICAgaWYgKGNvdW50ZXJJbmNyZW1lbnQgJiYgY291bnRlckluY3JlbWVudCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHZhciBfY291bnRlckluY3JlbWVudCRzcGwgPSBjb3VudGVySW5jcmVtZW50LnNwbGl0KC9cXHMrLyksXG4gICAgICAgICAgICBfY291bnRlckluY3JlbWVudCRzcGwyID0gX3NsaWNlZFRvQXJyYXkoX2NvdW50ZXJJbmNyZW1lbnQkc3BsLCAyKSxcbiAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gX2NvdW50ZXJJbmNyZW1lbnQkc3BsMlswXSxcbiAgICAgICAgICAgIGluY3JlbWVudFZhbHVlID0gX2NvdW50ZXJJbmNyZW1lbnQkc3BsMlsxXTtcblxuICAgICAgICB2YXIgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdO1xuICAgICAgICBpZiAoY291bnRlcikge1xuICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdICs9IGluY3JlbWVudFZhbHVlID09PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQoaW5jcmVtZW50VmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb250ZW50IHN0cmluZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5TVFJJTkc6XG4gICAgICAgICAgICAgICAgcyArPSB0b2tlbi52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkFUVFJJQlVURTpcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRva2VuLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbm9kZS5nZXRBdHRyaWJ1dGUodG9rZW4udmFsdWUpIHx8ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNPVU5URVI6XG4gICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyID0gZGF0YS5jb3VudGVyc1t0b2tlbi5uYW1lIHx8ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBmb3JtYXRDb3VudGVyVmFsdWUoW19jb3VudGVyW19jb3VudGVyLmxlbmd0aCAtIDFdXSwgJycsIHRva2VuLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUlM6XG4gICAgICAgICAgICAgICAgdmFyIF9jb3VudGVycyA9IGRhdGEuY291bnRlcnNbdG9rZW4ubmFtZSB8fCAnJ107XG4gICAgICAgICAgICAgICAgaWYgKF9jb3VudGVycykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShfY291bnRlcnMsIHRva2VuLmdsdWUsIHRva2VuLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuT1BFTlFVT1RFOlxuICAgICAgICAgICAgICAgIHMgKz0gZ2V0UXVvdGUoc3R5bGUsIHRydWUsIGRhdGEucXVvdGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgZGF0YS5xdW90ZURlcHRoKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DTE9TRVFVT1RFOlxuICAgICAgICAgICAgICAgIGRhdGEucXVvdGVEZXB0aC0tO1xuICAgICAgICAgICAgICAgIHMgKz0gZ2V0UXVvdGUoc3R5bGUsIGZhbHNlLCBkYXRhLnF1b3RlRGVwdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuVVJMOlxuICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xuICAgICAgICAgICAgICAgICAgICBzID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFLCB2YWx1ZTogdG9rZW4udmFsdWUgfHwgJycgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocykge1xuICAgICAgICBjb250ZW50SXRlbXMucHVzaCh7IHR5cGU6IFBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhULCB2YWx1ZTogcyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEl0ZW1zO1xufTtcblxudmFyIHBhcnNlQ29udGVudCA9IGV4cG9ydHMucGFyc2VDb250ZW50ID0gZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlW2NvbnRlbnRdKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVtjb250ZW50XTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGxlbiA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgdmFyIGlzU3RyaW5nID0gZmFsc2U7XG4gICAgdmFyIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgIHZhciBpc0Z1bmN0aW9uID0gZmFsc2U7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBmdW5jdGlvbk5hbWUgPSAnJztcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYyA9IGNvbnRlbnQuY2hhckF0KGkpO1xuXG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNFc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3RyaW5nID0gIWlzU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24gJiYgIWlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuU1RSSU5HLCB2YWx1ZTogc3RyIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0cik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQVRUUklCVVRFLCB2YWx1ZTogYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUT0tFTl9UWVBFLkNPVU5URVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIuZm9ybWF0ID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChjb3VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50ZXJzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfY291bnRlcnMyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVE9LRU5fVFlQRS5DT1VOVEVSUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXJzMi5nbHVlID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmZvcm1hdCA9IGFyZ3NbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goX2NvdW50ZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLlVSTCwgdmFsdWU6IGFyZ3NbMF0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0cik7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgICAgICBhZGRPdGhlclRva2VuKHRva2Vucywgc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyKSB7XG4gICAgICAgIGFkZE90aGVyVG9rZW4odG9rZW5zLCBzdHIpO1xuICAgIH1cblxuICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZVtjb250ZW50XSA9IHRva2VucztcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xufTtcblxudmFyIGFkZE90aGVyVG9rZW4gPSBmdW5jdGlvbiBhZGRPdGhlclRva2VuKHRva2VucywgaWRlbnRpZmllcikge1xuICAgIHN3aXRjaCAoaWRlbnRpZmllcikge1xuICAgICAgICBjYXNlICdvcGVuLXF1b3RlJzpcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5PUEVOUVVPVEUgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xvc2UtcXVvdGUnOlxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLkNMT1NFUVVPVEUgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG52YXIgZ2V0UXVvdGUgPSBmdW5jdGlvbiBnZXRRdW90ZShzdHlsZSwgaXNPcGVuaW5nLCBxdW90ZURlcHRoKSB7XG4gICAgdmFyIHF1b3RlcyA9IHN0eWxlLnF1b3RlcyA/IHN0eWxlLnF1b3Rlcy5zcGxpdCgvXFxzKy8pIDogW1wiJ1xcXCInXCIsIFwiJ1xcXCInXCJdO1xuICAgIHZhciBpZHggPSBxdW90ZURlcHRoICogMjtcbiAgICBpZiAoaWR4ID49IHF1b3Rlcy5sZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gcXVvdGVzLmxlbmd0aCAtIDI7XG4gICAgfVxuICAgIGlmICghaXNPcGVuaW5nKSB7XG4gICAgICAgICsraWR4O1xuICAgIH1cbiAgICByZXR1cm4gcXVvdGVzW2lkeF0ucmVwbGFjZSgvXltcIiddfFtcIiddJC9nLCAnJyk7XG59O1xuXG52YXIgZm9ybWF0Q291bnRlclZhbHVlID0gZnVuY3Rpb24gZm9ybWF0Q291bnRlclZhbHVlKGNvdW50ZXIsIGdsdWUsIGZvcm1hdCkge1xuICAgIHZhciBsZW4gPSBjb3VudGVyLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGdsdWUgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICgwLCBfTGlzdEl0ZW0uY3JlYXRlQ291bnRlclRleHQpKGNvdW50ZXJbaV0sICgwLCBfbGlzdFN0eWxlLnBhcnNlTGlzdFN0eWxlVHlwZSkoZm9ybWF0IHx8ICdkZWNpbWFsJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfRm9udCA9IHJlcXVpcmUoJy4vRm9udCcpO1xuXG52YXIgX0dyYWRpZW50ID0gcmVxdWlyZSgnLi9HcmFkaWVudCcpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3BhcnNpbmcvYmFja2dyb3VuZCcpO1xuXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0YXJnZXQucmVuZGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ29udGVudChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlQ29udGVudChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gY2hpbGQucGFyZW50LnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5yZW5kZXJUZXh0Tm9kZShjaGlsZC5ib3VuZHMsIHN0eWxlLmNvbG9yLCBzdHlsZS5mb250LCBzdHlsZS50ZXh0RGVjb3JhdGlvbiwgc3R5bGUudGV4dFNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5kcmF3U2hhcGUoY2hpbGQsIGNvbnRhaW5lci5zdHlsZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWFnZSA9IF90aGlzLm9wdGlvbnMuaW1hZ2VTdG9yZS5nZXQoY29udGFpbmVyLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRCb3ggPSAoMCwgX0JvdW5kcy5jYWxjdWxhdGVDb250ZW50Qm94KShjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3dpZHRoID0gdHlwZW9mIF9pbWFnZS53aWR0aCA9PT0gJ251bWJlcicgJiYgX2ltYWdlLndpZHRoID4gMCA/IF9pbWFnZS53aWR0aCA6IGNvbnRlbnRCb3gud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IHR5cGVvZiBfaW1hZ2UuaGVpZ2h0ID09PSAnbnVtYmVyJyAmJiBfaW1hZ2UuaGVpZ2h0ID4gMCA/IF9pbWFnZS5oZWlnaHQgOiBjb250ZW50Qm94LmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfd2lkdGggPiAwICYmIF9oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmNsaXAoWygwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKShjb250YWluZXIuY3VydmVkQm91bmRzKV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdJbWFnZShfaW1hZ2UsIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCBfd2lkdGgsIF9oZWlnaHQpLCBjb250ZW50Qm94KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIuZ2V0Q2xpcFBhdGhzKCk7XG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xpcChwYXRocywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBIQVNfQkFDS0dST1VORCA9ICFjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpIHx8IGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIHZhciBoYXNSZW5kZXJhYmxlQm9yZGVycyA9IGNvbnRhaW5lci5zdHlsZS5ib3JkZXIuc29tZShmdW5jdGlvbiAoYm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvcmRlci5ib3JkZXJTdHlsZSAhPT0gX2JvcmRlci5CT1JERVJfU1RZTEUuTk9ORSAmJiAhYm9yZGVyLmJvcmRlckNvbG9yLmlzVHJhbnNwYXJlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBhaW50aW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhKShjb250YWluZXIuY3VydmVkQm91bmRzLCBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ2xpcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoSEFTX0JBQ0tHUk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRhcmdldC5jbGlwKFtiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRhcmdldC5maWxsKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChib3JkZXIsIHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlci5ib3JkZXJTdHlsZSAhPT0gX2JvcmRlci5CT1JERVJfU1RZTEUuTk9ORSAmJiAhYm9yZGVyLmJvcmRlckNvbG9yLmlzVHJhbnNwYXJlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJvcmRlcihib3JkZXIsIHNpZGUsIGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoSEFTX0JBQ0tHUk9VTkQgfHwgaGFzUmVuZGVyYWJsZUJvcmRlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIucGFyZW50ID8gY29udGFpbmVyLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xpcChwYXRocywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZEltYWdlKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZS5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5zb3VyY2UubWV0aG9kID09PSAndXJsJyAmJiBiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLmFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJCYWNrZ3JvdW5kUmVwZWF0KGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9ncmFkaWVudC9pLnRlc3QoYmFja2dyb3VuZEltYWdlLnNvdXJjZS5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJCYWNrZ3JvdW5kR3JhZGllbnQoY29udGFpbmVyLCBiYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kUmVwZWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRSZXBlYXQoY29udGFpbmVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTdG9yZS5nZXQoYmFja2dyb3VuZC5zb3VyY2UuYXJnc1swXSk7XG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKShjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kT3JpZ2luLCBjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZVNpemUgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGltYWdlLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKShiYWNrZ3JvdW5kLnBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgICAgICB2YXIgX3BhdGggPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGgpKGJhY2tncm91bmQsIHBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLCBjb250YWluZXIuYm91bmRzKTtcblxuICAgICAgICAgICAgICAgIHZhciBfb2Zmc2V0WCA9IE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCk7XG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRZID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJlcGVhdChfcGF0aCwgaW1hZ2UsIGJhY2tncm91bmRJbWFnZVNpemUsIF9vZmZzZXRYLCBfb2Zmc2V0WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kR3JhZGllbnQoY29udGFpbmVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKShjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kT3JpZ2luLCBjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlU2l6ZSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplKShiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgdmFyIGdyYWRpZW50Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSwgYmFja2dyb3VuZEltYWdlU2l6ZS53aWR0aCwgYmFja2dyb3VuZEltYWdlU2l6ZS5oZWlnaHQpO1xuXG4gICAgICAgICAgICB2YXIgZ3JhZGllbnQgPSAoMCwgX0dyYWRpZW50LnBhcnNlR3JhZGllbnQpKGNvbnRhaW5lciwgYmFja2dyb3VuZC5zb3VyY2UsIGdyYWRpZW50Qm91bmRzKTtcbiAgICAgICAgICAgIGlmIChncmFkaWVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZ3JhZGllbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9HcmFkaWVudC5HUkFESUVOVF9UWVBFLkxJTkVBUl9HUkFESUVOVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlckxpbmVhckdyYWRpZW50KGdyYWRpZW50Qm91bmRzLCBncmFkaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfR3JhZGllbnQuR1JBRElFTlRfVFlQRS5SQURJQUxfR1JBRElFTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW5kZXJSYWRpYWxHcmFkaWVudChncmFkaWVudEJvdW5kcywgZ3JhZGllbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCb3JkZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY3VydmVQb2ludHMpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRyYXdTaGFwZSgoMCwgX0JvdW5kcy5wYXJzZVBhdGhGb3JCb3JkZXIpKGN1cnZlUG9pbnRzLCBzaWRlKSwgYm9yZGVyLmJvcmRlckNvbG9yKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyU3RhY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhY2soc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoc3RhY2suY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9vcGFjaXR5ID0gc3RhY2suZ2V0T3BhY2l0eSgpO1xuICAgICAgICAgICAgICAgIGlmIChfb3BhY2l0eSAhPT0gdGhpcy5fb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRPcGFjaXR5KHN0YWNrLmdldE9wYWNpdHkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wYWNpdHkgPSBfb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RyYW5zZm9ybSA9IHN0YWNrLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtKHN0YWNrLmNvbnRhaW5lci5ib3VuZHMubGVmdCArIF90cmFuc2Zvcm0udHJhbnNmb3JtT3JpZ2luWzBdLnZhbHVlLCBzdGFjay5jb250YWluZXIuYm91bmRzLnRvcCArIF90cmFuc2Zvcm0udHJhbnNmb3JtT3JpZ2luWzFdLnZhbHVlLCBfdHJhbnNmb3JtLnRyYW5zZm9ybSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJTdGFja0NvbnRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgX3NwbGl0U3RhY2tpbmdDb250ZXh0ID0gc3BsaXRTdGFja2luZ0NvbnRleHRzKHN0YWNrKSxcbiAgICAgICAgICAgICAgICBfc3BsaXRTdGFja2luZ0NvbnRleHQyID0gX3NsaWNlZFRvQXJyYXkoX3NwbGl0U3RhY2tpbmdDb250ZXh0LCA1KSxcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMF0sXG4gICAgICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzFdLFxuICAgICAgICAgICAgICAgIHBvc2l0aXZlWkluZGV4ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlsyXSxcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlszXSxcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzRdO1xuXG4gICAgICAgICAgICB2YXIgX3NwbGl0RGVzY2VuZGFudHMgPSBzcGxpdERlc2NlbmRhbnRzKHN0YWNrKSxcbiAgICAgICAgICAgICAgICBfc3BsaXREZXNjZW5kYW50czIgPSBfc2xpY2VkVG9BcnJheShfc3BsaXREZXNjZW5kYW50cywgMiksXG4gICAgICAgICAgICAgICAgaW5saW5lTGV2ZWwgPSBfc3BsaXREZXNjZW5kYW50czJbMF0sXG4gICAgICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwgPSBfc3BsaXREZXNjZW5kYW50czJbMV07XG5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtcG9zaXRpb24tMy8jcGFpbnRpbmctb3JkZXJcbiAgICAgICAgICAgIC8vIDEuIHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXJzIG9mIHRoZSBlbGVtZW50IGZvcm1pbmcgdGhlIHN0YWNraW5nIGNvbnRleHQuXG5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoc3RhY2suY29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIDIuIHRoZSBjaGlsZCBzdGFja2luZyBjb250ZXh0cyB3aXRoIG5lZ2F0aXZlIHN0YWNrIGxldmVscyAobW9zdCBuZWdhdGl2ZSBmaXJzdCkuXG4gICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5zb3J0KHNvcnRCeVpJbmRleCkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDMuIEZvciBhbGwgaXRzIGluLWZsb3csIG5vbi1wb3NpdGlvbmVkLCBibG9jay1sZXZlbCBkZXNjZW5kYW50cyBpbiB0cmVlIG9yZGVyOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ29udGVudChzdGFjay5jb250YWluZXIpO1xuICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwuZm9yRWFjaCh0aGlzLnJlbmRlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgLy8gNC4gQWxsIG5vbi1wb3NpdGlvbmVkIGZsb2F0aW5nIGRlc2NlbmRhbnRzLCBpbiB0cmVlIG9yZGVyLiBGb3IgZWFjaCBvbmUgb2YgdGhlc2UsXG4gICAgICAgICAgICAvLyB0cmVhdCB0aGUgZWxlbWVudCBhcyBpZiBpdCBjcmVhdGVkIGEgbmV3IHN0YWNraW5nIGNvbnRleHQsIGJ1dCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0LFxuICAgICAgICAgICAgLy8gbm90IHRoaXMgbmV3IG9uZS5cbiAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDUuIHRoZSBpbi1mbG93LCBpbmxpbmUtbGV2ZWwsIG5vbi1wb3NpdGlvbmVkIGRlc2NlbmRhbnRzLCBpbmNsdWRpbmcgaW5saW5lIHRhYmxlcyBhbmQgaW5saW5lIGJsb2Nrcy5cbiAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgaW5saW5lTGV2ZWwuZm9yRWFjaCh0aGlzLnJlbmRlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgLy8gNi4gQWxsIHBvc2l0aW9uZWQsIG9wYWNpdHkgb3IgdHJhbnNmb3JtIGRlc2NlbmRhbnRzLCBpbiB0cmVlIG9yZGVyIHRoYXQgZmFsbCBpbnRvIHRoZSBmb2xsb3dpbmcgY2F0ZWdvcmllczpcbiAgICAgICAgICAgIC8vICBBbGwgcG9zaXRpb25lZCBkZXNjZW5kYW50cyB3aXRoICd6LWluZGV4OiBhdXRvJyBvciAnei1pbmRleDogMCcsIGluIHRyZWUgb3JkZXIuXG4gICAgICAgICAgICAvLyAgRm9yIHRob3NlIHdpdGggJ3otaW5kZXg6IGF1dG8nLCB0cmVhdCB0aGUgZWxlbWVudCBhcyBpZiBpdCBjcmVhdGVkIGEgbmV3IHN0YWNraW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyAgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50cyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmVcbiAgICAgICAgICAgIC8vICBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0LCBub3QgdGhpcyBuZXcgb25lLiBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogMCcsXG4gICAgICAgICAgICAvLyAgdHJlYXQgdGhlIHN0YWNraW5nIGNvbnRleHQgZ2VuZXJhdGVkIGF0b21pY2FsbHkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIEFsbCBvcGFjaXR5IGRlc2NlbmRhbnRzIHdpdGggb3BhY2l0eSBsZXNzIHRoYW4gMVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICBBbGwgdHJhbnNmb3JtIGRlc2NlbmRhbnRzIHdpdGggdHJhbnNmb3JtIG90aGVyIHRoYW4gbm9uZVxuICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDcuIFN0YWNraW5nIGNvbnRleHRzIGZvcm1lZCBieSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIHdpdGggei1pbmRpY2VzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxIGluIHotaW5kZXhcbiAgICAgICAgICAgIC8vIG9yZGVyIChzbWFsbGVzdCBmaXJzdCkgdGhlbiB0cmVlIG9yZGVyLlxuICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXguc29ydChzb3J0QnlaSW5kZXgpLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlY3RhbmdsZSh0aGlzLm9wdGlvbnMueCwgdGhpcy5vcHRpb25zLnksIHRoaXMub3B0aW9ucy53aWR0aCwgdGhpcy5vcHRpb25zLmhlaWdodCwgdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN0YWNrKHN0YWNrKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldC5nZXRUYXJnZXQoKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50aGVuKGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1Lm9wdGlvbnMubG9nZ2VyLmxvZygnUmVuZGVyIGNvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cblxudmFyIHNwbGl0RGVzY2VuZGFudHMgPSBmdW5jdGlvbiBzcGxpdERlc2NlbmRhbnRzKHN0YWNrKSB7XG4gICAgdmFyIGlubGluZUxldmVsID0gW107XG4gICAgdmFyIG5vbklubGluZUxldmVsID0gW107XG5cbiAgICB2YXIgbGVuZ3RoID0gc3RhY2suY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RhY2suY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChjaGlsZC5pc0lubGluZUxldmVsKCkpIHtcbiAgICAgICAgICAgIGlubGluZUxldmVsLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtpbmxpbmVMZXZlbCwgbm9uSW5saW5lTGV2ZWxdO1xufTtcblxudmFyIHNwbGl0U3RhY2tpbmdDb250ZXh0cyA9IGZ1bmN0aW9uIHNwbGl0U3RhY2tpbmdDb250ZXh0cyhzdGFjaykge1xuICAgIHZhciBuZWdhdGl2ZVpJbmRleCA9IFtdO1xuICAgIHZhciB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IFtdO1xuICAgIHZhciBwb3NpdGl2ZVpJbmRleCA9IFtdO1xuICAgIHZhciBub25Qb3NpdGlvbmVkRmxvYXRzID0gW107XG4gICAgdmFyIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IFtdO1xuICAgIHZhciBsZW5ndGggPSBzdGFjay5jb250ZXh0cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jb250ZXh0c1tpXTtcbiAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSB8fCBjaGlsZC5jb250YWluZXIuc3R5bGUub3BhY2l0eSA8IDEgfHwgY2hpbGQuY29udGFpbmVyLmlzVHJhbnNmb3JtZWQoKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVaSW5kZXgucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXgucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5pc0Zsb2F0aW5nKCkpIHtcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtuZWdhdGl2ZVpJbmRleCwgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHksIHBvc2l0aXZlWkluZGV4LCBub25Qb3NpdGlvbmVkRmxvYXRzLCBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWxdO1xufTtcblxudmFyIHNvcnRCeVpJbmRleCA9IGZ1bmN0aW9uIHNvcnRCeVpJbmRleChhLCBiKSB7XG4gICAgaWYgKGEuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA+IGIuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlcikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IGIuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlcikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEuY29udGFpbmVyLmluZGV4ID4gYi5jb250YWluZXIuaW5kZXggPyAxIDogLTE7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5SZXNvdXJjZVN0b3JlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0ZlYXR1cmUgPSByZXF1aXJlKCcuL0ZlYXR1cmUnKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX1Byb3h5ID0gcmVxdWlyZSgnLi9Qcm94eScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVzb3VyY2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb3VyY2VMb2FkZXIob3B0aW9ucywgbG9nZ2VyLCB3aW5kb3cpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc291cmNlTG9hZGVyKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl93aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMub3JpZ2luID0gdGhpcy5nZXRPcmlnaW4od2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc291cmNlTG9hZGVyLCBbe1xuICAgICAgICBrZXk6ICdsb2FkSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VJbkNhY2hlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQmxvYkltYWdlKHNyYykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSBfbG9hZEltYWdlKHNyYywgdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzU1ZHKHNyYykgfHwgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9TVkdfRFJBV0lORykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWxsb3dUYWludCA9PT0gdHJ1ZSB8fCBpc0lubGluZUltYWdlKHNyYykgfHwgdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRJbWFnZShzcmMsIHNyYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTYW1lT3JpZ2luKHNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucHJveHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSAoMCwgX1Byb3h5LlByb3h5KShzcmMsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudXNlQ09SUyA9PT0gdHJ1ZSAmJiBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfSU1BR0VTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRJbWFnZShzcmMsIHNyYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lubGluZUltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChpc0lubGluZUltYWdlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUluQ2FjaGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTYW1lT3JpZ2luKHNyYykgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5wcm94eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzMi5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhySW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAneGhySW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24geGhySW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ0ZhaWxlZCB0byBmZXRjaCBpbWFnZSAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpICsgJyB3aXRoIHN0YXR1cyBjb2RlICcgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgZmV0Y2hpbmcgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRDYW52YXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZENhbnZhcyhub2RlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gU3RyaW5nKHRoaXMuX2luZGV4KyspO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzUmVzb3VyY2VJbkNhY2hlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1Jlc291cmNlSW5DYWNoZShrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5jYWNoZVtrZXldICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW1hZ2Uoa2V5LCBzcmMsIHVzZUNPUlMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnQWRkZWQgaW1hZ2UgJyArIGtleS5zdWJzdHJpbmcoMCwgMjU2KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbWFnZUxvYWRIYW5kbGVyID0gZnVuY3Rpb24gaW1hZ2VMb2FkSGFuZGxlcihzdXBwb3J0c0RhdGFJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvL2lvcyBzYWZhcmkgMTAuMyB0YWludHMgY2FudmFzIHdpdGggZGF0YSB1cmxzIHVubGVzcyBjcm9zc09yaWdpbiBpcyBzZXQgdG8gYW5vbnltb3VzXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNEYXRhSW1hZ2VzIHx8IHVzZUNPUlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXM0Lm9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IF90aGlzNC5vcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBmZXRjaGluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IGlzSW5saW5lQmFzZTY0SW1hZ2Uoc3JjKSAmJiAhaXNTVkcoc3JjKSA/IC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQkFTRTY0X0RSQVdJTkcoc3JjKS50aGVuKGltYWdlTG9hZEhhbmRsZXIpIDogaW1hZ2VMb2FkSGFuZGxlcih0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzU2FtZU9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NhbWVPcmlnaW4odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmlnaW4odXJsKSA9PT0gdGhpcy5vcmlnaW47XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XG4gICAgICAgICAgICB2YXIgbGluayA9IHRoaXMuX2xpbmsgfHwgKHRoaXMuX2xpbmsgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGxpbmsuaHJlZjsgLy8gSUU5LCBMT0whIC0gaHR0cDovL2pzZmlkZGxlLm5ldC9uaWtsYXN2aC8yZTQ4Yi9cbiAgICAgICAgICAgIHJldHVybiBsaW5rLnByb3RvY29sICsgbGluay5ob3N0bmFtZSArIGxpbmsucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVhZHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5jYWNoZVtzdHJdLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHZhbHVlcykudGhlbihmdW5jdGlvbiAoaW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvZ2dlci5sb2coJ0ZpbmlzaGVkIGxvYWRpbmcgJyArIGltYWdlcy5sZW5ndGggKyAnIGltYWdlcycsIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzb3VyY2VTdG9yZShrZXlzLCBpbWFnZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVzb3VyY2VMb2FkZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc291cmNlTG9hZGVyO1xuXG52YXIgUmVzb3VyY2VTdG9yZSA9IGV4cG9ydHMuUmVzb3VyY2VTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZVN0b3JlKGtleXMsIHJlc291cmNlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VTdG9yZSk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlcyA9IHJlc291cmNlcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VTdG9yZSwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLl9yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlc291cmNlU3RvcmU7XG59KCk7XG5cbnZhciBJTkxJTkVfU1ZHID0gL15kYXRhOmltYWdlXFwvc3ZnXFwreG1sL2k7XG52YXIgSU5MSU5FX0JBU0U2NCA9IC9eZGF0YTppbWFnZVxcLy4qO2Jhc2U2NCwvaTtcbnZhciBJTkxJTkVfSU1HID0gL15kYXRhOmltYWdlXFwvLiovaTtcblxudmFyIGlzSW5saW5lSW1hZ2UgPSBmdW5jdGlvbiBpc0lubGluZUltYWdlKHNyYykge1xuICAgIHJldHVybiBJTkxJTkVfSU1HLnRlc3Qoc3JjKTtcbn07XG52YXIgaXNJbmxpbmVCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIGlzSW5saW5lQmFzZTY0SW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIElOTElORV9CQVNFNjQudGVzdChzcmMpO1xufTtcbnZhciBpc0Jsb2JJbWFnZSA9IGZ1bmN0aW9uIGlzQmxvYkltYWdlKHNyYykge1xuICAgIHJldHVybiBzcmMuc3Vic3RyKDAsIDQpID09PSAnYmxvYic7XG59O1xuXG52YXIgaXNTVkcgPSBmdW5jdGlvbiBpc1NWRyhzcmMpIHtcbiAgICByZXR1cm4gc3JjLnN1YnN0cigtMykudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgfHwgSU5MSU5FX1NWRy50ZXN0KHNyYyk7XG59O1xuXG52YXIgX2xvYWRJbWFnZSA9IGZ1bmN0aW9uIF9sb2FkSW1hZ2Uoc3JjLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGxvYWRpbmcgaW1hZ2UnIDogJycpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BhcnNpbmcvcG9zaXRpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBwYXJlbnQsIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja2luZ0NvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMudHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhY2tpbmdDb250ZXh0LCBbe1xuICAgICAgICBrZXk6ICdnZXRPcGFjaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wYWNpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ICogdGhpcy5wYXJlbnQuZ2V0T3BhY2l0eSgpIDogdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudCB8fCB0aGlzLnRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID8gdGhpcyA6IHRoaXMucGFyZW50LmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGFja2luZ0NvbnRleHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWNraW5nQ29udGV4dDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gdW5kZWZpbmVkO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSByZXF1aXJlKCcuL3BhcnNpbmcvdGV4dERlY29yYXRpb24nKTtcblxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxudmFyIF9Vbmljb2RlID0gcmVxdWlyZSgnLi9Vbmljb2RlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gZnVuY3Rpb24gVGV4dEJvdW5kcyh0ZXh0LCBib3VuZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEJvdW5kcyk7XG5cbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xufTtcblxudmFyIHBhcnNlVGV4dEJvdW5kcyA9IGV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZnVuY3Rpb24gcGFyc2VUZXh0Qm91bmRzKHZhbHVlLCBwYXJlbnQsIG5vZGUpIHtcbiAgICB2YXIgbGV0dGVyUmVuZGVyaW5nID0gcGFyZW50LnN0eWxlLmxldHRlclNwYWNpbmcgIT09IDA7XG4gICAgdmFyIHRleHRMaXN0ID0gbGV0dGVyUmVuZGVyaW5nID8gKDAsIF9Vbmljb2RlLnRvQ29kZVBvaW50cykodmFsdWUpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKGkpO1xuICAgIH0pIDogKDAsIF9Vbmljb2RlLmJyZWFrV29yZHMpKHZhbHVlLCBwYXJlbnQpO1xuICAgIHZhciBsZW5ndGggPSB0ZXh0TGlzdC5sZW5ndGg7XG4gICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5wYXJlbnROb2RlID8gbm9kZS5wYXJlbnROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBudWxsO1xuICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcgPyBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCA6IDA7XG4gICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0VmlldyA/IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0IDogMDtcbiAgICB2YXIgdGV4dEJvdW5kcyA9IFtdO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSB0ZXh0TGlzdFtpXTtcbiAgICAgICAgaWYgKHBhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTi5OT05FIHx8IHRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JBTkdFX0JPVU5EUykge1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRSYW5nZUJvdW5kcyhub2RlLCBvZmZzZXQsIHRleHQubGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnROb2RlID0gbm9kZS5zcGxpdFRleHQodGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SQU5HRV9CT1VORFMpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IHRleHQubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dEJvdW5kcztcbn07XG5cbnZhciBnZXRXcmFwcGVyQm91bmRzID0gZnVuY3Rpb24gZ2V0V3JhcHBlckJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlciwgbm9kZSk7XG4gICAgICAgIHZhciBib3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykod3JhcHBlciwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIGlmICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCAwLCAwKTtcbn07XG5cbnZhciBnZXRSYW5nZUJvdW5kcyA9IGZ1bmN0aW9uIGdldFJhbmdlQm91bmRzKG5vZGUsIG9mZnNldCwgbGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgb2Zmc2V0KTtcbiAgICByYW5nZS5zZXRFbmQobm9kZSwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICByZXR1cm4gX0JvdW5kcy5Cb3VuZHMuZnJvbUNsaWVudFJlY3QocmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90ZXh0VHJhbnNmb3JtID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RleHRUcmFuc2Zvcm0nKTtcblxudmFyIF9UZXh0Qm91bmRzID0gcmVxdWlyZSgnLi9UZXh0Qm91bmRzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCBib3VuZHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZnJvbVRleHROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21UZXh0Tm9kZShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdHJhbnNmb3JtKG5vZGUuZGF0YSwgcGFyZW50LnN0eWxlLnRleHRUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGFpbmVyKHRleHQsIHBhcmVudCwgKDAsIF9UZXh0Qm91bmRzLnBhcnNlVGV4dEJvdW5kcykodGV4dCwgcGFyZW50LCBub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dENvbnRhaW5lcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dENvbnRhaW5lcjtcblxuXG52YXIgQ0FQSVRBTElaRSA9IC8oXnxcXHN8OnwtfFxcKHxcXCkpKFthLXpdKS9nO1xuXG52YXIgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHRleHQsIF90cmFuc2Zvcm0pIHtcbiAgICBzd2l0Y2ggKF90cmFuc2Zvcm0pIHtcbiAgICAgICAgY2FzZSBfdGV4dFRyYW5zZm9ybS5URVhUX1RSQU5TRk9STS5MT1dFUkNBU0U6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKENBUElUQUxJWkUsIGNhcGl0YWxpemUpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKG0sIHAxLCBwMikge1xuICAgIGlmIChtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYnJlYWtXb3JkcyA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2Nzc0xpbmVCcmVhayA9IHJlcXVpcmUoJ2Nzcy1saW5lLWJyZWFrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndG9Db2RlUG9pbnRzJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLnRvQ29kZVBvaW50cztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZnJvbUNvZGVQb2ludCcsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2Nzc0xpbmVCcmVhay5mcm9tQ29kZVBvaW50O1xuICAgIH1cbn0pO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvd1dyYXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJyZWFrV29yZHMgPSBleHBvcnRzLmJyZWFrV29yZHMgPSBmdW5jdGlvbiBicmVha1dvcmRzKHN0ciwgcGFyZW50KSB7XG4gICAgdmFyIGJyZWFrZXIgPSAoMCwgX2Nzc0xpbmVCcmVhay5MaW5lQnJlYWtlcikoc3RyLCB7XG4gICAgICAgIGxpbmVCcmVhazogcGFyZW50LnN0eWxlLmxpbmVCcmVhayxcbiAgICAgICAgd29yZEJyZWFrOiBwYXJlbnQuc3R5bGUub3ZlcmZsb3dXcmFwID09PSBfb3ZlcmZsb3dXcmFwLk9WRVJGTE9XX1dSQVAuQlJFQUtfV09SRCA/ICdicmVhay13b3JkJyA6IHBhcmVudC5zdHlsZS53b3JkQnJlYWtcbiAgICB9KTtcblxuICAgIHZhciB3b3JkcyA9IFtdO1xuICAgIHZhciBiayA9IHZvaWQgMDtcblxuICAgIHdoaWxlICghKGJrID0gYnJlYWtlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgd29yZHMucHVzaChiay52YWx1ZS5zbGljZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZHM7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGJpdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGJpdCAmIHZhbHVlKSAhPT0gMDtcbn07XG5cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbnZhciBjb3B5Q1NTU3R5bGVzID0gZXhwb3J0cy5jb3B5Q1NTU3R5bGVzID0gZnVuY3Rpb24gY29weUNTU1N0eWxlcyhzdHlsZSwgdGFyZ2V0KSB7XG4gICAgLy8gRWRnZSBkb2VzIG5vdCBwcm92aWRlIHZhbHVlIGZvciBjc3NUZXh0XG4gICAgZm9yICh2YXIgaSA9IHN0eWxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHN0eWxlLml0ZW0oaSk7XG4gICAgICAgIC8vIFNhZmFyaSBzaG93cyBwc2V1ZG9lbGVtZW50cyBpZiBjb250ZW50IGlzIHNldFxuICAgICAgICBpZiAocHJvcGVydHkgIT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBTTUFMTF9JTUFHRSA9IGV4cG9ydHMuU01BTExfSU1BR0UgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVuZGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfTm9kZVBhcnNlciA9IHJlcXVpcmUoJy4vTm9kZVBhcnNlcicpO1xuXG52YXIgX1JlbmRlcmVyID0gcmVxdWlyZSgnLi9SZW5kZXJlcicpO1xuXG52YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0ZvcmVpZ25PYmplY3RSZW5kZXJlcicpO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIpO1xuXG52YXIgX0ZlYXR1cmUgPSByZXF1aXJlKCcuL0ZlYXR1cmUnKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfQ2xvbmUgPSByZXF1aXJlKCcuL0Nsb25lJyk7XG5cbnZhciBfRm9udCA9IHJlcXVpcmUoJy4vRm9udCcpO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlbmRlckVsZW1lbnQgPSBleHBvcnRzLnJlbmRlckVsZW1lbnQgPSBmdW5jdGlvbiByZW5kZXJFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlcikge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuXG4gICAgdmFyIHdpbmRvd0JvdW5kcyA9IG5ldyBfQm91bmRzLkJvdW5kcyhvcHRpb25zLnNjcm9sbFgsIG9wdGlvbnMuc2Nyb2xsWSwgb3B0aW9ucy53aW5kb3dXaWR0aCwgb3B0aW9ucy53aW5kb3dIZWlnaHQpO1xuXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1iYWNrZ3JvdW5kLyNzcGVjaWFsLWJhY2tncm91bmRzXG4gICAgdmFyIGRvY3VtZW50QmFja2dyb3VuZENvbG9yID0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmJhY2tncm91bmRDb2xvcikgOiBfQ29sb3IuVFJBTlNQQVJFTlQ7XG4gICAgdmFyIGJvZHlCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmJvZHkgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IpIDogX0NvbG9yLlRSQU5TUEFSRU5UO1xuXG4gICAgdmFyIGJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQgPT09IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpID8gYm9keUJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIDogbnVsbCA6IGJvZHlCYWNrZ3JvdW5kQ29sb3IgOiBkb2N1bWVudEJhY2tncm91bmRDb2xvciA6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsO1xuXG4gICAgcmV0dXJuIChvcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcgPyAvLyAkRmxvd0ZpeE1lXG4gICAgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpKS50aGVuKGZ1bmN0aW9uIChzdXBwb3J0Rm9yZWlnbk9iamVjdCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydEZvcmVpZ25PYmplY3QgPyBmdW5jdGlvbiAoY2xvbmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0RvY3VtZW50IGNsb25lZCwgdXNpbmcgZm9yZWlnbk9iamVjdCByZW5kZXJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lci5pbmxpbmVGb250cyhvd25lckRvY3VtZW50KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVyLnJlc291cmNlTG9hZGVyLnJlYWR5KCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIuZGVmYXVsdChjbG9uZXIuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzRG9jdW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdIVE1MJyB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJztcblxuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShlbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZi50b3A7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogb3B0aW9ucy53aW5kb3dXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBvcHRpb25zLndpbmRvd0hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogb3B0aW9ucy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBvcHRpb25zLnNjcm9sbFlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KG5ldyBfQ2xvbmUuRG9jdW1lbnRDbG9uZXIoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCB0cnVlLCByZW5kZXJFbGVtZW50KSkgOiAoMCwgX0Nsb25lLmNsb25lV2luZG93KShvd25lckRvY3VtZW50LCB3aW5kb3dCb3VuZHMsIGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyRWxlbWVudCkudGhlbihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyLCAzKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBfcmVmM1swXSxcbiAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50ID0gX3JlZjNbMV0sXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VMb2FkZXIgPSBfcmVmM1syXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdEb2N1bWVudCBjbG9uZWQsIHVzaW5nIGNvbXB1dGVkIHJlbmRlcmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSAoMCwgX05vZGVQYXJzZXIuTm9kZVBhcnNlcikoY2xvbmVkRWxlbWVudCwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcik7XG4gICAgICAgICAgICB2YXIgY2xvbmVkRG9jdW1lbnQgPSBjbG9uZWRFbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09IHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvciA9IF9Db2xvci5UUkFOU1BBUkVOVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoaW1hZ2VTdG9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb250TWV0cmljcyA9IG5ldyBfRm9udC5Gb250TWV0cmljcyhjbG9uZWREb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnU3RhcnRpbmcgcmVuZGVyZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBjbG9uZWREb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZWY0ID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShjbG9uZWRFbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmNC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gX3JlZjQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZjQudG9wO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljczogZm9udE1ldHJpY3MsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3RvcmU6IGltYWdlU3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy50YXJnZXQubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdChvcHRpb25zLnRhcmdldCwgcmVuZGVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVDb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdDYW5ub3QgZGV0YWNoIGNsb25lZCBpZnJhbWUgYXMgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuL1ZlY3RvcicpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgbGVycCA9IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICAgIHJldHVybiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChhLnggKyAoYi54IC0gYS54KSAqIHQsIGEueSArIChiLnkgLSBhLnkpICogdCk7XG59O1xuXG52YXIgQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmV6aWVyQ3VydmUoc3RhcnQsIHN0YXJ0Q29udHJvbCwgZW5kQ29udHJvbCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZXppZXJDdXJ2ZSk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkU7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBzdGFydENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kQ29udHJvbCA9IGVuZENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCZXppZXJDdXJ2ZSwgW3tcbiAgICAgICAga2V5OiAnc3ViZGl2aWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YmRpdmlkZSh0LCBmaXJzdEhhbGYpIHtcbiAgICAgICAgICAgIHZhciBhYiA9IGxlcnAodGhpcy5zdGFydCwgdGhpcy5zdGFydENvbnRyb2wsIHQpO1xuICAgICAgICAgICAgdmFyIGJjID0gbGVycCh0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5lbmRDb250cm9sLCB0KTtcbiAgICAgICAgICAgIHZhciBjZCA9IGxlcnAodGhpcy5lbmRDb250cm9sLCB0aGlzLmVuZCwgdCk7XG4gICAgICAgICAgICB2YXIgYWJiYyA9IGxlcnAoYWIsIGJjLCB0KTtcbiAgICAgICAgICAgIHZhciBiY2NkID0gbGVycChiYywgY2QsIHQpO1xuICAgICAgICAgICAgdmFyIGRlc3QgPSBsZXJwKGFiYmMsIGJjY2QsIHQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SGFsZiA/IG5ldyBCZXppZXJDdXJ2ZSh0aGlzLnN0YXJ0LCBhYiwgYWJiYywgZGVzdCkgOiBuZXcgQmV6aWVyQ3VydmUoZGVzdCwgYmNjZCwgY2QsIHRoaXMuZW5kKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmV2ZXJzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCZXppZXJDdXJ2ZSh0aGlzLmVuZCwgdGhpcy5lbmRDb250cm9sLCB0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmV6aWVyQ3VydmU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJlemllckN1cnZlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY2xlKTtcblxuICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguQ0lSQ0xFO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihyYWRpdXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHJhZGl1cyB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUEFUSCA9IGV4cG9ydHMuUEFUSCA9IHtcbiAgICBWRUNUT1I6IDAsXG4gICAgQkVaSUVSX0NVUlZFOiAxLFxuICAgIENJUkNMRTogMlxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNpemUgPSBmdW5jdGlvbiBTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2l6ZSk7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTaXplOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZlY3RvciA9IGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlY3Rvcik7XG5cbiAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILlZFQ1RPUjtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHggdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB5IHZhbHVlIGdpdmVuIGZvciBWZWN0b3InKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyJyk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xuXG52YXIgX0xvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfV2luZG93ID0gcmVxdWlyZSgnLi9XaW5kb3cnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGh0bWwyY2FudmFzID0gZnVuY3Rpb24gaHRtbDJjYW52YXMoZWxlbWVudCwgY29uZikge1xuICAgIHZhciBjb25maWcgPSBjb25mIHx8IHt9O1xuICAgIHZhciBsb2dnZXIgPSBuZXcgX0xvZ2dlcjIuZGVmYXVsdCh0eXBlb2YgY29uZmlnLmxvZ2dpbmcgPT09ICdib29sZWFuJyA/IGNvbmZpZy5sb2dnaW5nIDogdHJ1ZSk7XG4gICAgbG9nZ2VyLmxvZygnaHRtbDJjYW52YXMgJyArIFwiJG5wbV9wYWNrYWdlX3ZlcnNpb25cIik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uZmlnLm9ucmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdvbnJlbmRlcmVkIG9wdGlvbiBpcyBkZXByZWNhdGVkLCBodG1sMmNhbnZhcyByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBjYW52YXMgYXMgdGhlIHZhbHVlJyk7XG4gICAgfVxuXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnUHJvdmlkZWQgZWxlbWVudCBpcyBub3Qgd2l0aGluIGEgRG9jdW1lbnQnKTtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHRWaWV3ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGFsbG93VGFpbnQ6IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaW1hZ2VUaW1lb3V0OiAxNTAwMCxcbiAgICAgICAgbG9nZ2luZzogdHJ1ZSxcbiAgICAgICAgcHJveHk6IG51bGwsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgZm9yZWlnbk9iamVjdFJlbmRlcmluZzogZmFsc2UsXG4gICAgICAgIHNjYWxlOiBkZWZhdWx0Vmlldy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXG4gICAgICAgIHRhcmdldDogbmV3IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdChjb25maWcuY2FudmFzKSxcbiAgICAgICAgdXNlQ09SUzogZmFsc2UsXG4gICAgICAgIHdpbmRvd1dpZHRoOiBkZWZhdWx0Vmlldy5pbm5lcldpZHRoLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6IGRlZmF1bHRWaWV3LmlubmVySGVpZ2h0LFxuICAgICAgICBzY3JvbGxYOiBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCxcbiAgICAgICAgc2Nyb2xsWTogZGVmYXVsdFZpZXcucGFnZVlPZmZzZXRcbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9ICgwLCBfV2luZG93LnJlbmRlckVsZW1lbnQpKGVsZW1lbnQsIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgY29uZmlnKSwgbG9nZ2VyKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaHRtbDJjYW52YXMuQ2FudmFzUmVuZGVyZXIgPSBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbDJjYW52YXM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZXhwb3J0cy5CQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0gZXhwb3J0cy5CQUNLR1JPVU5EX1NJWkUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfU2l6ZSA9IHJlcXVpcmUoJy4uL2RyYXdpbmcvU2l6ZScpO1xuXG52YXIgX1NpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2l6ZSk7XG5cbnZhciBfVmVjdG9yID0gcmVxdWlyZSgnLi4vZHJhd2luZy9WZWN0b3InKTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuLi9Cb3VuZHMnKTtcblxudmFyIF9wYWRkaW5nID0gcmVxdWlyZSgnLi9wYWRkaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCQUNLR1JPVU5EX1JFUEVBVCA9IGV4cG9ydHMuQkFDS0dST1VORF9SRVBFQVQgPSB7XG4gICAgUkVQRUFUOiAwLFxuICAgIE5PX1JFUEVBVDogMSxcbiAgICBSRVBFQVRfWDogMixcbiAgICBSRVBFQVRfWTogM1xufTtcblxudmFyIEJBQ0tHUk9VTkRfU0laRSA9IGV4cG9ydHMuQkFDS0dST1VORF9TSVpFID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ09OVEFJTjogMSxcbiAgICBDT1ZFUjogMixcbiAgICBMRU5HVEg6IDNcbn07XG5cbnZhciBCQUNLR1JPVU5EX0NMSVAgPSBleHBvcnRzLkJBQ0tHUk9VTkRfQ0xJUCA9IHtcbiAgICBCT1JERVJfQk9YOiAwLFxuICAgIFBBRERJTkdfQk9YOiAxLFxuICAgIENPTlRFTlRfQk9YOiAyXG59O1xuXG52YXIgQkFDS0dST1VORF9PUklHSU4gPSBleHBvcnRzLkJBQ0tHUk9VTkRfT1JJR0lOID0gQkFDS0dST1VORF9DTElQO1xuXG52YXIgQVVUTyA9ICdhdXRvJztcblxudmFyIEJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gQmFja2dyb3VuZFNpemUoc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYWNrZ3JvdW5kU2l6ZSk7XG5cbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgY2FzZSAnY29udGFpbic6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQ09OVEFJTjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb3Zlcic6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQ09WRVI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQVVUTztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHNpemUpO1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZShiYWNrZ3JvdW5kSW1hZ2UsIGltYWdlLCBib3VuZHMpIHtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHZhciBoZWlnaHQgPSAwO1xuICAgIHZhciBzaXplID0gYmFja2dyb3VuZEltYWdlLnNpemU7XG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPTlRBSU4gfHwgc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09WRVIpIHtcbiAgICAgICAgdmFyIHRhcmdldFJhdGlvID0gYm91bmRzLndpZHRoIC8gYm91bmRzLmhlaWdodDtcbiAgICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGltYWdlLndpZHRoIC8gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGFyZ2V0UmF0aW8gPCBjdXJyZW50UmF0aW8gIT09IChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUikgPyBuZXcgX1NpemUyLmRlZmF1bHQoYm91bmRzLndpZHRoLCBib3VuZHMud2lkdGggLyBjdXJyZW50UmF0aW8pIDogbmV3IF9TaXplMi5kZWZhdWx0KGJvdW5kcy5oZWlnaHQgKiBjdXJyZW50UmF0aW8sIGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnZhbHVlKSB7XG4gICAgICAgIHdpZHRoID0gc2l6ZVswXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8gJiYgc2l6ZVsxXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gaW1hZ2Uud2lkdGggKiBpbWFnZS5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChzaXplWzFdLnZhbHVlKSB7XG4gICAgICAgIGhlaWdodCA9IHNpemVbMV0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAvIGltYWdlLmhlaWdodCAqIGltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgX1NpemUyLmRlZmF1bHQod2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUoYmFja2dyb3VuZEltYWdlLCBib3VuZHMpIHtcbiAgICB2YXIgc2l6ZSA9IGJhY2tncm91bmRJbWFnZS5zaXplO1xuICAgIHZhciB3aWR0aCA9IHNpemVbMF0udmFsdWUgPyBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKSA6IGJvdW5kcy53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gc2l6ZVsxXS52YWx1ZSA/IHNpemVbMV0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KSA6IHNpemVbMF0udmFsdWUgPyB3aWR0aCA6IGJvdW5kcy5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbmV3IF9TaXplMi5kZWZhdWx0KHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIEFVVE9fU0laRSA9IG5ldyBCYWNrZ3JvdW5kU2l6ZShBVVRPKTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhKGN1cnZlcywgY2xpcCkge1xuICAgIHN3aXRjaCAoY2xpcCkge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfQ0xJUC5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuICgwLCBfQm91bmRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGgpKGN1cnZlcyk7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICgwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKShjdXJ2ZXMpO1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYShiYWNrZ3JvdW5kT3JpZ2luLCBib3VuZHMsIHBhZGRpbmcsIGJvcmRlcikge1xuICAgIHZhciBwYWRkaW5nQm94ID0gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveCkoYm91bmRzLCBib3JkZXIpO1xuXG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uQ09OVEVOVF9CT1g6XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuTEVGVF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5SSUdIVF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuVE9QXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5CT1RUT01dLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JvdW5kcy5Cb3VuZHMocGFkZGluZ0JveC5sZWZ0ICsgcGFkZGluZ0xlZnQsIHBhZGRpbmdCb3gudG9wICsgcGFkZGluZ1RvcCwgcGFkZGluZ0JveC53aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm94LmhlaWdodCAtIHBhZGRpbmdUb3AgLSBwYWRkaW5nQm90dG9tKTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBwYWRkaW5nQm94O1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbihwb3NpdGlvbiwgc2l6ZSwgYm91bmRzKSB7XG4gICAgcmV0dXJuIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHBvc2l0aW9uWzBdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoIC0gc2l6ZS53aWR0aCksIHBvc2l0aW9uWzFdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCAtIHNpemUuaGVpZ2h0KSk7XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGgoYmFja2dyb3VuZCwgcG9zaXRpb24sIHNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEsIGJvdW5kcykge1xuICAgIHZhciByZXBlYXQgPSBiYWNrZ3JvdW5kLnJlcGVhdDtcbiAgICBzd2l0Y2ggKHJlcGVhdCkge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9YOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKHNpemUuaGVpZ2h0ICsgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKHNpemUuaGVpZ2h0ICsgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSldO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSldO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULk5PX1JFUEVBVDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQpKV07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpXTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmQoc3R5bGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmJhY2tncm91bmRDb2xvciksXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzKHN0eWxlLCByZXNvdXJjZUxvYWRlciksXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBwYXJzZUJhY2tncm91bmRDbGlwKHN0eWxlLmJhY2tncm91bmRDbGlwKSxcbiAgICAgICAgYmFja2dyb3VuZE9yaWdpbjogcGFyc2VCYWNrZ3JvdW5kT3JpZ2luKHN0eWxlLmJhY2tncm91bmRPcmlnaW4pXG4gICAgfTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRDbGlwID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kQ2xpcChiYWNrZ3JvdW5kQ2xpcCkge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZENsaXApIHtcbiAgICAgICAgY2FzZSAncGFkZGluZy1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWDtcbiAgICAgICAgY2FzZSAnY29udGVudC1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5DT05URU5UX0JPWDtcbiAgICB9XG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5CT1JERVJfQk9YO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZE9yaWdpbiA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZE9yaWdpbihiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWDtcbiAgICAgICAgY2FzZSAnY29udGVudC1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkNPTlRFTlRfQk9YO1xuICAgIH1cbiAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uQk9SREVSX0JPWDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRSZXBlYXQgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRSZXBlYXQoYmFja2dyb3VuZFJlcGVhdCkge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZFJlcGVhdC50cmltKCkpIHtcbiAgICAgICAgY2FzZSAnbm8tcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5OT19SRVBFQVQ7XG4gICAgICAgIGNhc2UgJ3JlcGVhdC14JzpcbiAgICAgICAgY2FzZSAncmVwZWF0IG5vLXJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1g7XG4gICAgICAgIGNhc2UgJ3JlcGVhdC15JzpcbiAgICAgICAgY2FzZSAnbm8tcmVwZWF0IHJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1k7XG4gICAgICAgIGNhc2UgJ3JlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgYmFja2dyb3VuZC1yZXBlYXQgdmFsdWUgXCInICsgYmFja2dyb3VuZFJlcGVhdCArICdcIicpO1xuICAgIH1cblxuICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVQ7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzKHN0eWxlLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHZhciBzb3VyY2VzID0gcGFyc2VCYWNrZ3JvdW5kSW1hZ2Uoc3R5bGUuYmFja2dyb3VuZEltYWdlKS5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSByZXNvdXJjZUxvYWRlci5sb2FkSW1hZ2UoYmFja2dyb3VuZEltYWdlLmFyZ3NbMF0pO1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlLmFyZ3MgPSBrZXkgPyBba2V5XSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWNrZ3JvdW5kSW1hZ2U7XG4gICAgfSk7XG4gICAgdmFyIHBvc2l0aW9ucyA9IHN0eWxlLmJhY2tncm91bmRQb3NpdGlvbi5zcGxpdCgnLCcpO1xuICAgIHZhciByZXBlYXRzID0gc3R5bGUuYmFja2dyb3VuZFJlcGVhdC5zcGxpdCgnLCcpO1xuICAgIHZhciBzaXplcyA9IHN0eWxlLmJhY2tncm91bmRTaXplLnNwbGl0KCcsJyk7XG5cbiAgICByZXR1cm4gc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHNpemUgPSAoc2l6ZXNbaW5kZXhdIHx8IEFVVE8pLnRyaW0oKS5zcGxpdCgnICcpLm1hcChwYXJzZUJhY2tncm91bmRTaXplKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKHBvc2l0aW9uc1tpbmRleF0gfHwgQVVUTykudHJpbSgpLnNwbGl0KCcgJykubWFwKHBhcnNlQmFja2dvdW5kUG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHJlcGVhdDogcGFyc2VCYWNrZ3JvdW5kUmVwZWF0KHR5cGVvZiByZXBlYXRzW2luZGV4XSA9PT0gJ3N0cmluZycgPyByZXBlYXRzW2luZGV4XSA6IHJlcGVhdHNbMF0pLFxuICAgICAgICAgICAgc2l6ZTogc2l6ZS5sZW5ndGggPCAyID8gW3NpemVbMF0sIEFVVE9fU0laRV0gOiBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24ubGVuZ3RoIDwgMiA/IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMF1dIDogW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblsxXV1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kU2l6ZShzaXplKSB7XG4gICAgcmV0dXJuIHNpemUgPT09ICdhdXRvJyA/IEFVVE9fU0laRSA6IG5ldyBCYWNrZ3JvdW5kU2l6ZShzaXplKTtcbn07XG5cbnZhciBwYXJzZUJhY2tnb3VuZFBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VCYWNrZ291bmRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJyk7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQocG9zaXRpb24pO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmRJbWFnZSA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlKGltYWdlKSB7XG4gICAgdmFyIHdoaXRlc3BhY2UgPSAvXlxccyQvO1xuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBtZXRob2QgPSAnJztcbiAgICB2YXIgcXVvdGUgPSBudWxsO1xuICAgIHZhciBkZWZpbml0aW9uID0gJyc7XG4gICAgdmFyIG1vZGUgPSAwO1xuICAgIHZhciBudW1QYXJlbiA9IDA7XG5cbiAgICB2YXIgYXBwZW5kUmVzdWx0ID0gZnVuY3Rpb24gYXBwZW5kUmVzdWx0KCkge1xuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnN1YnN0cigwLCAxKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkZWZpbml0aW9uLnN1YnN0cigxLCBkZWZpbml0aW9uLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChkZWZpbml0aW9uLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhfaSA9IG1ldGhvZC5pbmRleE9mKCctJywgMSkgKyAxO1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5zdWJzdHIoMCwgMSkgPT09ICctJyAmJiBwcmVmaXhfaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBtZXRob2Quc3Vic3RyKDAsIHByZWZpeF9pKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZC5zdWJzdHIocHJlZml4X2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAobWV0aG9kICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmdzID0gW107XG4gICAgICAgIG1ldGhvZCA9IGRlZmluaXRpb24gPSAnJztcbiAgICB9O1xuXG4gICAgaW1hZ2Uuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKG1vZGUgPT09IDAgJiYgd2hpdGVzcGFjZS50ZXN0KGMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgaWYgKCFxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdW90ZSA9PT0gYykge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bVBhcmVuKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1QYXJlbi0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbiA9PT0gMCAmJiAhbWV0aG9kLm1hdGNoKC9edXJsJC9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICBtZXRob2QgKz0gYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gKz0gYztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvcmRlciA9IGV4cG9ydHMuQk9SREVSX1NJREVTID0gZXhwb3J0cy5CT1JERVJfU1RZTEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEJPUkRFUl9TVFlMRSA9IGV4cG9ydHMuQk9SREVSX1NUWUxFID0ge1xuICAgIE5PTkU6IDAsXG4gICAgU09MSUQ6IDFcbn07XG5cbnZhciBCT1JERVJfU0lERVMgPSBleHBvcnRzLkJPUkRFUl9TSURFUyA9IHtcbiAgICBUT1A6IDAsXG4gICAgUklHSFQ6IDEsXG4gICAgQk9UVE9NOiAyLFxuICAgIExFRlQ6IDNcbn07XG5cbnZhciBTSURFUyA9IE9iamVjdC5rZXlzKEJPUkRFUl9TSURFUykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcGFyc2VCb3JkZXJTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyU3R5bGUoc3R5bGUpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgcmV0dXJuIEJPUkRFUl9TVFlMRS5OT05FO1xuICAgIH1cbiAgICByZXR1cm4gQk9SREVSX1NUWUxFLlNPTElEO1xufTtcblxudmFyIHBhcnNlQm9yZGVyID0gZXhwb3J0cy5wYXJzZUJvcmRlciA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgYm9yZGVyQ29sb3IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctY29sb3InKSk7XG4gICAgICAgIHZhciBib3JkZXJTdHlsZSA9IHBhcnNlQm9yZGVyU3R5bGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1zdHlsZScpKTtcbiAgICAgICAgdmFyIGJvcmRlcldpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXdpZHRoJykpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGlzTmFOKGJvcmRlcldpZHRoKSA/IDAgOiBib3JkZXJXaWR0aFxuICAgICAgICB9O1xuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3JkZXJSYWRpdXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNJREVTID0gWyd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0J107XG5cbnZhciBwYXJzZUJvcmRlclJhZGl1cyA9IGV4cG9ydHMucGFyc2VCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbiBwYXJzZUJvcmRlclJhZGl1cyhzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1yYWRpdXMnKTtcblxuICAgICAgICB2YXIgX3ZhbHVlJHNwbGl0JG1hcCA9IHZhbHVlLnNwbGl0KCcgJykubWFwKF9MZW5ndGgyLmRlZmF1bHQuY3JlYXRlKSxcbiAgICAgICAgICAgIF92YWx1ZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0JG1hcCwgMiksXG4gICAgICAgICAgICBob3Jpem9udGFsID0gX3ZhbHVlJHNwbGl0JG1hcDJbMF0sXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF92YWx1ZSRzcGxpdCRtYXAyWzFdO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmVydGljYWwgPT09ICd1bmRlZmluZWQnID8gW2hvcml6b250YWwsIGhvcml6b250YWxdIDogW2hvcml6b250YWwsIHZlcnRpY2FsXTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRElTUExBWSA9IGV4cG9ydHMuRElTUExBWSA9IHtcbiAgICBOT05FOiAxIDw8IDAsXG4gICAgQkxPQ0s6IDEgPDwgMSxcbiAgICBJTkxJTkU6IDEgPDwgMixcbiAgICBSVU5fSU46IDEgPDwgMyxcbiAgICBGTE9XOiAxIDw8IDQsXG4gICAgRkxPV19ST09UOiAxIDw8IDUsXG4gICAgVEFCTEU6IDEgPDwgNixcbiAgICBGTEVYOiAxIDw8IDcsXG4gICAgR1JJRDogMSA8PCA4LFxuICAgIFJVQlk6IDEgPDwgOSxcbiAgICBTVUJHUklEOiAxIDw8IDEwLFxuICAgIExJU1RfSVRFTTogMSA8PCAxMSxcbiAgICBUQUJMRV9ST1dfR1JPVVA6IDEgPDwgMTIsXG4gICAgVEFCTEVfSEVBREVSX0dST1VQOiAxIDw8IDEzLFxuICAgIFRBQkxFX0ZPT1RFUl9HUk9VUDogMSA8PCAxNCxcbiAgICBUQUJMRV9ST1c6IDEgPDwgMTUsXG4gICAgVEFCTEVfQ0VMTDogMSA8PCAxNixcbiAgICBUQUJMRV9DT0xVTU5fR1JPVVA6IDEgPDwgMTcsXG4gICAgVEFCTEVfQ09MVU1OOiAxIDw8IDE4LFxuICAgIFRBQkxFX0NBUFRJT046IDEgPDwgMTksXG4gICAgUlVCWV9CQVNFOiAxIDw8IDIwLFxuICAgIFJVQllfVEVYVDogMSA8PCAyMSxcbiAgICBSVUJZX0JBU0VfQ09OVEFJTkVSOiAxIDw8IDIyLFxuICAgIFJVQllfVEVYVF9DT05UQUlORVI6IDEgPDwgMjMsXG4gICAgQ09OVEVOVFM6IDEgPDwgMjQsXG4gICAgSU5MSU5FX0JMT0NLOiAxIDw8IDI1LFxuICAgIElOTElORV9MSVNUX0lURU06IDEgPDwgMjYsXG4gICAgSU5MSU5FX1RBQkxFOiAxIDw8IDI3LFxuICAgIElOTElORV9GTEVYOiAxIDw8IDI4LFxuICAgIElOTElORV9HUklEOiAxIDw8IDI5XG59O1xuXG52YXIgcGFyc2VEaXNwbGF5VmFsdWUgPSBmdW5jdGlvbiBwYXJzZURpc3BsYXlWYWx1ZShkaXNwbGF5KSB7XG4gICAgc3dpdGNoIChkaXNwbGF5KSB7XG4gICAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkJMT0NLO1xuICAgICAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FO1xuICAgICAgICBjYXNlICdydW4taW4nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVOX0lOO1xuICAgICAgICBjYXNlICdmbG93JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMT1c7XG4gICAgICAgIGNhc2UgJ2Zsb3ctcm9vdCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTE9XX1JPT1Q7XG4gICAgICAgIGNhc2UgJ3RhYmxlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFO1xuICAgICAgICBjYXNlICdmbGV4JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMRVg7XG4gICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuR1JJRDtcbiAgICAgICAgY2FzZSAncnVieSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZO1xuICAgICAgICBjYXNlICdzdWJncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlNVQkdSSUQ7XG4gICAgICAgIGNhc2UgJ2xpc3QtaXRlbSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5MSVNUX0lURU07XG4gICAgICAgIGNhc2UgJ3RhYmxlLXJvdy1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1dfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWhlYWRlci1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9IRUFERVJfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWZvb3Rlci1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9GT09URVJfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLXJvdyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1c7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNlbGwnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ0VMTDtcbiAgICAgICAgY2FzZSAndGFibGUtY29sdW1uLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NPTFVNTl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtY29sdW1uJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NPTFVNTjtcbiAgICAgICAgY2FzZSAndGFibGUtY2FwdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DQVBUSU9OO1xuICAgICAgICBjYXNlICdydWJ5LWJhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9CQVNFO1xuICAgICAgICBjYXNlICdydWJ5LXRleHQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9URVhUO1xuICAgICAgICBjYXNlICdydWJ5LWJhc2UtY29udGFpbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfQkFTRV9DT05UQUlORVI7XG4gICAgICAgIGNhc2UgJ3J1YnktdGV4dC1jb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9URVhUX0NPTlRBSU5FUjtcbiAgICAgICAgY2FzZSAnY29udGVudHMnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuQ09OVEVOVFM7XG4gICAgICAgIGNhc2UgJ2lubGluZS1ibG9jayc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfQkxPQ0s7XG4gICAgICAgIGNhc2UgJ2lubGluZS1saXN0LWl0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0xJU1RfSVRFTTtcbiAgICAgICAgY2FzZSAnaW5saW5lLXRhYmxlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9UQUJMRTtcbiAgICAgICAgY2FzZSAnaW5saW5lLWZsZXgnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0ZMRVg7XG4gICAgICAgIGNhc2UgJ2lubGluZS1ncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9HUklEO1xuICAgIH1cblxuICAgIHJldHVybiBESVNQTEFZLk5PTkU7XG59O1xuXG52YXIgc2V0RGlzcGxheUJpdCA9IGZ1bmN0aW9uIHNldERpc3BsYXlCaXQoYml0LCBkaXNwbGF5KSB7XG4gICAgcmV0dXJuIGJpdCB8IHBhcnNlRGlzcGxheVZhbHVlKGRpc3BsYXkpO1xufTtcblxudmFyIHBhcnNlRGlzcGxheSA9IGV4cG9ydHMucGFyc2VEaXNwbGF5ID0gZnVuY3Rpb24gcGFyc2VEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICByZXR1cm4gZGlzcGxheS5zcGxpdCgnICcpLnJlZHVjZShzZXREaXNwbGF5Qml0LCAwKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRkxPQVQgPSBleHBvcnRzLkZMT0FUID0ge1xuICAgIE5PTkU6IDAsXG4gICAgTEVGVDogMSxcbiAgICBSSUdIVDogMixcbiAgICBJTkxJTkVfU1RBUlQ6IDMsXG4gICAgSU5MSU5FX0VORDogNFxufTtcblxudmFyIHBhcnNlQ1NTRmxvYXQgPSBleHBvcnRzLnBhcnNlQ1NTRmxvYXQgPSBmdW5jdGlvbiBwYXJzZUNTU0Zsb2F0KGZsb2F0KSB7XG4gICAgc3dpdGNoIChmbG9hdCkge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5MRUZUO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuUklHSFQ7XG4gICAgICAgIGNhc2UgJ2lubGluZS1zdGFydCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX1NUQVJUO1xuICAgICAgICBjYXNlICdpbmxpbmUtZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5JTkxJTkVfRU5EO1xuICAgIH1cbiAgICByZXR1cm4gRkxPQVQuTk9ORTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cblxudmFyIHBhcnNlRm9udFdlaWdodCA9IGZ1bmN0aW9uIHBhcnNlRm9udFdlaWdodCh3ZWlnaHQpIHtcbiAgICBzd2l0Y2ggKHdlaWdodCkge1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgY2FzZSAnYm9sZCc6XG4gICAgICAgICAgICByZXR1cm4gNzAwO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KHdlaWdodCwgMTApO1xuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyA0MDAgOiB2YWx1ZTtcbn07XG5cbnZhciBwYXJzZUZvbnQgPSBleHBvcnRzLnBhcnNlRm9udCA9IGZ1bmN0aW9uIHBhcnNlRm9udChzdHlsZSkge1xuICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGUuZm9udEZhbWlseTtcbiAgICB2YXIgZm9udFNpemUgPSBzdHlsZS5mb250U2l6ZTtcbiAgICB2YXIgZm9udFN0eWxlID0gc3R5bGUuZm9udFN0eWxlO1xuICAgIHZhciBmb250VmFyaWFudCA9IHN0eWxlLmZvbnRWYXJpYW50O1xuICAgIHZhciBmb250V2VpZ2h0ID0gcGFyc2VGb250V2VpZ2h0KHN0eWxlLmZvbnRXZWlnaHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgICAgICBmb250U3R5bGU6IGZvbnRTdHlsZSxcbiAgICAgICAgZm9udFZhcmlhbnQ6IGZvbnRWYXJpYW50LFxuICAgICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0XG4gICAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcGFyc2VMZXR0ZXJTcGFjaW5nID0gZXhwb3J0cy5wYXJzZUxldHRlclNwYWNpbmcgPSBmdW5jdGlvbiBwYXJzZUxldHRlclNwYWNpbmcobGV0dGVyU3BhY2luZykge1xuICAgIGlmIChsZXR0ZXJTcGFjaW5nID09PSAnbm9ybWFsJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZXR0ZXJTcGFjaW5nKTtcbiAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBMSU5FX0JSRUFLID0gZXhwb3J0cy5MSU5FX0JSRUFLID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgU1RSSUNUOiAnc3RyaWN0J1xufTtcblxudmFyIHBhcnNlTGluZUJyZWFrID0gZXhwb3J0cy5wYXJzZUxpbmVCcmVhayA9IGZ1bmN0aW9uIHBhcnNlTGluZUJyZWFrKHdvcmRCcmVhaykge1xuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XG4gICAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgICAgICByZXR1cm4gTElORV9CUkVBSy5TVFJJQ1Q7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElORV9CUkVBSy5OT1JNQUw7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGV4cG9ydHMuTElTVF9TVFlMRV9UWVBFID0gZXhwb3J0cy5MSVNUX1NUWUxFX1BPU0lUSU9OID0gdW5kZWZpbmVkO1xuXG52YXIgX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL2JhY2tncm91bmQnKTtcblxudmFyIExJU1RfU1RZTEVfUE9TSVRJT04gPSBleHBvcnRzLkxJU1RfU1RZTEVfUE9TSVRJT04gPSB7XG4gICAgSU5TSURFOiAwLFxuICAgIE9VVFNJREU6IDFcbn07XG5cbnZhciBMSVNUX1NUWUxFX1RZUEUgPSBleHBvcnRzLkxJU1RfU1RZTEVfVFlQRSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBESVNDOiAwLFxuICAgIENJUkNMRTogMSxcbiAgICBTUVVBUkU6IDIsXG4gICAgREVDSU1BTDogMyxcbiAgICBDSktfREVDSU1BTDogNCxcbiAgICBERUNJTUFMX0xFQURJTkdfWkVSTzogNSxcbiAgICBMT1dFUl9ST01BTjogNixcbiAgICBVUFBFUl9ST01BTjogNyxcbiAgICBMT1dFUl9HUkVFSzogOCxcbiAgICBMT1dFUl9BTFBIQTogOSxcbiAgICBVUFBFUl9BTFBIQTogMTAsXG4gICAgQVJBQklDX0lORElDOiAxMSxcbiAgICBBUk1FTklBTjogMTIsXG4gICAgQkVOR0FMSTogMTMsXG4gICAgQ0FNQk9ESUFOOiAxNCxcbiAgICBDSktfRUFSVEhMWV9CUkFOQ0g6IDE1LFxuICAgIENKS19IRUFWRU5MWV9TVEVNOiAxNixcbiAgICBDSktfSURFT0dSQVBISUM6IDE3LFxuICAgIERFVkFOQUdBUkk6IDE4LFxuICAgIEVUSElPUElDX05VTUVSSUM6IDE5LFxuICAgIEdFT1JHSUFOOiAyMCxcbiAgICBHVUpBUkFUSTogMjEsXG4gICAgR1VSTVVLSEk6IDIyLFxuICAgIEhFQlJFVzogMjIsXG4gICAgSElSQUdBTkE6IDIzLFxuICAgIEhJUkFHQU5BX0lST0hBOiAyNCxcbiAgICBKQVBBTkVTRV9GT1JNQUw6IDI1LFxuICAgIEpBUEFORVNFX0lORk9STUFMOiAyNixcbiAgICBLQU5OQURBOiAyNyxcbiAgICBLQVRBS0FOQTogMjgsXG4gICAgS0FUQUtBTkFfSVJPSEE6IDI5LFxuICAgIEtITUVSOiAzMCxcbiAgICBLT1JFQU5fSEFOR1VMX0ZPUk1BTDogMzEsXG4gICAgS09SRUFOX0hBTkpBX0ZPUk1BTDogMzIsXG4gICAgS09SRUFOX0hBTkpBX0lORk9STUFMOiAzMyxcbiAgICBMQU86IDM0LFxuICAgIExPV0VSX0FSTUVOSUFOOiAzNSxcbiAgICBNQUxBWUFMQU06IDM2LFxuICAgIE1PTkdPTElBTjogMzcsXG4gICAgTVlBTk1BUjogMzgsXG4gICAgT1JJWUE6IDM5LFxuICAgIFBFUlNJQU46IDQwLFxuICAgIFNJTVBfQ0hJTkVTRV9GT1JNQUw6IDQxLFxuICAgIFNJTVBfQ0hJTkVTRV9JTkZPUk1BTDogNDIsXG4gICAgVEFNSUw6IDQzLFxuICAgIFRFTFVHVTogNDQsXG4gICAgVEhBSTogNDUsXG4gICAgVElCRVRBTjogNDYsXG4gICAgVFJBRF9DSElORVNFX0ZPUk1BTDogNDcsXG4gICAgVFJBRF9DSElORVNFX0lORk9STUFMOiA0OCxcbiAgICBVUFBFUl9BUk1FTklBTjogNDksXG4gICAgRElTQ0xPU1VSRV9PUEVOOiA1MCxcbiAgICBESVNDTE9TVVJFX0NMT1NFRDogNTFcbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZVR5cGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlVHlwZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Rpc2MnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDO1xuICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSVJDTEU7XG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNRVUFSRTtcbiAgICAgICAgY2FzZSAnZGVjaW1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUw7XG4gICAgICAgIGNhc2UgJ2Nqay1kZWNpbWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0RFQ0lNQUw7XG4gICAgICAgIGNhc2UgJ2RlY2ltYWwtbGVhZGluZy16ZXJvJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk87XG4gICAgICAgIGNhc2UgJ2xvd2VyLXJvbWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU47XG4gICAgICAgIGNhc2UgJ3VwcGVyLXJvbWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfUk9NQU47XG4gICAgICAgIGNhc2UgJ2xvd2VyLWdyZWVrJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfR1JFRUs7XG4gICAgICAgIGNhc2UgJ2xvd2VyLWFscGhhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE7XG4gICAgICAgIGNhc2UgJ3VwcGVyLWFscGhhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfQUxQSEE7XG4gICAgICAgIGNhc2UgJ2FyYWJpYy1pbmRpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQztcbiAgICAgICAgY2FzZSAnYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnYmVuZ2FsaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkJFTkdBTEk7XG4gICAgICAgIGNhc2UgJ2NhbWJvZGlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjtcbiAgICAgICAgY2FzZSAnY2prLWVhcnRobHktYnJhbmNoJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0VBUlRITFlfQlJBTkNIO1xuICAgICAgICBjYXNlICdjamstaGVhdmVubHktc3RlbSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19IRUFWRU5MWV9TVEVNO1xuICAgICAgICBjYXNlICdjamstaWRlb2dyYXBoaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfSURFT0dSQVBISUM7XG4gICAgICAgIGNhc2UgJ2RldmFuYWdhcmknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERVZBTkFHQVJJO1xuICAgICAgICBjYXNlICdldGhpb3BpYy1udW1lcmljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRVRISU9QSUNfTlVNRVJJQztcbiAgICAgICAgY2FzZSAnZ2VvcmdpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HRU9SR0lBTjtcbiAgICAgICAgY2FzZSAnZ3VqYXJhdGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HVUpBUkFUSTtcbiAgICAgICAgY2FzZSAnZ3VybXVraGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HVVJNVUtISTtcbiAgICAgICAgY2FzZSAnaGVicmV3JzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSEVCUkVXO1xuICAgICAgICBjYXNlICdoaXJhZ2FuYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BO1xuICAgICAgICBjYXNlICdoaXJhZ2FuYS1pcm9oYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BX0lST0hBO1xuICAgICAgICBjYXNlICdqYXBhbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2phcGFuZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2thbm5hZGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQU5OQURBO1xuICAgICAgICBjYXNlICdrYXRha2FuYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BO1xuICAgICAgICBjYXNlICdrYXRha2FuYS1pcm9oYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BX0lST0hBO1xuICAgICAgICBjYXNlICdraG1lcic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktITUVSO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuZ3VsLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5HVUxfRk9STUFMO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuamEtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmphLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0lORk9STUFMO1xuICAgICAgICBjYXNlICdsYW8nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MQU87XG4gICAgICAgIGNhc2UgJ2xvd2VyLWFybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ21hbGF5YWxhbSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1BTEFZQUxBTTtcbiAgICAgICAgY2FzZSAnbW9uZ29saWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTU9OR09MSUFOO1xuICAgICAgICBjYXNlICdteWFubWFyJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjtcbiAgICAgICAgY2FzZSAnb3JpeWEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5PUklZQTtcbiAgICAgICAgY2FzZSAncGVyc2lhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlBFUlNJQU47XG4gICAgICAgIGNhc2UgJ3NpbXAtY2hpbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICdzaW1wLWNoaW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3RhbWlsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEFNSUw7XG4gICAgICAgIGNhc2UgJ3RlbHVndSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRFTFVHVTtcbiAgICAgICAgY2FzZSAndGhhaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRIQUk7XG4gICAgICAgIGNhc2UgJ3RpYmV0YW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5USUJFVEFOO1xuICAgICAgICBjYXNlICd0cmFkLWNoaW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAndHJhZC1jaGluZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICd1cHBlci1hcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOO1xuICAgICAgICBjYXNlICdkaXNjbG9zdXJlLW9wZW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDTE9TVVJFX09QRU47XG4gICAgICAgIGNhc2UgJ2Rpc2Nsb3N1cmUtY2xvc2VkJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQ0xPU1VSRV9DTE9TRUQ7XG4gICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5OT05FO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZShzdHlsZSkge1xuICAgIHZhciBsaXN0U3R5bGVJbWFnZSA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS1pbWFnZScpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0U3R5bGVUeXBlOiBwYXJzZUxpc3RTdHlsZVR5cGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS10eXBlJykpLFxuICAgICAgICBsaXN0U3R5bGVJbWFnZTogbGlzdFN0eWxlSW1hZ2UubGVuZ3RoID8gbGlzdFN0eWxlSW1hZ2VbMF0gOiBudWxsLFxuICAgICAgICBsaXN0U3R5bGVQb3NpdGlvbjogcGFyc2VMaXN0U3R5bGVQb3NpdGlvbihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLXBvc2l0aW9uJykpXG4gICAgfTtcbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGVQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAnaW5zaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1BPU0lUSU9OLklOU0lERTtcbiAgICAgICAgY2FzZSAnb3V0c2lkZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlTWFyZ2luID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0lERVMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuXG52YXIgcGFyc2VNYXJnaW4gPSBleHBvcnRzLnBhcnNlTWFyZ2luID0gZnVuY3Rpb24gcGFyc2VNYXJnaW4oc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tJyArIHNpZGUpKTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgT1ZFUkZMT1cgPSBleHBvcnRzLk9WRVJGTE9XID0ge1xuICAgIFZJU0lCTEU6IDAsXG4gICAgSElEREVOOiAxLFxuICAgIFNDUk9MTDogMixcbiAgICBBVVRPOiAzXG59O1xuXG52YXIgcGFyc2VPdmVyZmxvdyA9IGV4cG9ydHMucGFyc2VPdmVyZmxvdyA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3cob3ZlcmZsb3cpIHtcbiAgICBzd2l0Y2ggKG92ZXJmbG93KSB7XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuSElEREVOO1xuICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLlNDUk9MTDtcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuQVVUTztcbiAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuVklTSUJMRTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIE9WRVJGTE9XX1dSQVAgPSBleHBvcnRzLk9WRVJGTE9XX1dSQVAgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJSRUFLX1dPUkQ6IDFcbn07XG5cbnZhciBwYXJzZU92ZXJmbG93V3JhcCA9IGV4cG9ydHMucGFyc2VPdmVyZmxvd1dyYXAgPSBmdW5jdGlvbiBwYXJzZU92ZXJmbG93V3JhcChvdmVyZmxvdykge1xuICAgIHN3aXRjaCAob3ZlcmZsb3cpIHtcbiAgICAgICAgY2FzZSAnYnJlYWstd29yZCc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1dfV1JBUC5CUkVBS19XT1JEO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XX1dSQVAuTk9STUFMO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlUGFkZGluZyA9IGV4cG9ydHMuUEFERElOR19TSURFUyA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBBRERJTkdfU0lERVMgPSBleHBvcnRzLlBBRERJTkdfU0lERVMgPSB7XG4gICAgVE9QOiAwLFxuICAgIFJJR0hUOiAxLFxuICAgIEJPVFRPTTogMixcbiAgICBMRUZUOiAzXG59O1xuXG52YXIgU0lERVMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuXG52YXIgcGFyc2VQYWRkaW5nID0gZXhwb3J0cy5wYXJzZVBhZGRpbmcgPSBmdW5jdGlvbiBwYXJzZVBhZGRpbmcoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLScgKyBzaWRlKSk7XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFBPU0lUSU9OID0gZXhwb3J0cy5QT1NJVElPTiA9IHtcbiAgICBTVEFUSUM6IDAsXG4gICAgUkVMQVRJVkU6IDEsXG4gICAgQUJTT0xVVEU6IDIsXG4gICAgRklYRUQ6IDMsXG4gICAgU1RJQ0tZOiA0XG59O1xuXG52YXIgcGFyc2VQb3NpdGlvbiA9IGV4cG9ydHMucGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3JlbGF0aXZlJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5SRUxBVElWRTtcbiAgICAgICAgY2FzZSAnYWJzb2x1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLkFCU09MVVRFO1xuICAgICAgICBjYXNlICdmaXhlZCc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uRklYRUQ7XG4gICAgICAgIGNhc2UgJ3N0aWNreSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uU1RJQ0tZO1xuICAgIH1cblxuICAgIHJldHVybiBQT1NJVElPTi5TVEFUSUM7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHREZWNvcmF0aW9uID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fU1RZTEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRFWFRfREVDT1JBVElPTl9TVFlMRSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0ge1xuICAgIFNPTElEOiAwLFxuICAgIERPVUJMRTogMSxcbiAgICBET1RURUQ6IDIsXG4gICAgREFTSEVEOiAzLFxuICAgIFdBVlk6IDRcbn07XG5cbnZhciBURVhUX0RFQ09SQVRJT04gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTiA9IHtcbiAgICBOT05FOiBudWxsXG59O1xuXG52YXIgVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9MSU5FID0ge1xuICAgIFVOREVSTElORTogMSxcbiAgICBPVkVSTElORTogMixcbiAgICBMSU5FX1RIUk9VR0g6IDMsXG4gICAgQkxJTks6IDRcbn07XG5cbnZhciBwYXJzZUxpbmUgPSBmdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xuICAgIHN3aXRjaCAobGluZSkge1xuICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLlVOREVSTElORTtcbiAgICAgICAgY2FzZSAnb3ZlcmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLk9WRVJMSU5FO1xuICAgICAgICBjYXNlICdsaW5lLXRocm91Z2gnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLkxJTkVfVEhST1VHSDtcbiAgICB9XG4gICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLkJMSU5LO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb25MaW5lID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUobGluZSkge1xuICAgIGlmIChsaW5lID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmUuc3BsaXQoJyAnKS5tYXAocGFyc2VMaW5lKTtcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUoc3R5bGUpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRPVUJMRTtcbiAgICAgICAgY2FzZSAnZG90dGVkJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuRE9UVEVEO1xuICAgICAgICBjYXNlICdkYXNoZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5EQVNIRUQ7XG4gICAgICAgIGNhc2UgJ3dhdnknOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5XQVZZO1xuICAgIH1cbiAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLlNPTElEO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb24gPSBleHBvcnRzLnBhcnNlVGV4dERlY29yYXRpb24gPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uKHN0eWxlKSB7XG4gICAgdmFyIHRleHREZWNvcmF0aW9uTGluZSA9IHBhcnNlVGV4dERlY29yYXRpb25MaW5lKHN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA/IHN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA6IHN0eWxlLnRleHREZWNvcmF0aW9uKTtcbiAgICBpZiAodGV4dERlY29yYXRpb25MaW5lID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT04uTk9ORTtcbiAgICB9XG5cbiAgICB2YXIgdGV4dERlY29yYXRpb25Db2xvciA9IHN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IpIDogbnVsbDtcbiAgICB2YXIgdGV4dERlY29yYXRpb25TdHlsZSA9IHBhcnNlVGV4dERlY29yYXRpb25TdHlsZShzdHlsZS50ZXh0RGVjb3JhdGlvblN0eWxlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uTGluZTogdGV4dERlY29yYXRpb25MaW5lLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiB0ZXh0RGVjb3JhdGlvbkNvbG9yLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiB0ZXh0RGVjb3JhdGlvblN0eWxlXG4gICAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dFNoYWRvdyA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4uL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNQkVSID0gL14oWystXXxcXGR8XFwuKSQvaTtcblxudmFyIHBhcnNlVGV4dFNoYWRvdyA9IGV4cG9ydHMucGFyc2VUZXh0U2hhZG93ID0gZnVuY3Rpb24gcGFyc2VUZXh0U2hhZG93KHRleHRTaGFkb3cpIHtcbiAgICBpZiAodGV4dFNoYWRvdyA9PT0gJ25vbmUnIHx8IHR5cGVvZiB0ZXh0U2hhZG93ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFZhbHVlID0gJyc7XG4gICAgdmFyIGlzTGVuZ3RoID0gZmFsc2U7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhciBzaGFkb3dzID0gW107XG4gICAgdmFyIG51bVBhcmVucyA9IDA7XG4gICAgdmFyIGNvbG9yID0gbnVsbDtcblxuICAgIHZhciBhcHBlbmRWYWx1ZSA9IGZ1bmN0aW9uIGFwcGVuZFZhbHVlKCkge1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGlzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXNMZW5ndGggPSBmYWxzZTtcbiAgICAgICAgY3VycmVudFZhbHVlID0gJyc7XG4gICAgfTtcblxuICAgIHZhciBhcHBlbmRTaGFkb3cgPSBmdW5jdGlvbiBhcHBlbmRTaGFkb3coKSB7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoICYmIGNvbG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzaGFkb3dzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICBvZmZzZXRYOiB2YWx1ZXNbMF0gfHwgMCxcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiB2YWx1ZXNbMV0gfHwgMCxcbiAgICAgICAgICAgICAgICBibHVyOiB2YWx1ZXNbMl0gfHwgMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzLnNwbGljZSgwLCB2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgY29sb3IgPSBudWxsO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRTaGFkb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0U2hhZG93W2ldO1xuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIG51bVBhcmVucysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgbnVtUGFyZW5zLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFNoYWRvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoID09PSAwICYmIE5VTUJFUi50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRWYWx1ZSgpO1xuICAgIGFwcGVuZFNoYWRvdygpO1xuXG4gICAgaWYgKHNoYWRvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkb3dzO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBURVhUX1RSQU5TRk9STSA9IGV4cG9ydHMuVEVYVF9UUkFOU0ZPUk0gPSB7XG4gICAgTk9ORTogMCxcbiAgICBMT1dFUkNBU0U6IDEsXG4gICAgVVBQRVJDQVNFOiAyLFxuICAgIENBUElUQUxJWkU6IDNcbn07XG5cbnZhciBwYXJzZVRleHRUcmFuc2Zvcm0gPSBleHBvcnRzLnBhcnNlVGV4dFRyYW5zZm9ybSA9IGZ1bmN0aW9uIHBhcnNlVGV4dFRyYW5zZm9ybSh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgc3dpdGNoICh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uVVBQRVJDQVNFO1xuICAgICAgICBjYXNlICdsb3dlcmNhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkxPV0VSQ0FTRTtcbiAgICAgICAgY2FzZSAnY2FwaXRhbGl6ZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uQ0FQSVRBTElaRTtcbiAgICB9XG5cbiAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uTk9ORTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdG9GbG9hdCA9IGZ1bmN0aW9uIHRvRmxvYXQocykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHMudHJpbSgpKTtcbn07XG5cbnZhciBNQVRSSVggPSAvKG1hdHJpeHxtYXRyaXgzZClcXCgoLispXFwpLztcblxudmFyIHBhcnNlVHJhbnNmb3JtID0gZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtKHN0eWxlKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtTWF0cml4KHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtIHx8XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHN0eWxlLm1zVHJhbnNmb3JtIHx8XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHN0eWxlLm9UcmFuc2Zvcm0pO1xuICAgIGlmICh0cmFuc2Zvcm0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogcGFyc2VUcmFuc2Zvcm1PcmlnaW4oc3R5bGUudHJhbnNmb3JtT3JpZ2luIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbiB8fCBzdHlsZS5tb3pUcmFuc2Zvcm1PcmlnaW4gfHxcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBzdHlsZS5tc1RyYW5zZm9ybU9yaWdpbiB8fFxuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHN0eWxlLm9UcmFuc2Zvcm1PcmlnaW4pXG4gICAgfTtcbn07XG5cbi8vICRGbG93Rml4TWVcbnZhciBwYXJzZVRyYW5zZm9ybU9yaWdpbiA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtT3JpZ2luKG9yaWdpbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdiA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XG4gICAgICAgIHJldHVybiBbdiwgdl07XG4gICAgfVxuICAgIHZhciB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoJyAnKS5tYXAoX0xlbmd0aDIuZGVmYXVsdC5jcmVhdGUpO1xuICAgIHJldHVybiBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dO1xufTtcblxuLy8gJEZsb3dGaXhNZVxudmFyIHBhcnNlVHJhbnNmb3JtTWF0cml4ID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1NYXRyaXgodHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gJ25vbmUnIHx8IHR5cGVvZiB0cmFuc2Zvcm0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCA9IHRyYW5zZm9ybS5tYXRjaChNQVRSSVgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBpZiAobWF0Y2hbMV0gPT09ICdtYXRyaXgnKSB7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gbWF0Y2hbMl0uc3BsaXQoJywnKS5tYXAodG9GbG9hdCk7XG4gICAgICAgICAgICByZXR1cm4gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbMl0sIG1hdHJpeFszXSwgbWF0cml4WzRdLCBtYXRyaXhbNV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdHJpeDNkID0gbWF0Y2hbMl0uc3BsaXQoJywnKS5tYXAodG9GbG9hdCk7XG4gICAgICAgICAgICByZXR1cm4gW21hdHJpeDNkWzBdLCBtYXRyaXgzZFsxXSwgbWF0cml4M2RbNF0sIG1hdHJpeDNkWzVdLCBtYXRyaXgzZFsxMl0sIG1hdHJpeDNkWzEzXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFZJU0lCSUxJVFkgPSBleHBvcnRzLlZJU0lCSUxJVFkgPSB7XG4gICAgVklTSUJMRTogMCxcbiAgICBISURERU46IDEsXG4gICAgQ09MTEFQU0U6IDJcbn07XG5cbnZhciBwYXJzZVZpc2liaWxpdHkgPSBleHBvcnRzLnBhcnNlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHBhcnNlVmlzaWJpbGl0eSh2aXNpYmlsaXR5KSB7XG4gICAgc3dpdGNoICh2aXNpYmlsaXR5KSB7XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5ISURERU47XG4gICAgICAgIGNhc2UgJ2NvbGxhcHNlJzpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLkNPTExBUFNFO1xuICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLlZJU0lCTEU7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBXT1JEX0JSRUFLID0gZXhwb3J0cy5XT1JEX0JSRUFLID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgQlJFQUtfQUxMOiAnYnJlYWstYWxsJyxcbiAgICBLRUVQX0FMTDogJ2tlZXAtYWxsJ1xufTtcblxudmFyIHBhcnNlV29yZEJyZWFrID0gZXhwb3J0cy5wYXJzZVdvcmRCcmVhayA9IGZ1bmN0aW9uIHBhcnNlV29yZEJyZWFrKHdvcmRCcmVhaykge1xuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XG4gICAgICAgIGNhc2UgJ2JyZWFrLWFsbCc6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5CUkVBS19BTEw7XG4gICAgICAgIGNhc2UgJ2tlZXAtYWxsJzpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLktFRVBfQUxMO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuTk9STUFMO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcGFyc2VaSW5kZXggPSBleHBvcnRzLnBhcnNlWkluZGV4ID0gZnVuY3Rpb24gcGFyc2VaSW5kZXgoekluZGV4KSB7XG4gICAgdmFyIGF1dG8gPSB6SW5kZXggPT09ICdhdXRvJztcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRvOiBhdXRvLFxuICAgICAgICBvcmRlcjogYXV0byA/IDAgOiBwYXJzZUludCh6SW5kZXgsIDEwKVxuICAgIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuLi9kcmF3aW5nL1BhdGgnKTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4uL3BhcnNpbmcvdGV4dERlY29yYXRpb24nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGFkZENvbG9yU3RvcHMgPSBmdW5jdGlvbiBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCBjYW52YXNHcmFkaWVudCkge1xuICAgIHZhciBtYXhTdG9wID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZ3JhZGllbnQuY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKGNvbG9yU3RvcCkge1xuICAgICAgICByZXR1cm4gY29sb3JTdG9wLnN0b3A7XG4gICAgfSkpO1xuICAgIHZhciBmID0gMSAvIE1hdGgubWF4KDEsIG1heFN0b3ApO1xuICAgIGdyYWRpZW50LmNvbG9yU3RvcHMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3JTdG9wKSB7XG4gICAgICAgIGNhbnZhc0dyYWRpZW50LmFkZENvbG9yU3RvcChmICogY29sb3JTdG9wLnN0b3AsIGNvbG9yU3RvcC5jb2xvci50b1N0cmluZygpKTtcbiAgICB9KTtcbn07XG5cbnZhciBDYW52YXNSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXNSZW5kZXJlcihjYW52YXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbnZhc1JlbmRlcmVyKTtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyA/IGNhbnZhcyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYW52YXNSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLmZsb29yKG9wdGlvbnMud2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iob3B0aW9ucy5oZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMub3B0aW9ucy5zY2FsZSwgdGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb3B0aW9ucy54LCAtb3B0aW9ucy55KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xuICAgICAgICAgICAgb3B0aW9ucy5sb2dnZXIubG9nKCdDYW52YXMgcmVuZGVyZXIgaW5pdGlhbGl6ZWQgKCcgKyBvcHRpb25zLndpZHRoICsgJ3gnICsgb3B0aW9ucy5oZWlnaHQgKyAnIGF0ICcgKyBvcHRpb25zLnggKyAnLCcgKyBvcHRpb25zLnkgKyAnKSB3aXRoIHNjYWxlICcgKyB0aGlzLm9wdGlvbnMuc2NhbGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGlwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsaXAoY2xpcFBhdGhzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGNsaXBQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgY2xpcFBhdGhzLmZvckVhY2goZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmNsaXAoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgaWYgKGNsaXBQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RyYXdJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3SW1hZ2UoaW1hZ2UsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgc291cmNlLmxlZnQsIHNvdXJjZS50b3AsIHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodCwgZGVzdGluYXRpb24ubGVmdCwgZGVzdGluYXRpb24udG9wLCBkZXN0aW5hdGlvbi53aWR0aCwgZGVzdGluYXRpb24uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZHJhd1NoYXBlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXdTaGFwZShwYXRoLCBjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmlsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUYXJnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRoKF9wYXRoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGF0aCkpIHtcbiAgICAgICAgICAgICAgICBfcGF0aC5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcG9pbnQudHlwZSA9PT0gX1BhdGguUEFUSC5WRUNUT1IgPyBwb2ludCA6IHBvaW50LnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHgubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5saW5lVG8oc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnQudHlwZSA9PT0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHguYmV6aWVyQ3VydmVUbyhwb2ludC5zdGFydENvbnRyb2wueCwgcG9pbnQuc3RhcnRDb250cm9sLnksIHBvaW50LmVuZENvbnRyb2wueCwgcG9pbnQuZW5kQ29udHJvbC55LCBwb2ludC5lbmQueCwgcG9pbnQuZW5kLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhfcGF0aC54ICsgX3BhdGgucmFkaXVzLCBfcGF0aC55ICsgX3BhdGgucmFkaXVzLCBfcGF0aC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY3RhbmdsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTGluZWFyR3JhZGllbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGluZWFyR3JhZGllbnQoYm91bmRzLCBncmFkaWVudCkge1xuICAgICAgICAgICAgdmFyIGxpbmVhckdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoYm91bmRzLmxlZnQgKyBncmFkaWVudC5kaXJlY3Rpb24ueDEsIGJvdW5kcy50b3AgKyBncmFkaWVudC5kaXJlY3Rpb24ueTEsIGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuZGlyZWN0aW9uLngwLCBib3VuZHMudG9wICsgZ3JhZGllbnQuZGlyZWN0aW9uLnkwKTtcblxuICAgICAgICAgICAgYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgbGluZWFyR3JhZGllbnQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gbGluZWFyR3JhZGllbnQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUmFkaWFsR3JhZGllbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmFkaWFsR3JhZGllbnQoYm91bmRzLCBncmFkaWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciB4ID0gYm91bmRzLmxlZnQgKyBncmFkaWVudC5jZW50ZXIueDtcbiAgICAgICAgICAgIHZhciB5ID0gYm91bmRzLnRvcCArIGdyYWRpZW50LmNlbnRlci55O1xuXG4gICAgICAgICAgICB2YXIgcmFkaWFsR3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCBncmFkaWVudC5yYWRpdXMueCk7XG4gICAgICAgICAgICBpZiAoIXJhZGlhbEdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCByYWRpYWxHcmFkaWVudCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSByYWRpYWxHcmFkaWVudDtcblxuICAgICAgICAgICAgaWYgKGdyYWRpZW50LnJhZGl1cy54ICE9PSBncmFkaWVudC5yYWRpdXMueSkge1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybXMgZm9yIGVsbGlwdGljYWwgcmFkaWFsIGdyYWRpZW50XG4gICAgICAgICAgICAgICAgdmFyIG1pZFggPSBib3VuZHMubGVmdCArIDAuNSAqIGJvdW5kcy53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgbWlkWSA9IGJvdW5kcy50b3AgKyAwLjUgKiBib3VuZHMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBmID0gZ3JhZGllbnQucmFkaXVzLnkgLyBncmFkaWVudC5yYWRpdXMueDtcbiAgICAgICAgICAgICAgICB2YXIgaW52RiA9IDEgLyBmO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0obWlkWCwgbWlkWSwgWzEsIDAsIDAsIGYsIDAsIDBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBpbnZGICogKGJvdW5kcy50b3AgLSBtaWRZKSArIG1pZFksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCAqIGludkYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUmVwZWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlcGVhdChwYXRoLCBpbWFnZSwgaW1hZ2VTaXplLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVQYXR0ZXJuKHRoaXMucmVzaXplSW1hZ2UoaW1hZ2UsIGltYWdlU2l6ZSksICdyZXBlYXQnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb2Zmc2V0WCwgLW9mZnNldFkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJUZXh0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUZXh0Tm9kZSh0ZXh0Qm91bmRzLCBjb2xvciwgZm9udCwgdGV4dERlY29yYXRpb24sIHRleHRTaGFkb3dzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFtmb250LmZvbnRTdHlsZSwgZm9udC5mb250VmFyaWFudCwgZm9udC5mb250V2VpZ2h0LCBmb250LmZvbnRTaXplLCBmb250LmZvbnRGYW1pbHldLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgdGV4dEJvdW5kcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0U2hhZG93cyAmJiB0ZXh0LnRleHQudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhZG93cy5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAodGV4dFNoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dDb2xvciA9IHRleHRTaGFkb3cuY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93T2Zmc2V0WCA9IHRleHRTaGFkb3cub2Zmc2V0WCAqIF90aGlzNC5vcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dPZmZzZXRZID0gdGV4dFNoYWRvdy5vZmZzZXRZICogX3RoaXM0Lm9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd0JsdXIgPSB0ZXh0U2hhZG93LmJsdXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFRleHQodGV4dC50ZXh0LCB0ZXh0LmJvdW5kcy5sZWZ0LCB0ZXh0LmJvdW5kcy50b3AgKyB0ZXh0LmJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxUZXh0KHRleHQudGV4dCwgdGV4dC5ib3VuZHMubGVmdCwgdGV4dC5ib3VuZHMudG9wICsgdGV4dC5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGV4dERlY29yYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHREZWNvcmF0aW9uQ29sb3IgPSB0ZXh0RGVjb3JhdGlvbi50ZXh0RGVjb3JhdGlvbkNvbG9yIHx8IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbi50ZXh0RGVjb3JhdGlvbkxpbmUuZm9yRWFjaChmdW5jdGlvbiAodGV4dERlY29yYXRpb25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLlVOREVSTElORTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhd3MgYSBsaW5lIGF0IHRoZSBiYXNlbGluZSBvZiB0aGUgZm9udFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIEFzIHNvbWUgYnJvd3NlcnMgZGlzcGxheSB0aGUgbGluZSBhcyBtb3JlIHRoYW4gMXB4IGlmIHRoZSBmb250LXNpemUgaXMgYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRha2UgdGhhdCBpbnRvIGFjY291bnQgYm90aCBpbiBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbnMkZm9udE1ldHJpY3MkID0gX3RoaXM0Lm9wdGlvbnMuZm9udE1ldHJpY3MuZ2V0TWV0cmljcyhmb250KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VsaW5lID0gX29wdGlvbnMkZm9udE1ldHJpY3MkLmJhc2VsaW5lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5yb3VuZCh0ZXh0LmJvdW5kcy50b3AgKyBiYXNlbGluZSksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuT1ZFUkxJTkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5yb3VuZCh0ZXh0LmJvdW5kcy50b3ApLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLkxJTkVfVEhST1VHSDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0cnkgYW5kIGZpbmQgZXhhY3QgcG9zaXRpb24gZm9yIGxpbmUtdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbnMkZm9udE1ldHJpY3MkMiA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRkbGUgPSBfb3B0aW9ucyRmb250TWV0cmljcyQyLm1pZGRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGguY2VpbCh0ZXh0LmJvdW5kcy50b3AgKyBtaWRkbGUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzaXplSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UsIHNpemUpIHtcbiAgICAgICAgICAgIGlmIChpbWFnZS53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJiBpbWFnZS5oZWlnaHQgPT09IHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRPcGFjaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0cmFuc2Zvcm0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtKG9mZnNldFgsIG9mZnNldFksIG1hdHJpeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zZm9ybShtYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzJdLCBtYXRyaXhbM10sIG1hdHJpeFs0XSwgbWF0cml4WzVdKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb2Zmc2V0WCwgLW9mZnNldFkpO1xuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FudmFzUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhbnZhc1JlbmRlcmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRm9yZWlnbk9iamVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcmVpZ25PYmplY3RSZW5kZXJlcihlbGVtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JlaWduT2JqZWN0UmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvcmVpZ25PYmplY3RSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihvcHRpb25zLndpZHRoKSAqIG9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKG9wdGlvbnMuaGVpZ2h0KSAqIG9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICBvcHRpb25zLmxvZ2dlci5sb2coJ0ZvcmVpZ25PYmplY3QgcmVuZGVyZXIgaW5pdGlhbGl6ZWQgKCcgKyBvcHRpb25zLndpZHRoICsgJ3gnICsgb3B0aW9ucy5oZWlnaHQgKyAnIGF0ICcgKyBvcHRpb25zLnggKyAnLCcgKyBvcHRpb25zLnkgKyAnKSB3aXRoIHNjYWxlICcgKyBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHZhciBzdmcgPSBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHKE1hdGgubWF4KG9wdGlvbnMud2luZG93V2lkdGgsIG9wdGlvbnMud2lkdGgpICogb3B0aW9ucy5zY2FsZSwgTWF0aC5tYXgob3B0aW9ucy53aW5kb3dIZWlnaHQsIG9wdGlvbnMuaGVpZ2h0KSAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuc2Nyb2xsWCAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuc2Nyb2xsWSAqIG9wdGlvbnMuc2NhbGUsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsb2FkU2VyaWFsaXplZFNWRyhzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIG9wdGlvbnMud2lkdGggKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLmhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCAtb3B0aW9ucy54ICogb3B0aW9ucy5zY2FsZSwgLW9wdGlvbnMueSAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYW52YXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb3JlaWduT2JqZWN0UmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcmVpZ25PYmplY3RSZW5kZXJlcjtcbnZhciBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHID0gZXhwb3J0cy5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHID0gZnVuY3Rpb24gY3JlYXRlRm9yZWlnbk9iamVjdFNWRyh3aWR0aCwgaGVpZ2h0LCB4LCB5LCBub2RlKSB7XG4gICAgdmFyIHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgdmFyIGZvcmVpZ25PYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdmb3JlaWduT2JqZWN0Jyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHdpZHRoKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsICcxMDAlJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgJzEwMCUnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgeCk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIHkpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChmb3JlaWduT2JqZWN0KTtcblxuICAgIGZvcmVpZ25PYmplY3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gc3ZnO1xufTtcblxudmFyIGxvYWRTZXJpYWxpemVkU1ZHID0gZXhwb3J0cy5sb2FkU2VyaWFsaXplZFNWRyA9IGZ1bmN0aW9uIGxvYWRTZXJpYWxpemVkU1ZHKHN2Zykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgICAgIGltZy5zcmMgPSAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2ZykpO1xuICAgIH0pO1xufTsiLCJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG52YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZV9jb250YWluZXInKTtcbnZhciBpbWFnZV9hdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJyk7XG5odG1sMmNhbnZhcyhub2RlLCB7XG4gICAgYWxsb3dUYWludDogdHJ1ZSxcbiAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiB0cnVlXG59KS50aGVuKGNhbnZhcyA9PiB7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuZG93bmxvYWQgPSBcIm1hbnBvd2VyX2VmZmljaWVuY3kuanBnXCI7XG4gICAgbGluay5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgLy8gbGluay5jbGljaygpO1xufSk7XG5cbmNvbnNvbGUubG9nKGltYWdlX2F2YXRhcilcbi8vIHZhciBteUltYWdlID0gbmV3IEltYWdlKDEwMCwgMTAwKTtcbi8vIG15SW1hZ2Uuc3JjID0gaW1hZ2VfYXZhdGFyO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChteUltYWdlKTsiXSwic291cmNlUm9vdCI6IiJ9