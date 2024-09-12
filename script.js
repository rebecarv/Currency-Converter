
// Convert Now button page scroll
document.getElementById('convertNow').addEventListener('click', function() {
    document.getElementById('box').scrollIntoView({ behavior: 'smooth' });
    // Add some padding by adjusting the scroll position after a short delay
    setTimeout(function() {
        window.scrollBy(0, -30); // Adjust the value (-20) to whatever padding you need
    }, 500); // Adjust the delay (500 ms) to match the smooth scroll duration
});


// API Key and URL
const API_KEY = '3463dd2b745be6a32c1cd3bc'; 
const API_URL = 'https://v6.exchangerate-api.com/v6/3463dd2b745be6a32c1cd3bc/latest/USD';

// Currency data object mapping currency codes to names and flags
const currencyData = {
    AED: { name: 'United Arab Emirates Dirham', flag: '\u{1F1E6}\u{1F1EA}' },
    AFN: { name: 'Afghan Afghani', flag: '\u{1F1E6}\u{1F1EB}' },
    ALL: { name: 'Albanian Lek', flag: '\u{1F1E6}\u{1F1F1}' },
    AMD: { name: 'Armenian Dram', flag: '\u{1F1E6}\u{1F1F2}' },
    ANG: { name: 'Netherlands Antillean Guilder', flag: '\u{1F1F3}\u{1F1EC}' },
    AOA: { name: 'Angolan Kwanza', flag: '\u{1F1E6}\u{1F1F4}' },
    ARS: { name: 'Argentine Peso', flag: '\u{1F1E6}\u{1F1F7}' },
    AUD: { name: 'Australian Dollar', flag: '\u{1F1E6}\u{1F1FA}' },
    AWG: { name: 'Aruban Florin', flag: '\u{1F1E6}\u{1F1FC}' },
    AZN: { name: 'Azerbaijani Manat', flag: '\u{1F1E6}\u{1F1FF}' },
    BAM: { name: 'Bosnia-Herzegovina Convertible Mark', flag: '\u{1F1E7}\u{1F1E6}' },
    BBD: { name: 'Barbadian Dollar', flag: '\u{1F1E7}\u{1F1E7}' },
    BDT: { name: 'Bangladeshi Taka', flag: '\u{1F1E7}\u{1F1E9}' },
    BGN: { name: 'Bulgarian Lev', flag: '\u{1F1E7}\u{1F1EC}' },
    BHD: { name: 'Bahraini Dinar', flag: '\u{1F1E7}\u{1F1ED}' },
    BIF: { name: 'Burundian Franc', flag: '\u{1F1E7}\u{1F1EE}' },
    BMD: { name: 'Bermudian Dollar', flag: '\u{1F1E7}\u{1F1F2}' },
    BND: { name: 'Brunei Dollar', flag: '\u{1F1E7}\u{1F1F3}' },
    BOB: { name: 'Bolivian Boliviano', flag: '\u{1F1E7}\u{1F1F4}' },
    BRL: { name: 'Brazilian Real', flag: '\u{1F1E7}\u{1F1F7}' },
    BSD: { name: 'Bahamian Dollar', flag: '\u{1F1E7}\u{1F1F8}' },
    BTN: { name: 'Bhutanese Ngultrum', flag: '\u{1F1E7}\u{1F1F9}' },
    BWP: { name: 'Botswana Pula', flag: '\u{1F1E7}\u{1F1FC}' },
    BYN: { name: 'Belarusian Ruble', flag: '\u{1F1E7}\u{1F1FE}' },
    BZD: { name: 'Belize Dollar', flag: '\u{1F1E7}\u{1F1FF}' },
    CAD: { name: 'Canadian Dollar', flag: '\u{1F1E8}\u{1F1E6}' },
    CDF: { name: 'Congolese Franc', flag: '\u{1F1E8}\u{1F1E9}' },
    CHF: { name: 'Swiss Franc', flag: '\u{1F1E8}\u{1F1ED}' },
    CLP: { name: 'Chilean Peso', flag: '\u{1F1E8}\u{1F1F1}' },
    CNY: { name: 'Chinese Yuan', flag: '\u{1F1E8}\u{1F1F3}' },
    COP: { name: 'Colombian Peso', flag: '\u{1F1E8}\u{1F1F4}' },
    CRC: { name: 'Costa Rican Colón', flag: '\u{1F1E8}\u{1F1F7}' },
    CUP: { name: 'Cuban Peso', flag: '\u{1F1E8}\u{1F1FA}' },
    CVE: { name: 'Cape Verdean Escudo', flag: '\u{1F1E8}\u{1F1FB}' },
    CZK: { name: 'Czech Koruna', flag: '\u{1F1E8}\u{1F1FF}' },
    DJF: { name: 'Djiboutian Franc', flag: '\u{1F1E9}\u{1F1EF}' },
    DKK: { name: 'Danish Krone', flag: '\u{1F1E9}\u{1F1F0}' },
    DOP: { name: 'Dominican Peso', flag: '\u{1F1E9}\u{1F1F4}' },
    DZD: { name: 'Algerian Dinar', flag: '\u{1F1E9}\u{1F1FF}' },
    EGP: { name: 'Egyptian Pound', flag: '\u{1F1EA}\u{1F1EC}' },
    ERN: { name: 'Eritrean Nakfa', flag: '\u{1F1EA}\u{1F1F7}' },
    ETB: { name: 'Ethiopian Birr', flag: '\u{1F1EA}\u{1F1F9}' },
    EUR: { name: 'Euro', flag: '\u{1F1EA}\u{1F1FA}' },
    FJD: { name: 'Fijian Dollar', flag: '\u{1F1EB}\u{1F1EF}' },
    FKP: { name: 'Falkland Islands Pound', flag: '\u{1F1EB}\u{1F1F0}' },
    FOK: { name: 'Faroese Króna', flag: '\u{1F1EB}\u{1F1F4}' },
    GBP: { name: 'British Pound', flag: '\u{1F1EC}\u{1F1E7}' },
    GEL: { name: 'Georgian Lari', flag: '\u{1F1EC}\u{1F1EA}' },
    GGP: { name: 'Guernsey Pound', flag: '\u{1F1EC}\u{1F1EC}' },
    GHS: { name: 'Ghanaian Cedi', flag: '\u{1F1EC}\u{1F1ED}' },
    GIP: { name: 'Gibraltar Pound', flag: '\u{1F1EC}\u{1F1EE}' },
    GMD: { name: 'Gambian Dalasi', flag: '\u{1F1EC}\u{1F1F2}' },
    GNF: { name: 'Guinean Franc', flag: '\u{1F1EC}\u{1F1F3}' },
    GTQ: { name: 'Guatemalan Quetzal', flag: '\u{1F1EC}\u{1F1F9}' },
    GYD: { name: 'Guyanese Dollar', flag: '\u{1F1EC}\u{1F1FE}' },
    HKD: { name: 'Hong Kong Dollar', flag: '\u{1F1ED}\u{1F1F0}' },
    HNL: { name: 'Honduran Lempira', flag: '\u{1F1ED}\u{1F1F3}' },
    HRK: { name: 'Croatian Kuna', flag: '\u{1F1ED}\u{1F1F7}' },
    HTG: { name: 'Haitian Gourde', flag: '\u{1F1ED}\u{1F1F9}' },
    HUF: { name: 'Hungarian Forint', flag: '\u{1F1ED}\u{1F1FA}' },
    IDR: { name: 'Indonesian Rupiah', flag: '\u{1F1EE}\u{1F1E9}' },
    ILS: { name: 'Israeli New Shekel', flag: '\u{1F1EE}\u{1F1F1}' },
    IMP: { name: 'Isle of Man Pound', flag: '\u{1F1EE}\u{1F1F2}' },
    INR: { name: 'Indian Rupee', flag: '\u{1F1EE}\u{1F1F3}' },
    IQD: { name: 'Iraqi Dinar', flag: '\u{1F1EE}\u{1F1F6}' },
    IRR: { name: 'Iranian Rial', flag: '\u{1F1EE}\u{1F1F7}' },
    ISK: { name: 'Icelandic Króna', flag: '\u{1F1EE}\u{1F1F8}' },
    JEP: { name: 'Jersey Pound', flag: '\u{1F1EF}\u{1F1EA}' },
    JMD: { name: 'Jamaican Dollar', flag: '\u{1F1EF}\u{1F1F2}' },
    JOD: { name: 'Jordanian Dinar', flag: '\u{1F1EF}\u{1F1F4}' },
    JPY: { name: 'Japanese Yen', flag: '\u{1F1EF}\u{1F1F5}' },
    KES: { name: 'Kenyan Shilling', flag: '\u{1F1F0}\u{1F1EA}' },
    KGS: { name: 'Kyrgyzstani Som', flag: '\u{1F1F0}\u{1F1EC}' },
    KHR: { name: 'Cambodian Riel', flag: '\u{1F1F0}\u{1F1ED}' },
    KID: { name: 'Kiribati Dollar', flag: '\u{1F1F0}\u{1F1EE}' },
    KMF: { name: 'Comorian Franc', flag: '\u{1F1F0}\u{1F1F2}' },
    KRW: { name: 'South Korean Won', flag: '\u{1F1F0}\u{1F1F7}' },
    KWD: { name: 'Kuwaiti Dinar', flag: '\u{1F1F0}\u{1F1FC}' },
    KYD: { name: 'Cayman Islands Dollar', flag: '\u{1F1F0}\u{1F1FE}' },
    KZT: { name: 'Kazakhstani Tenge', flag: '\u{1F1F0}\u{1F1FF}' },
    LAK: { name: 'Lao Kip', flag: '\u{1F1F1}\u{1F1E6}' },
    LBP: { name: 'Lebanese Pound', flag: '\u{1F1F1}\u{1F1E7}' },
    LKR: { name: 'Sri Lankan Rupee', flag: '\u{1F1F1}\u{1F1F0}' },
    LRD: { name: 'Liberian Dollar', flag: '\u{1F1F1}\u{1F1F7}' },
    LSL: { name: 'Lesotho Loti', flag: '\u{1F1F1}\u{1F1F8}' },
    LYD: { name: 'Libyan Dinar', flag: '\u{1F1F1}\u{1F1FE}' },
    MAD: { name: 'Moroccan Dirham', flag: '\u{1F1F2}\u{1F1E6}' },
    MDL: { name: 'Moldovan Leu', flag: '\u{1F1F2}\u{1F1E9}' },
    MGA: { name: 'Malagasy Ariary', flag: '\u{1F1F2}\u{1F1EC}' },
    MKD: { name: 'Macedonian Denar', flag: '\u{1F1F2}\u{1F1F0}' },
    MMK: { name: 'Myanmar Kyat', flag: '\u{1F1F2}\u{1F1F2}' },
    MNT: { name: 'Mongolian Tögrög', flag: '\u{1F1F2}\u{1F1F3}' },
    MOP: { name: 'Macanese Pataca', flag: '\u{1F1F2}\u{1F1F4}' },
    MRU: { name: 'Mauritanian Ouguiya', flag: '\u{1F1F2}\u{1F1F7}' },
    MUR: { name: 'Mauritian Rupee', flag: '\u{1F1F2}\u{1F1FA}' },
    MVR: { name: 'Maldivian Rufiyaa', flag: '\u{1F1F2}\u{1F1FB}' },
    MWK: { name: 'Malawian Kwacha', flag: '\u{1F1F2}\u{1F1FC}' },
    MXN: { name: 'Mexican Peso', flag: '\u{1F1F2}\u{1F1FD}' },
    MYR: { name: 'Malaysian Ringgit', flag: '\u{1F1F2}\u{1F1FE}' },
    MZN: { name: 'Mozambican Metical', flag: '\u{1F1F2}\u{1F1FF}' },
    NAD: { name: 'Namibian Dollar', flag: '\u{1F1F3}\u{1F1E6}' },
    NGN: { name: 'Nigerian Naira', flag: '\u{1F1F3}\u{1F1EC}' },
    NIO: { name: 'Nicaraguan Córdoba', flag: '\u{1F1F3}\u{1F1EE}' },
    NOK: { name: 'Norwegian Krone', flag: '\u{1F1F3}\u{1F1F4}' },
    NPR: { name: 'Nepalese Rupee', flag: '\u{1F1F3}\u{1F1F5}' },
    NZD: { name: 'New Zealand Dollar', flag: '\u{1F1F3}\u{1F1FF}' },
    OMR: { name: 'Omani Rial', flag: '\u{1F1F4}\u{1F1F2}' },
    PAB: { name: 'Panamanian Balboa', flag: '\u{1F1F5}\u{1F1E6}' },
    PEN: { name: 'Peruvian Sol', flag: '\u{1F1F5}\u{1F1EA}' },
    PGK: { name: 'Papua New Guinean Kina', flag: '\u{1F1F5}\u{1F1EC}' },
    PHP: { name: 'Philippine Peso', flag: '\u{1F1F5}\u{1F1ED}' },
    PKR: { name: 'Pakistani Rupee', flag: '\u{1F1F5}\u{1F1F0}' },
    PLN: { name: 'Polish Złoty', flag: '\u{1F1F5}\u{1F1F1}' },
    PYG: { name: 'Paraguayan Guaraní', flag: '\u{1F1F5}\u{1F1FE}' },
    QAR: { name: 'Qatari Riyal', flag: '\u{1F1F6}\u{1F1E6}' },
    RON: { name: 'Romanian Leu', flag: '\u{1F1F7}\u{1F1F4}' },
    RSD: { name: 'Serbian Dinar', flag: '\u{1F1F7}\u{1F1F8}' },
    RUB: { name: 'Russian Ruble', flag: '\u{1F1F7}\u{1F1FA}' },
    RWF: { name: 'Rwandan Franc', flag: '\u{1F1F7}\u{1F1FC}' },
    SAR: { name: 'Saudi Riyal', flag: '\u{1F1F8}\u{1F1E6}' },
    SBD: { name: 'Solomon Islands Dollar', flag: '\u{1F1F8}\u{1F1E7}' },
    SCR: { name: 'Seychellois Rupee', flag: '\u{1F1F8}\u{1F1E8}' },
    SDG: { name: 'Sudanese Pound', flag: '\u{1F1F8}\u{1F1E9}' },
    SEK: { name: 'Swedish Krona', flag: '\u{1F1F8}\u{1F1EA}' },
    SGD: { name: 'Singapore Dollar', flag: '\u{1F1F8}\u{1F1EC}' },
    SHP: { name: 'Saint Helena Pound', flag: '\u{1F1F8}\u{1F1ED}' },
    SLL: { name: 'Sierra Leonean Leone', flag: '\u{1F1F8}\u{1F1F1}' },
    SOS: { name: 'Somali Shilling', flag: '\u{1F1F8}\u{1F1F4}' },
    SRD: { name: 'Surinamese Dollar', flag: '\u{1F1F8}\u{1F1F7}' },
    SSP: { name: 'South Sudanese Pound', flag: '\u{1F1F8}\u{1F1F8}' },
    STN: { name: 'São Tomé and Príncipe Dobra', flag: '\u{1F1F8}\u{1F1F9}' },
    SYP: { name: 'Syrian Pound', flag: '\u{1F1F8}\u{1F1FE}' },
    SZL: { name: 'Eswatini Lilangeni', flag: '\u{1F1F8}\u{1F1FF}' },
    THB: { name: 'Thai Baht', flag: '\u{1F1F9}\u{1F1ED}' },
    TJS: { name: 'Tajikistani Somoni', flag: '\u{1F1F9}\u{1F1EF}' },
    TMT: { name: 'Turkmenistani Manat', flag: '\u{1F1F9}\u{1F1F2}' },
    TND: { name: 'Tunisian Dinar', flag: '\u{1F1F9}\u{1F1F3}' },
    TOP: { name: 'Tongan Paʻanga', flag: '\u{1F1F9}\u{1F1F4}' },
    TRY: { name: 'Turkish Lira', flag: '\u{1F1F9}\u{1F1F7}' },
    TTD: { name: 'Trinidad and Tobago Dollar', flag: '\u{1F1F9}\u{1F1F9}' },
    TVD: { name: 'Tuvaluan Dollar', flag: '\u{1F1F9}\u{1F1FB}' },
    TWD: { name: 'New Taiwan Dollar', flag: '\u{1F1F9}\u{1F1FC}' },
    TZS: { name: 'Tanzanian Shilling', flag: '\u{1F1F9}\u{1F1FF}' },
    UAH: { name: 'Ukrainian Hryvnia', flag: '\u{1F1FA}\u{1F1E6}' },
    UGX: { name: 'Ugandan Shilling', flag: '\u{1F1FA}\u{1F1EC}' },
    USD: { name: 'United States Dollar', flag: '\u{1F1FA}\u{1F1F8}' },
    UYU: { name: 'Uruguayan Peso', flag: '\u{1F1FA}\u{1F1FE}' },
    UZS: { name: 'Uzbekistani Som', flag: '\u{1F1FA}\u{1F1FF}' },
    VES: { name: 'Venezuelan Bolívar', flag: '\u{1F1FB}\u{1F1EA}' },
    VND: { name: 'Vietnamese Đồng', flag: '\u{1F1FB}\u{1F1F3}' },
    VUV: { name: 'Vanuatu Vatu', flag: '\u{1F1FB}\u{1F1FA}' },
    WST: { name: 'Samoan Tālā', flag: '\u{1F1FC}\u{1F1F8}' },
    XAF: { name: 'Central African CFA Franc', flag: '\u{1F1E6}\u{1F1EB}' },
    XCD: { name: 'East Caribbean Dollar', flag: '\u{1F1E8}\u{1F1F2}' },
    XOF: { name: 'West African CFA Franc', flag: '\u{1F1E8}\u{1F1E9}' },
    XPF: { name: 'CFP Franc', flag: '\u{1F1F5}\u{1F1EB}' },
    YER: { name: 'Yemeni Rial', flag: '\u{1F1FE}\u{1F1EA}' },
    ZAR: { name: 'South African Rand', flag: '\u{1F1FF}\u{1F1E6}' },
    ZMW: { name: 'Zambian Kwacha', flag: '\u{1F1FF}\u{1F1F2}' },
    ZWL: { name: 'Zimbabwean Dollar', flag: '\u{1F1FF}\u{1F1FC}' }
};

// Ensure only numeric input is accepted 
const inputField = document.getElementById('amount');
const errorMessage = document.getElementById('errorMessage');

inputField.addEventListener('input', function () {
    const nonNumericRegex = /[^0-9]/g;

    // Replace any non-numeric characters with an empty string
    this.value = this.value.replace(nonNumericRegex, '');

    if (this.value === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

// Fetch and populate currency options when the page loads
async function fetchConversionRates() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.result === 'success') {
            console.log(data); // Debug: Log the data to see the structure
            populateCurrencyOptions(); // Populate dropdowns
        } else {
            console.error('Failed to fetch conversion rates:', data['error-type']);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// Function to populate dropdowns with currency options
function populateCurrencyOptions() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    // Clear existing options
    fromCurrencySelect.innerHTML = '';
    toCurrencySelect.innerHTML = '';

    // Loop through the currency data object
    Object.keys(currencyData).forEach(currencyCode => {
        const currency = currencyData[currencyCode];

        // Create options for both dropdowns
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        // Set the value and text content for each option
        option1.value = currencyCode;
        option1.textContent = `${currency.flag} ${currency.name} (${currencyCode})`;
        option2.value = currencyCode;
        option2.textContent = `${currency.flag} ${currency.name} (${currencyCode})`;

        // Append options to the dropdowns
        fromCurrencySelect.appendChild(option1);
        toCurrencySelect.appendChild(option2);
    });
}

// Function to handle conversion
document.getElementById('convertButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount && fromCurrency && toCurrency) {
        convertCurrency(amount, fromCurrency, toCurrency);
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to perform currency conversion
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const conversionURL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    try {
        const response = await fetch(conversionURL);
        const data = await response.json();

        if (data.result === 'success') {
            const resultElement = document.getElementById('conversionResult');
            resultElement.textContent = `${amount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`;
        } else {
            console.error('Conversion failed:', data['error-type']);
        }
    } catch (error) {
        console.error('Error during conversion:', error);
    }
    
}

// Call function to fetch conversion rates when the page loads
fetchConversionRates();

