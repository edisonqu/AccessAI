import os
import requests
import dotenv

dotenv.load_dotenv()

# print("HIFEHWAIO".lower())
# headers = {
#     'Content-Type': 'application/json',
#     'Authorization': 'Bearer ' + os.getenv('OPENAI_API_KEY'),
# }
#
# json_data = {
#     'prompt': 'show me a photo of a happy corgi puppy sitting and facing forward, studio light, longshot',
#     'n': 1,
#     'size': '1024x1024',
# }
#
# response = requests.post('https://api.openai.com/v1/images/generations', headers=headers, json=json_data)

# response = {
#     "data":[{"url":"hi"},{"url":"yo"}]
# }
# print(response.get('data','OpenAI DALL-E Error')[0])
# print(response.get('data','OpenAI DALL-E Error')[0].get['url'])
# print(response.json()['data'][0]['url'])

import requests

for i in range(10):
    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': 'YOUR_TEXT_URL',
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    print(r.json())
