# FeedbackSystem

Overview of the Feedback System:
An application to send emails to users to collect their feedback and show it in one place.

Heroku deployed application link: https://enigmatic-temple-84045.herokuapp.com/
Note: Use "4242 4242 4242 4242" as credit card number for testing 

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


Testing and deployment:

In development to run the application,

* Step 1: Download git repo and run "npm install"
* Step 2: Run "npm run dev"
* Step 3: Run "npx ngrok http 5000", you will get a temporary url valid for 8 hours which will redirect all the requests it receives to http://localhost:5000
* Step 4: Go to "https://app.sendgrid.com", update http post url with ngrok url from the previous step (SendGrid profile, Setting -> Mail Setting -> Event Setting -> Event Webhook). Test the integration and save

In production to release newer version of the application,

* Step 1: Edit and test the application
* Step 2: Check-in code to master branch of heroku using git and push the changes
