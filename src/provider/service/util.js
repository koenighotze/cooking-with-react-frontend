export const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
const randomSleep = () => sleep((Math.floor(Math.random() * 4) + 1) * 500)

export default randomSleep
