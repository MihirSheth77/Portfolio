import React, { Component } from 'react';
import $ from 'jquery';
import emailjs from '@emailjs/browser';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
        }
    }

    componentDidMount() {
        emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    sendMessage = () => {
        let name = $("#sender-name").val();
        let subject = $("#sender-subject").val();
        let message = $("#sender-message").val();
        let email = $("#sender-email").val();
        if (name === "" || message === "" || email === "") {
            this.setState({ sending: false });
            return;
        }
        this.setState({ sending: true });
        emailjs.send("service_9v1j7yh", "template_3hk3xu4", {
            from_name: name,
            message: message,
            subject: subject,
            email: email,
        }, 'user_HR4GgqK3WtHTg95MgqEkR').then(() => {
            this.setState({ sending: false });
        }, (error) => {
            console.log(error);
            this.setState({ sending: false });
        });
    }

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex flex-col items-center justify-center w-full h-full pb-8">
                    <div className="md:w-1/2 w-3/4 h-1/2 flex flex-col bg-ub-grey rounded-md">
                        <div className="w-full flex items-center px-4 py-2 border-b border-gray-900">
                            <div className="text-xl font-bold">Send Message</div>
                        </div>
                        <div className="flex flex-col w-full h-full justify-center items-center px-4 py-4 pb-8 space-y-4">
                            <div className="relative">
                                <input id="sender-name" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="Your Email / Name :" spellCheck="false" autoComplete="off" type="text" />
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
                            </div>
                            <div className="relative">
                                <input id="sender-subject" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="subject (may be a feedback for this website!)" spellCheck="false" autoComplete="off" type="text" />
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">2</span>
                            </div>
                            <div className="relative flex-grow">
                                <textarea id="sender-message" className=" w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent" placeholder="Message" spellCheck="false" autoComplete="none" type="text" />
                                <span className="absolute left-1 top-1 font-bold  text-sm text-ubt-gedit-blue">3</span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (this.state.sending
                        ?
                        <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
                            <img className={" w-8 absolute animate-spin"} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
                        </div>
                        : null
                    )
                }
            </div>
        )//
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}
