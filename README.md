# Consentize

With the newly passed DPDP Act, 2023 in India, it is now mandatory to take consent of all users who submit their personal data on a website or an application.

This project is to implement consent management in all HTML forms by simply including consentize.js in your page and invoking below given script after the form is loaded on the page.  

$("#testform").consentize(  
{  
policyPageUrl:'consentize.in/privacy-policy', //without https:// or http://  
termsPageUrl:'consentize.in/terms-page', //without https:// or http://  
apiKey:'d2c5f907-18d6-c494-ee95-14f4d6f18cf7',  
referenceNo:667855775957,  
consentType:"End User" //"Admin User" / "End User" / "Service Provider"  
});  
  
**testform**: Id of the form on which Consentize will be integrated.  
**policyPageUrl**: URL of the page where Privacy Policy is available for users.  
**termsPageUrl**: URL of the page where Terms & Condisions are available for users.  
**apiKey**: API key generated by the admin in the consent management portal.  
**referenceNo**: Unique reference number generated at your end every time when user comes to your form page. You should store the reference number with user detail for future reference of consent details.  
**consentType**: Consent type shold be defined in the consent management portal by the admin.  

See sample implementation in exmple.html  

