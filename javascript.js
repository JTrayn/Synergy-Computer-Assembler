

import { INSTRUCTION_SET } from "./instruction-set.js";
import { CHAR_TABLE } from "./char-table.js";

let assemblyTextBox = document.querySelector("#assembly-code");
let machineCodeTextBox = document.querySelector("#machine-code");
let convertButton = document.querySelector(".assemble-button");
convertButton.addEventListener("click", () => {
    assemble(assemblyTextBox.value);
});

function assemble(input) {
    let assembly = input;
    let lines = splitLinesIntoArray(assembly);
    let binary = "";

    lines.forEach(line => {

        console.log(line);
        let tokens = line.split(" ");
        let instruction = tokens[0];
        let arg1 = tokens[1];
        let arg2 = tokens[2];

        if(validateToken("opcode", instruction)) {
            binary += convertToBinary("opcode", instruction);
        }
        
        if(INSTRUCTION_SET[instruction].argOneType === null) {
            binary += "000000000000";
        } 
        if (validateToken(calculateTokenType(instruction, "arg1"), arg1)) {
            binary += convertToBinary(calculateTokenType(instruction, "arg1") ,arg1);
        }

        if(INSTRUCTION_SET[instruction].argTwoType === null) {
            binary += "000000000000";
        }
        if(validateToken(calculateTokenType(instruction, "arg2"), arg2)) {
            binary += convertToBinary(calculateTokenType(instruction, "arg2") ,arg2);
        }
        
        binary += `\n`;
    });

    machineCodeTextBox.textContent = binary;
}


function calculateTokenType(instruction, argNumber) {
    switch (argNumber) {
        case "arg1":
            return INSTRUCTION_SET[instruction].argOneType;
        case "arg2":
            return INSTRUCTION_SET[instruction].argTwoType;
        default:
            return null;
    }
}

function validateToken(tokenType, token) {
    if(tokenType !== "opcode") {
        token = token.replace(/\D/g, "");
    }
    switch (tokenType) {
        case "opcode":
            return validateInstruction(token);
        case "REG":
            return validateREG(token);
        case "RAM":
            return validateRAM(token);
        case "ROM":
            return validateROM(token);
        case "CHAR":
            return validateChar(token);
        case "CONSTANT":
            return validateConstant(token);
        default:
            return false;
    }
}

function convertToBinary(tokenType, token) {
    if(tokenType !== "opcode") {
        token = token.replace(/\D/g, "");
    }
    switch (tokenType) {
        case "opcode":
            return convertInstruction(token);
        case "REG":
            return convertREG(token);
        case "RAM":
            return convertRAM(token);
        case "ROM":
            return convertROM(token);
        case "CHAR":
            return convertChar(token);
        case "CONSTANT":
            return convertConstant(token);
        default:
            return false;
    }
}




function splitLinesIntoArray(assembly) {
    return assembly.split('\n');
}
function splitLineIntoTokens(line) {
    return line.split(" ");
}




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
    // Calculate memory row address
    let row = (+value) - (127 * (col - 1));
    return col.toString(2).padStart(5, "0") + row.toString(2).padStart(7, "0");
}
function convertChar(value) {
    return CHAR_TABLE[value.toUpperCase()].opcode;
}
function convertInstruction(value) {
    return INSTRUCTION_SET[value.toUpperCase()].opcode;
}




function id(value) {
    console.log(Object.prototype.toString.call(value));
}
