# Sample Integration: Contacts Sync


## About the Integration
This repository provides a quick solution that will allow contacts to be sync from a source of truth
to Podium. The integration uses the <a href="https://docs.podium.com/reference/contactcreate-1">create contact</a> and <a href="https://docs.podium.com/reference/contactindex">get list contacts</a> endpoint.
You can learn more about the contact object by accessing
our <a href="https://docs.podium.com/reference/the-contact-object">API reference docs</a>


## Get Started
If it is your first time using Podium API, checkout our <a href="https://docs.podium.com/docs/getting-started">Get Started Guide</a> to get your credentials and understand our scope.

## Running Locally
### 1. Get your developer account 
In order to make https requests make sure you have a developer account and the following keys:
<ul>
  <li>ClientId</li>
  <li>ClientSecret</li>
  <li>RefreshToken</li>
</ul>

### 2. Setup local project
```html
<!--Clone this repository-->
git clone https://github.com/podium/podium-api-demo-contacts.git

<!--Go to the repository directory-->
cd ~/podium-api-demo-contacts
 
<!--Create https server with SSL certificate - Podium requires https requests
Create a folder name certs and reference key and certs to the files created in the folder-->
https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

<!--Install dependencies packages-->
npm install
```
### 3. Set environment variables
```html
<!--Create a .env file-->
<!--Set env variables-->
REFRESHTOKEN = '<your-refresh-token>'
CLIENTID = '<your-client-id>'
CLIENTSECRET = '<your-client-secret>'

```

### 4. Run Code
```
node index.js
```

You can use Postman to make requests to the local server.
