# AccessAI
Be able to access an AI no matter if you have internet or not! (Message +1(450)-990-6969) (Inspired by Aleem's Search the Internet without The Internet)

## Inspiration
Creating accessAI that works offline is a noble and inspiring goal, especially for those in third-world countries who may not have access to reliable internet. In many parts of the world, access to the internet is limited or non-existent, making it difficult for people to communicate and access information. However, even in these areas, people often have access to mobile phones, making SMS a crucial means of communication.

With AccessAI you have the potential to bridge the digital divide and bring the benefits of AI technology to people who may not have had access to it otherwise. With this app, people in third-world countries could communicate with friends and family, access information, and even receive personalized recommendations, all without the need for a stable internet connection.

## What it does

By sending a message to the number, you are able to have an AI generate a response back purely through SMS and not through the internet at all. 

You are able to send images, and text, and even ask as many questions as you want and it would text you back with the AI-generated response with no wifi. 

## How we built it

When a user sends a text message to the app's phone number, Twilio routes the message to an AWS Lambda function. This function acts as a gateway, directing the message to the appropriate API or service based on the prompt contained in the message. For example, if the user sends a message asking for an image, it will route the prompt to openAi

Once the message has been directed to the appropriate API or service, the body of the message is passed to Co:here, an advanced natural language processing platform. Using machine learning algorithms, Co:here processes the message and generates a response, which is then sent back to the user via Twilio.

This innovative approach to SMS messaging leverages the latest in AI technology to provide users with fast, accurate, and personalized responses, all without the need for a stable internet connection. Whether a user is in a remote rural area or in a city with limited access to the internet, your app provides a valuable and convenient means of communication and information access.

## Challenges we ran into

There were many problems with the Twilio gateway. First, it was the trial authentication that did not allow users to send any messages without a verified number, however, there was no API that allowed users to verify their number. Moreover, at a certain point, Twilio banned our first number and account, and had to create a new one. 

## Accomplishments that we're proud of

There are many things that [we] are proud of, such as the fact that everything went very smoothly in terms of the API calls and the serverless function for lambda. Co:here and the DALL-E integrations went very well as I learned how to send back requests in XML format instead of typical json. I am very happy to now.

## What we learned

I learned that the loading for every website was fake and hardcoded… I also learned a lot about twilio integration and how Co:here’s generative models worked. Very fancy technologies going on there. I learned that Styling with tailwind was extremely difficult and that not being able to uncenter a div was very difficult. 

## What's next for AccessAI

Add more models, and make it international. I want to be able to incorporate a translate button but I would need to host it on a database to retrieve the previous message. Lots to come.

