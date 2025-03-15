<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Domain Method</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Dark Mode Toggle -->
        <div class="toggle-container">
            <input type="checkbox" id="mode-toggle">
            <label for="mode-toggle" class="toggle-label"></label>
        </div>

        <!-- Title -->
        <h1 class="title">DOMAIN METHOD</h1>

        <!-- FAQ Accordion -->
        <div class="faq-container">
            <!-- Accordions will be dynamically added here -->
        </div>

        <!-- OTP Section -->
        <div id="otp-section" class="otp-section hidden">
            <h2>OTP [One Time Password]</h2>
            <p class="warning">Warning: Do not refresh or close tab!</p>
            <input type="text" id="otp-input" placeholder="Enter OTP">
            <button id="submit-otp">Submit</button>
            <p id="otp-message"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
