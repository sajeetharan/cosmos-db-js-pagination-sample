import dotenv from "dotenv"
import { Helper } from './helper';
import PaginationService from './pagination.service';

dotenv.config()

const cosmosDB = new Helper();
const pageMod = new PaginationService(cosmosDB);


const callPagination = async () => {
    const result = await pageMod.executeSample(2, "")
    console.log({
        data: result.result,
        dataLength: result.result.length,
        hasMoreResult: result.hasMoreResults,
        contToken: result.continuationToken
    });
};

callPagination();