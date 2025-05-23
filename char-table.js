/**
 *  CHAR TABLE
 *  Provides CHAR_TABLE object which
 *  contains all CHAR addresses used for
 *  display and string manipulation.
 */

function createChar(opcode, type) {
    return {
        opcode,
        type,
    }
}

export const CHAR_TABLE = {

    1:      createChar("000001", "NUMERIC"),
    2:      createChar("000010", "NUMERIC"),
    3:      createChar("000011", "NUMERIC"),
    4:      createChar("000100", "NUMERIC"),
    5:      createChar("000101", "NUMERIC"),
    6:      createChar("000110", "NUMERIC"),
    7:      createChar("000111", "NUMERIC"),
    8:      createChar("001000", "NUMERIC"),
    9:      createChar("001001", "NUMERIC"),
    0:      createChar("001010", "NUMERIC"),
    "d":   createChar("001111", "CONTROL"),
    "n":   createChar("010000", "CONTROL"),
    "e":   createChar("010001", "CONTROL"),
    "c":   createChar("010010", "CONTROL"),
    "f":   createChar("010011", "CONTROL"),
    A:      createChar("100000", "CHAR"),
    B:      createChar("100001", "CHAR"),
    C:      createChar("100010", "CHAR"),
    D:      createChar("100011", "CHAR"),
    E:      createChar("100100", "CHAR"),
    F:      createChar("100101", "CHAR"),
    G:      createChar("100110", "CHAR"),
    H:      createChar("100111", "CHAR"),
    I:      createChar("101000", "CHAR"),
    J:      createChar("101001", "CHAR"),
    K:      createChar("101010", "CHAR"),
    L:      createChar("101011", "CHAR"),
    M:      createChar("101100", "CHAR"),
    N:      createChar("101101", "CHAR"),
    O:      createChar("101110", "CHAR"),
    P:      createChar("101111", "CHAR"),
    Q:      createChar("110000", "CHAR"),
    R:      createChar("110001", "CHAR"),
    S:      createChar("110010", "CHAR"),
    T:      createChar("110011", "CHAR"),
    U:      createChar("110100", "CHAR"),
    V:      createChar("110101", "CHAR"),
    W:      createChar("110110", "CHAR"),
    X:      createChar("110111", "CHAR"),
    Y:      createChar("111000", "CHAR"),
    Z:      createChar("111001", "CHAR"),
    ".":    createChar("111010", "CHAR"),
    ",":    createChar("111011", "CHAR"),
    "'":    createChar("111100", "CHAR"),
    "_":    createChar("111101", "CHAR"),
    "!":    createChar("111110", "CHAR"),
    "?":    createChar("111111", "CHAR"),
};