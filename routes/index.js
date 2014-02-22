exports.hiragana = function (req, res) {
    var content = {
        ka: 0x304b,
        ki: 0x304d,
        ku: 0x304f,
        ke: 0x3051,
        ko: 0x3053,
        sa: 0x3055,
        shi: 0x3057,
        su: 0x3059,
        se: 0x305b,
        so: 0x305d
    };

    res.setHeader('Content-Type', 'application/json;charset=utf8');
    res.send(content);
};

exports.katakana = function (req, res) {
    var content = {
        ka: 0x30Ab,
        ki: 0x30Ad,
        ku: 0x30Af,
        ke: 0x30b1,
        ko: 0x30b3,
        sa: 0x30b5,
        shi: 0x30b7,
        su: 0x30b9,
        se: 0x30bb,
        so: 0x30bd
    };

    res.setHeader('Content-Type', 'application/json;charset=utf8');
    res.send(content);
};