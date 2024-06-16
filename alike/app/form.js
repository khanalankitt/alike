'use client'
import Image from "next/image";
import { useState } from "react";

export default function Form() {
    const [male, setMale] = useState('');
    const [female, setFemale] = useState('');
    const [result, setResult] = useState(null);
    const [loading,setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ male, female }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <form className="container" onSubmit={handleSubmit}>
                <h2>Love Calculator</h2>
                <div className="part">
                    <div className="left">
                        <p>Date of birth</p>
                        <input
                            type="date"
                            name="yourdate"
                            required
                            value={male}
                            onChange={(e) => setMale(e.target.value)}
                        />
                        <Image src="/man.png" priority height={100} width={100} alt="person" />
                    </div>
                    <div className="right">
                        <p>Date of birth</p>
                        <input
                            type="date"
                            name="theirdate"
                            required
                            value={female}
                            onChange={(e) => setFemale(e.target.value)}
                        />
                        <Image src="/woman.png" height={100} width={100} alt="person" />
                    </div>
                </div>
                <button type='submit'>Calculate</button>
            </form>
            {loading && <div className="result"><Image className="loader" unoptimized src='/loaderr.gif' height={100} width={100} alt="loader"/></div>}
            {result && (
                <div className="result">
                    <p style={{
                        fontSize: '1rem',
                    }}>
                        Boy : {result.maleZodiac} &nbsp;&nbsp;&nbsp;&nbsp;
                        Girl : {result.femaleZodiac}
                    </p>
                    <p>
                        Love Compatibility : {result.compatibilityPercentage}%&nbsp;
                    </p>
                </div>
            )}
        </>
    );
}
