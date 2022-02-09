import dotenv from "dotenv"
import { Helper } from './helper';
import PaginationService from './pagination.service';

dotenv.config()

const cosmosDB = new Helper();
const pageMod = new PaginationService(cosmosDB);

let contToken = "";
let hasMoreResults = false;
let data = [];
let dataLength = 0;


const callPagination = async () => {
    while (true) {
        const result = await pageMod.executeSample(5, contToken)
        contToken = result.continuationToken;
        dataLength += result.result.length,
        hasMoreResults = result.hasMoreResults;
        data = result.result;
        console.log({
            data: result.result,
            dataLength: result.result.length,
            hasMoreResult: result.hasMoreResults,
            contToken: result.continuationToken
        });
        console.log("Total items retrieved:"+ dataLength );
        if (!hasMoreResults && contToken == "") {
            break;
          }
      
        await delay(5000);
    }
    console.log("Pagination done!" );
};

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

callPagination();