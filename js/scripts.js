const _prefix_ary = ["0910"
    , "0911"
    , "0912"
    , "0913"
    , "0914"
    , "0915"
    , "0916"
    , "0917"
    , "0918"
    , "0919"
    , "0920"
    , "0921"
    , "0922"
    , "0923"
    , "0924"
    , "0925"
    , "0926"
    , "0927"
    , "0928"
    , "0929"
    , "0930"
    , "0931"
    , "0932"
    , "0933"
    , "0934"
    , "0935"
    , "0936"
    , "0937"
    , "0938"
    , "0939"
    , "0952"
    , "0953"
    , "0954"
    , "0955"
    , "0956"
    , "0958"
    , "0960"
    , "0961"
    , "0963"
    , "0968"
    , "0970"
    , "0971"
    , "0972"
    , "0982"
    , "0986"
    , "0987"
    , "0988"
    , "0989"
];


const _cellphone_number_generate = () => {

    let _max_count = 10;
    let _c = $("#cellphone_number20160508_count").val()
    _c = parseInt(_c)
    if (_c > 0) _max_count = _c

    const _allow_reduplicate = false;
    const _conjunction = "<br />";

    const _numbers = [];
    const _max_postfix = 999999;

    while (_numbers.length < _max_count) {
        let _number = "";
        // random prefix
        const _prefix = _prefix_ary[Math.floor(Math.random() * (_prefix_ary.length))];

        let _postfix = Math.floor(Math.random() * (_max_postfix)) + "";
        while (_postfix.length < 6) {
            _postfix = "0" + _postfix;
        }

        _number = _prefix + _postfix;
        if (_allow_reduplicate === false) {
            if ($.inArray(_number, _numbers) === -1) {
                _numbers.push(_number);
            }
        } else {
            _numbers.push(_number);
        }
    }
    $("#cellphone_number20160508").html(_numbers.join(_conjunction));
};

_cellphone_number_generate();