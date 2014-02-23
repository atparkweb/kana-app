angular.module('kana.services').
    factory('kanaService', function () {
        return {
            getHiragana: function () {
                return [
                    [{"a": "あ"}, {"i": "い"}, {"u": "う"}, {"e": "え"}, {"o": "お"}],
                    [{"ka": "か"}, {"ki": "き"}, {"ku": "く"}, {"ke": "け"}, {"ko": "こ"}],
                    [{"sa": "さ"}, {"shi": "し"}, {"su": "す"}, {"se": "せ"}, {"so": "そ"}],
                    [{"ta": "た"}, {"chi": "ち"}, {"tsu": "つ"}, {"te": "て"}, {"to": "と"}],
                    [{"na": "な"}, {"ni": "に"}, {"nu": "ぬ"}, {"ne": "ね"}, {"no": "の"}],
                    [{"ha": "は"}, {"hi": "ひ"}, {"fu": "ふ"}, {"he": "へ"}, {"ho": "ほ"}],
                    [{"ma": "ま"}, {"mi": "み"}, {"mu": "む"}, {"me": "め"}, {"mo": "も"}],
                    [{"ya": "や"}, {"yu": "ゆ"}, {"yo": "よ"}],
                    [{"ra": "ら"}, {"ri": "り"}, {"ru": "る"}, {"re": "れ"}, {"ro": "ろ"}],
                    [{"wa": "わ"}, {"wo": "を"}, {"n": "ん"}]
                ];
            },
            getKatakana: function () {
                return [
                    [{"a": "ア"}, {"i": "イ"}, {"u": "ウ"}, {"e": "エ"}, {"o": "オ"}],
                    [{"ka": "カ"}, {"ki": "キ"}, {"ku": "ク"}, {"ke": "ケ"}, {"ko": "コ"}],
                    [{"sa": "サ"}, {"shi": "シ"}, {"su": "ス"}, {"se": "セ"}, {"so": "ソ"}],
                    [{"ta": "タ"}, {"chi": "チ"}, {"tsu": "ツ"}, {"te": "テ"}, {"to": "ト"}],
                    [{"na": "ナ"}, {"ni": "ニ"}, {"nu": "ヌ"}, {"ne": "ネ"}, {"no": "ノ"}],
                    [{"ha": "ハ"}, {"hi": "ヒ"}, {"fu": "フ"}, {"he": "ヘ"}, {"ho": "ホ"}],
                    [{"ma": "マ"}, {"mi": "ミ"}, {"mu": "ム"}, {"me": "メ"}, {"mo": "モ"}],
                    [{"ya": "ヤ"}, {"yu": "ユ"}, {"yo": "ヨ"}],
                    [{"ra": "ラ"}, {"ri": "リ"}, {"ru": "ル"}, {"re": "レ"}, {"ro": "ロ"}],
                    [{"wa": "ワ"}, {"wo": "ヲ"}, {"n": "ン"}]
                ];
            }
        };
    }).
    factory('kanaList', ['$http', '$q', '$route',
        function ($http, $q, $route) {
            return function () {
                var delay = $q.defer(),
                    type = $route.current.params.type;

                if (_.contains(['hiragana', 'katakana'], type)) {
                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/api/' + type
                    }).
                        success(function (data, status, headers, config) {
                            delay.resolve(data);
                        }).
                        error(function (data, status, headers, config) {
                            delay.reject('Unable to fetch data');
                        });
                }

                return delay.promise;
            };
        }]);