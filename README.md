# Currency Converter
### Video Demo:  <https://youtu.be/-f_2tIMkKVQ>  
### Overview

This project is a web-based **Currency Converter**, designed to provide users with an intuitive and reliable tool for converting between over 150 different global currencies. The website utilizes the **ExchangeRate-API** to fetch real-time currency exchange rates and provides an accurate and efficient conversion process.

The site is structured with a clean and modern design, prioritizing ease of use and a seamless user experience. The currency selection dropdown menus are populated with full currency names and flags for quick identification. Additionally, the site is fully responsive, ensuring that it works perfectly across both desktop and mobile devices.

This project demonstrates the integration of several core web development technologies: HTML, CSS, JavaScript, and an external API. By combining front-end design with real-time data fetching, the site delivers both form and functionality.

## Files

### 1. `index.html`
This is the main HTML file that serves as the foundation of the website. It contains the structure of the webpage, including:
- **Header**: Displays the website’s title and an accompanying image (`cash.png`) for visual appeal.
- **Main Section**: Contains a brief tagline explaining the purpose of the website, followed by a button to initiate currency conversion.
- **Conversion Form**: Users can select their source and target currencies from dropdown menus, enter an amount, and hit the "Convert" button to get the conversion.
- **Footer**: Links to credits, API information, and general site details.

The HTML is kept semantic, ensuring that the structure is clear and easy to navigate for both users and developers. Additionally, it includes links to the **styles.css** and **responsive.css** files for consistent design and responsiveness.

### 2. `script.js`
This JavaScript file handles all the interactivity and logic of the website, including:
- **API Integration**: It fetches real-time exchange rates from the **ExchangeRate-API** and processes the data for the conversion function. The API key and fetch calls are configured here.
- **Currency Dropdown Population**: The dropdown menus are populated dynamically from a `currencyData` object. This object contains currency codes, full names, and the Unicode for flags. Users can easily identify currencies with both the name and flag displayed.
- **Conversion Logic**: Once the user selects their currencies and enters the amount, the script calculates the converted amount using the API’s exchange rates. This ensures accurate, up-to-date results every time.
- **Smooth Scrolling**: When the "Convert Now" button is clicked, the page scrolls smoothly to the conversion section, providing a fluid user experience.
- **Error Handling**: The script includes basic error handling to alert the user if something goes wrong, like if the API call fails or invalid input is provided.

### 3. `styles.css`
This file contains all the styles for the website's desktop version. It ensures a modern, clean aesthetic and follows a consistent design language, including:
- **Color Scheme**: The chosen palette consists of a combination of white, black, blue, and yellow, making the site visually appealing yet professional. The colors are stored as CSS variables, making future edits easier and more scalable.
- **Typography**: The **Roboto** font is used throughout the site. Different weights (Regular, Medium, Bold) are utilized to create a clear hierarchy between the main title, subheadings, body text, and labels.
- **Hover and Focus States**: Buttons and inputs are styled with hover and focus states for better interactivity and accessibility.

### 4. `responsive.css`
To ensure the website works seamlessly across different devices, the **responsive.css** file contains media queries that adjust the layout for smaller screens such as tablets and smartphones. The key features of this file include:
- **Breakpoint Adjustments**: At different viewport widths, elements such as the currency selection form, buttons, and images resize to remain legible and functional.
- **Mobile-First Approach**: The design begins with mobile optimizations and scales up for larger screens, ensuring that all users, regardless of device, have a pleasant experience.
- **Navigation Adjustments**: On smaller screens, the site layout shifts slightly to ensure that the user can still interact with all elements without unnecessary scrolling or zooming.

### 5. `cash.png`
This image is used to visually enhance the header section of the page. The graphic relates to the theme of money and currency, making it immediately clear to visitors what the site is about. It's positioned next to the main title to create a professional but approachable first impression.

### 6. `favicon.ico`
The **favicon.ico** is the small icon displayed in the browser tab, contributing to the site’s branding and visual recognition. It’s a small detail that adds polish and professionalism to the project.

## Design Choices

### API Integration
Using the **ExchangeRate-API** was a deliberate choice due to its reliability and ease of use. It provides real-time data, which is essential for currency conversions to ensure users receive accurate results. Additionally, the API supports a wide variety of currencies, making it suitable for a global audience. The decision to use JavaScript for handling the API calls and currency logic was made to ensure the process was both efficient and easy to scale.

### Currency Selection with Flags
The inclusion of flags alongside the currency names in the dropdown menus enhances usability by making the options visually distinctive. The flags are represented using Unicode characters, which ensures compatibility across devices and simplifies the implementation process compared to using individual image files.

### CSS Variables
By using CSS variables for the color scheme and fonts, we ensured that the site could be easily modified or expanded in the future. This approach not only improves code maintainability but also allows for consistent theming throughout the site.

### Responsive Design
Ensuring that the site works on both desktop and mobile was a priority from the outset. The decision to create a separate **responsive.css** file made it easier to isolate and manage the responsive behaviors of elements, while keeping the base styles intact.

## Conclusion

This currency converter website is a practical demonstration of web development skills, combining a clean, intuitive UI with real-time data from an external API. The project showcases the use of modern design techniques, responsive layouts, and dynamic content handling through JavaScript. Each file in the project plays a key role in delivering a functional, user-friendly tool, and the design decisions were made with both aesthetics and functionality in mind.
