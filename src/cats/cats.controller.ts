import { Controller, Get, Header, HttpCode, Param, Post, Req, Request } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    // eslint-disable-next-line no-console
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
