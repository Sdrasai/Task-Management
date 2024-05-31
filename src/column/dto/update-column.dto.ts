import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnDto } from './create-column.dto';
import { Prop } from '@nestjs/mongoose';

export class UpdateColumnDto extends PartialType(CreateColumnDto) {}
