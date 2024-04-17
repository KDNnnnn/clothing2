import React, { useState, useEffect } from 'react';
import './Contact.css';

const SelectDropdown = ({ selectData, selectValue, setSelectValue }) => {
    return (
        <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            {selectData.map((item, index) => (
                <option value={item.website} key={item.website}>{item.website}</option>
            ))}
        </select>
    );
};

const HeroForContact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [selectData, setSelectData] = useState([]);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:30001');
            const data = await res.json();
            setSelectData(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email + ' ' + message);

        if (!message) {
            setError(<p className='required'>Message box is empty. Please type a message</p>);
        } else {
            setError('');
        }
    };

    return (
        <div className='hero5'>
            <div className="hero5-left">
                <h1>Contact Us</h1>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div className="contact-form-box">
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>How did you hear about our website?
                            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                                <option value="Google">Google</option>
                                <option value="From friends or family">From friends or family</option>
                                <SelectDropdown selectData={selectData} selectValue={selectValue} setSelectValue={setSelectValue} />
                            </select>
                        </label>

                        <label>Message</label>
                        <textarea id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        {error}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroForContact;

