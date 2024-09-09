
// Convert Now button page scroll
document.getElementById('convertNow').addEventListener('click', function() {
    document.getElementById('box').scrollIntoView({ behavior: 'smooth' });
});


// API Key and URL
const API_KEY = '3463dd2b745be6a32c1cd3bc'; 
const API_URL = 'https://v6.exchangerate-api.com/v6/3463dd2b745be6a32c1cd3bc/latest/USD';

// Currency data object mapping currency codes to names and flags
const currencyData = {
    AED: { name: 'United Arab Emirates Dirham', flag: '🇦🇪' },
    AFN: { name: 'Afghan Afghani', flag: '🇦🇫' },
    ALL: { name: 'Albanian Lek', flag: '🇦🇱' },
    AMD: { name: 'Armenian Dram', flag: '🇦🇲' },
    ANG: { name: 'Netherlands Antillean Guilder', flag: '🇳🇱' },
    AOA: { name: 'Angolan Kwanza', flag: '🇦🇴' },
    ARS: { name: 'Argentine Peso', flag: '🇦🇷' },
    AUD: { name: 'Australian Dollar', flag: '🇦🇺' },
    AWG: { name: 'Aruban Florin', flag: '🇦🇼' },
    AZN: { name: 'Azerbaijani Manat', flag: '🇦🇿' },
    BAM: { name: 'Bosnia-Herzegovina Convertible Mark', flag: '🇧🇦' },
    BBD: { name: 'Barbadian Dollar', flag: '🇧🇧' },
    BDT: { name: 'Bangladeshi Taka', flag: '🇧🇩' },
    BGN: { name: 'Bulgarian Lev', flag: '🇧🇬' },
    BHD: { name: 'Bahraini Dinar', flag: '🇧🇭' },
    BIF: { name: 'Burundian Franc', flag: '🇧🇮' },
    BMD: { name: 'Bermudian Dollar', flag: '🇧🇲' },
    BND: { name: 'Brunei Dollar', flag: '🇧🇳' },
    BOB: { name: 'Bolivian Boliviano', flag: '🇧🇴' },
    BRL: { name: 'Brazilian Real', flag: '🇧🇷' },
    BSD: { name: 'Bahamian Dollar', flag: '🇧🇸' },
    BTN: { name: 'Bhutanese Ngultrum', flag: '🇧🇹' },
    BWP: { name: 'Botswana Pula', flag: '🇧🇼' },
    BYN: { name: 'Belarusian Ruble', flag: '🇧🇾' },
    BZD: { name: 'Belize Dollar', flag: '🇧🇿' },
    CAD: { name: 'Canadian Dollar', flag: '🇨🇦' },
    CDF: { name: 'Congolese Franc', flag: '🇨🇩' },
    CHF: { name: 'Swiss Franc', flag: '🇨🇭' },
    CLP: { name: 'Chilean Peso', flag: '🇨🇱' },
    CNY: { name: 'Chinese Yuan', flag: '🇨🇳' },
    COP: { name: 'Colombian Peso', flag: '🇨🇴' },
    CRC: { name: 'Costa Rican Colón', flag: '🇨🇷' },
    CUP: { name: 'Cuban Peso', flag: '🇨🇺' },
    CVE: { name: 'Cape Verdean Escudo', flag: '🇨🇻' },
    CZK: { name: 'Czech Koruna', flag: '🇨🇿' },
    DJF: { name: 'Djiboutian Franc', flag: '🇩🇯' },
    DKK: { name: 'Danish Krone', flag: '🇩🇰' },
    DOP: { name: 'Dominican Peso', flag: '🇩🇴' },
    DZD: { name: 'Algerian Dinar', flag: '🇩🇿' },
    EGP: { name: 'Egyptian Pound', flag: '🇪🇬' },
    ERN: { name: 'Eritrean Nakfa', flag: '🇪🇷' },
    ETB: { name: 'Ethiopian Birr', flag: '🇪🇹' },
    EUR: { name: 'Euro', flag: '🇪🇺' },
    FJD: { name: 'Fijian Dollar', flag: '🇫🇯' },
    FKP: { name: 'Falkland Islands Pound', flag: '🇫🇰' },
    FOK: { name: 'Faroese Króna', flag: '🇫🇴' },
    GBP: { name: 'British Pound', flag: '🇬🇧' },
    GEL: { name: 'Georgian Lari', flag: '🇬🇪' },
    GGP: { name: 'Guernsey Pound', flag: '🇬🇬' },
    GHS: { name: 'Ghanaian Cedi', flag: '🇬🇭' },
    GIP: { name: 'Gibraltar Pound', flag: '🇬🇮' },
    GMD: { name: 'Gambian Dalasi', flag: '🇬🇲' },
    GNF: { name: 'Guinean Franc', flag: '🇬🇳' },
    GTQ: { name: 'Guatemalan Quetzal', flag: '🇬🇹' },
    GYD: { name: 'Guyanese Dollar', flag: '🇬🇾' },
    HKD: { name: 'Hong Kong Dollar', flag: '🇭🇰' },
    HNL: { name: 'Honduran Lempira', flag: '🇭🇳' },
    HRK: { name: 'Croatian Kuna', flag: '🇭🇷' },
    HTG: { name: 'Haitian Gourde', flag: '🇭🇹' },
    HUF: { name: 'Hungarian Forint', flag: '🇭🇺' },
    IDR: { name: 'Indonesian Rupiah', flag: '🇮🇩' },
    ILS: { name: 'Israeli New Shekel', flag: '🇮🇱' },
    IMP: { name: 'Isle of Man Pound', flag: '🇮🇲' },
    INR: { name: 'Indian Rupee', flag: '🇮🇳' },
    IQD: { name: 'Iraqi Dinar', flag: '🇮🇶' },
    IRR: { name: 'Iranian Rial', flag: '🇮🇷' },
    ISK: { name: 'Icelandic Króna', flag: '🇮🇸' },
    JEP: { name: 'Jersey Pound', flag: '🇯🇪' },
    JMD: { name: 'Jamaican Dollar', flag: '🇯🇲' },
    JOD: { name: 'Jordanian Dinar', flag: '🇯🇴' },
    JPY: { name: 'Japanese Yen', flag: '🇯🇵' },
    KES: { name: 'Kenyan Shilling', flag: '🇰🇪' },
    KGS: { name: 'Kyrgyzstani Som', flag: '🇰🇬' },
    KHR: { name: 'Cambodian Riel', flag: '🇰🇭' },
    KID: { name: 'Kiribati Dollar', flag: '🇰🇮' },
    KMF: { name: 'Comorian Franc', flag: '🇰🇲' },
    KRW: { name: 'South Korean Won', flag: '🇰🇷' },
    KWD: { name: 'Kuwaiti Dinar', flag: '🇰🇼' },
    KYD: { name: 'Cayman Islands Dollar', flag: '🇰🇾' },
    KZT: { name: 'Kazakhstani Tenge', flag: '🇰🇿' },
    LAK: { name: 'Lao Kip', flag: '🇱🇦' },
    LBP: { name: 'Lebanese Pound', flag: '🇱🇧' },
    LKR: { name: 'Sri Lankan Rupee', flag: '🇱🇰' },
    LRD: { name: 'Liberian Dollar', flag: '🇱🇷' },
    LSL: { name: 'Lesotho Loti', flag: '🇱🇸' },
    LYD: { name: 'Libyan Dinar', flag: '🇱🇾' },
    MAD: { name: 'Moroccan Dirham', flag: '🇲🇦' },
    MDL: { name: 'Moldovan Leu', flag: '🇲🇩' },
    MGA: { name: 'Malagasy Ariary', flag: '🇲🇬' },
    MKD: { name: 'Macedonian Denar', flag: '🇲🇰' },
    MMK: { name: 'Myanmar Kyat', flag: '🇲🇲' },
    MNT: { name: 'Mongolian Tögrög', flag: '🇲🇳' },
    MOP: { name: 'Macanese Pataca', flag: '🇲🇴' },
    MRU: { name: 'Mauritanian Ouguiya', flag: '🇲🇷' },
    MUR: { name: 'Mauritian Rupee', flag: '🇲🇺' },
    MVR: { name: 'Maldivian Rufiyaa', flag: '🇲🇻' },
    MWK: { name: 'Malawian Kwacha', flag: '🇲🇼' },
    MXN: { name: 'Mexican Peso', flag: '🇲🇽' },
    MYR: { name: 'Malaysian Ringgit', flag: '🇲🇾' },
    MZN: { name: 'Mozambican Metical', flag: '🇲🇿' },
    NAD: { name: 'Namibian Dollar', flag: '🇳🇦' },
    NGN: { name: 'Nigerian Naira', flag: '🇳🇬' },
    NIO: { name: 'Nicaraguan Córdoba', flag: '🇳🇮' },
    NOK: { name: 'Norwegian Krone', flag: '🇳🇴' },
    NPR: { name: 'Nepalese Rupee', flag: '🇳🇵' },
    NZD: { name: 'New Zealand Dollar', flag: '🇳🇿' },
    OMR: { name: 'Omani Rial', flag: '🇴🇲' },
    PAB: { name: 'Panamanian Balboa', flag: '🇵🇦' },
    PEN: { name: 'Peruvian Sol', flag: '🇵🇪' },
    PGK: { name: 'Papua New Guinean Kina', flag: '🇵🇬' },
    PHP: { name: 'Philippine Peso', flag: '🇵🇭' },
    PKR: { name: 'Pakistani Rupee', flag: '🇵🇰' },
    PLN: { name: 'Polish Złoty', flag: '🇵🇱' },
    PYG: { name: 'Paraguayan Guaraní', flag: '🇵🇾' },
    QAR: { name: 'Qatari Riyal', flag: '🇶🇦' },
    RON: { name: 'Romanian Leu', flag: '🇷🇴' },
    RSD: { name: 'Serbian Dinar', flag: '🇷🇸' },
    RUB: { name: 'Russian Ruble', flag: '🇷🇺' },
    RWF: { name: 'Rwandan Franc', flag: '🇷🇼' },
    SAR: { name: 'Saudi Riyal', flag: '🇸🇦' },
    SBD: { name: 'Solomon Islands Dollar', flag: '🇸🇧' },
    SCR: { name: 'Seychellois Rupee', flag: '🇸🇨' },
    SDG: { name: 'Sudanese Pound', flag: '🇸🇩' },
    SEK: { name: 'Swedish Krona', flag: '🇸🇪' },
    SGD: { name: 'Singapore Dollar', flag: '🇸🇬' },
    SHP: { name: 'Saint Helena Pound', flag: '🇸🇭' },
    SLL: { name: 'Sierra Leonean Leone', flag: '🇸🇱' },
    SOS: { name: 'Somali Shilling', flag: '🇸🇴' },
    SRD: { name: 'Surinamese Dollar', flag: '🇸🇷' },
    SSP: { name: 'South Sudanese Pound', flag: '🇸🇸' },
    STN: { name: 'São Tomé and Príncipe Dobra', flag: '🇸🇹' },
    SYP: { name: 'Syrian Pound', flag: '🇸🇾' },
    SZL: { name: 'Eswatini Lilangeni', flag: '🇸🇿' },
    THB: { name: 'Thai Baht', flag: '🇹🇭' },
    TJS: { name: 'Tajikistani Somoni', flag: '🇹🇯' },
    TMT: { name: 'Turkmenistani Manat', flag: '🇹🇲' },
    TND: { name: 'Tunisian Dinar', flag: '🇹🇳' },
    TOP: { name: 'Tongan Paʻanga', flag: '🇹🇴' },
    TRY: { name: 'Turkish Lira', flag: '🇹🇷' },
    TTD: { name: 'Trinidad and Tobago Dollar', flag: '🇹🇹' },
    TVD: { name: 'Tuvaluan Dollar', flag: '🇹🇻' },
    TWD: { name: 'New Taiwan Dollar', flag: '🇹🇼' },
    TZS: { name: 'Tanzanian Shilling', flag: '🇹🇿' },
    UAH: { name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
    UGX: { name: 'Ugandan Shilling', flag: '🇺🇬' },
    USD: { name: 'United States Dollar', flag: '🇺🇸' },
    UYU: { name: 'Uruguayan Peso', flag: '🇺🇾' },
    UZS: { name: 'Uzbekistani Som', flag: '🇺🇿' },
    VES: { name: 'Venezuelan Bolívar Soberano', flag: '🇻🇪' },
    VND: { name: 'Vietnamese Đồng', flag: '🇻🇳' },
    VUV: { name: 'Vanuatu Vatu', flag: '🇻🇺' },
    WST: { name: 'Samoan Tala', flag: '🇼🇸' },
    XAF: { name: 'Central African CFA Franc', flag: '🇨🇲' },
    XCD: { name: 'East Caribbean Dollar', flag: '🇦🇬' },
    XDR: { name: 'Special Drawing Rights', flag: '🌍' },
    XOF: { name: 'West African CFA Franc', flag: '🇸🇳' },
    XPF: { name: 'CFP Franc', flag: '🇵🇫' },
    YER: { name: 'Yemeni Rial', flag: '🇾🇪' },
    ZAR: { name: 'South African Rand', flag: '🇿🇦' },
    ZMW: { name: 'Zambian Kwacha', flag: '🇿🇲' },
    ZWL: { name: 'Zimbabwean Dollar', flag: '🇿🇼' },
};

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

