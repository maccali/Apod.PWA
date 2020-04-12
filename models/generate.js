import QRCode from 'qrcode'

module.exports = {
    getUrls: async (url) => {
        console.log(url);
        console.log('Gerando urls');
    },
    getQrs: async (url) => {
        console.log(url);
        console.log('Gerando qrs');
        QRCode.toDataURL(url, function (err, result) {
            console.log(result)
        })
    },
}