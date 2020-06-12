import React from 'react';
import { ReCaptcha } from 'react-recaptcha-google'


export default class Captcha extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
    }

    onLoadRecaptcha = () => {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback = (recaptchaToken) => {
        // Here you will get the final recaptchaToken!!!
        console.log(recaptchaToken);
        this.props.updateToken(recaptchaToken)
    };

    render() {
        return (
            <div>
                {/* You can replace captchaDemo with any ref word */}
                <ReCaptcha
                    ref={(el) => {this.captchaDemo = el;}}
                    size="normal"
                    data-theme="dark"
                    render="explicit"
                    sitekey="6LfcvQEVAAAAAK-pcO2DPTBo_YWvu1NhTYem7DZZ"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
            </div>
        );
    };
}
