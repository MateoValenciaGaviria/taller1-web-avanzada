const baseExtension = `${process.env.PUBLIC_URL}/images/file_extensions/`;

export const getImageSrcFromType = (url: string = '') => {
    return `${baseExtension}${url}.png`;
}