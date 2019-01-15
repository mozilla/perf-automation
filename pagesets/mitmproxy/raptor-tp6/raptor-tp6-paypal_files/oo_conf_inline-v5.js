/*
OnlineOpinion v5.9.3
Released: 09/21/2015. Compiled 4/20/2017
Branch: 5.9.3 efe6bf2541deb563c2a9884b2a3034c881047acf
Components: Full
UMD: disabled
The following code is Copyright 1998-2017 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

/* global window, OOo */

(function (w, d, o) {
    'use strict';

    w.launchOpinionLabFeedback = function () {

        /* PayPal custom variables */
        var opVars = typeof PAYPAL !== 'undefined' ? (typeof PAYPAL.opinionLabVars !== 'undefined' ? PAYPAL.opinionLabVars : '') : '',
            guid = opVars.guid,
            encryptedCustID = opVars.encryptedCustID,
            tealeafId = opVars.guid,
            fptiPagename = opVars.fptiPagename,
            fptiPageGroup = opVars.fptiPageGroup,
            countryCode = opVars.countryCode.toLowerCase(),
            languageCode = opVars.languageCode.toLowerCase(),
            domain = w.location.hostname,
            useSurvey = opVars.useSurvey;

        if (useSurvey) {
            domain = 'surveys.paypal.com';
        } else if (/localhost\.paypal\.com|qa\.paypal\.com/i.test(domain)) {
            domain = 'www.paypal.com';
        }

        /* Feedback object configuration */
        o.oo_feedback = new o.Ocode({
            referrerRewrite: w.location.protocol + '//' + domain + '/' + countryCode + '/' + languageCode + '/' + fptiPagename,
            legacyVariables: {
                vars: tealeafId,
                override: true
            },
            customVariables: {
                guid: guid,
                encryptedCustID: encryptedCustID,
                tealeafId: tealeafId,
                fptiPagename: fptiPagename,
                fptiPageGroup: fptiPageGroup,
                countryCode: countryCode,
                languageCode: languageCode
            }
        });

        /* Display comment card */
        o.oo_feedback.show(w.event);

    };

})(window, document, OOo);
