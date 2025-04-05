/**
 *  INSTRUCTION SET DATA
 *  Exports INSTRUCTION_SET object which
 *  contains all 31 defined instructions.
 */

function createInstruction(opcode, argOneType, argTwoType, argCount, description) {
    return {
        opcode,
        argOneType,
        argTwoType,
        description,
        argCount,
    }
}

export const INSTRUCTION_SET = {

    DB:     createInstruction("00001",  "RAM", "CONSTANT",  2,  "Store to RAM with constant"),
    SR:     createInstruction("00010",  "RAM", "REG",       2,  "Store to RAM from REG"),
    LD:     createInstruction("00011",  "RAM", "REG",       2,  "Load from RAM to REG"),
    MOV:    createInstruction("00100",  "REG", "REG",       2,  "Copy from REG (ARGA) to REG(ARGB)"),
    ADD:    createInstruction("00101",  "REG", "REG",       2,  "Add REGA and REGB, store in REGA"),
    SUB:    createInstruction("00110",  "REG", "REG",       2,  "Sub REGA from REGB, store in REGA"),
    SUBC:   createInstruction("00111",  "REG", "REG",       2,  "Sub REGB color from REGA, store in REGA"),  
    INC:    createInstruction("01000",  "REG", null,        1,  "Increment REGA, store in REGA"),   
    DEC:    createInstruction("01001",  "REG", null,        1,  "Decrement REGA, store in REGA"),   
    SHR:    createInstruction("01010",  "REG", null,        1,  "Right shift REGA, store in REGA"),  
    SHL:    createInstruction("01011",  "REG", null,        1,  "Left shift REGA, store in REGA"),   
    NOT:    createInstruction("01100",  "REG", null,        1,  "NOT REGA, store in REGA"),    
    NAND:   createInstruction("01101",  "REG", "REG",       2,  "NAND REGA and REGB, store in REGA"),   
    XOR:    createInstruction("01110",  "REG", "REG",       2,  "XOR REGA and REGB, store in REGA"),   
    OR:     createInstruction("01111",  "REG", "REG",       2,  "OR REGA and REGB, store in REGA"),    
    AND:    createInstruction("10000",  "REG", "REG",       2,  "AND REGA and REGB, store in REGA"),  
    DCO:    createInstruction("10001",  "CHAR","CHAR",      2,  "Used to store 4 x 6 bit chars which are sent to display"), 
    DCR:    createInstruction("10010",  "REG", null,        1,  "REGA (Char) output to display"),  
    DCM:    createInstruction("10011",  "RAM", null,        1,  "RAMA (Char) output to display"),   
    DCP:    createInstruction("10100",  "REG", null,        1,  "RAM(REGA) output to display - Uses value stored in REGA as a pointer for RAM"),   
    LDP:    createInstruction("10101",  "REG", "REG",       2,  "Load to REGB from RAM(REGA) - Uses value stored in REGA as a pointer for RAM"),   
    SP:     createInstruction("10110",  "REG", "REG",       2,  "Store to RAM(REGA) from REGB - Uses value stored in REGA as a pointer for RAM "),   
    JNE:    createInstruction("10111",  null,  "ROM",       1,  "IF REG1 != REG2, JUMP to ROM address"),   
    JE:     createInstruction("11000",  null,  "ROM",       1,  "IF REG! == REG2, JUMP to ROM address"),   
    JMP:    createInstruction("11001",  null,  "ROM",       1,  "Unconditional JUMP to ROM address"),   
    ICP:    createInstruction("11010",  "REG", null,        1,  "Store to RAM(REGA) from display input (Char)"),  
    DIR:    createInstruction("11011",  "REG", null,        1,  "Output to display from REG (Number)"),  
    DIM:    createInstruction("11100",  "RAM", null,        1,  "Output to display from RAM (Number)"),   
    DIP:    createInstruction("11101",  "REG", null,        1,  "Output to display from RAM(REGA) (Number) - Uses value stored in REGA as a pointer for RAM"),  
    IIP:    createInstruction("11110",  "REG", null,        1,  "Store to RAM(REGA) from user input - Uses the value stored in REGA as a pointer for RAM"),   
    RST:    createInstruction("11111",  null,  null,        0,  "Reset computer"),   
};