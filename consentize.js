
var openConsentForm = function(options){
$(document.body).append("<div id='consentbackdrop' class='backdrop'></div>");
var url = "https://consentize.in/my-consent";
url = url + "?p_p_id=com_armantec_consent_consent_form_portlet&_com_armantec_consent_consent_form_portlet_finderKey=referenceNo::readPolicies::readTerms::apiKey::consentType&_com_armantec_consent_consent_form_portlet_finderId=" + options.referenceNo + "::" + encodeURIComponent(options.policyPageUrl) + "::" + encodeURIComponent(options.termsPageUrl) + "::" + options.apiKey + "::" + options.consentType;
$(document.body).append("<iframe id='consentwindow' class='consentwindow'  src='" + url + "'></iframe>");
}

$(function(){

$.fn.consentize = function(options){
   $(this).options = options;
   $("<br/><input style='float:left' id='termscheck' value='' onclick='return false;' name='consentid' type='radio' required/> <label for='termscheck' style='cursor: pointer;float: left;margin-left: 10px;margin-top: -3px;'>Your Consent</label><br/><br/>").insertBefore($(this).find("input[type=submit]"));
   $('#termscheck').click(function(){
   	  openConsentForm(options);
   })
};

window.addEventListener("message", function(event) {
  console.log( "Consent Received: " + JSON.stringify(event.data));
  if(event.data.status=='Success'){
  	$("#termscheck").prop("checked", true);
  }else{
    $("#termscheck").prop("checked", false);
  }
  
  $("#consentwindow").remove();
  $("#consentbackdrop").remove();

  // can message back using event.source.postMessage(...)
});
})
