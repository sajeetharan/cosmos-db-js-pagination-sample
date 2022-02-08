export default class PaginationService {
  private cosmosHelper: any;

  constructor(cosmosHelper: any) {
    this.cosmosHelper = cosmosHelper;
  }

  public async executeSample(
    pageLimit: number = 5,
    contToken: string = ""
  ): Promise<{
    result: Array<any>;
    hasMoreResults: boolean;
    continuationToken: string;
  }> {
    const sqlQuery =
      `SELECT * from products where products.CategoryName = "Bikes, Road Bikes"`
    console.log({ sqlQuery })

    const { result, hasMoreResults, continuationToken } =
      await this.cosmosHelper.queryContainerNext(
        {
          query: sqlQuery
        },
        {
          maxItemCount: pageLimit,
          continuationToken: contToken
        },
        process.env.CONTAINER_NAME
      );

    return {
      result: result || [],
      hasMoreResults: hasMoreResults || false,
      continuationToken: continuationToken || "",
    };
  }
}

