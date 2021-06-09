const baseExtension = `${process.env.PUBLIC_URL}/images/file_extensions/`;

export const getImageSrcFromType = (type: string = '', color?:number) => {
    return `${baseExtension}${type}${color || 'default'}.png`;
}