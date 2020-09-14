import {ADDRESS,PORT,PATH,REGION} from './constant.js'
import getURL from './utils.js'

const url = getURL(ADDRESS,PORT,PATH)
const region = REGION

export {url,region}