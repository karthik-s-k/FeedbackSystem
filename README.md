# FeedbackSystem

Overview of the Feedback System:
An application to send emails to users to collect their feedback and show it in one place.

Heroku deployed application link: https://enigmatic-temple-84045.herokuapp.com/


Workflow:

* User signs up via Google OAuth (Express server + MongoDB + PassportJS)
* User pays for email credits via stripe (Stripe + MongoDB)
* User creates a new campaign (React + Redux)
* User enters list of emails to send survey (React + Redux + Redux Form)
* Surveyees receive the email and click onthe link in email to provide feedback (Email Provider + Express + MongoDB)
* Feedback from the surveyees are tabulated (MongoDB)
* User can see the report of all teh survey responses (MongoDB + React + redux)


Websites used in the development:

* For OAuth application registration, used Google cloud platform (https://console.cloud.google.com)
* Used cloud MongoDB service (https://cloud.mongodb.com)
* Used Heroku for deploying production build application (https://dashboard.heroku.com) 
* Used Stripe for billing and payment transaction (https://dashboard.stripe.com)
* Used SendGrid for email service (https://app.sendgrid.com)
* used css from MaterializeCSS template (https://materializecss.com)
