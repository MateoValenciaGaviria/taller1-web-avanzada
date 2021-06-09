const baseExtension = '/images/file_extensions/'

export const getImageSrcFromType = (type: string = '', color?:number) => {
    return `${baseExtension}${type}${color || 'default'}.png`;
}