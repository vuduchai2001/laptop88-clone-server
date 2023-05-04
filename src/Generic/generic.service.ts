import { Model, ObjectId, UpdateWriteOpResult } from "mongoose";


export abstract class GenericService<T> {
    private genericService: Model<T>;

    protected constructor(genericService: Model<T>) {
        this.genericService = genericService;
    }

    public async getAll(): Promise<T[]> {
        return await this.genericService.find();
    }

    public async getById(id: any): Promise<T> {
        return await this.genericService.findById(id).exec();
    }

    public async create(data: T | any): Promise<T> {
        return await this.genericService.create(data);
    }

    public async delete(id: any): Promise<T> {
        return await this.genericService.findById(id).exec();
    }



}