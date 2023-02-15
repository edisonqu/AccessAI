import base64
import json
import cohere
import requests
import os


def lambda_handler(event, context):
    print(event)
    message_body = str(base64.b64decode(event['body']), 'utf-8')
    key_value_pairs = message_body.split("&")
    print(key_value_pairs)
    response_cohere = "Could not generate a response using Co:here"
    for pair in key_value_pairs:
        print(pair)

        if "Body" in pair:
            print(pair)
            body = pair.split("=")[1].replace("+", " ")
            print(body)
            if ("show me" in body.lower()):
                try:
                    r = requests.post(
                        "https://api.deepai.org/api/text2img",
                        data={
                            'text': body,
                            'grid_size': 1
                        },
                        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
                    )
                    image_url = r.json()['output_url']
                    response = f"<Response><Message><Media>{image_url}</Media></Message></Response>"

                    print(response)
                    return {
                        'statusCode': 200,
                        'headers': {'Content-Type': 'text/xml'},
                        'body': response
                    }
                except:
                    response = f"<Response><Message>Daily Limit Reached for image generations</Message></Response>"

                    print(response)
                    return {
                        'statusCode': 200,
                        'headers': {'Content-Type': 'text/xml'},
                        'body': response
                    }


            else:

                co = cohere.Client(os.getenv("COHERE_API_KEY"))  # This is your trial API key
                response_from_cohere = co.generate(
                    model='command-medium-nightly',
                    prompt=body,
                    max_tokens=300,
                    temperature=0.9,
                    k=0,
                    p=0.75,
                    frequency_penalty=0,
                    presence_penalty=0,
                    stop_sequences=[],
                    return_likelihoods='NONE')
                print(response_from_cohere)
                response_cohere = response_from_cohere[0].text

    response = f"<Response><Message>{response_cohere}</Message></Response>"
    print(response)
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'text/xml'},
        'body': response
    }
