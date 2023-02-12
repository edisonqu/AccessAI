# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
import dotenv
dotenv.load_dotenv()

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

validation_request = client.validation_requests \
                           .create(
                                friendly_name='My Home Phone Number',
                                phone_number='+xxxxxxx',
                            )

print(validation_request.validation_code)


