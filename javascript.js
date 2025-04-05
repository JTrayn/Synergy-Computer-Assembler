
/**
 *  SYNERGY COMPUTER ASSEMBLER V 1.1
 *  Author: Jayden Traynor 
 *  Date: 5/4/2025
 *  Original TPT Computer created by me in 2015
 *  https://powdertoy.co.uk/Discussions/Thread/View.html?Thread=19974
 *  Youtube Demonstration: https://www.youtube.com/watch?v=oyxUjL_TA3A
 * 
 */

import { INSTRUCTION_SET } from "./instruction-set.js";
import { CHAR_TABLE } from "./char-table.js";
import { convertToBinary } from "./data-conversion.js";

let assemblyTextBox = document.querySelector("#assembly-code");
let machineCodeTextBox = document.querySelector("#machine-code");
let convertButton = document.querySelector(".assemble-button");
convertButton.addEventListener("click", () => {
     machineCodeTextBox.textContent = assemble(assemblyTextBox.value);
});

function assemble(input) {

    let lines = input.split('\n');
    let binary = "";

    lines.forEach(line => {

        let tokens = line.split(/[ \t]+/);
        let instruction = tokens[0];
        let arg1 = tokens[1];
        let arg2 = tokens[2];
        let chars = [2];

        let argCount;
        let argOneType;
        let argTwoType;
        
        if(instruction in INSTRUCTION_SET) {
            argCount = INSTRUCTION_SET[instruction].argCount;
            argOneType = INSTRUCTION_SET[instruction].argOneType;
            argTwoType = INSTRUCTION_SET[instruction].argTwoType;
            binary += convertToBinary("opcode", instruction);

            // ********** ARG 1 ***********//
            if(argOneType === null) {
                binary += "000000000000";
            }
            if(argOneType === "RAM" || argOneType === "ROM" || argOneType === "REG" || argOneType === "CONSTANT") {
                binary += convertToBinary(argOneType, arg1);
            }
            if(argOneType === "CHAR") {
                let first = arg1.slice(0, 1);
                let second = arg1.slice(1, 3);
                chars[1] = convertToBinary(argOneType, second) + convertToBinary(argOneType, first);
            }
            // ********** ARG 2 ***********//
            if(argTwoType === null) {
                binary += "000000000000";
            }
            if(argTwoType === "RAM" || argTwoType === "ROM" || argTwoType === "REG" || argTwoType === "CONSTANT") {
                binary += convertToBinary(argTwoType, arg2);
            }
            if(argTwoType === "CHAR") {
                let first = arg2.slice(0, 1);
                let second = arg2.slice(1, 3);
                chars[0] = convertToBinary(argTwoType, second) + convertToBinary(argTwoType, first);
                binary += chars[0] + chars[1];
            }

        } 
        // Allows writing comment lines without throwing a warning
        else if (instruction === "//"){
            return;
        } else {
            console.warn("No instruction found.");
            return;
        }
        binary += `\n`;
    }); 
    return binary;
}
