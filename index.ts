import ReactDOMServer from "react-dom/server";

export interface JsxToPngOptions {
  width?: number;
  height?: number;
  devicePixelRatio?: number;
  dataType?: string;
}

const defaultOptions = {
  dataType: "image/png"
}

/**
 * Make some keys of type T to be required
 */
type AtLeast<T, List extends keyof T> = Omit<T, List> & Required<Pick<T, List>>;

/**
 * Convert **react svg jsx element* to png
 * @param element svg jsx element
 * @param options render options, see `JsxToPngOptions`
 * @returns 
 */
export function jsxToPng(elementOrCpnt: (JSX.Element | (() => JSX.Element)), options: JsxToPngOptions): Promise<string> {
  const element = typeof elementOrCpnt === 'function' ? elementOrCpnt() : elementOrCpnt;

  const imageDomStr = ReactDOMServer.renderToString(element);

  return new Promise((resolve, reject) => {
    try {
      svgToPng(imageDomStr, resolve, {...defaultOptions, ...options});
    } catch (error) {
      reject(error);
    }
  });
}

function svgToPng(
  svg: string,
  callback: (imageData: string) => void,
  options?: AtLeast<JsxToPngOptions, keyof typeof defaultOptions>
) {
  const url = getSvgUrl(svg);
  svgUrlToPng(
    url,
    (imgData) => {
      callback(imgData);
      URL.revokeObjectURL(url);
    },
    options
  );
}
function getSvgUrl(svg: string) {
  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
}
function svgUrlToPng(
  svgUrl: string,
  callback: (imageData: string) => void,
  options?: AtLeast<JsxToPngOptions, keyof typeof defaultOptions>
) {
  const svgImage = document.createElement("img");

  svgImage.onload = function () {
    const canvas = document.createElement("canvas");

    const dpr = options?.devicePixelRatio || window.devicePixelRatio || 1;
    const width = (options?.width || svgImage.clientWidth) * dpr;
    const height = (options?.height || svgImage.clientHeight) * dpr;

    canvas.width = width;
    canvas.height = height;
    const canvasCtx = canvas.getContext("2d");
    canvasCtx?.drawImage(svgImage, 0, 0, width, height);
    const imgData = canvas.toDataURL(options?.dataType);
    callback(imgData);
  };
  
  svgImage.src = svgUrl;
}
