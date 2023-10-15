import React, { useState } from 'react'

const Contact = () => {
    const [inputData, setInputData] = useState({
        email: "",
        pesan: "",
        sudahKenal: false,
    });
    const handleInputChange = (e ) => {
        setInputData({
        ...inputData,
        [e.target.name]: e.target.value,
        });
    };
    const [CountMail, setJumlahPesan] = useState(0);

    const handleJumlahPesan = (e) => {
        e.preventDefault();
        setJumlahPesan(CountMail + 1);
    };

    return (
        <div className="container-hash">
        <h1 className='textcenter'>Contact</h1>
            <div class="number-email">
                <p>
                    HP : 085789102976 <br/>
                    Email : yogi.120140011@student.itera.ac.id 
                </p>
            </div>    
        <h3>Message</h3>
        <div className="container-contact">

            <form >
            <input type="text" name="name" onChange={handleInputChange} value={inputData.name} placeholder="Nama"/> <br/><br/>
                <input type="text" name="email" onChange={handleInputChange} value={inputData.email} placeholder="Email"/> <br/><br/>
                <textarea name="pesan" onChange={handleInputChange} value={inputData.message} placeholder="Pesan" maxlength="500"></textarea>
                <br/>
                <button type="submit" value="Submit" onClick={handleJumlahPesan}> Submit </button>
            </form>
            </div>
            <p>
                Number of Message : {CountMail}
            </p>
            <br />
            <p>
                Nama : {inputData.name}
            </p>
            <br />
            <p>
                Email : {inputData.email}
            </p>
            <br />
            <p>
                Message : {inputData.message}
            </p>
        </div>
    )
}

export default Contact