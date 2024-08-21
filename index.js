import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
export const app = express();

const baseUrl = 'https://api.podium.com/v4/';
const refreshToken = process.env.REFRESHTOKEN;
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;

app.use(express.urlencoded());
app.use(express.json());

//Retrieve all contacts
app.get('/', async (_req, res) => {
  try {
    const token = await getTokenID();

    if (token) {
      const requestAPI = await fetch(`${baseUrl}/contacts`, {
        Method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const reqResponse = await requestAPI.json();
      return res.send(reqResponse);
    }
  } catch (error) {
    console.error('Error', error);
    return res.sendStatus(error.response.status);
  }
});

//Create a contact for a specified location
app.post('/', async (req, res) => {
  try {
    const token = await getTokenID();
    let request;

    if (token) {
      request = await fetch(`${baseUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req.body),
      });

      const reqResponse = await request.json();
      return res.send(reqResponse);
    } else {
      return res.send('No authorization token was found.');
    }
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
});

export async function getTokenID() {
  const bodyData = {
    client_id: clientID,
    client_secret: clientSecret,
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };

  try {
    const tokenRequest = await fetch(
      'https://accounts.podium.com/oauth/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      }
    );

    const tokenResponse = await tokenRequest.json();

    if (tokenResponse) {
      return tokenResponse.access_token;
    }
  } catch (error) {
    console.error(`Error retrieving a new token, ${error}`);
    return error;
  }
}
