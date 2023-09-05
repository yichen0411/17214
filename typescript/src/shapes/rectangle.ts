interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
