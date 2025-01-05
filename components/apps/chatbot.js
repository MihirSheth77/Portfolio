import React from 'react';

export class Chatbot extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    role: 'assistant',
                    content: "Hi! I'm Mihir's AI Assistant. Feel free to ask me anything about Mihir's experience, projects, or skills!"
                }
            ],
            inputMessage: '',
            isLoading: false
        };
        this.messagesEndRef = React.createRef();
    }

    componentDidMount() {
        if (this.messagesEndRef.current) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    componentDidUpdate() {
        if (this.messagesEndRef.current) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    componentWillUnmount() {
        // Clean unmount, no need for console.log
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.inputMessage.trim()) return;

        try {
            const newMessages = [...this.state.messages, { role: 'user', content: this.state.inputMessage }];
            this.setState({
                messages: newMessages,
                inputMessage: '',
                isLoading: true
            });

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            this.setState(prevState => ({
                messages: [...prevState.messages, { role: 'assistant', content: data.response }],
                isLoading: false
            }));
        } catch (error) {
            console.error('Error:', error);
            this.setState(prevState => ({
                messages: [...prevState.messages, 
                    { role: 'assistant', content: "I'm having trouble connecting. Please try again later!" }
                ],
                isLoading: false
            }));
        }
    };

    render() {
        return (
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none relative">
                <div className="absolute inset-0 flex flex-col">
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <div className="p-4 space-y-4">
                            {this.state.messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.role === 'user'
                                                ? 'bg-ub-orange text-white'
                                                : 'bg-gray-700 text-white'
                                        }`}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {this.state.isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700 text-white p-3 rounded-lg">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={this.messagesEndRef} />
                        </div>
                    </div>

                    <div className="w-full bg-ub-grey border-t border-gray-700">
                        <form onSubmit={this.handleSubmit} className="p-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    value={this.state.inputMessage}
                                    onChange={(e) => this.setState({ inputMessage: e.target.value })}
                                    placeholder="Ask me anything about Mihir..."
                                    className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-ub-orange"
                                />
                                <button
                                    type="submit"
                                    disabled={this.state.isLoading}
                                    className="px-4 py-2 bg-ub-orange text-white rounded hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-ub-orange disabled:opacity-50"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export const displayChatbot = () => {
    return <Chatbot />;
}

export default Chatbot;