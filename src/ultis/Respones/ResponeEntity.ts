import { HttpStatus } from '@nestjs/common';

export class ResponseEntity {
    private statusCode: number;
    private message: string;
    private data: any;

    constructor () {
        this.statusCode = HttpStatus.OK;
        this.message = 'Success';
        this.data = null;
    }

    public setStatus ( statusCode: number ): ResponseEntity {
        this.statusCode = statusCode;
        return this;
    }

    public setMessage ( message: string ): ResponseEntity {
        this.message = message;
        return this;
    }

    public setData ( data: any ): ResponseEntity {
        this.data = data;
        return this;
    }

    public build (): any {
        return {
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
        };
    }
}
