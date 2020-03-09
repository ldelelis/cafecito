class QRController {
    constructor(qrService) {
    	this.qrService = qrService;
    };

    getQr = async (req, res) => {
        const qrUrl = await this.qrService.getQr();
        return res.json({qr: qrUrl});
    }
}

module.exports = QRController;
