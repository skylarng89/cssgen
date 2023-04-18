const widthRange = document.getElementById('width');
const heightRange = document.getElementById('height');
const colorPicker = document.getElementById('color');
const shadowCheckbox = document.getElementById('shadow');
const radiusRange = document.getElementById('radius');
const widthUnitSelect = document.getElementById('widthUnit');
const heightUnitSelect = document.getElementById('heightUnit');
const radiusUnitSelect = document.getElementById('radiusUnit');
const cssGenBtn = document.getElementById('generateBtn');
const generatedCSS = document.getElementById('cssCode');
const box = document.querySelector('.box');

widthRange.addEventListener('input', updatePreviewBox);
heightRange.addEventListener('input', updatePreviewBox);
colorPicker.addEventListener('input', updatePreviewBox);
shadowCheckbox.addEventListener('change', updatePreviewBox);
radiusRange.addEventListener('input', updatePreviewBox);

cssGenBtn.addEventListener('click', generateCssCode);
copyBtn.addEventListener('click', copyCssCode);

function updatePreviewBox() {
    const widthValueWithUnit = `${widthRange.value}${widthUnitSelect.value}`;
    const heightValueWithUnit = `${heightRange.value}${heightUnitSelect.value}`;
    const radiusValueWithUnit = `${radiusRange.value}${radiusUnitSelect.value}`;

    box.style.width = widthValueWithUnit;
    box.style.height = heightValueWithUnit;
    box.style.backgroundColor = colorPicker.value;

    if (shadowCheckbox.checked) {
        box.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    } else {
        box.style.boxShadow = 'none';
    }

    box.style.borderRadius = radiusValueWithUnit;
}

function generateCssCode() {
    const widthValueWithUnit = `${widthRange.value}${widthUnitSelect.value}`;
    const heightValueWithUnit = `${heightRange.value}${heightUnitSelect.value}`;
    const radiusValueWithUnit = `${radiusRange.value}${radiusUnitSelect.value}`;

    const cssCode = `.box {
    width: ${widthValueWithUnit};
    height: ${heightValueWithUnit};
    background-color: ${colorPicker.value};
    border-radius: ${radiusValueWithUnit};
    ${shadowCheckbox.checked ? 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);' : 'box-shadow: none;'}
}`;

    // Use js-beautify to format the CSS code
    const beautifiedCssCode = js_beautify(cssCode, {
        'indent_size': 2,
        'wrap_line_length': 80,
        'end_with_newline': true,
        "templating": ["auto"]
    });

    generatedCSS.value = cssCode;
}

function copyCssCode() {
    generatedCSS.select();
    document.execCommand('copy');
}