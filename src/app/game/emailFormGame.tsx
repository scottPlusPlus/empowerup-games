"use client"

import ArrowWithHover from "@/src/agnostic/components/ArrowWithHover";
import { CssPropsCommon } from "@/src/frontCode/cssCommon";
import { useEffect, useState } from "react";

type Props = {
    onSubmitEmail?: (arg0: string) => void,
    cssCommon: CssPropsCommon,
}

export default function EmailFormGame(props: Props) {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (validateEmail(email)) {
            if (props.onSubmitEmail) {
                props.onSubmitEmail(email);
            } else {
                console.log('No onSubmitEmail handler');
            }
            setButtonDisabled(true);
        } else {
            setIsValidEmail(false);
        }
    };

    const validateEmail = (email: string): boolean => {
        // A simple email validation check using regular expression
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const MyButton = props.cssCommon.actionButton!;

    return (
        <div>
            <div>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className={`form-input text-sm py-2 text-slate-800 ${!isValidEmail ? 'border-red-500' : ''
                            }`}
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />

                    <MyButton handle={handleSubmit} disabled={buttonDisabled}>
                        Join Waitlist
                        {/* <ArrowWithHover /> */}
                    </MyButton>
                </div>
                {!isValidEmail && (
                    <p className="text-red-500 mt-1">Please enter a valid email</p>
                )}
            </div>
        </div>
    )
}