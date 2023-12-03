var openConsentForm = function(options, name, email){
$(document.body).append("<div id='consentbackdrop' style='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.6' class='backdrop'></div>");
var url = "https://consentize.in/your-consent";
url = url + "?p_p_id=com_armantec_consent_consent_form_portlet&_com_armantec_consent_consent_form_portlet_finderKey=readPolicies:readTerms:apiKey:name:emailAddress:consentType&_com_armantec_consent_consent_form_portlet_finderId=" + encodeURIComponent(options.policyPageUrl) + ":" + encodeURIComponent(options.termsPageUrl) + ":" + options.apiKey + ":" + name + ":" + email + ":" + options.consentType;
$(document.body).append("<iframe id='consentwindow' style='width:calc(100% - 200px);height:700px;left:100px;top:10px;position:fixed;border:1px solid #ddd;' src='" + url + "'></iframe>");
}

$(function(){

$.fn.consentize = function(options){
   $(this).options = options;
   $("<br/><input id='termscheck' value='' onclick='return false;' name='consentid' type='radio' required/> <label>I have read terms & conditions.</label><br/><br/>").insertBefore($(this).find("input[type=submit]"));
   $('#termscheck').click(function(){
   	  openConsentForm(options, this.form.elements[options.nameFieldName].value, this.form.elements[options.emailFieldName].value);
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
