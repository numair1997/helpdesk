import { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const SignUpForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className="text-base font-medium pb-2">Username</p>
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                    <input
                        type="text"
                        placeholder="Enter Your Username"
                        className="w-full text-sm text-n300 outline-none"
                    />
                </div>
            </div>
            <div>
                <p className="text-base font-medium pb-2">Email</p>
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full text-sm text-n300 outline-none"
                    />
                </div>
            </div>
            <div>
                <p className="text-base font-medium pb-2">Password</p>
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                    <input
                        type="password"
                        placeholder="*******"
                        className="w-full text-sm text-n300 outline-none"
                    />
                </div>
            </div>
            <div>
                <p className="text-base font-medium pb-2">Location</p>
                <Select
                    placeholder={'Select Location'}
                    defaultValue={selectedOption}
                    //@ts-ignore
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div>
                <p className="text-base font-medium pb-2">Preferred Language</p>
                <Select
                    placeholder={'Select Language'}
                    defaultValue={selectedOption}
                    //@ts-ignore
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div>
                <p className="text-base font-medium pb-2">Language Spoken</p>
                <Select
                    placeholder={'Select Language'}
                    defaultValue={selectedOption}
                    //@ts-ignore
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div>
                <p className="text-base font-medium pb-2">Gender Preference</p>
                <Select
                    placeholder={'Select Gender'}
                    defaultValue={selectedOption}
                    //@ts-ignore
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
                    <span className="text-sm font-semibold">Sign In</span>
                </button>
            </div>
        </div>
    )
}

export default SignUpForm
