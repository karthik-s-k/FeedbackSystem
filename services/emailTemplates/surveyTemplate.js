const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div>
          <h4>Hi there,</h4>
          <p>We are conducting a survey and your input would be appreciated.</p>
          <p>Click on either Yes/No option below to submit your opinion.</p>
    
          <div style="margin-top: 3%">
            <p>${survey.body}</p>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>

          <div style="margin-top: 3%">
            <p>Thank you for your participation!</p>
            <h5>Please do not forward this email as this survey is unique to you.</h5>
          </div>
        </div>
      </body>
    </html>
  `;
};
