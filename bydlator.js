const morze = {
    'А': '·−',
    'Б': '−···',
    'В': '·−−',
    'Г': '−−·',
    'Д': '−··',
    'Е': '·',
    'Ё': '·',
    'Ж': '···−',
    'З': '−−··',
    'И': '··',
    'Й': '·−−−',
    'К': '−·−',
    'Л': '·−··',
    'М': '−−',
    'Н': '−·',
    'О': '−−−',
    'П': '·−−·',
    'Р': '·−·',
    'С': '···',
    'Т': '−',
    'У': '··−',
    'Ф': '··−·',
    'Х': '····',
    'Ц': '−·−·',
    'Ч': '−−−·',
    'Ш': '−−−−',
    'Щ': '−−·−',
    'Ъ': '−−·−−',
    'Ы': '−·−−',
    'Ь': '−··−',
    'Ъ': '−··−',
    'Э': '··−··',
    'Ю': '··−−',
    'Я': '·−·−',
    '0': '−−−−−',
    '1': '·−−−−',
    '2': '··−−−',
    '3': '···−−',
    '4': '····−',
    '5': '·····',
    '6': '−····',
    '7': '−−···',
    '8': '−−−··',
    '9': '−−−−··'
};

function translate(text) {
    var chars = [...text];
    chars.forEach((char, i, self) => {
        var coded = morze[char];
        if (coded != null) 
            self[i] = coded;
    });
    return chars.join('');
}

function degrade(text, point, dash) {
    if (!point) point = dash === 'ы' ? 'а' : 'ы';
    if (!dash) dash = point === 'а' ? 'ы' : 'а';
    return text.replace(new RegExp('·', 'g'), point).replace(new RegExp('−', 'g'), dash);
}

$(document).ready(function() {
    $('#btn').click(e => {
        var text = $('#text').val();
        if (text.length == 0) return;
        var translated = translate(text.toUpperCase());
        var res = degrade(translated);
        $('#result').html(res);
    });
})