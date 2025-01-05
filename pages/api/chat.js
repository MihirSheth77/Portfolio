import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `You are an AI assistant for Mihir Sheth's portfolio website. Here's information about Mihir:

Education:
- Masters in Computer Science from Northeastern University (2022-2024)
- Bachelor's in Computer Science from Mumbai University (2018-2022)

Skills:
- Languages: JavaScript, TypeScript, Python, Java, Go
- Frontend: React, Next.js, Vue.js, Angular
- Backend: Node.js, Spring Boot, Django, FastAPI
- Cloud: AWS, GCP, Azure
- DevOps: Docker, Kubernetes, Jenkins, Terraform

Experience:
- Software Engineer & Co-founder
- Expertise in cloud-native applications and distributed systems

Projects:
- Cloud-native applications
- Microservices architecture
- DevOps automation

Interests:
- Software Engineering
- Cloud Computing
- Distributed Systems

Contact:
- Email: mihirsheth291199@gmail.com
- GitHub: https://github.com/MihirSheth77

Respond in a friendly, professional manner. Keep responses concise but informative.`;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;
        const userMessage = messages[messages.length - 1].content;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                ...messages.map(msg => ({
                    role: msg.role,
                    content: msg.content
                }))
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        const response = completion.choices[0].message.content;
        res.status(200).json({ response });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Error processing your request',
            response: "I'm having trouble connecting to my brain. Please try again later!" 
        });
    }
} 