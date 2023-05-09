export class Paging {
    private readonly page: number
    private readonly pageSize: number
    private readonly total: number
    private readonly totalPage: number

    constructor(page: number, pageSize: number, total: number) {
        this.page = page
        this.pageSize = pageSize
        this.total = total
        this.totalPage = Math.ceil(total % pageSize === 0 ? total / pageSize + 1 : total / pageSize)
    }

}