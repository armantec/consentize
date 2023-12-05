# Consentize

With the newly passed DPDP Act, 2023 in India, it is now mandatory to take consent of all users who submit their personal data on a website or an application.

This project is to implement consent management in all HTML forms by simply adding including consentize.js in your page and invoking below given script after the form is loaded on the page.

$("#testform").consentize(
{
policyPageUrl:'[Your domain name]/[privacy-policy-page-uri]', //without https:// or http://
termsPageUrl:'[Your domain name]/[terms-page-uri]', //without https:// or http://
apiKey:'[Your API Key]',
nameFieldName:"[Name of the form field that collects name of the user]",
emailFieldName:"[Name of the form field that collects email address of the user]",
consentType:"[Type of consent that you define in your console ex. End User, Customer, Admin User etc]"
}
);

See sample implementation in exmple.html

