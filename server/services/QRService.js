const qrcode = require('qrcode');

class QRService {
    getQr = async () => {
        return await qrcode.toDataURL(process.env.URL);
    };
}

module.exports = QRService;
