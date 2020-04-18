import QRCode from 'qrcode'

export default {
    getUrls: async (url) => {
        console.log(url);
        console.log('Gerando urls');
    },
    getQrs: async(url) => {
        return await QRCode.toDataURL(url)
    },

}