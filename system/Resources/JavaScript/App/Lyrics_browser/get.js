
/**
 * 用于截取传导函数所携带你内容
 * 例: index.html?a=1&b=2
 *     GetQueryString(a)
 *     >1
 * 
 *     GetQueryString(b)
 *     >2
 * @param {*} name 属性名称 
 * @returns NULL or String
 */
function app_getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

/**
 * 用于返回js文件路径
 * 这取决于/system/Resources/下所找到的文件名
 * 若发现多个，则返回以|分开的字符串
 * @param {*} file_name 
 * @returns
 */
function app_getFilePath(file_name){
    
}
