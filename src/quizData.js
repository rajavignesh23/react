const quizData = [
    {
        "question": "What is the name of the algorithm used by GPT-4?",
        "inputType": "radio", 
        "options": [
          { "text": "Generative Adversarial Network" },
          { "text": "Artificial Neural Network" },
          { "text": "Transformer Architecture" },
          { "text": "Q-learning" }
        ],
        "correct": 2
      },
      {
        "question": "What common issue in AI-generated images involves incorrect positioning of body parts, especially noted with fingers?",
        "inputType": "radio",
        "options": [
          { "text": "Mode collapse" },
          { "text": "Artifact" },
          { "text": "Overfit" },
          { "text": "Latent space" }
        ],
        "correct": 1
      },
      {
        "question": "What is the name of the company that aims to enhance tunneling speed enough such that establishing a tunnel network is financially feasible, which is owned by Elon Musk?",
        "inputType": "radio",
        "options": [
          { "text": "Neuralink" },
          { "text": "SpaceX" },
          { "text": "Boring Company" },
          { "text": "OpenAI" }
        ],
        "correct": 2
      },
      {
        "question": "What is the implantable brain computer capable of translating thoughts into actions?",
        "inputType": "radio",
        "options": [
          { "text": "Synchron" },
          { "text": "Emotiv" },
          { "text": "BrainCo" },
          { "text": "Neuralink" }
        ],
        "correct": 3
      },
      {
        "question": "What is the term for the technique used to improve images generated by upscaling in NVIDIA's DLSS technology?",
        "inputType": "radio",
        "options": [
          { "text": "Raytracing" },
          { "text": "FSR" },
          { "text": "sharpening" },
          { "text": "FPS Boost" }
        ],
        "correct": 0
      },
      {
        "question": "Name a common test used to determine if a machine can exhibit human-like intelligence.",
        "inputType": "radio",
        "options": [
          { "text": "AI benchmarking" },
          { "text": "Turing test" },
          { "text": "Adversarial test" },
          { "text": "CAPTCHA" }
        ],
        "correct": 1
      },
      {
        "question": "Name the thing which revolutionized the ability of computers by enhancing their capabilities and become popular due to the rise of AI, what is that?",
        "inputType": "radio",
        "options": [
          { "text": "RAM" },
          { "text": "GPU" },
          { "text": "TPU" },
          { "text": "CPU" }
        ],
        "correct": 1
      },
      {
        "question": "The latest tech innovation that speeds up development by using AI which developed by a company called Cognition?",
        "inputType": "radio",
        "options": [
          { "text": "Gemini-AI" },
          { "text": "Copilot" },
          { "text": "GPT-4" },
          { "text": "Devin-AI" }
        ],
        "correct": 1
      },
      {
        "question": "What is the name of the first “computer virus” which targeted APARNET, the precursor to the internet?",
        "inputType": "radio",
        "options": [
          { "text": "Creeper" },
          { "text": "Lovebug" },
          { "text": "Stuxnet" },
          { "text": "Saaser" }
        ],
        "correct": 0
      },
      {
        "question": "Until Alan Emtage, a native of Barbados, created the world's first search engine, What is the name of the world’s first search engine?",
        "inputType": "radio",
        "options": [
          { "text": "Google" },
          { "text": "Archie" },
          { "text": "Bing" },
          { "text": "Yahoo" }
        ],
        "correct": 1
      },
      {
        "question": "What technology used behind the creation of Satoshi Nakamoto?",
        "inputType": "radio",
        "options": [
          { "text": "Deep learning" },
          { "text": "IOT" },
          { "text": "Block chain" },
          { "text": "Virtual reality" }
        ],
        "correct": 2
      },
      {
        "question": "This device, introduced by a Cupertino-based tech giant, marks their entry into a new product category that blends realities. What is the name of this product?",
        "inputType": "radio",
        "options": [
          { "text": "Meta quest" },
          { "text": "Vision pro" },
          { "text": "Holo lens" },
          { "text": "Playstation VR" }
        ],
        "correct": 1
      },
      {
        "question": "Python, known for its multi-purpose and dead slow execution, but this parallel computing model enhanced its speed, what is it?",
        "inputType": "radio",
        "options": [
          { "text": "CUDA" },
          { "text": "Tensor" },
          { "text": "Registers" },
          { "text": "Threads" }
        ],
        "correct": 0
      },
      {
        "question": "What is the name of the standard communication protocol that is crucial for enabling low-power IoT devices to connect to the internet directly via widely used mobile networks?",
        "inputType": "radio",
        "options": [
          { "text": "MQTT" },
          { "text": "SMTP" },
          { "text": "POP3" },
          { "text": "API" }
        ],
        "correct": 0
      },
      {
        "question": "Nokia 6131 first used this technology which enables two devices, such as smartphones and payment terminals, to communicate when they are brought within a few centimeters of each other, name that technology",
        "inputType": "radio",
        "options": [
          { "text": "Wifi" },
          { "text": "Zigbee" },
          { "text": "UPI" },
          { "text": "NFC" }
        ],
        "correct": 3
      },
      {
        "question": "Emoji widely used in text-based conversation to reflect one’s reaction, name the person who designed the concept of emoji",
        "inputType": "radio",
        "options": [
          { "text": "Charles Babbage" },
          { "text": "Shigeta Kurita" },
          { "text": "John Macarthy" },
          { "text": "Fu Jeing" }
        ],
        "correct": 1
      },
      {
        "question": "What North Carolina-based game company created the 2018 game “Fortnite?”",
        "inputType": "radio",
        "options": [
          { "text": "Activision" },
          { "text": "Unity" },
          { "text": "Epic" },
          { "text": "Sony" }
        ],
        "correct": 2
      },
      {
        "question": "What is the official name for the “prove you’re not a robot” tests that websites sometimes require?",
        "inputType": "radio",
        "options": [
          { "text": "CAPTCHA" },
          { "text": "ReCAPTCHA" },
          { "text": "Authentication Test" },
          { "text": "Verify-Pass" }
        ],
        "correct": 0
      },
      {
        "question": "Which University offered the first-ever academic program in Computer Science?",
        "inputType": "radio",
        "options": [
          { "text": "MIT" },
          { "text": "Prude university" },
          { "text": "Harvard" },
          { "text": "Stanford" }
        ],
        "correct": 0
      },
      {
        "question": "Sonos .Inc, an American-based company, what is it famous for?",
        "inputType": "radio",
        "options": [
          { "text": "Speakers" },
          { "text": "Camera" },
          { "text": "Keyboard" },
          { "text": "Display" }
        ],
        "correct": 0
      }
  ];
  
  export default quizData;
  