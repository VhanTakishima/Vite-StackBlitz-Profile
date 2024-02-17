import{config} from "dotenv"
config()
import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: process.env.API_KEY // This is also the default, can be omitted
});

// import{Configuration, OpenAIApi} from "openai"
// const openai = new OpenAIApi(new Configuration({apiKey: process.env.API_KEY}))

// console.log(process.env.API_KEY)

const chatCompletion = await openai.chat.completions.create({
    model: "tts-1",
    messages: [{"role": "assistant", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);

