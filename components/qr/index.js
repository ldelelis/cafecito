import axios from "axios";
import { useState, useEffect } from "react";

const Qr = () => {
    const url = `${process.env.URL}/api/qr`;

    const [qr, setQr] = useState(null);
    useEffect(() => {
    async function getQr() {
        const qrText = await axios.get(url);
        setQr(qrText.data.qr);
    }
    getQr();
    }, [])

    return (
        <img src={qr}/>
    )
}

 export default Qr;
