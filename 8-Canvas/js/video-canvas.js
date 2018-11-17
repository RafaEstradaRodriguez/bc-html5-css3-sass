class VideoFilter
{
    constructor(canvas, video)
    {
        this.ctx = null;
        this.canvas = canvas;
        this.video  = video;
        this.setCanvasDimensions();
        this.getContext();
    }

    setCanvasDimensions()
    {
        this.canvas.width  = this.canvas.scrollWidth;
        this.canvas.height = this.canvas.scrollHeight;
    }

    getContext()
    {
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
        }
    }

    capture()
    {
        this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    }

    clear()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    filter(filterName)
    {
        this.clear();
        this.capture();
        let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        let pixelData = imageData.data;
        let imageDataLength = pixelData.length;

        for (let i = 0; i<imageDataLength; i = i + 4) {
            let pixelRGBA = {
                r: pixelData[i],
                g: pixelData[i+1],
                b: pixelData[i+2],
                a: pixelData[i+3]
            };

            let convertedPixel = this.convertPixel(filterName, pixelRGBA);

            pixelData[i] = pixelData[i+1] = pixelData[i+2] = convertedPixel;
        }

        this.ctx.putImageData(imageData, 0, 0);
    }

    convertPixel(filterName, pixelRGBA, index = 0)
    {
        if (filterName == "lightness") {
            return (
                Math.max(pixelRGBA.r, pixelRGBA.g, pixelRGBA.b) +
                Math.min(pixelRGBA.r, pixelRGBA.g, pixelRGBA.b)
            ) / 2;
        }

        if (filterName == "luminosity") {
            return (0.21 * pixelRGBA.r + 0.72 * pixelRGBA.g + 0.07 * pixelRGBA.b);
        }

        if (filterName == "average") {
            return (pixelRGBA.r + pixelRGBA.g + pixelRGBA.b) / 3;
        }

        if (filterName == "blur") {
            return (pixelRGBA.r + pixelRGBA.g + pixelRGBA.b) / 3;
        }



    }


    info()
    {
        console.log(this.video.width);
    }
}


