

# Cohere API Key
#
import base64
import os

import cohere
import dotenv

dotenv.load_dotenv()

# Example string from the Twilio POST
message_body = str(base64.b64decode("VG9Db3VudHJ5PUNBJlRvU3RhdGU9UUMmU21zTWVzc2FnZVNpZD1TTTliNWQ5MDk4ZTBkODg0NmU3YTIzOWU0YTFjZDhmNzg1Jk51bU1lZGlhPTAmVG9DaXR5PVRIRVRGT1JEK01JTkVTJkZyb21aaXA9JlNtc1NpZD1TTTliNWQ5MDk4ZTBkODg0NmU3YTIzOWU0YTFjZDhmNzg1JkZyb21TdGF0ZT1PTiZTbXNTdGF0dXM9cmVjZWl2ZWQmRnJvbUNpdHk9VE9ST05UTyZCb2R5PXUmRnJvbUNvdW50cnk9Q0EmVG89JTJCMTU4MTMzMzY5NjkmVG9aaXA9Jk51bVNlZ21lbnRzPTEmTWVzc2FnZVNpZD1TTTliNWQ5MDk4ZTBkODg0NmU3YTIzOWU0YTFjZDhmNzg1JkFjY291bnRTaWQ9QUM3YjVhNjhiZDFiZTJjMzRjOGZjYTBlMDNiNzQ2NjY0ZSZGcm9tPSUyQjE0MTY4NTk4ODU3JkFwaVZlcnNpb249MjAxMC0wNC0wMQ=="),'utf-8')
print(message_body)
key_value_pairs = message_body.split("&")
for pair in key_value_pairs:
    if "Body" in pair:
        print(pair)
        body = pair.split("=")[1]
        print(body.replace('+',' '))

# Call Cohere
co = cohere.Client(os.getenv('COHERE_API_KEY')) # This is your trial API key
response = co.generate(
  model='command-medium-nightly',
  prompt='turtle wearing socks!',
  max_tokens=300,
  temperature=0.9,
  k=0,
  p=0.75,
  frequency_penalty=0,
  presence_penalty=0,
  stop_sequences=[],
  return_likelihoods='NONE')
print('Prediction: {}'.format(response.generations[0].text))
