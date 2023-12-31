import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { Gender, ValidateType } from '@/constants';
import { IsUniquePipe } from '@/modules/admin/user/pipes/is-unique.pipe';

export class SaveDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(255)
  @Validate(IsUniquePipe, [ValidateType.create])
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Validate(IsUniquePipe, [ValidateType.create])
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  full_name: string;

  @IsOptional()
  @MaxLength(30)
  @Validate(IsUniquePipe)
  phone: string;
}
