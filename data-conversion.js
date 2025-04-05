/**
 *  DATA CONVERSION MODULE
 *  Provides convertToBinary() function
 *  to convert RAW tokens opcodes / binary.
 */

import { INSTRUCTION_SET } from "./instruction-set.js";
import { CHAR_TABLE } from "./char-table.js";

export function convertToBinary(tokenType, token) {
    if(tokenType !== "opcode" && tokenType !== "CHAR") {
        token = token.replace(/\D/g, "");
    }
    switch (tokenType) {
        case "opcode":
            if(validateInstruction(token)) {
                return convertInstruction(token);
            } else return null;
        case "REG":
            if(validateREG(token)) {
                return convertREG(token);
            } else return null;
        case "RAM":
            if(validateRAM(token)) {
                return convertRAM(token);
            } else return null;
        case "ROM":
            if(validateROM(token)) {
                return convertROM(token);
            } else return null;
        case "CHAR":
            if(validateChar(token)) {
                return convertChar(token);
            } else return null;
        case "CONSTANT":
            if(validateConstant(token)) {
                return convertConstant(token);
            } else return null;
        default:
            return null;
    }
}
//******* VALIDATION ********//
function validateConstant(value) {
    if((value >= 0 && value <= 4095)) {
        return true;
    } else {
        console.error("Contant value must be between 0 - 4095");
        return false;
    }
}
function validateRAM(value) {
    if((value >= 1 && value <= 255)) {
        return true;
    } else {
        console.error("RAM address must be between 1 - 255");
        return false;
    }
}
function validateREG(value) {
    if((value >= 1 && value <= 10)) {
        return true;
    } else {
        console.error("REG address must be between 1 - 10");
        return false;
    }
}
function validateROM(value) {
    if ((value >= 1 && value <= 889)) {
        return true;
    } else {
        console.error("ROM address must be between 1 - 889");
        return false;
    }
}
function validateChar(value) {
    if(value in CHAR_TABLE) {
        return true;
    } else {
        console.error("Value does not exist in CHAR_TABLE");
        return false;
    }
}
function validateInstruction(value) {
    if(value in INSTRUCTION_SET) {
        return true;
    } else {
        console.error("Value does not exist in INSTRUCTION_SET");
        return false;
    }
}
//******* CONVERSION ********//
function convertConstant(value) {
    return (+value).toString(2).padStart(12, "0");
}
function convertRAM(value) {
    return (+value).toString(2).padStart(12, "0");
}
function convertREG(value) {
    return (+value).toString(2).padStart(12, "0");
}
function convertROM(value) {
    // Calculate memory column address
    let col = Math.ceil((+value) / 127);
    // Invert columns
    let invert = {1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1};
    // Calculate memory row address
    let row = (+value) - (127 * (col - 1));
    return invert[col].toString(2).padStart(5, "0") + row.toString(2).padStart(7, "0");
}
function convertChar(value) {
    return CHAR_TABLE[value].opcode;
}
function convertInstruction(value) {
    return INSTRUCTION_SET[value.toUpperCase()].opcode;
}
