import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService:FilekitaService){}
    
    @Get()
    lihatOutput() {
        return this.FilekitaService.showAll();
    }

    @Get('service')
    lihatSemua() {
        return this.FilekitaService.lihatSemua();
    }

    // dengan parameter
    @Get(':id')
    lihatDetail(@Param('id') id: string): string{
        return 'ini controller detail ' + id;
    }
}
